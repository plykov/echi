# Echo Loop Language Lab — Technical Scope

## 1. Product objective

Echo Loop is a listening-and-speaking practice web app. It guides a learner through a phrase-level loop:

`Hear → Notice → Repeat → Retrieve → Transfer`

The product goal is not generic “listen and repeat.” Its learning model requires increasingly independent production, delayed retrieval, corrective comparison, and later spaced review.

### Target users

- Primary: serious adult language learners from high beginner (A1/A2) to upper intermediate (B2).
- Secondary: teachers assigning phrases, reviewing recordings, and identifying recurring learner difficulties.
- Initial language pair: English interface for learners of Dutch. The content model must be language-agnostic.

## 2. MVP user stories

### Learner

1. I can start a short daily practice session with one phrase and an explicit learning goal.
2. I can listen to a model, slow it down, loop it, reveal a transcript, and see a translation after an initial attempt.
3. I can use guided repetition, shadowing, and delayed recall modes.
4. I can record and replay my production on-device.
5. I can mark an item as recalled, uncertain, or missed; the next review date changes accordingly.
6. I can see why a phrase is scheduled and what skill needs attention.

### Teacher (post-MVP)

1. I can create a phrase set with audio, transcript, gloss, prosody cues, and transfer prompts.
2. I can assign a set, review submissions, and see completion and retrieval outcomes.

## 3. Learning-engine rules

### Core state machine

| Stage | Learner support | Required learner action | Outcome stored |
| --- | --- | --- | --- |
| Hear | Audio, no text by default | Listen for global shape/meaning | listened, replay count |
| Notice | Transcript, gloss, cues | Mark/inspect stress, linking, chunks | focus feature |
| Repeat | Audio + optional text | Delayed echo or shadowing | recording, self-rating |
| Retrieve | Meaning/prompt only | Produce phrase before replay | recall accuracy, confidence |
| Transfer | Changed scenario | Use phrase in a new response | transfer completion, teacher/AI feedback later |

### Scheduling

- Every phrase stores `retrievability`, `confidence`, `last_seen_at`, `next_due_at`, and `outcome_history`.
- A successful retrieval schedules an expanding interval: 1 day → 3 days → 7 days → 21 days → 60 days.
- “Uncertain” repeats in the same session after at least two intervening items; it reappears the next day.
- “Missed” returns after a supported Notice + Repeat pass and is due again that day or the next day.
- The app must count independent recall separately from model-assisted imitation.

### Adaptive guidance

| Observed pattern | Recommended response |
| --- | --- |
| Low comprehension | Slow/segment audio, transcript after first pass, lexical pre-teach |
| Can imitate; cannot recall | More delayed retrieval, fewer new items |
| Recall good; rhythm weak | Shadowing/prosody practice with recording comparison |
| Recurring sound confusion | Perception-first contrast exercises with varied speakers |
| Transfer weak | More scenario changes and short response tasks |

## 4. Content model

Each `PhraseItem` needs:

```ts
type PhraseItem = {
  id: string;
  language: string;
  learnerLanguage: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  transcript: string;
  translation: string;
  romanization?: string;
  audio: { normal: string; slow?: string; speakerId: string; durationMs: number }[];
  context: { situation: string; prompt: string; followUpPrompt?: string };
  chunks: { text: string; startMs: number; endMs: number; note?: string }[];
  prosody: { stressedTokens: string[]; thoughtGroups: string[]; linkingNotes?: string[] };
  targets: { vocabulary: string[]; grammar: string[]; pronunciation?: string[] };
  transferPrompts: string[];
  accessibility: { transcriptAvailable: boolean; contentWarning?: string };
};
```

## 5. Technical architecture

### Prototype (this deliverable)

- Static HTML, CSS, and vanilla JavaScript.
- Browser `SpeechSynthesis` for labelled Dutch demonstration audio.
- Browser `MediaRecorder` and `getUserMedia` for local recording.
- `localStorage` for progress counters, listening counts, retrieval outcomes, review explanations, focus preference, and session completion. Learners can erase this local record in the interface.
- No account, cloud sync, analytics, or uploaded recordings.

### Production web application

- Frontend: React/TypeScript (the existing Sites Vinext starter is appropriate).
- UI state: React state/query cache; server state fetched through typed API routes.
- Persistence: Postgres/D1-style relational store for users, content, phrase states, reviews, assignments, and recording metadata. Object storage for user-approved recordings.
- Authentication: the hosting platform’s identity integration. Do not add anonymous cloud recording by default.
- Audio: authored human recordings first; use TTS only as a labeled fallback. Serve normal, slow, and segmentable variants.
- Speech feedback: start with self-comparison and timing. Add server-side or vendor speech analysis only after accuracy, language coverage, cost, consent, and explainability are validated.

### First production increment — implemented

- Platform identity gates the application; a signed-in learner's progress is stored under that account rather than a browser-only identifier.
- D1 stores phrase progress, retrieval history, attempts, session counts, and written transfer variations. The client retains a local copy and retries synchronization after connectivity returns.
- R2-backed audio metadata supports a normal and slow human-recording variant per stable lesson ID. Until an editor uploads a recording, the interface explicitly labels browser TTS as the fallback.
- The Repeat stage provides three deliberate listen-and-repeat patterns: close-lag shadowing for rhythm, delayed echo for memory-supported production, and backchaining from the final thought group for longer phrases. Backchaining draws on each lesson’s structured chunks rather than arbitrary word splits.
- The protected `/studio` Audio Studio uploads a consented human recording directly to R2, records speaker ID, duration, normal/slow variant, primary-voice selection, and optional timed segments. Alternative speakers are retained rather than overwritten; the learner player selects the primary recording and offers first-chunk looping when segment timings exist.
- The protected `/studio/content` Lesson Studio creates a phrase or imports a UTF-8 CSV. Editor-managed phrase records override or extend the built-in catalogue by stable lesson ID; the learner player hydrates those changes at launch, preserving linked audio and saved learning state.
- The protected `/studio/assignments` Teacher Studio creates phrase-set assignments for named learner accounts, tracks completed assigned phrases, and preserves learner data if an assignment is removed. Its learner review opens only for the assigning teacher and only for an assigned learner; it shows per-phrase retrieval outcomes, confidence, written transfer variations, and local-recording attempt counts. Learners receive their next assignment as an optional, explicit practice queue in the main player.
- Each of the 242 Dutch lessons now has a stable `nl-…` ID plus transcript, chunks, prosody seeds, learning targets, accessibility metadata, and an audio route. Editorially verified segment timings and prosody may replace the seeded values without migrating learner state.
- Scheduling distinguishes independent recall, supported recall, and missed recall. Supported recall must wait until the next day and two other completed phrases; missed recall opens a Notice → Repeat repair path before the next retrieval.
- Raw learner recordings remain opt-in and local. The synchronized record stores only that a local-only recording attempt happened, never the audio bytes.
- Learners can download a portable JSON copy of their account-held learning progress and attempt history. Exports explicitly exclude raw recordings, which never leave the learner’s device.
- A transparent practice check combines recent retrieval signals with an optional learner-selected challenge (rhythm, memory, or phrase length) to recommend shadowing, delayed echo, or backchaining plus one focus cue. It is a study-plan recommendation, not automated pronunciation scoring; the selection remains device-local and never analyzes recordings.

## 6. Data entities

```text
User ─────< LearnerProfile
User ─────< PhraseProgress >───── PhraseItem
PhraseSet ─< PhraseSetItem >───── PhraseItem
User ─────< PracticeSession ─────< Attempt
Teacher ──< Assignment >───────── PhraseSet
Assignment ─< AssignmentMember >─ User
```

`Attempt` stores stage, timestamp, support mode, self-rating, retrieval result, and a local-recording marker. Raw learner audio is not synchronized, surfaced to teachers, or retained by the service.

## 7. Screen scope

### Included in MVP

- Daily session / practice player
- Phrase stages and playback controls
- Transcript and prosody view
- On-device recording and replay
- Review queue and basic spaced scheduling
- Progress dashboard: recall, session completion, phrase count, next reviews
- Technical scope / product rationale screen or documentation
- After a successful visit, cache the static learner shell for offline return visits. Built-in lessons and device-local learning state remain available; account progress, assignments, editorial updates, exports, and human audio refresh when connected. Browser TTS remains the fallback when hosted audio cannot be reached.

### Post-MVP

- Teacher workspace, assignment flow, and privacy-preserving review view
- Content authoring interface and CSV import
- Segment-level pronunciation feedback
- Multiple-speaker perception exercises
- AI conversation transfer practice
- Notifications and calendar scheduling
- Offline downloads

## 8. Non-functional requirements

### Accessibility

- Keyboard-operable playback, stage navigation, and record controls.
- Visible focus states and semantic button labels.
- Transcript available for every audio item after initial listening is attempted or when explicitly requested.
- Captions/transcripts for all video content.
- Color is never the only performance signal.

### Privacy

- Recording is opt-in and local by default.
- Clearly distinguish local progress from synced progress.
- Let learners export their account-held learning data; exclude all device-local recordings.
- Ask before cloud upload, teacher sharing, or AI analysis.
- Provide explicit deletion of audio and learner data.

### Performance

- First usable session under 2.5 seconds on a mid-range mobile connection.
- Initial audio assets preloaded only for the active phrase.
- No blocking analytics scripts in the practice player.
- The learner shell must fit Chrome-class phone viewports from 320 CSS pixels upward without page-level horizontal scrolling; navigation can scroll inside its own touch-safe rail and primary controls use at least 44px targets.

## 9. Measurement plan

Product success must use learning quality—not only engagement.

- 24-hour and 7-day delayed recall rate
- Percentage of phrases reaching successful Transfer
- Listening comprehension of previously practiced connected speech
- Self-rated confidence and perceived usefulness
- Recording/retry patterns, treated as a diagnostic—not a vanity metric
- Retention by learning outcome (successful recall, not just activity completion)

For experiments, compare the full loop against a playback-plus-imitation control with the same content and time-on-task.

## 10. Acceptance criteria for the first production milestone

- A learner can complete one phrase through all five stages on mobile or desktop.
- Audio plays at normal and reduced speed.
- Transcript can be hidden and revealed with keyboard access.
- Recording works or fails gracefully without blocking the practice flow.
- Completion creates a local phrase outcome and next-review date.
- The review queue reads current local states correctly.
- No product copy promises accent elimination, diagnoses speech, or treats ASR output as authoritative.
