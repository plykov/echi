const dutchPieces = [
  { phrase: "Hoe gaat het met je?", translation: "How are you?", cue: "hoo khaat ut met yuh", category: "Hello", context: "You meet a colleague at the start of the day.", transfer: "Ask it naturally, then answer with one detail about your day." },
  { phrase: "Ik heet Noor.", translation: "My name is Noor.", cue: "ik hayt noor", category: "Hello", context: "You introduce yourself to someone new.", transfer: "Replace Noor with your own name and add where you are from." },
  { phrase: "Fijn je te ontmoeten.", translation: "Nice to meet you.", cue: "fayn yuh tuh ont-moo-tun", category: "Hello", context: "You are introduced to a friend of a friend.", transfer: "Say it, then ask the person one simple follow-up question." },
  { phrase: "Kun je dat herhalen?", translation: "Can you repeat that?", cue: "kun yuh dat her-haa-lun", category: "Repair", context: "You missed the last sentence in a conversation.", transfer: "Use it after a pretend fast sentence; keep your tone warm." },
  { phrase: "Ik begrijp het niet helemaal.", translation: "I don't completely understand it.", cue: "ik buh-khrayp ut neet hay-luh-maal", category: "Repair", context: "Someone explains a process too quickly.", transfer: "Say it, then ask for one specific clarification." },
  { phrase: "Waar is het station?", translation: "Where is the station?", cue: "vaar is ut sta-syon", category: "Travel", context: "You are walking through an unfamiliar neighbourhood.", transfer: "Ask the question, then listen for a direction such as links or rechts." },
  { phrase: "Hoe laat vertrekt de trein?", translation: "What time does the train leave?", cue: "hoo laat fur-trekt duh trine", category: "Travel", context: "You are checking a platform before a journey.", transfer: "Change trein to bus and ask the same question again." },
  { phrase: "Mag ik met pin betalen?", translation: "Can I pay by card?", cue: "mak ik met pin buh-taa-lun", category: "Café", context: "You are ready to pay at a small café.", transfer: "Ask it, then add a polite thank-you after the answer." },
  { phrase: "Ik zou graag een koffie willen.", translation: "I would like a coffee.", cue: "ik zow khraakh un koh-fee vil-lun", category: "Café", context: "You are ordering at the counter.", transfer: "Swap koffie for thee or water while keeping the whole phrase." },
  { phrase: "Wat raad je aan?", translation: "What do you recommend?", cue: "vat raat yuh aan", category: "Café", context: "You cannot decide what to choose.", transfer: "Ask it, then react with Dat klinkt goed." },
  { phrase: "Ik ben onderweg.", translation: "I'm on my way.", cue: "ik ben on-dur-vekh", category: "Plans", context: "You send a quick message before meeting someone.", transfer: "Say it, then add when you expect to arrive." },
  { phrase: "Ik ben een beetje laat.", translation: "I'm a little late.", cue: "ik ben un bay-chuh laat", category: "Plans", context: "You need to update someone waiting for you.", transfer: "Say it, then add an apology in your own words." },
  { phrase: "Zullen we afspreken?", translation: "Shall we meet up?", cue: "zuh-lun vuh af-spray-kun", category: "Plans", context: "You want to make a plan for later in the week.", transfer: "Ask it, then offer a day or time." },
  { phrase: "Dat klinkt goed.", translation: "That sounds good.", cue: "dat klinkt khoot", category: "Social", context: "Someone suggests a plan you like.", transfer: "Use it as a response, then add your own small detail." },
  { phrase: "Wat heb je dit weekend gedaan?", translation: "What did you do this weekend?", cue: "vat hep yuh dit vee-kent khuh-daan", category: "Social", context: "You are making small talk on Monday morning.", transfer: "Ask it, then share one thing you did too." },
  { phrase: "Ik leer nog Nederlands.", translation: "I'm still learning Dutch.", cue: "ik lair nokh nay-dur-lants", category: "Learning", context: "You want to set expectations in a Dutch conversation.", transfer: "Say it, then ask the person to speak a little more slowly." },
  { phrase: "Mag ik iets vragen?", translation: "May I ask something?", cue: "mak ik eets vraa-khun", category: "Learning", context: "You want to interrupt politely with a question.", transfer: "Use it before one question you can already ask in Dutch." },
  { phrase: "Ik denk dat…", translation: "I think that…", cue: "ik denk dat", category: "Opinion", context: "You are about to give a tentative opinion.", transfer: "Finish the thought with a simple opinion of your own." },
  { phrase: "Volgens mij…", translation: "In my opinion…", cue: "fol-hens may", category: "Opinion", context: "You want to soften a disagreement.", transfer: "Complete it with a different opinion from the previous phrase." },
  { phrase: "Dat hangt ervan af.", translation: "That depends.", cue: "dat hangt ur-faan af", category: "Opinion", context: "The answer changes with the situation.", transfer: "Say it, then name one condition that changes your answer." },
  { phrase: "Tot de volgende keer.", translation: "Until next time.", cue: "tot duh vol-khun-duh kayr", category: "Goodbye", context: "You finish a friendly conversation.", transfer: "Use it as a closing, then add a warm goodbye gesture or message." },
  { phrase: "Ik zou graag willen weten of…", translation: "I would like to know whether…", cue: "ik zow khraakh vil-lun vay-tun of", category: "Inquiry", level: "B1", context: "You need a polite answer before making a decision.", transfer: "Finish the question with a detail that matters to you." },
  { phrase: "Zou je kunnen uitleggen hoe dit werkt?", translation: "Could you explain how this works?", cue: "zow yuh kun-nun oyt-leg-gun hoo dit verkt", category: "Inquiry", level: "B1", context: "A process or tool is unfamiliar to you.", transfer: "Ask it, then repeat one step back in your own words." },
  { phrase: "Als ik het goed begrijp, …", translation: "If I understand correctly, …", cue: "als ik ut khoot buh-khrayp", category: "Clarify", level: "B1", context: "You want to check your understanding without interrupting abruptly.", transfer: "Complete the sentence with your interpretation of a plan." },
  { phrase: "Ik ben van plan om volgende maand te verhuizen.", translation: "I'm planning to move next month.", cue: "ik ben fan plaan om fol-khun-duh maant tuh fur-hoy-zun", category: "Plans", level: "B1", context: "You are telling someone about a significant change.", transfer: "Keep the frame and replace verhuizen with a plan of your own." },
  { phrase: "Ik heb er zin in.", translation: "I'm looking forward to it.", cue: "ik hep er zin in", category: "Social", level: "B1", context: "Someone has suggested a plan you genuinely like.", transfer: "Say it, then name the plan you are looking forward to." },
  { phrase: "Ik ben er nog niet aan toe.", translation: "I'm not ready for that yet.", cue: "ik ben er nokh neet aan too", category: "Boundary", level: "B1", context: "You need to set a respectful boundary.", transfer: "Use it, then add when you might be ready instead." },
  { phrase: "Het hangt ervan af wat je bedoelt.", translation: "It depends on what you mean.", cue: "ut hangt er-faan af vat yuh buh-doolt", category: "Nuance", level: "B1", context: "A question is too broad for a simple answer.", transfer: "Ask for the exact detail you need before giving your answer." },
  { phrase: "Volgens mij is dat niet nodig.", translation: "I don't think that's necessary.", cue: "fol-hens may is dat neet noo-dikh", category: "Opinion", level: "B1", context: "You want to disagree without sounding absolute.", transfer: "Say it, then offer a practical alternative." },
  { phrase: "Ik ben het daar niet helemaal mee eens.", translation: "I don't completely agree with that.", cue: "ik ben ut daar neet hay-luh-maal may ayns", category: "Opinion", level: "B1", context: "You disagree but want to keep the conversation constructive.", transfer: "Use it, then add one reason for your view." },
  { phrase: "Wat mij betreft kunnen we beginnen.", translation: "As far as I'm concerned, we can begin.", cue: "vat may buh-treft kun-nun vuh buh-khin-nun", category: "Meeting", level: "B1", context: "Everyone is waiting for a meeting or activity to start.", transfer: "Say it, then invite another person to share their view." },
  { phrase: "Laten we daar later op terugkomen.", translation: "Let's come back to that later.", cue: "laa-tun vuh daar laa-tur op tuh-rukh-koo-mun", category: "Meeting", level: "B1", context: "A discussion is useful but not urgent right now.", transfer: "Use it, then name when the group should return to the topic." },
  { phrase: "Ik stel voor dat we een andere datum kiezen.", translation: "I suggest that we choose another date.", cue: "ik stel foor dat vuh un an-duh-ruh daa-tum kee-zun", category: "Meeting", level: "B1", context: "The current date no longer works for the group.", transfer: "Make the suggestion, then offer one alternative date." },
  { phrase: "Zou het mogelijk zijn om de afspraak te verzetten?", translation: "Would it be possible to reschedule the appointment?", cue: "zow ut moo-khuh-lik zayn om duh af-spraak tuh fur-zet-tun", category: "Request", level: "B1", context: "You need to change a formal appointment politely.", transfer: "Ask it, then give a brief reason and a new option." },
  { phrase: "Ik heb het gevoel dat er iets ontbreekt.", translation: "I have the feeling that something is missing.", cue: "ik hep ut khuh-fooul dat er eets ont-braykt", category: "Problem solving", level: "B1", context: "A plan or document seems incomplete.", transfer: "Say it, then name what you think may be missing." },
  { phrase: "Ik ben benieuwd naar je mening.", translation: "I'm curious to hear your opinion.", cue: "ik ben buh-naywt naar yuh may-ning", category: "Opinion", level: "B1", context: "You want to invite another perspective.", transfer: "Ask it, then listen before responding with your own view." },
  { phrase: "Hoewel het druk was, heb ik het afgekregen.", translation: "Although it was busy, I managed to finish it.", cue: "hol-vayl ut druk vas hep ik ut af-khuh-kree-khun", category: "Work", level: "B1", context: "You are reporting progress despite a challenge.", transfer: "Keep Hoewel…, but change the challenge and your result." },
  { phrase: "Daardoor had ik minder tijd om te oefenen.", translation: "Because of that, I had less time to practise.", cue: "daar-door hat ik min-dur tayt om tuh oo-fuh-nun", category: "Explain", level: "B1", context: "You need to explain a consequence without making an excuse.", transfer: "Link it to a real event from your week." },
  { phrase: "Ik probeer eraan te wennen.", translation: "I'm trying to get used to it.", cue: "ik pro-bayr er-aan tuh veh-nun", category: "Adapt", level: "B1", context: "A new routine, climate, or habit still feels unfamiliar.", transfer: "Say what you are getting used to and one thing that helps." },
  { phrase: "Het is de moeite waard om het nog eens te proberen.", translation: "It's worth trying it once more.", cue: "ut is duh moo-y-tuh vaart om ut nokh ayns tuh pro-bay-run", category: "Encourage", level: "B1", context: "Someone is ready to give up too early.", transfer: "Use it to encourage a person, then explain why." },
  { phrase: "Ik zou het op prijs stellen als je me laat weten wat je denkt.", translation: "I would appreciate it if you let me know what you think.", cue: "ik zow ut op prays stel-lun als yuh muh laat vay-tun vat yuh denkt", category: "Request", level: "B1", context: "You want feedback without sounding demanding.", transfer: "Use it to request feedback on a real idea or plan." },
  { phrase: "Uiteindelijk zijn we tot een oplossing gekomen.", translation: "In the end, we reached a solution.", cue: "oy-tayn-duh-lik zayn vuh tot un op-loo-sing khuh-koo-mun", category: "Reflect", level: "B1", context: "You are summarising the positive outcome of a problem.", transfer: "Describe one small problem and the solution you reached." },
];

const b2Lessons = [
  ["Naar mijn idee weegt de langetermijnimpact zwaarder dan het directe voordeel.", "In my view, the long-term impact outweighs the immediate benefit.", "Argument", "You are weighing a quick gain against a future consequence.", "Keep the structure and compare two priorities that matter to you."],
  ["Ik begrijp je punt, maar ik trek op basis daarvan een andere conclusie.", "I understand your point, but I draw a different conclusion from it.", "Argument", "You want to disagree while showing that you have listened.", "Acknowledge a real point, then state a different conclusion."],
  ["Daar zit zeker iets in, al vraag ik me af of dat doorslaggevend is.", "There is certainly something to that, although I wonder whether it is decisive.", "Argument", "A colleague has made a plausible but incomplete argument.", "Use the frame, then name the factor you think is more decisive."],
  ["Het lijkt me te kort door de bocht om dat uitsluitend aan één oorzaak toe te schrijven.", "It seems too simplistic to attribute that solely to one cause.", "Argument", "A discussion reduces a complex issue to one explanation.", "Replace the cause and add one other factor."],
  ["De vraag is vooral in hoeverre we bereid zijn dat risico te aanvaarden.", "The question is mainly to what extent we are willing to accept that risk.", "Argument", "A group is deciding whether a trade-off is acceptable.", "Name a risk and say what would make it acceptable."],
  ["Ik zou een duidelijk onderscheid maken tussen intentie en effect.", "I would draw a clear distinction between intention and effect.", "Argument", "Someone judges an action only by what was intended.", "Give one example where intention and effect differ."],
  ["Wat mij betreft gaat het niet alleen om de kosten, maar ook om de uitvoerbaarheid.", "As far as I am concerned, it is not only about the costs but also about feasibility.", "Argument", "A proposal is being judged only on price.", "Contrast cost with a second practical criterion."],
  ["Als we die aanname loslaten, verandert de discussie aanzienlijk.", "If we let go of that assumption, the discussion changes considerably.", "Argument", "You notice that the debate rests on an untested premise.", "State an assumption, then explain what changes without it."],
  ["Dat is een valide bezwaar, maar het neemt mijns inziens de kern niet weg.", "That is a valid objection, but in my view it does not remove the core issue.", "Argument", "You want to concede a weakness without abandoning the main point.", "Name a valid objection and return to your central concern."],
  ["Ik zie niet in waarom we dit besluit nu zouden moeten forceren.", "I do not see why we should force this decision now.", "Argument", "A team is being pushed to decide before it is ready.", "Use it, then suggest what information is still needed."],

  ["Voordat we een besluit nemen, wil ik graag de consequenties scherp krijgen.", "Before we make a decision, I would like to clarify the consequences.", "Meeting", "A group is ready to choose, but the effects are still unclear.", "Name a decision and one consequence that needs clarification."],
  ["Kunnen we eerst vaststellen waar we het wél over eens zijn?", "Can we first establish what we do agree on?", "Meeting", "A discussion is stuck on disagreement.", "Use it, then name one shared point."],
  ["Ik stel voor dat we de discussie opsplitsen in twee afzonderlijke vragen.", "I suggest that we split the discussion into two separate questions.", "Meeting", "Two issues are getting mixed together in a meeting.", "Name two questions you would separate."],
  ["Om misverstanden te voorkomen, vat ik de afspraak even samen.", "To avoid misunderstandings, I will briefly summarise the agreement.", "Meeting", "A meeting has reached an agreement that needs to be recorded clearly.", "Summarise a simple agreement in your own words."],
  ["Laten we niet vooruitlopen op een uitkomst die nog niet onderbouwd is.", "Let us not anticipate an outcome that has not yet been substantiated.", "Meeting", "People are treating an early impression as a final result.", "Use it, then say what evidence is still missing."],
  ["Wie neemt de verantwoordelijkheid voor de opvolging hiervan?", "Who will take responsibility for following this up?", "Meeting", "A useful action has been identified but has no owner.", "Ask the question and assign a realistic follow-up."],
  ["Het zou helpen als we de criteria vooraf expliciet maken.", "It would help if we made the criteria explicit in advance.", "Meeting", "A team will judge options without agreed standards.", "Name two criteria for a decision you know."],
  ["Ik wil voorkomen dat we ons verliezen in details.", "I want to prevent us from getting lost in details.", "Meeting", "A conversation is becoming too detailed to move forward.", "Use it, then restate the larger question."],
  ["Kunnen we dit punt parkeren totdat we over meer informatie beschikken?", "Can we park this point until we have more information?", "Meeting", "A decision depends on facts that are not available yet.", "Park a topic and name the missing information."],
  ["Als er geen bezwaren zijn, leg ik dit vast als voorlopig besluit.", "If there are no objections, I will record this as a provisional decision.", "Meeting", "You are closing a discussion while leaving room for revision.", "Use it and add one condition for revisiting the decision."],

  ["Onder die voorwaarden zie ik ruimte om tot een compromis te komen.", "Under those conditions, I see room for reaching a compromise.", "Negotiation", "Two sides are exploring terms for an agreement.", "Name one condition that would make compromise possible."],
  ["Als jullie daarin meegaan, kunnen wij op dit punt tegemoetkomen.", "If you agree to that, we can make a concession on this point.", "Negotiation", "You are exchanging concessions in a constructive way.", "Offer one concession in return for another."],
  ["Voor ons is het essentieel dat de kwaliteit gewaarborgd blijft.", "For us, it is essential that quality remains guaranteed.", "Negotiation", "A lower-cost option could compromise an important standard.", "State one non-negotiable quality requirement."],
  ["Ik ben bereid daarin mee te bewegen, mits de planning realistisch blijft.", "I am willing to accommodate that, provided the schedule remains realistic.", "Negotiation", "You can be flexible but need to protect a deadline.", "Use it with a condition that matters to you."],
  ["Dat voorstel komt ons tegemoet, maar laat nog een belangrijk knelpunt open.", "That proposal meets us partway, but it still leaves an important bottleneck unresolved.", "Negotiation", "A proposal improves the situation but does not solve everything.", "Acknowledge the improvement and name the remaining bottleneck."],
  ["We moeten voorkomen dat de lasten onevenredig bij één partij terechtkomen.", "We must prevent the burden from falling disproportionately on one party.", "Negotiation", "A deal would distribute effort or cost unfairly.", "Describe a burden and suggest a fairer distribution."],
  ["Wat zou voor jullie een aanvaardbare tussenoplossing zijn?", "What would be an acceptable interim solution for you?", "Negotiation", "The final agreement will take time, but progress is needed now.", "Ask it, then propose a temporary arrangement."],
  ["Als we de scope beperken, ontstaat er mogelijk meer speelruimte.", "If we limit the scope, there may be more room to manoeuvre.", "Negotiation", "An initiative is too large to fund or deliver as planned.", "Reduce a project scope while preserving its main value."],
  ["Ik denk dat we dichter bij elkaar komen als we de uitgangspunten herzien.", "I think we will get closer if we reconsider the starting assumptions.", "Negotiation", "The same assumptions keep both sides apart.", "Name one assumption that could be reconsidered."],
  ["Laten we helder zijn over wat voor ieder van ons niet onderhandelbaar is.", "Let us be clear about what is non-negotiable for each of us.", "Negotiation", "A negotiation needs clear boundaries before trade-offs begin.", "State one boundary respectfully."],

  ["Ik wil graag bezwaar maken tegen de manier waarop dit is afgehandeld.", "I would like to object to the way this has been handled.", "Formal", "A formal process felt unfair or unclear.", "State a procedural concern without making it personal."],
  ["Zou u kunnen toelichten op grond waarvan dit besluit is genomen?", "Could you explain on what grounds this decision was made?", "Formal", "You need the reasoning behind an official decision.", "Ask for the grounds of a decision relevant to you."],
  ["Ik verzoek u vriendelijk om mijn aanvraag opnieuw in behandeling te nemen.", "I kindly request that you reconsider my application.", "Formal", "You want a formal body to review a decision.", "Use it and add one short reason for reconsideration."],
  ["Voor zover ik kan nagaan, ontbreekt er nog relevante informatie.", "As far as I can determine, relevant information is still missing.", "Formal", "A file or official response seems incomplete.", "Name the information you believe is missing."],
  ["Ik hoor graag binnen welke termijn ik een reactie kan verwachten.", "I would like to know within what timeframe I can expect a response.", "Formal", "You need a clear response date from an organisation.", "Ask for a response timeframe on a realistic matter."],
  ["Ik stel het op prijs als u de ontvangst van deze brief kunt bevestigen.", "I would appreciate it if you could confirm receipt of this letter.", "Formal", "You have sent an important document and need confirmation.", "Use it after naming the document you sent."],
  ["Gezien de omstandigheden acht ik een uitzondering gerechtvaardigd.", "Given the circumstances, I consider an exception justified.", "Formal", "A standard rule does not fit an unusual situation.", "Name a circumstance and the exception you request."],
  ["Ik wil graag voorkomen dat dit tot verdere vertraging leidt.", "I would like to prevent this from causing further delay.", "Formal", "An administrative issue is slowing a process down.", "Use it and propose one next step."],
  ["Kunt u aangeven welke documenten nog nodig zijn om de procedure af te ronden?", "Can you indicate which documents are still needed to complete the procedure?", "Formal", "You need to finish an application correctly.", "Ask it, then name one document you could provide."],
  ["Mocht er sprake zijn van een misverstand, dan hoor ik dat graag zo spoedig mogelijk.", "If there is a misunderstanding, I would like to hear that as soon as possible.", "Formal", "You want to invite correction without sounding accusatory.", "Use it to close a calm clarification message."],

  ["De cijfers wijzen op een trend, maar bewijzen nog geen oorzakelijk verband.", "The figures point to a trend, but do not yet prove a causal relationship.", "Analysis", "You are discussing data that invite an overly strong conclusion.", "Name a trend and one reason not to overinterpret it."],
  ["Om die conclusie te kunnen trekken, hebben we meer vergelijkingsmateriaal nodig.", "To draw that conclusion, we need more comparative material.", "Analysis", "One case or dataset is not enough for a firm conclusion.", "Say what you would compare and why."],
  ["De uitkomst is sterk afhankelijk van de manier waarop we de gegevens interpreteren.", "The outcome depends strongly on how we interpret the data.", "Analysis", "Different readings of the same data lead to different decisions.", "Give one example of an interpretation choice."],
  ["Het is de vraag of deze steekproef representatief genoeg is.", "The question is whether this sample is representative enough.", "Analysis", "A survey result is being treated as if it describes everyone.", "Use it, then name a group that may be missing."],
  ["We moeten rekening houden met factoren die in de analyse niet zijn meegenomen.", "We must take account of factors that were not included in the analysis.", "Analysis", "A report leaves out a context that could change its conclusion.", "Name one omitted factor."],
  ["De resultaten laten ruimte voor meerdere verklaringen.", "The results leave room for several explanations.", "Analysis", "The evidence can reasonably be read in more than one way.", "Offer two possible explanations for an outcome."],
  ["Op het eerste gezicht lijkt dat tegenstrijdig, maar bij nader inzien is het logisch.", "At first sight that seems contradictory, but on closer inspection it is logical.", "Analysis", "Two facts seem incompatible until the context becomes clear.", "Describe an apparent contradiction and resolve it."],
  ["De kern van het probleem ligt vermoedelijk niet bij de uitvoering, maar bij het ontwerp.", "The core of the problem probably lies not in execution, but in the design.", "Analysis", "Repeated implementation fixes are not solving the underlying issue.", "Contrast an execution issue with a design issue."],
  ["Zonder een heldere nulmeting is vooruitgang moeilijk vast te stellen.", "Without a clear baseline measurement, progress is difficult to establish.", "Analysis", "A team wants to claim improvement without knowing its starting point.", "Name a baseline you would measure."],
  ["Het onderscheid tussen correlatie en causaliteit is hier cruciaal.", "The distinction between correlation and causation is crucial here.", "Analysis", "A conversation confuses two things that occur together with one causing the other.", "Give a simple example of correlation without causation."],

  ["De planning is alleen haalbaar als de afhankelijkheden tijdig worden opgelost.", "The schedule is feasible only if the dependencies are resolved in time.", "Project", "A project depends on other teams or decisions.", "Name one dependency and a deadline for resolving it."],
  ["We lopen het risico dat het project vertraging oploopt als deze keuze wordt uitgesteld.", "We risk the project being delayed if this choice is postponed.", "Project", "A decision is becoming a bottleneck.", "State the decision and the likely delay."],
  ["Laten we prioriteit geven aan wat de meeste waarde oplevert voor de gebruiker.", "Let us prioritise what delivers the most value for the user.", "Project", "A roadmap has too many competing tasks.", "Choose one user-centred priority."],
  ["Ik stel voor dat we eerst een kleinschalige proef uitvoeren.", "I suggest that we first run a small-scale pilot.", "Project", "A new idea is promising but still uncertain.", "Propose a small pilot and one thing it should test."],
  ["De huidige aanpak is niet schaalbaar zonder aanvullende capaciteit.", "The current approach is not scalable without additional capacity.", "Project", "A manual process works now but will not work at larger volume.", "Name the capacity that would be needed."],
  ["We hebben een duidelijk escalatiepad nodig voor onvoorziene problemen.", "We need a clear escalation path for unforeseen problems.", "Project", "A team needs to know who decides when something goes wrong.", "Describe one escalation step for a risk."],
  ["Ik mis nog een eigenaar voor dit onderdeel van het proces.", "I still see no owner for this part of the process.", "Project", "A task appears in a plan but nobody is accountable.", "Name a task and assign a likely owner."],
  ["De belangrijkste mijlpaal is bereikt, maar de implementatie vraagt nog aandacht.", "The main milestone has been reached, but implementation still needs attention.", "Project", "A launch or decision is complete, but adoption is not.", "Name a milestone and one implementation task."],
  ["Als we de risico's vroeg signaleren, kunnen we later veel herstelwerk voorkomen.", "If we identify risks early, we can prevent a lot of rework later.", "Project", "You want the team to invest in early risk detection.", "Name an early warning sign for a project."],
  ["Ik wil graag toetsen of deze oplossing ook op langere termijn houdbaar is.", "I would like to test whether this solution is sustainable in the long term.", "Project", "A quick fix may create future maintenance work.", "Use it and name one long-term test."],

  ["Ik waardeer dat je dit zo open ter sprake brengt.", "I appreciate that you raise this so openly.", "Relationship", "Someone has initiated a difficult but honest conversation.", "Use it to acknowledge openness before sharing your view."],
  ["Ik kan me voorstellen dat die opmerking anders bij jou is overgekomen.", "I can imagine that that remark came across differently to you.", "Relationship", "You want to recognise an impact you did not intend.", "Use it, then ask how the person experienced it."],
  ["We hoeven het niet overal over eens te zijn om elkaar serieus te nemen.", "We do not have to agree on everything to take each other seriously.", "Relationship", "A disagreement risks becoming personal.", "Use it before calmly restating your disagreement."],
  ["Ik wil graag begrijpen wat er voor jou op het spel staat.", "I would like to understand what is at stake for you.", "Relationship", "Someone's strong reaction may be connected to an important concern.", "Ask it and listen for the concern behind a position."],
  ["Misschien praten we langs elkaar heen zonder dat we het doorhebben.", "Maybe we are talking past each other without realising it.", "Relationship", "Two people use the same words but mean different things.", "Use it, then define one key term."],
  ["Ik zou het fijn vinden als we elkaar meer ruimte geven om uit te spreken.", "I would appreciate it if we gave each other more room to finish speaking.", "Relationship", "A conversation has too many interruptions.", "Set this boundary and add a respectful request."],
  ["Voor mij voelt dat als een grens die ik niet wil overschrijden.", "To me, that feels like a boundary I do not want to cross.", "Relationship", "You need to decline something while staying respectful.", "Name a boundary and one alternative you can offer."],
  ["Ik ben bereid mijn standpunt te herzien als er nieuwe informatie komt.", "I am prepared to revise my position if new information emerges.", "Relationship", "You want to stay principled without sounding rigid.", "State a view and the evidence that could change it."],
  ["Het helpt mij als je concreet aangeeft wat je van mij verwacht.", "It helps me if you state concretely what you expect from me.", "Relationship", "A request or criticism is too vague to act on.", "Ask for one concrete expectation."],
  ["Ik wil niet dat een misverstand onze samenwerking onder druk zet.", "I do not want a misunderstanding to put our collaboration under pressure.", "Relationship", "You want to repair tension before it grows.", "Use it and suggest a clarifying conversation."],

  ["De voordelen van automatisering wegen niet op tegen het verlies aan menselijk contact.", "The benefits of automation do not outweigh the loss of human contact.", "Technology", "You are debating a system that replaces meaningful interaction.", "Compare a technical benefit with a human cost."],
  ["We moeten kritisch blijven op welke gegevens we verzamelen en waarom.", "We must remain critical about which data we collect and why.", "Technology", "A product team wants to collect more user data.", "Name one data type and a legitimate reason to question it."],
  ["Een gebruiksvriendelijke oplossing is niet per definitie ook een eerlijke oplossing.", "A user-friendly solution is not necessarily a fair solution.", "Technology", "A convenient design could disadvantage a group of people.", "Name a convenience and a possible fairness concern."],
  ["De markt reageert vaak sneller dan de regelgeving kan bijhouden.", "The market often moves faster than regulation can keep up with.", "Technology", "A new technology is changing practice before rules are ready.", "Use it with an example of a fast-moving innovation."],
  ["Het verdienmodel is kwetsbaar zolang we afhankelijk zijn van één leverancier.", "The revenue model is vulnerable as long as we depend on one supplier.", "Technology", "A business relies on a single platform or vendor.", "Name a dependency and one way to reduce it."],
  ["Transparantie is noodzakelijk om vertrouwen in het systeem te behouden.", "Transparency is necessary to maintain trust in the system.", "Technology", "People are unsure how an automated system makes decisions.", "Say what should be made transparent."],
  ["Deze innovatie lost een reëel probleem op, maar creëert ook nieuwe afhankelijkheden.", "This innovation solves a real problem, but also creates new dependencies.", "Technology", "A solution makes life easier while tying users to a provider.", "Name the problem solved and one new dependency."],
  ["We moeten voorkomen dat efficiëntie het enige criterium wordt.", "We must prevent efficiency from becoming the only criterion.", "Technology", "A decision is measured only by speed or cost savings.", "Add two criteria besides efficiency."],
  ["De investering verdient zich pas terug als de adoptie breed genoeg is.", "The investment pays for itself only if adoption becomes broad enough.", "Technology", "A new tool has high upfront costs and needs users.", "Name an adoption condition for an investment."],
  ["Het is belangrijk dat gebruikers begrijpen hoe hun gegevens worden gebruikt.", "It is important that users understand how their data are used.", "Technology", "A service asks for permissions that are not clearly explained.", "State one thing users should be told clearly."],

  ["De maatschappelijke kosten worden vaak pas zichtbaar op de lange termijn.", "The social costs often become visible only in the long term.", "Society", "A policy brings immediate benefits but may create future harm.", "Name a long-term social cost to consider."],
  ["Een duurzame keuze vraagt soms om ongemak op de korte termijn.", "A sustainable choice sometimes requires short-term inconvenience.", "Society", "A greener option asks people to change a comfortable habit.", "Give one example of short-term inconvenience for long-term benefit."],
  ["De vraag is wie uiteindelijk verantwoordelijk wordt gehouden voor de gevolgen.", "The question is who will ultimately be held responsible for the consequences.", "Society", "A decision has multiple actors and unclear accountability.", "Name an outcome and who should be accountable."],
  ["Zonder draagvlak blijft zelfs een goed plan moeilijk uitvoerbaar.", "Without support, even a good plan remains difficult to implement.", "Society", "A sound policy lacks support from the people affected.", "Use it, then say how support could be built."],
  ["We moeten voorkomen dat kwetsbare groepen onevenredig worden geraakt.", "We must prevent vulnerable groups from being disproportionately affected.", "Society", "A general policy may hit some people much harder than others.", "Name a vulnerable group and a protective measure."],
  ["Het debat wordt helderder als we feiten en waarden uit elkaar houden.", "The debate becomes clearer if we keep facts and values separate.", "Society", "People present a value judgement as if it were a fact.", "Give one fact and one value in a public debate."],
  ["Lokale maatregelen hebben meer kans van slagen als bewoners worden betrokken.", "Local measures are more likely to succeed if residents are involved.", "Society", "A neighbourhood change is planned without local input.", "Name one way residents could participate."],
  ["Niet elke oplossing die technisch mogelijk is, is ook maatschappelijk wenselijk.", "Not every solution that is technically possible is socially desirable.", "Society", "A technical option raises ethical or social questions.", "Name a possible solution and one social concern."],
  ["We kunnen de verantwoordelijkheid niet volledig bij individuele consumenten leggen.", "We cannot place the responsibility entirely on individual consumers.", "Society", "A systemic problem is being framed as purely personal choice.", "Contrast individual action with one systemic responsibility."],
  ["Het beleid moet ruimte laten voor verschillen tussen regio's en situaties.", "Policy must leave room for differences between regions and situations.", "Society", "One national rule does not fit every local context.", "Name a regional difference that policy should consider."],

  ["Achteraf gezien had ik eerder aan de bel moeten trekken.", "In hindsight, I should have raised the alarm earlier.", "Reflection", "You are reflecting honestly on a problem that grew over time.", "Describe a moment when you could have spoken up sooner."],
  ["Ik had niet verwacht dat de gevolgen zo verstrekkend zouden zijn.", "I had not expected the consequences to be so far-reaching.", "Reflection", "A small decision led to much bigger effects than expected.", "Name a decision and its unexpected consequence."],
  ["Wat me vooral is bijgebleven, is hoe snel de situatie veranderde.", "What has stayed with me most is how quickly the situation changed.", "Reflection", "You are recounting an event that shifted rapidly.", "Use it to begin a short account of a change."],
  ["Pas toen ik afstand nam, zag ik het grotere geheel.", "Only when I stepped back did I see the bigger picture.", "Reflection", "You gained perspective after leaving an immediate situation.", "Describe what became clearer after taking distance."],
  ["Ik heb er bewust voor gekozen om niet meteen te reageren.", "I deliberately chose not to respond immediately.", "Reflection", "You paused before responding to an emotional or difficult message.", "Use it and explain what you wanted to avoid."],
  ["Hoewel de beslissing moeilijk was, voelt die achteraf gezien verdedigbaar.", "Although the decision was difficult, it feels defensible in hindsight.", "Reflection", "You made a hard choice after weighing competing concerns.", "Name a difficult decision and why it remains defensible."],
  ["Ik probeer niet alleen te kijken naar wat er misging, maar ook naar wat we ervan kunnen leren.", "I try to look not only at what went wrong, but also at what we can learn from it.", "Reflection", "A setback should become a learning opportunity.", "Name one mistake and one lesson from it."],
  ["Het moment waarop alles samenkwam, was voor mij een keerpunt.", "The moment when everything came together was a turning point for me.", "Reflection", "Several developments suddenly made sense at once.", "Describe a turning point in a project or experience."],
  ["Ik had liever gehad dat we dit gesprek eerder hadden gevoerd.", "I would have preferred that we had had this conversation earlier.", "Reflection", "An overdue conversation could have prevented tension.", "Use it gently, then say what would have helped."],
  ["Uiteindelijk bleek de oplossing eenvoudiger dan we aanvankelijk dachten.", "Ultimately, the solution proved simpler than we initially thought.", "Reflection", "A difficult-looking problem became manageable after clarification.", "Describe a problem and the simpler solution you found."],
];

const b1Lessons = [
  ["Meestal begin ik mijn dag met een korte wandeling.", "I usually start my day with a short walk.", "Routine", "You are describing a habit that helps you start the day.", "Keep the frame and replace the walk with one of your own habits."],
  ["Ik probeer mijn agenda zo goed mogelijk bij te houden.", "I try to keep my calendar as up to date as possible.", "Routine", "You are explaining how you stay organised.", "Say what you try to keep up to date and why."],
  ["Sinds kort neem ik vaker de tijd om zelf te koken.", "Recently, I have been taking more time to cook for myself.", "Routine", "A new routine has become part of your week.", "Use Sinds kort and add a new habit of your own."],
  ["Het kost me moeite om op tijd naar bed te gaan.", "I find it difficult to go to bed on time.", "Routine", "You are talking about a habit you want to improve.", "Name one habit that costs you effort."],
  ["Als ik thuiswerk, plan ik regelmatig korte pauzes in.", "When I work from home, I regularly schedule short breaks.", "Routine", "You explain how you manage energy while working at home.", "Change thuiswerk to another situation and keep the structure."],
  ["Ik ben eraan gewend geraakt om alles vooruit te plannen.", "I have got used to planning everything ahead.", "Routine", "You are describing an adjustment that now feels normal.", "Say what you have got used to doing."],
  ["Soms komt mijn dag heel anders uit dan ik had verwacht.", "Sometimes my day turns out very differently from what I expected.", "Routine", "Unexpected events have changed your plan.", "Describe one way a day can turn out differently."],
  ["Ik wil mijn routine veranderen zonder te veel druk op mezelf te leggen.", "I want to change my routine without putting too much pressure on myself.", "Routine", "You are making a realistic plan for a personal change.", "Name a routine you want to change gently."],
  ["Het helpt mij om aan het einde van de dag terug te kijken.", "It helps me to reflect at the end of the day.", "Routine", "You are sharing a strategy that keeps you grounded.", "Say what helps you at the end of a day."],
  ["Ik merk dat ik productiever ben als ik één taak tegelijk doe.", "I notice that I am more productive when I do one task at a time.", "Routine", "You are explaining what improves your concentration.", "Replace productiever with another result you notice."],

  ["Ik heb de belangrijkste punten alvast op een rij gezet.", "I have already listed the most important points.", "Work", "You prepared a clear overview before a discussion.", "Say what you have put in order for a real task."],
  ["Kun je me laten weten wanneer je hier tijd voor hebt?", "Can you let me know when you have time for this?", "Work", "You need to schedule a conversation without pressuring someone.", "Ask about a suitable time for a topic of your own."],
  ["Ik loop tegen een probleem aan waar ik zelf niet uitkom.", "I am running into a problem that I cannot solve myself.", "Work", "You need help with a difficult task.", "Name a problem and politely ask someone to think with you."],
  ["Ik heb de deadline gehaald, ondanks een paar tegenslagen.", "I met the deadline despite a few setbacks.", "Work", "You are reporting progress after a challenging period.", "Keep ondanks and name a challenge you overcame."],
  ["Zullen we even overleggen voordat we verdergaan?", "Shall we consult briefly before we continue?", "Work", "You want to align with a colleague before acting.", "Use it before a decision you might make together."],
  ["Ik ben verantwoordelijk voor de communicatie met de klant.", "I am responsible for communication with the client.", "Work", "You are clarifying your role in a team.", "State one responsibility you have or would like to have."],
  ["Het zou handig zijn als we de taken beter verdelen.", "It would be helpful if we divided the tasks better.", "Work", "A team has too much work concentrated in one place.", "Suggest a fairer task division."],
  ["Ik wil voorkomen dat er verwarring ontstaat over de planning.", "I want to prevent confusion about the schedule.", "Work", "You are making a process clearer before problems arise.", "Say what you want to prevent confusion about."],
  ["Ik heb je opmerkingen verwerkt in de nieuwste versie.", "I have incorporated your comments into the latest version.", "Work", "You are updating someone after revising a document.", "Use it and name one kind of feedback you included."],
  ["Laten we afspreken wie welk onderdeel oppakt.", "Let us agree on who will take on which part.", "Work", "A shared task needs clear ownership.", "Divide two simple tasks between two people."],

  ["De verwarming doet het niet zoals het zou moeten.", "The heating is not working as it should.", "Home", "You need to report a problem in your home.", "Change verwarming to another household problem."],
  ["Ik wil graag een afspraak maken om ernaar te laten kijken.", "I would like to make an appointment to have someone look at it.", "Home", "A repair requires a visit from a professional.", "Ask for an appointment and name the item that needs attention."],
  ["Is het mogelijk om de sleutel iets later op te halen?", "Is it possible to pick up the key a little later?", "Home", "You need to change a practical arrangement politely.", "Change sleutel to something you need to collect."],
  ["Ik ben bezig met het vergelijken van verschillende aanbieders.", "I am comparing different providers.", "Home", "You are choosing a service such as internet or energy.", "Say which providers you are comparing."],
  ["De rekening valt hoger uit dan ik had verwacht.", "The bill is higher than I expected.", "Home", "A cost has surprised you and needs clarification.", "Name a bill and how it differs from your expectation."],
  ["Ik heb het formulier ingevuld, maar ik weet niet of alles klopt.", "I filled out the form, but I do not know whether everything is correct.", "Home", "You need someone to check an important form.", "Ask for help checking one detail."],
  ["Zou je kunnen controleren of mijn gegevens nog juist zijn?", "Could you check whether my details are still correct?", "Home", "You want to confirm contact or account details.", "Use it with one type of personal detail."],
  ["Ik ben op zoek naar een rustige buurt met goede verbindingen.", "I am looking for a quiet neighbourhood with good transport links.", "Home", "You are describing what matters in a place to live.", "Replace rustige buurt with your own housing priority."],
  ["We moeten nog beslissen wat we met de oude meubels doen.", "We still have to decide what to do with the old furniture.", "Home", "A move or renovation has created a practical choice.", "Name something you need to decide what to do with."],
  ["Het lijkt me verstandig om eerst een offerte aan te vragen.", "It seems sensible to request a quote first.", "Home", "A repair may be expensive and you want information first.", "Use it before a purchase or repair decision."],

  ["De trein had vertraging, waardoor ik mijn aansluiting miste.", "The train was delayed, which made me miss my connection.", "Travel", "You are explaining why a journey did not go as planned.", "Keep waardoor and describe a travel consequence."],
  ["Weet je toevallig of er een alternatief is?", "Do you happen to know whether there is an alternative?", "Travel", "Your original travel plan is no longer possible.", "Ask for an alternative in another practical situation."],
  ["Ik wil graag weten of mijn reservering nog gewijzigd kan worden.", "I would like to know whether my reservation can still be changed.", "Travel", "You need to amend a booking politely.", "Ask about changing a reservation or appointment."],
  ["De route was minder duidelijk aangegeven dan ik had gehoopt.", "The route was less clearly signposted than I had hoped.", "Travel", "You are giving feedback after a confusing journey.", "Describe one thing that was less clear than expected."],
  ["Ik ben mijn tas waarschijnlijk in de wachtruimte vergeten.", "I probably left my bag in the waiting area.", "Travel", "You need to report a lost item.", "Change tas to another item you could have forgotten."],
  ["Kunnen we onderweg ergens stoppen om iets te eten?", "Can we stop somewhere on the way to eat something?", "Travel", "You are travelling with others and need a break.", "Ask to stop for a different reason."],
  ["Ik heb liever een kamer die niet aan de straatkant ligt.", "I would prefer a room that is not on the street side.", "Travel", "You are making a preference clear at a hotel.", "State one room preference of your own."],
  ["Het viel me op dat er weinig informatie in het Engels was.", "I noticed that there was little information in English.", "Travel", "You are commenting on accessibility while visiting a place.", "Use Het viel me op and describe something you noticed."],
  ["Ik raad je aan om ruim van tevoren te vertrekken.", "I recommend leaving well in advance.", "Travel", "You are giving someone practical travel advice.", "Give advice for a journey or appointment."],
  ["Als het weer tegenzit, passen we het programma gewoon aan.", "If the weather is bad, we will simply adjust the programme.", "Travel", "An outdoor plan needs a flexible alternative.", "Use the structure with another possible problem."],

  ["Ik waardeer het dat je zo eerlijk tegen me bent.", "I appreciate that you are being so honest with me.", "Social", "Someone has told you something difficult but important.", "Use it before sharing your response."],
  ["Het spijt me dat ik zo laat heb gereageerd.", "I am sorry that I replied so late.", "Social", "You want to apologise after a delayed message.", "Add a short reason for a late reply."],
  ["Ik had niet door dat je je daardoor buitengesloten voelde.", "I did not realise that it made you feel left out.", "Social", "You are acknowledging the effect of a situation on someone.", "Use it and ask what would help next time."],
  ["Zullen we binnenkort iets doen als je tijd hebt?", "Shall we do something soon if you have time?", "Social", "You want to make a relaxed plan with someone.", "Suggest an activity and a possible time."],
  ["Ik ben blij dat we dit rustig kunnen bespreken.", "I am glad that we can discuss this calmly.", "Social", "A sensitive topic is being handled constructively.", "Use it before stating your view."],
  ["Ik had graag willen helpen, maar het lukte me niet.", "I would have liked to help, but I was not able to.", "Social", "You need to explain why you could not support someone.", "Keep the frame and give a gentle reason."],
  ["Het lijkt me leuk om eens samen te gaan.", "It seems nice to go together sometime.", "Social", "You are responding positively to an activity idea.", "Name an activity you would like to do together."],
  ["Ik wil je niet onder druk zetten, dus denk er rustig over na.", "I do not want to pressure you, so think it over calmly.", "Social", "Someone needs time to make a personal decision.", "Use it when making an invitation or request."],
  ["Ik begrijp dat je daar anders naar kijkt.", "I understand that you see it differently.", "Social", "You want to respect a different view without agreeing.", "Use it and add your own perspective."],
  ["Laten we contact houden, ook als het druk is.", "Let us stay in touch, even when things are busy.", "Social", "You are ending a warm conversation with an intention.", "Use it in a message to someone you value."],

  ["Ik voel me de laatste tijd sneller moe dan normaal.", "Lately I get tired more quickly than usual.", "Health", "You are describing a change in how you feel.", "Change moe to another symptom or feeling."],
  ["De huisarts heeft me geadviseerd om het rustig aan te doen.", "The GP advised me to take it easy.", "Health", "You are explaining advice you received from a doctor.", "Say what advice someone has given you."],
  ["Ik probeer beter te luisteren naar wat mijn lichaam nodig heeft.", "I am trying to listen better to what my body needs.", "Health", "You are describing a more balanced approach to health.", "Use it and name one need you notice."],
  ["Ik ben allergisch voor iets, maar ik weet nog niet waarvoor.", "I am allergic to something, but I do not yet know what.", "Health", "You need to explain an uncertain allergy.", "Change allergisch to another health uncertainty."],
  ["De pijn is minder geworden, maar nog niet helemaal weg.", "The pain has become less, but it has not completely gone away.", "Health", "You are updating someone about a recovery.", "Describe an improvement that is not complete yet."],
  ["Het helpt als ik voldoende slaap en regelmatig eet.", "It helps when I get enough sleep and eat regularly.", "Health", "You are sharing what supports your wellbeing.", "Add one healthy habit that helps you."],
  ["Ik wil graag weten welke mogelijkheden er zijn.", "I would like to know what options there are.", "Health", "You want to understand choices before deciding.", "Use it in a health, work, or learning situation."],
  ["Ik heb behoefte aan een paar dagen rust.", "I need a few days of rest.", "Health", "You are setting a gentle limit after a demanding period.", "Say what kind of rest you need."],
  ["Sinds ik meer beweeg, voel ik me een stuk beter.", "Since I have been exercising more, I feel a lot better.", "Health", "You are describing a positive change in wellbeing.", "Use Sinds ik and name a beneficial change."],
  ["Kun je me uitleggen hoe ik deze medicijnen moet gebruiken?", "Can you explain how I should use these medicines?", "Health", "You need clear instructions from a pharmacist or doctor.", "Ask for instructions about another practical task."],

  ["Ik vind het belangrijk dat iedereen de kans krijgt om mee te doen.", "I think it is important that everyone gets the chance to take part.", "Opinion", "You are explaining an inclusive value.", "Name one situation where everyone should be able to join."],
  ["Volgens mij is het niet zo simpel als het op het eerste gezicht lijkt.", "In my opinion, it is not as simple as it seems at first glance.", "Opinion", "A conversation is treating a complex issue too simply.", "Use it and name one complexity."],
  ["Ik begrijp waarom mensen zich daar zorgen over maken.", "I understand why people are worried about that.", "Opinion", "You want to show empathy for a concern before responding.", "Acknowledge one concern you understand."],
  ["Aan de ene kant is het praktisch, aan de andere kant kost het veel tijd.", "On the one hand it is practical; on the other hand it takes a lot of time.", "Opinion", "You are weighing a clear advantage against a drawback.", "Compare two sides of a choice you know."],
  ["Ik ben niet helemaal overtuigd, maar ik sta open voor andere ideeën.", "I am not completely convinced, but I am open to other ideas.", "Opinion", "You are expressing doubt without closing the discussion.", "Use it and say which idea you want to hear more about."],
  ["Het hangt sterk af van de situatie waarin je zit.", "It depends strongly on the situation you are in.", "Opinion", "A question needs a nuanced rather than fixed answer.", "Name a situation that would change your answer."],
  ["Ik denk dat we eerst meer informatie nodig hebben.", "I think we first need more information.", "Opinion", "A group is being asked to decide too soon.", "Say what information you would need."],
  ["Voor mij weegt gemak minder zwaar dan kwaliteit.", "For me, convenience weighs less heavily than quality.", "Opinion", "You are explaining a personal priority in a choice.", "Contrast two priorities that matter to you."],
  ["Ik vind het lastig om daar nu al een oordeel over te geven.", "I find it difficult to give an opinion on that already.", "Opinion", "You want to postpone judgement until you know more.", "Use it before asking one clarifying question."],
  ["Wat zou er gebeuren als we het op een andere manier aanpakken?", "What would happen if we approached it in a different way?", "Opinion", "You want to invite creative thinking about a problem.", "Suggest another way of approaching a familiar task."],

  ["Ik ben van plan om dit jaar mijn Nederlands verder te verbeteren.", "I am planning to improve my Dutch further this year.", "Learning", "You are describing a concrete language-learning goal.", "Replace Nederlands with another skill you want to improve."],
  ["Ik wil graag meer zelfvertrouwen krijgen in gesprekken.", "I would like to gain more confidence in conversations.", "Learning", "You are explaining what you want from practice.", "Say where you want more confidence."],
  ["Het doel is dat ik het uiteindelijk zonder hulp kan doen.", "The goal is that I can eventually do it without help.", "Learning", "You are describing growing independence in a skill.", "Name one skill you want to perform independently."],
  ["Ik heb besloten om elke week iets nieuws te proberen.", "I have decided to try something new every week.", "Learning", "You are building a sustainable learning habit.", "Use it and name the first new thing you will try."],
  ["Als ik vastloop, vraag ik meestal iemand om uitleg.", "When I get stuck, I usually ask someone for an explanation.", "Learning", "You are explaining a useful strategy for difficulties.", "Change vraag ik to another action you take when stuck."],
  ["Ik ben benieuwd hoe het in de praktijk zal uitpakken.", "I am curious to see how it will work out in practice.", "Learning", "A plan sounds good but still needs to be tested.", "Use it about a plan you would like to try."],
  ["Het duurt waarschijnlijk nog even voordat ik eraan gewend ben.", "It will probably take a while before I get used to it.", "Learning", "You are adjusting to a new way of doing something.", "Say what you are still getting used to."],
  ["Ik heb gemerkt dat herhalen voor mij goed werkt.", "I have noticed that repetition works well for me.", "Learning", "You are reflecting on an effective study method.", "Say which learning method works for you."],
  ["We kunnen beter klein beginnen en later uitbreiden.", "We would be better off starting small and expanding later.", "Learning", "A new project or habit feels too large at first.", "Suggest a small first step."],
  ["Ik wil voorkomen dat ik te veel tegelijk probeer te doen.", "I want to avoid trying to do too much at once.", "Learning", "You are setting a realistic boundary for yourself.", "Name two things you do not want to take on at once."],

  ["Er is iets misgegaan bij het verwerken van mijn betaling.", "Something went wrong while processing my payment.", "Problem solving", "You need to report a payment issue clearly.", "Change betaling to another process that went wrong."],
  ["Ik heb al verschillende oplossingen geprobeerd, maar niets werkte.", "I have already tried several solutions, but nothing worked.", "Problem solving", "You need help after trying to solve an issue yourself.", "Name one problem and two things you have tried."],
  ["Kunnen we samen kijken waar het precies misloopt?", "Can we look together at exactly where it is going wrong?", "Problem solving", "You want to investigate a problem with someone else.", "Use it before describing a specific step."],
  ["Het probleem lijkt groter te worden als we niets doen.", "The problem seems to be getting bigger if we do nothing.", "Problem solving", "You want to explain why action is needed now.", "Name a problem and what could happen without action."],
  ["Ik heb behoefte aan een duidelijke uitleg van de volgende stappen.", "I need a clear explanation of the next steps.", "Problem solving", "A process has become unclear after an issue.", "Ask for the next steps in a situation you know."],
  ["Laten we eerst uitzoeken wat de oorzaak is.", "Let us first find out what the cause is.", "Problem solving", "You want to diagnose before choosing a fix.", "Use it and name one possible cause."],
  ["Ik denk dat er een misverstand is ontstaan.", "I think a misunderstanding has arisen.", "Problem solving", "Two people have different expectations about an arrangement.", "Use it and calmly explain your understanding."],
  ["Als het niet vandaag lukt, kunnen we dan een ander moment kiezen?", "If it does not work today, can we choose another time?", "Problem solving", "A plan needs a flexible backup option.", "Offer another time for a realistic task."],
  ["Ik stel voor dat we een tijdelijke oplossing zoeken.", "I suggest that we look for a temporary solution.", "Problem solving", "The permanent fix will take longer than expected.", "Name a temporary solution for a small problem."],
  ["Fijn dat je met me meedenkt over een oplossing.", "It is nice that you are thinking along with me about a solution.", "Problem solving", "Someone is helping you work through a difficulty.", "Use it to thank someone after asking for help."],

  ["Ik wil graag beter begrijpen hoe deze gewoonte is ontstaan.", "I would like to understand better how this custom originated.", "Community", "You are curious about a local tradition or social habit.", "Ask about a custom you have noticed."],
  ["Het is interessant om te zien hoe verschillend mensen ermee omgaan.", "It is interesting to see how differently people deal with it.", "Community", "People respond in different ways to the same situation.", "Name a situation where approaches differ."],
  ["In mijn ervaring helpt het om eerst goed te luisteren.", "In my experience, it helps to listen carefully first.", "Community", "You are offering gentle advice in a new social setting.", "Use it and give one reason for listening first."],
  ["Ik ben nog niet gewend aan hoe direct mensen soms communiceren.", "I am not yet used to how directly people sometimes communicate.", "Community", "A communication style feels unfamiliar to you.", "Describe one cultural difference you are getting used to."],
  ["Het zou mooi zijn als meer mensen hierbij betrokken werden.", "It would be nice if more people were involved in this.", "Community", "A local initiative could use more participation.", "Name a group you would like to involve."],
  ["Ik vind het belangrijk om rekening te houden met de omgeving.", "I think it is important to take the surroundings into account.", "Community", "A plan could affect neighbours or a local area.", "Name one effect on the environment or community."],
  ["De bijeenkomst was goed georganiseerd en erg leerzaam.", "The meeting was well organised and very educational.", "Community", "You are giving positive feedback after an event.", "Describe an event you found useful."],
  ["Ik wil me graag aanmelden als er nog plek is.", "I would like to sign up if there is still space.", "Community", "You want to join a course, activity, or group.", "Use it for an activity you would like to join."],
  ["Volgens de informatie begint de cursus volgende maand.", "According to the information, the course starts next month.", "Community", "You are sharing a practical detail about an event.", "Replace cursus with another event or activity."],
  ["Het lijkt me een goede manier om nieuwe mensen te leren kennen.", "It seems like a good way to get to know new people.", "Community", "You are explaining why an activity appeals to you.", "Name an activity that could help you meet people."],
];

dutchPieces.push(
  ...b1Lessons.map(([phrase, translation, category, context, transfer]) => ({ phrase, translation, cue: "Listen · shadow · retrieve", category, level: "B1", context, transfer })),
  ...b2Lessons.map(([phrase, translation, category, context, transfer]) => ({ phrase, translation, cue: "Listen · shadow · retrieve", category, level: "B2", context, transfer })),
);

// Every lesson has an immutable identifier and a production-ready lesson contract.
// These initial prosody cues are editorial heuristics; human audio and timings can
// replace them without changing the learner's saved progress.
const dutchFunctionWords = new Set(["aan", "als", "bij", "dat", "de", "den", "deze", "die", "dit", "een", "en", "er", "het", "ik", "in", "is", "je", "met", "mijn", "niet", "om", "op", "te", "van", "voor", "we", "ze"]);
function lessonWords(phrase) { return phrase.replace(/[.,!?;:]/g, "").split(/\s+/).filter(Boolean); }
function lessonChunks(phrase) {
  const words = lessonWords(phrase); const groupSize = words.length > 10 ? 4 : Math.max(2, Math.ceil(words.length / 2));
  return Array.from({ length: Math.ceil(words.length / groupSize) }, (_, index) => ({ text: words.slice(index * groupSize, (index + 1) * groupSize).join(" "), startMs: index * 760, endMs: Math.min((index + 1) * 760, Math.max(900, words.length * 290)) }));
}
function lessonProsody(phrase) {
  const words = lessonWords(phrase);
  return {
    stressedTokens: words.filter((word) => word.length >= 5 && !dutchFunctionWords.has(word.toLowerCase())).slice(0, 3),
    thoughtGroups: lessonChunks(phrase).map((chunk) => chunk.text),
    linkingNotes: words.slice(0, -1).map((word, index) => `${word} → ${words[index + 1]}`).slice(0, 2),
  };
}
const IS_STATIC_EDITION = window.location.hostname.endsWith(".github.io");

function enrichPiece(piece, index) {
  const id = piece.id || `nl-${String(index + 1).padStart(3, "0")}`;
  piece.id = id;
  piece.language = "nl";
  piece.learnerLanguage = "en";
  piece.transcript = piece.phrase;
  piece.chunks = Array.isArray(piece.chunks) && piece.chunks.length ? piece.chunks : lessonChunks(piece.phrase);
  piece.prosody = piece.prosody && typeof piece.prosody === "object" ? piece.prosody : lessonProsody(piece.phrase);
  piece.targets = piece.targets && typeof piece.targets === "object" ? piece.targets : { vocabulary: lessonWords(piece.phrase).filter((word) => word.length >= 5).slice(0, 3), grammar: [piece.category], pronunciation: piece.prosody.stressedTokens };
  piece.transferPrompts = [piece.transfer];
  piece.accessibility = { transcriptAvailable: true };
  piece.audio = {
    normal: IS_STATIC_EDITION ? null : `/api/audio/${id}?variant=normal`,
    slow: IS_STATIC_EDITION ? null : `/api/audio/${id}?variant=slow`,
    speakerId: "pending-human-recording",
    durationMs: Math.max(900, lessonWords(piece.phrase).length * 290),
  };
  return piece;
}
dutchPieces.forEach(enrichPiece);

function readStoredIndexes(key) {
  try {
    const stored = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(stored) ? stored.filter((index) => Number.isInteger(index) && dutchPieces[index]) : [];
  } catch { return []; }
}

function readStoredPracticeDays() {
  try {
    const stored = JSON.parse(localStorage.getItem("echoLoopDutchPracticeDays") || "[]");
    return Array.isArray(stored) ? stored.filter((day) => typeof day === "string" && /^\d{4}-\d{2}-\d{2}$/.test(day)) : [];
  } catch { return []; }
}

function localDayKey(date = new Date()) { return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`; }
function dayOffsetKey(daysAgo) { const date = new Date(); date.setHours(0, 0, 0, 0); date.setDate(date.getDate() - daysAgo); return localDayKey(date); }

function lessonLevel(piece) { return piece.level || "A1–A2"; }

const reviewIntervals = [24 * 60 * 60 * 1000, 3 * 24 * 60 * 60 * 1000, 7 * 24 * 60 * 60 * 1000, 21 * 24 * 60 * 60 * 1000, 60 * 24 * 60 * 60 * 1000];
const missedRecallInterval = 30 * 60 * 1000;

function readStoredReviews() {
  try {
    const stored = JSON.parse(localStorage.getItem("echoLoopDutchReviews") || "{}");
    return Object.fromEntries(Object.entries(stored).filter(([index, review]) => Number.isInteger(Number(index)) && dutchPieces[Number(index)] && review && Number.isInteger(review.stage) && Number.isFinite(review.dueAt)).map(([index, review]) => {
      const outcomes = Array.isArray(review.outcomes) ? review.outcomes.filter((outcome) => outcome && ["again", "hint", "solid"].includes(outcome.rating) && Number.isFinite(outcome.at)).slice(-24) : [];
      return [index, { stage: Math.min(Math.max(review.stage, 0), reviewIntervals.length - 1), dueAt: review.dueAt, nextDueAt: review.nextDueAt || review.dueAt, lastSeenAt: Number.isFinite(review.lastSeenAt) ? review.lastSeenAt : null, availableAfterSessions: Number.isFinite(review.availableAfterSessions) ? review.availableAfterSessions : null, requiresRepair: Boolean(review.requiresRepair), confidence: ["again", "hint", "solid", "new"].includes(review.confidence) ? review.confidence : "new", retrievability: Number.isFinite(review.retrievability) ? review.retrievability : 0, reason: typeof review.reason === "string" ? review.reason : "First retrieval check-in", outcomes }];
    }));
  } catch { return {}; }
}

function readStoredTransferNotes() {
  try {
    const stored = JSON.parse(localStorage.getItem("echoLoopDutchTransferNotes") || "{}");
    return Object.fromEntries(Object.entries(stored).filter(([index, note]) => Number.isInteger(Number(index)) && dutchPieces[Number(index)] && typeof note === "string" && note.trim()).map(([index, note]) => [index, note.trim().slice(0, 280)]));
  } catch { return {}; }
}

const state = {
  currentStep: 0,
  activePiece: Number(localStorage.getItem("echoLoopDutchPiece") || 0),
  levelFilter: localStorage.getItem("echoLoopDutchLevel") || "all",
  transcriptVisible: false,
  speed: 0.9,
  completed: Number(localStorage.getItem("echoLoopDutchCompleted") || 0),
  focus: localStorage.getItem("echoLoopDutchFocus") || "thought groups",
  repeatMode: ["shadow", "delayed", "backchain"].includes(localStorage.getItem("echoLoopDutchRepeatMode")) ? localStorage.getItem("echoLoopDutchRepeatMode") : "shadow",
  practiceChallenge: ["rhythm", "memory", "length"].includes(localStorage.getItem("echoLoopDutchPracticeChallenge")) ? localStorage.getItem("echoLoopDutchPracticeChallenge") : null,
  recorder: null,
  chunks: [],
  recordingUrl: null,
  practised: new Set(readStoredIndexes("echoLoopDutchPractised")),
  sprint: null,
  b1Cursor: Number(localStorage.getItem("echoLoopDutchB1Cursor") || 0),
  b2Cursor: Number(localStorage.getItem("echoLoopDutchB2Cursor") || 0),
  reviews: readStoredReviews(),
  reviewing: false,
  recallRating: null,
  transferNotes: readStoredTransferNotes(),
  echoRunning: false,
  echoTurn: 0,
  echoTimer: null,
  practiceDays: new Set(readStoredPracticeDays()),
  listenCounts: (() => { try { const stored = JSON.parse(localStorage.getItem("echoLoopDutchListens") || "{}"); return Object.fromEntries(Object.entries(stored).filter(([index, count]) => Number.isInteger(Number(index)) && dutchPieces[Number(index)] && Number.isFinite(count))); } catch { return {}; } })(),
  cloudReady: false,
  cloudSyncTimer: null,
  cloudSyncInFlight: false,
  pendingAttempts: [],
  modelAudio: null,
  modelAudioUrl: null,
  audioSegments: [],
  audioLoopTimer: null,
  loopModel: false,
  loopSegment: null,
  assignment: null,
};

const steps = [
  { id: "hear", title: "Hear", hint: "Listen for the shape of the thought, not every word.", pill: "01 · HEAR", actionTitle: "Play it once without reading.", actionBody: "Aim for the phrase’s rise and fall. Meaning can wait for the next pass.", action: "I listened" },
  { id: "notice", title: "Notice", hint: "Make the sound stream visible only after your first attempt.", pill: "02 · NOTICE", actionTitle: "Spot the phrase’s thought groups.", actionBody: "Use the sound cue as a quick map, then listen to the whole phrase again.", action: "I noticed it" },
  { id: "repeat", title: "Repeat", hint: "Copy the rhythm, stress, and connected speech—not isolated words.", pill: "03 · REPEAT", actionTitle: "Echo the model with a short lag.", actionBody: "Stay one or two syllables behind. Match its musical shape before worrying about perfection.", action: "Start echoing", recording: true },
  { id: "retrieve", title: "Retrieve", hint: "Independent recall is the signal that will schedule the next review.", pill: "04 · RETRIEVE", actionTitle: "Say the complete phrase from memory.", actionBody: "Hide the model first. After your attempt, replay it and correct only one thing.", action: "I recalled it", recording: true },
  { id: "transfer", title: "Transfer", hint: "The phrase becomes useful when it survives a changed context.", pill: "05 · TRANSFER", actionTitle: "Use the phrase in a changed situation.", actionBody: "Keep the phrase, but make the response your own.", action: "Complete session", recording: true },
];

const nodes = {
  steps: [...document.querySelectorAll(".step")], stagePill: document.querySelector("#stagePill"), stageHint: document.querySelector("#stageHint"), actionTitle: document.querySelector("#actionTitle"), actionBody: document.querySelector("#actionBody"), stageAction: document.querySelector("#stageAction"), recallRating: document.querySelector("#recallRating"), transferComposer: document.querySelector("#transferComposer"), transferNote: document.querySelector("#transferNote"), saveTransferNote: document.querySelector("#saveTransferNote"), transferStatus: document.querySelector("#transferStatus"), echoCoach: document.querySelector("#echoCoach"), echoCue: document.querySelector("#echoCue"), echoModeTitle: document.querySelector("#echoModeTitle"), repeatModes: document.querySelector("#repeatModes"), startEcho: document.querySelector("#startEcho"), transcriptToggle: document.querySelector("#transcriptToggle"), phrase: document.querySelector("#targetPhrase"), pronunciation: document.querySelector("#pronunciation"), translation: document.querySelector("#translation"), recordingArea: document.querySelector("#recordingArea"), recordButton: document.querySelector("#recordButton"), recordedAudio: document.querySelector("#recordedAudio"), recordingLabel: document.querySelector("#recordingLabel"), recordingFeedback: document.querySelector("#recordingFeedback"), recordDot: document.querySelector(".record-dot"), progressText: document.querySelector("#progressText"), progressOrbit: document.querySelector("#progressOrbit"), sessionGoal: document.querySelector("#sessionGoal"), retrievalMeta: document.querySelector("#retrievalMeta"), focusMeta: document.querySelector("#focusMeta"), toast: document.querySelector("#toast"), installApp: document.querySelector("#installApp"), installGuide: document.querySelector("#installGuide"), closeInstallGuide: document.querySelector("#closeInstallGuide"), playModel: document.querySelector("#playModel"), playIcon: document.querySelector("#playIcon"), audioProgress: document.querySelector("#audioProgress"), speedRange: document.querySelector("#speedRange"), speedValue: document.querySelector("#speedValue"), audioSource: document.querySelector("#audioSource"), loopModel: document.querySelector("#loopModel"), loopSegment: document.querySelector("#loopSegment"), syncStatus: document.querySelector("#syncStatus"), progressStorageNote: document.querySelector("#progressStorageNote"), assignmentCard: document.querySelector("#assignmentCard"), assignmentTitle: document.querySelector("#assignmentTitle"), assignmentDescription: document.querySelector("#assignmentDescription"), assignmentMeta: document.querySelector("#assignmentMeta"), startAssignment: document.querySelector("#startAssignment"), adaptiveLead: document.querySelector("#adaptiveLead"), recommendationTitle: document.querySelector("#recommendationTitle"), recommendationBody: document.querySelector("#recommendationBody"), practiceCheck: document.querySelector("#practiceCheck"), practiceCheckSummary: document.querySelector("#practiceCheckSummary"), applyPracticePlan: document.querySelector("#applyPracticePlan"), independentRecall: document.querySelector("#independentRecall"), supportedRecall: document.querySelector("#supportedRecall"), retrievalAttempts: document.querySelector("#retrievalAttempts"), scheduleReason: document.querySelector("#scheduleReason"), phrasesPractised: document.querySelector("#phrasesPractised"), sessionsCompleted: document.querySelector("#sessionsCompleted"), reviewsReady: document.querySelector("#reviewsReady"), variationsSaved: document.querySelector("#variationsSaved"), exportProgress: document.querySelector("#exportProgress"), resetProgress: document.querySelector("#resetProgress"), profileButton: document.querySelector("#profileButton"), contentGrid: document.querySelector("#contentGrid"), contentCount: document.querySelector("#contentCount"), levelFilters: document.querySelector("#levelFilters"), lessonLevel: document.querySelector("#lessonLevel"), b1Completed: document.querySelector("#b1Completed"), b1ProgressBar: document.querySelector("#b1ProgressBar"), startB1Sprint: document.querySelector("#startB1Sprint"), b2Completed: document.querySelector("#b2Completed"), b2ProgressBar: document.querySelector("#b2ProgressBar"), startB2Sprint: document.querySelector("#startB2Sprint"), dailyHeading: document.querySelector("#daily-heading"), dailyBody: document.querySelector("#dailyBody"), startToday: document.querySelector("#startToday"), reviewList: document.querySelector("#reviewList"), reviewCount: document.querySelector("#reviewCount"), reviewSummary: document.querySelector("#reviewSummary"), streakCount: document.querySelector("#streakCount"), streakLabel: document.querySelector("#streakLabel"), streakDots: document.querySelector("#streakDots"),
};

let deferredInstallPrompt = null;
const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
function isStandaloneApp() { return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true; }
function renderInstallControl() {
  const visible = !isStandaloneApp() && (Boolean(deferredInstallPrompt) || isIosDevice);
  nodes.installApp.hidden = !visible;
  if (visible) nodes.installApp.textContent = deferredInstallPrompt ? "Install app" : "Add to Home Screen";
}
async function installApp() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt(); const choice = await deferredInstallPrompt.userChoice; deferredInstallPrompt = null; renderInstallControl();
    showToast(choice.outcome === "accepted" ? "Echo Loop is installing." : "Install is available whenever you are ready."); return;
  }
  if (isIosDevice) { nodes.installGuide.hidden = false; nodes.closeInstallGuide.focus(); }
}

function currentPiece() { return dutchPieces[state.activePiece] || dutchPieces[0]; }
function setSyncStatus(message, tone = "") { nodes.syncStatus.textContent = message; nodes.syncStatus.classList.toggle("synced", tone === "synced"); nodes.syncStatus.classList.toggle("offline", tone === "offline"); nodes.progressStorageNote.textContent = tone === "synced" ? "Progress securely synced to your account." : tone === "offline" ? "Using this device’s copy; secure sync will retry." : tone === "local" ? "GitHub Pages edition · progress stays in this browser." : "Saving progress to your signed-in account…"; }
function newClientId() { return window.crypto?.randomUUID?.() || `attempt-${Date.now()}-${Math.random().toString(16).slice(2)}`; }
function queueAttempt(stage, supportMode, recallRating = null, audioStatus = "none") {
  state.pendingAttempts.push({ clientId: newClientId(), phraseId: currentPiece().id, stage, supportMode, recallRating, audioStatus, createdAt: Date.now() });
  queueCloudSync();
}
function progressSnapshot() {
  return dutchPieces.map((piece, index) => {
    const review = state.reviews[index]; const transferNote = state.transferNotes[index];
    if (!review && !state.practised.has(index) && !transferNote) return null;
    return { phraseId: piece.id, phraseLevel: lessonLevel(piece), stage: review?.stage || 0, dueAt: review?.dueAt || Date.now(), availableAfterSessions: review?.availableAfterSessions ?? null, lastSeenAt: review?.lastSeenAt ?? null, retrievability: review?.retrievability || 0, confidence: review?.confidence || "new", outcomeHistory: review?.outcomes || [], attentionSignal: state.focus, practised: state.practised.has(index), transferNote: transferNote || null };
  }).filter(Boolean);
}
function queueCloudSync() {
  if (IS_STATIC_EDITION) { setSyncStatus("Local-first edition", "local"); return; }
  if (state.cloudSyncTimer) window.clearTimeout(state.cloudSyncTimer);
  state.cloudSyncTimer = window.setTimeout(flushCloudSync, 500);
}
async function flushCloudSync() {
  if (state.cloudSyncInFlight || !navigator.onLine) { if (!navigator.onLine) setSyncStatus("Offline · changes stay on this device", "offline"); return; }
  const progress = progressSnapshot(); const attempts = state.pendingAttempts.slice(0, 100);
  if (!progress.length && !attempts.length) return;
  state.cloudSyncInFlight = true; setSyncStatus("Saving your learning state…");
  try {
    const response = await fetch("/api/learning-state", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ progress, attempts }) });
    if (!response.ok) throw new Error("sync failed");
    const sentIds = new Set(attempts.map((attempt) => attempt.clientId)); state.pendingAttempts = state.pendingAttempts.filter((attempt) => !sentIds.has(attempt.clientId)); state.cloudReady = true; setSyncStatus("Securely synced", "synced");
  } catch { setSyncStatus("Local copy · sync will retry", "offline"); }
  finally { state.cloudSyncInFlight = false; }
}
function applyContentItem(raw) {
  if (!raw || typeof raw.id !== "string" || typeof raw.transcript !== "string") return;
  const existingIndex = dutchPieces.findIndex((piece) => piece.id === raw.id);
  const mapped = {
    id: raw.id, phrase: raw.transcript, translation: typeof raw.translation === "string" ? raw.translation : "", category: typeof raw.category === "string" ? raw.category : "General", level: typeof raw.level === "string" ? raw.level : "B1", context: typeof raw.context === "string" ? raw.context : "", transfer: typeof raw.transfer === "string" ? raw.transfer : "", cue: typeof raw.cue === "string" ? raw.cue : "Listen · shadow · retrieve", language: raw.language || "nl", learnerLanguage: raw.learnerLanguage || "en", chunks: Array.isArray(raw.chunks) ? raw.chunks : undefined, prosody: raw.prosody && typeof raw.prosody === "object" ? raw.prosody : undefined, targets: raw.targets && typeof raw.targets === "object" ? raw.targets : undefined,
  };
  if (existingIndex >= 0) {
    const existing = dutchPieces[existingIndex]; Object.assign(existing, mapped);
    if (mapped.chunks) existing.chunks = mapped.chunks; if (mapped.prosody) existing.prosody = mapped.prosody; if (mapped.targets) existing.targets = mapped.targets;
    enrichPiece(existing, existingIndex);
  } else dutchPieces.push(enrichPiece(mapped, dutchPieces.length));
}
async function hydrateContentOverrides() {
  if (IS_STATIC_EDITION) return;
  try {
    const response = await fetch("/api/phrase-items?language=nl"); if (!response.ok) return;
    const data = await response.json(); (data.items || []).forEach(applyContentItem);
    renderPiece(); renderStage(); renderContentGrid(); renderB1Progress(); renderB2Progress(); renderReview(); renderLearningDashboard();
  } catch { /* Built-in catalogue remains available when the editor catalogue is unavailable. */ }
}
function renderAssignment() {
  const assignment = state.assignment; nodes.assignmentCard.hidden = !assignment;
  if (!assignment) return;
  nodes.assignmentTitle.textContent = assignment.title; nodes.assignmentDescription.textContent = assignment.description || "A focused set chosen by your teacher.";
  const due = assignment.dueAt ? `Due ${new Date(assignment.dueAt).toLocaleDateString()}` : "No due date"; nodes.assignmentMeta.textContent = `${assignment.phraseIds.length} phrase${assignment.phraseIds.length === 1 ? "" : "s"} · ${due}`;
}
async function hydrateAssignments() {
  if (IS_STATIC_EDITION) return;
  try { const response = await fetch("/api/my-assignments"); if (!response.ok) return; const data = await response.json(); state.assignment = (data.assignments || [])[0] || null; renderAssignment(); } catch { /* Assignments are additive; practice remains usable if they are unavailable. */ }
}
function startAssignedPractice() {
  const assignment = state.assignment; const queue = assignment?.phraseIds.map((id) => dutchPieces.findIndex((piece) => piece.id === id)).filter((index) => index >= 0) || [];
  if (!queue.length) { showToast("This assignment has no available lesson items yet."); return; }
  state.sprint = { queue, position: 0, level: "Assignment" }; selectPiece(queue[0], `${assignment.title} · lesson 1 of ${queue.length}.`, { keepSprint: true });
}
async function hydrateCloudState() {
  if (IS_STATIC_EDITION) { setSyncStatus("Local-first edition", "local"); return; }
  try {
    const response = await fetch("/api/learning-state");
    if (!response.ok) throw new Error("state unavailable");
    const data = await response.json();
    (data.progress || []).forEach((saved) => {
      const index = dutchPieces.findIndex((piece) => piece.id === saved.phraseId); if (index < 0) return;
      const outcomes = Array.isArray(saved.outcomeHistory) ? saved.outcomeHistory : [];
      if (saved.practised || outcomes.length) state.reviews[index] = { stage: Math.min(Math.max(Number(saved.stage) || 0, 0), reviewIntervals.length - 1), dueAt: Number(saved.dueAt) || Date.now(), nextDueAt: Number(saved.dueAt) || Date.now(), availableAfterSessions: Number.isFinite(saved.availableAfterSessions) ? Number(saved.availableAfterSessions) : null, lastSeenAt: Number.isFinite(saved.lastSeenAt) ? Number(saved.lastSeenAt) : null, requiresRepair: saved.confidence === "again", confidence: ["again", "hint", "solid", "new"].includes(saved.confidence) ? saved.confidence : "new", retrievability: Number(saved.retrievability) || 0, reason: "Synced from your latest retrieval outcome.", outcomes };
      if (saved.practised) state.practised.add(index); if (saved.transferNote) state.transferNotes[index] = String(saved.transferNote).slice(0, 280);
    });
    state.completed = Number(data.sessionCount) || state.completed; state.cloudReady = true;
    if (data.profile?.displayName) nodes.profileButton.textContent = data.profile.displayName.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
    saveReviews(); localStorage.setItem("echoLoopDutchPractised", JSON.stringify([...state.practised])); localStorage.setItem("echoLoopDutchTransferNotes", JSON.stringify(state.transferNotes)); localStorage.setItem("echoLoopDutchCompleted", String(state.completed));
    setSyncStatus("Securely synced", "synced"); renderPiece(); renderStage(); renderContentGrid(); renderB1Progress(); renderB2Progress(); renderReview(); renderLearningDashboard();
  } catch { setSyncStatus("Local copy · sync unavailable", "offline"); }
}
function showToast(message) { nodes.toast.textContent = message; nodes.toast.classList.add("visible"); window.clearTimeout(showToast.timeout); showToast.timeout = window.setTimeout(() => nodes.toast.classList.remove("visible"), 2600); }
function b1Indexes() { return dutchPieces.map((piece, index) => ({ piece, index })).filter(({ piece }) => lessonLevel(piece) === "B1").map(({ index }) => index); }
function renderB1Progress() { const indexes = b1Indexes(); const complete = indexes.filter((index) => state.practised.has(index)).length; nodes.b1Completed.textContent = String(complete); nodes.b1ProgressBar.style.width = `${Math.round((complete / indexes.length) * 100)}%`; }
function b2Indexes() { return dutchPieces.map((piece, index) => ({ piece, index })).filter(({ piece }) => lessonLevel(piece) === "B2").map(({ index }) => index); }
function renderB2Progress() { const indexes = b2Indexes(); const complete = indexes.filter((index) => state.practised.has(index)).length; nodes.b2Completed.textContent = String(complete); nodes.b2ProgressBar.style.width = `${Math.round((complete / indexes.length) * 100)}%`; }
function practiceStreak() { let count = 0; while (state.practiceDays.has(dayOffsetKey(count))) count += 1; return count; }
function renderStreak() { const count = practiceStreak(); nodes.streakCount.textContent = String(count); nodes.streakLabel.textContent = "day streak"; nodes.streakDots.innerHTML = Array.from({ length: 7 }, (_, index) => { const daysAgo = 6 - index; return `<i class="${state.practiceDays.has(dayOffsetKey(daysAgo)) ? "" : "muted"}"></i>`; }).join(""); }
function recordPracticeDay() { state.practiceDays.add(localDayKey()); localStorage.setItem("echoLoopDutchPracticeDays", JSON.stringify([...state.practiceDays].sort())); renderStreak(); }
function focusTip() { return { "thought groups": "Keep the phrase in natural thought groups; do not pause word by word.", stress: "Let the key content word carry the energy before you try to sound faster.", linking: "Listen for the joins between words and keep air moving across them." }[state.focus] || "Choose one sound feature to keep in your next attempt."; }
function renderFocus() { document.querySelectorAll(".focus-chip").forEach((chip) => { const selected = chip.dataset.focus === state.focus; chip.classList.toggle("selected", selected); chip.setAttribute("aria-pressed", String(selected)); }); nodes.focusMeta.textContent = `${state.focus.replace(/^./, (letter) => letter.toUpperCase())} focus`; }
function retrievalOutcomes() { return Object.values(state.reviews).flatMap((review) => review.outcomes || []); }
function percent(numerator, denominator) { return denominator ? `${Math.round((numerator / denominator) * 100)}%` : "—"; }
function reviewReason(review) { if (!review) return "Complete this phrase once to create its first delayed retrieval check-in."; return review.reason || "This review is scheduled from your latest retrieval result."; }
const practiceProfiles = {
  rhythm: { mode: "shadow", focus: "thought groups", title: "Shadow for rhythm", body: "Stay one or two syllables behind the model and preserve its thought groups before chasing individual words.", button: "Use shadow + thought groups", signal: "Rhythm is your target, so the plan keeps model timing in the foreground." },
  memory: { mode: "delayed", focus: "stress", title: "Delay, then rebuild", body: "Hear the whole phrase, wait, and reconstruct it. Keep the stressed content word as your memory anchor.", button: "Use delayed echo + stress", signal: "Memory is your target, so the plan adds a short recall gap before you speak." },
  length: { mode: "backchain", focus: "linking", title: "Backchain the long phrase", body: "Build from the final thought group, then attach the earlier material while keeping the joins between words alive.", button: "Use backchain + linking", signal: "Length is your target, so the plan stabilizes the final phrase shape before adding more." },
};
function recommendedPracticeProfile() {
  if (state.practiceChallenge && practiceProfiles[state.practiceChallenge]) return { ...practiceProfiles[state.practiceChallenge], source: "Chosen from your practice check." };
  const outcomes = retrievalOutcomes().slice(-8); const effortful = outcomes.filter((outcome) => outcome.rating === "again" || outcome.rating === "hint").length;
  if (outcomes.length >= 3 && effortful / outcomes.length >= .6) return { ...practiceProfiles.memory, source: "Recent retrieval signals show that recall needs more space than imitation." };
  if ((state.listenCounts[state.activePiece] || 0) >= 4 && outcomes.length === 0) return { ...practiceProfiles.length, source: "Several replays on this phrase suggest building its shape in smaller pieces." };
  return { ...practiceProfiles.rhythm, source: "Start with rhythm; update the check whenever a different challenge is clearer." };
}
function renderPracticeCheck() {
  const profile = recommendedPracticeProfile();
  document.querySelectorAll("[data-practice-challenge]").forEach((button) => { const selected = button.dataset.practiceChallenge === state.practiceChallenge; button.classList.toggle("selected", selected); button.setAttribute("aria-pressed", String(selected)); });
  nodes.practiceCheckSummary.textContent = `${profile.source} ${profile.signal} This choice stays on this device and never analyzes your recording.`;
  nodes.applyPracticePlan.textContent = profile.button;
}
function choosePracticeChallenge(challenge) {
  if (!practiceProfiles[challenge]) return;
  state.practiceChallenge = challenge; localStorage.setItem("echoLoopDutchPracticeChallenge", challenge); renderPracticeCheck(); showToast("Practice signal saved. Apply the plan when you are ready to repeat.");
}
function applyPracticePlan() {
  const profile = recommendedPracticeProfile(); state.repeatMode = profile.mode; state.focus = profile.focus;
  localStorage.setItem("echoLoopDutchRepeatMode", state.repeatMode); localStorage.setItem("echoLoopDutchFocus", state.focus);
  renderFocus(); renderPracticeCheck(); renderStage(); showToast(`${profile.title} is ready for your next repetition.`);
}
function renderLearningDashboard() {
  const outcomes = retrievalOutcomes(); const independent = outcomes.filter((outcome) => outcome.rating === "solid").length; const supported = outcomes.filter((outcome) => outcome.rating === "hint").length; const due = dueReviews().length; const completion = Math.round((state.practised.size / dutchPieces.length) * 100); const activeReview = state.reviews[state.activePiece];
  nodes.progressText.textContent = `${completion}%`; nodes.progressOrbit.style.background = `conic-gradient(var(--gold) 0 ${completion}%, rgba(255,255,255,.14) ${completion}% 100%)`;
  nodes.progressOrbit.setAttribute("aria-label", `${completion} percent of Dutch lessons practised`);
  nodes.independentRecall.textContent = percent(independent, outcomes.length); nodes.supportedRecall.textContent = percent(supported, outcomes.length); nodes.retrievalAttempts.textContent = String(outcomes.length); nodes.scheduleReason.textContent = reviewReason(activeReview);
  nodes.phrasesPractised.textContent = String(state.practised.size); nodes.sessionsCompleted.textContent = String(state.completed); nodes.reviewsReady.textContent = String(due); nodes.variationsSaved.textContent = String(Object.keys(state.transferNotes).length);
  nodes.sessionGoal.textContent = due ? "10 min review" : "12 min session"; nodes.retrievalMeta.textContent = due ? `${due} due for recall` : "First retrieval in 1 day"; renderFocus(); renderPracticeCheck();
}
function recordListening() { const index = String(state.activePiece); state.listenCounts[index] = (state.listenCounts[index] || 0) + 1; localStorage.setItem("echoLoopDutchListens", JSON.stringify(state.listenCounts)); }
function stopModelPlayback() {
  if (state.audioLoopTimer) { window.clearTimeout(state.audioLoopTimer); state.audioLoopTimer = null; }
  if (state.modelAudio) { state.modelAudio.pause(); state.modelAudio.currentTime = 0; state.modelAudio = null; }
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  nodes.playIcon.textContent = "▶"; nodes.audioProgress.style.width = "0";
}
async function loadAudioPlan() {
  if (IS_STATIC_EDITION) { state.modelAudioUrl = null; state.audioSegments = []; state.loopSegment = null; nodes.loopSegment.hidden = true; nodes.loopSegment.setAttribute("aria-pressed", "false"); nodes.audioSource.textContent = "Browser voice · static edition"; return; }
  const piece = currentPiece(); const route = state.speed <= .8 ? piece.audio.slow : piece.audio.normal;
  state.modelAudioUrl = null; state.audioSegments = []; state.loopSegment = null; nodes.loopSegment.hidden = true; nodes.loopSegment.setAttribute("aria-pressed", "false"); nodes.audioSource.textContent = "Checking the lesson audio…";
  try {
    const response = await fetch(`${route}&metadata=1`); if (piece.id !== currentPiece().id) return;
    const metadata = await response.json().catch(() => ({}));
    if (response.ok && metadata.source === "human-recording") { state.modelAudioUrl = metadata.audioUrl || route; state.audioSegments = Array.isArray(metadata.segments) ? metadata.segments : []; nodes.audioSource.textContent = `Human recording · ${metadata.speakerId || "studio speaker"}${state.audioSegments.length ? ` · ${state.audioSegments.length} timed chunk${state.audioSegments.length === 1 ? "" : "s"}` : ""}`; nodes.loopSegment.hidden = !state.audioSegments.length; return; }
    nodes.audioSource.textContent = metadata.label || "Browser voice fallback";
  } catch { nodes.audioSource.textContent = "Browser voice fallback · audio service unavailable"; }
}
function renderPiece() { const piece = currentPiece(); stopModelPlayback(); nodes.phrase.textContent = piece.phrase; nodes.translation.textContent = piece.translation; nodes.pronunciation.textContent = piece.cue; nodes.phrase.lang = "nl"; nodes.lessonLevel.textContent = lessonLevel(piece); loadAudioPlan(); }
function setTranscript(visible) { state.transcriptVisible = visible; [nodes.phrase, nodes.pronunciation, nodes.translation].forEach((node) => { node.hidden = !visible; }); nodes.transcriptToggle.textContent = visible ? "Hide transcript" : "Reveal transcript"; nodes.transcriptToggle.setAttribute("aria-expanded", String(visible)); }
function renderTransferComposer() { const isTransfer = steps[state.currentStep].id === "transfer"; nodes.transferComposer.hidden = !isTransfer; if (!isTransfer) return; const note = state.transferNotes[state.activePiece] || ""; nodes.transferNote.value = note; nodes.saveTransferNote.textContent = note ? "Update variation" : "Save variation"; nodes.transferStatus.textContent = note ? (state.cloudReady ? "Synced to your private learner account." : "Saved locally; it will sync when available.") : "Optional; saved to your private learner account when sync is available."; }
const repeatModeMeta = {
  shadow: { title: "Shadow with a small lag.", intro: "Follow the model one or two syllables behind; prioritise rhythm over perfect words.", runLabel: "Run 3 shadows" },
  delayed: { title: "Delay, then rebuild it.", intro: "Hear the whole phrase, wait for the pause, then reproduce it from your short-term memory.", runLabel: "Run delayed echoes" },
  backchain: { title: "Build the phrase backwards.", intro: "Start with the final thought group, then add what comes before it until the whole phrase holds together.", runLabel: "Build it backwards" },
};
function currentRepeatMode() { return repeatModeMeta[state.repeatMode] || repeatModeMeta.shadow; }
function backchainSequence() {
  const chunks = (currentPiece().chunks || []).map((chunk) => typeof chunk === "string" ? chunk : chunk?.text).filter(Boolean);
  const tail = chunks[chunks.length - 1] || currentPiece().phrase;
  const finalTwo = chunks.slice(-2).join(" ") || tail;
  return [...new Set([tail, finalTwo, currentPiece().phrase])];
}
function stopGuidedEcho() { if (state.echoTimer) { window.clearTimeout(state.echoTimer); state.echoTimer = null; } if (state.echoRunning && "speechSynthesis" in window) window.speechSynthesis.cancel(); state.echoRunning = false; state.echoTurn = 0; }
function renderEchoCoach() {
  const isRepeat = steps[state.currentStep].id === "repeat"; nodes.echoCoach.hidden = !isRepeat;
  if (!isRepeat) { stopGuidedEcho(); return; }
  const mode = currentRepeatMode();
  nodes.repeatModes.querySelectorAll("[data-repeat-mode]").forEach((button) => { const selected = button.dataset.repeatMode === state.repeatMode; button.classList.toggle("selected", selected); button.setAttribute("aria-pressed", String(selected)); button.disabled = state.echoRunning; });
  nodes.echoModeTitle.textContent = mode.title;
  if (!state.echoRunning) { nodes.echoCue.textContent = mode.intro; nodes.startEcho.disabled = false; nodes.startEcho.innerHTML = `${mode.runLabel} <span>↗</span>`; }
}
function selectRepeatMode(mode) { if (!repeatModeMeta[mode] || state.echoRunning) return; state.repeatMode = mode; localStorage.setItem("echoLoopDutchRepeatMode", mode); renderEchoCoach(); showToast(`${repeatModeMeta[mode].title} selected.`); }

function renderStage() {
  const current = steps[state.currentStep]; const piece = currentPiece();
  nodes.steps.forEach((button, index) => { button.classList.toggle("active", index === state.currentStep); button.setAttribute("aria-selected", String(index === state.currentStep)); });
  nodes.stagePill.textContent = current.pill; nodes.stageHint.textContent = current.hint; nodes.actionTitle.textContent = current.actionTitle; nodes.actionBody.textContent = current.actionBody; nodes.stageAction.innerHTML = `${current.action} <span>→</span>`; nodes.stageAction.hidden = current.id === "retrieve"; nodes.recallRating.hidden = current.id !== "retrieve"; nodes.recordingArea.hidden = !current.recording;
  if (current.id === "hear") { setTranscript(false); nodes.actionTitle.textContent = "Play it once without reading."; nodes.actionBody.textContent = "Listen for the shape of the thought. You can reveal the transcript whenever you need it."; nodes.adaptiveLead.textContent = "Start with sound before text: this keeps listening separate from reading."; nodes.recommendationTitle.textContent = "Listen once, then notice"; nodes.recommendationBody.textContent = "The transcript stays available on request, but a first text-free pass preserves the listening task."; }
  else if (current.id === "notice") { setTranscript(true); nodes.actionBody.textContent = focusTip(); nodes.adaptiveLead.textContent = `Your current attention is ${state.focus}. Make it visible, then hear the whole phrase again.`; nodes.recommendationTitle.textContent = `Notice ${state.focus}`; nodes.recommendationBody.textContent = focusTip(); }
  else if (current.id === "repeat") { const profile = recommendedPracticeProfile(); setTranscript(true); nodes.actionBody.textContent = focusTip(); nodes.adaptiveLead.textContent = `${profile.source} ${profile.signal}`; nodes.recommendationTitle.textContent = profile.title; nodes.recommendationBody.textContent = profile.body; }
  else if (current.id === "retrieve") { const review = state.reviews[state.activePiece]; setTranscript(false); nodes.actionTitle.textContent = state.reviewing ? `Retrieve “${piece.phrase}” before you reveal it.` : `Say “${piece.phrase}” from memory.`; nodes.actionBody.textContent = review?.requiresRepair ? "Repair mode: replay the model only after one genuine attempt, then correct one sound feature." : state.reviewing ? "Your rating will decide the next interval and explain the schedule." : current.actionBody; nodes.adaptiveLead.textContent = review?.confidence === "hint" ? "You used support last time. This phrase returns after two other completed phrases so recall—not repetition—does the work." : "This is the highest-value attempt: can you reconstruct the Dutch phrase without a model?"; nodes.recommendationTitle.textContent = review?.requiresRepair ? "Repair, then retrieve" : "Attempt recall, then compare"; nodes.recommendationBody.textContent = review?.requiresRepair ? "Use Notice and a short guided echo if needed, then try another unsupported retrieval." : "Let the effort happen first. Feedback is more useful after an honest attempt."; }
  else { setTranscript(true); nodes.actionTitle.textContent = "Use it in this situation."; nodes.actionBody.textContent = piece.transfer; nodes.adaptiveLead.textContent = "The phrase is ready for a changed situation. That is what makes it usable."; nodes.recommendationTitle.textContent = "Change one detail"; nodes.recommendationBody.textContent = piece.transfer; }
  renderTransferComposer();
  renderEchoCoach();
  renderLearningDashboard();
}

function renderContentGrid() {
  nodes.contentCount.textContent = String(dutchPieces.length);
  nodes.levelFilters.querySelectorAll("[data-level]").forEach((button) => { const selected = button.dataset.level === state.levelFilter; button.classList.toggle("selected", selected); button.setAttribute("aria-pressed", String(selected)); });
  nodes.contentGrid.innerHTML = dutchPieces.map((piece, index) => ({ piece, index })).filter(({ piece }) => state.levelFilter === "all" || lessonLevel(piece) === state.levelFilter).map(({ piece, index }) => `<button class="content-piece ${index === state.activePiece ? "selected" : ""}" type="button" data-piece="${index}" aria-pressed="${index === state.activePiece}"><span class="piece-number">${String(index + 1).padStart(2, "0")} · ${lessonLevel(piece)} · ${piece.category.toUpperCase()}</span><strong lang="nl">${piece.phrase}</strong><small>${piece.translation}</small>${state.practised.has(index) ? '<span class="completion-mark">✓ PRACTISED</span>' : ''}${state.transferNotes[index] ? '<span class="variation-mark">↗ YOUR VARIATION</span>' : ''}</button>`).join("");
  nodes.contentGrid.querySelectorAll("[data-piece]").forEach((button) => button.addEventListener("click", () => selectPiece(Number(button.dataset.piece))));
}

function orderedReviews() { return Object.entries(state.reviews).map(([index, review]) => ({ index: Number(index), review })).filter(({ index }) => dutchPieces[index]).sort((a, b) => a.review.dueAt - b.review.dueAt); }
function reviewDueLabel(dueAt) { const delta = dueAt - Date.now(); if (delta <= 0) return "Due now"; const minutes = Math.ceil(delta / 60000); if (minutes < 60) return `In ${minutes} min`; const hours = Math.ceil(minutes / 60); if (hours < 48) return `In ${hours} hr`; return `In ${Math.ceil(hours / 24)} days`; }
function saveReviews() { localStorage.setItem("echoLoopDutchReviews", JSON.stringify(state.reviews)); }
function scheduleReview(index, rating, wasReview = false) {
  const current = state.reviews[index]; if (current && !wasReview) return current;
  const now = Date.now(); let stage = current?.stage || 0; let delay = reviewIntervals[stage]; let reason = "First retrieval check-in: return tomorrow and attempt the phrase before replaying it."; let availableAfterSessions = null; let requiresRepair = false;
  if (current && wasReview) {
    if (rating === "solid") { stage = Math.min(current.stage + 1, reviewIntervals.length - 1); delay = reviewIntervals[stage]; reason = `Independent recall: the next attempt is spaced ${reviewDueLabel(now + delay).toLowerCase()}.`; }
    else if (rating === "hint") { stage = Math.max(current.stage - 1, 0); delay = reviewIntervals[0]; availableAfterSessions = state.completed + 2; reason = "Supported recall: return tomorrow after two other completed phrases, so this does not become immediate repetition."; }
    else { stage = 0; delay = missedRecallInterval; requiresRepair = true; reason = "Missed recall: revisit Notice and Repeat, then try again later today."; }
  }
  const priorOutcomes = current?.outcomes || []; const next = { stage, dueAt: now + delay, nextDueAt: now + delay, availableAfterSessions, requiresRepair, lastSeenAt: now, confidence: rating, retrievability: rating === "solid" ? 1 : rating === "hint" ? .55 : .2, reason, outcomes: [...priorOutcomes, { rating, at: now, independent: rating === "solid" }].slice(-24) };
  state.reviews[index] = next; saveReviews(); return next;
}
function dueReviews() { return orderedReviews().filter(({ review }) => review.dueAt <= Date.now() && (review.availableAfterSessions === null || review.availableAfterSessions === undefined || state.completed >= review.availableAfterSessions)); }
function renderToday() { const due = dueReviews(); if (due.length) { nodes.dailyHeading.innerHTML = `Review what is <em>due.</em>`; nodes.dailyBody.textContent = `${due.length} phrase${due.length === 1 ? " is" : "s are"} ready for an effortful recall attempt before you add something new.`; nodes.startToday.innerHTML = `Start due review <span>→</span>`; return; } nodes.dailyHeading.innerHTML = `One useful phrase,<br /><em>five escalating moves.</em>`; nodes.dailyBody.textContent = "No phrase is due right now. Build B1 confidence with a short, context-rich conversation sprint."; nodes.startToday.innerHTML = `Start B1 sprint <span>→</span>`; }
function startToday() { const next = dueReviews()[0]; if (next) { startReview(next.index); return; } startB1Sprint(); }

function renderReview() {
  const reviews = orderedReviews(); const dueNow = reviews.filter(({ review }) => review.dueAt <= Date.now()).length;
  nodes.reviewCount.textContent = String(dueNow || reviews.length); nodes.reviewSummary.textContent = !reviews.length ? "Complete a lesson to add its first retrieval check-in." : dueNow ? `${dueNow} phrase${dueNow === 1 ? "" : "s"} ready for effortful recall.` : "Your next phrase is scheduled; return when it is due.";
  renderToday();
  if (!reviews.length) { nodes.reviewList.innerHTML = '<li class="empty-review">No phrases are scheduled yet. A full Hear → Notice → Repeat → Retrieve → Transfer session creates the first check-in.</li>'; return; }
  nodes.reviewList.innerHTML = reviews.slice(0, 3).map(({ index, review }) => { const piece = dutchPieces[index]; const due = reviewDueLabel(review.dueAt); const signal = review.confidence === "solid" ? "independent recall" : review.confidence === "hint" ? "supported recall" : review.confidence === "again" ? "repair needed" : "first check-in"; return `<li><span class="due-dot ${review.dueAt <= Date.now() ? "due-now" : ""}"></span><div><strong lang="nl">${piece.phrase}</strong><small>${due} · ${signal}</small></div><button class="mini-play" type="button" data-review="${index}" aria-label="Start retrieval practice for ${piece.phrase}">↗</button></li>`; }).join("");
  nodes.reviewList.querySelectorAll("[data-review]").forEach((button) => button.addEventListener("click", () => startReview(Number(button.dataset.review))));
}

function selectPiece(index, message = `${dutchPieces[index].category} phrase selected.`, options = {}) { const { keepSprint = false, step = 0, review = false } = options; if (!keepSprint) state.sprint = null; state.reviewing = review; state.recallRating = null; state.activePiece = index; state.currentStep = step; localStorage.setItem("echoLoopDutchPiece", String(index)); renderPiece(); setTranscript(step !== 0); renderStage(); renderContentGrid(); showToast(message); document.querySelector("#practice").scrollIntoView({ behavior: "smooth", block: "start" }); }

function startReview(index) { const repair = state.reviews[index]?.requiresRepair; selectPiece(index, repair ? "Repair review · Notice and echo first, then retrieve." : "Retrieval review · recall it before you reveal the model.", { step: repair ? 1 : 3, review: true }); }
function chooseRecallRating(rating) { state.recallRating = rating; queueAttempt("retrieve", rating === "solid" ? "independent" : "supported", rating); state.currentStep = 4; renderStage(); showToast(rating === "solid" ? "Strong recall. Use it once in a changed situation." : rating === "hint" ? "Useful signal. Transfer it once, then it will return after other phrases." : "Good catch. Use the model again in a changed situation."); }
function saveTransferNote() { const note = nodes.transferNote.value.trim(); if (!note) { nodes.transferStatus.textContent = "Write a short Dutch variation first."; nodes.transferNote.focus(); return; } state.transferNotes[state.activePiece] = note.slice(0, 280); localStorage.setItem("echoLoopDutchTransferNotes", JSON.stringify(state.transferNotes)); queueCloudSync(); nodes.transferStatus.textContent = state.cloudReady ? "Saving to your private learner account…" : "Saved locally; sync will retry when available."; nodes.saveTransferNote.textContent = "Update variation"; renderContentGrid(); showToast("Your Dutch variation was saved."); }

function startB1Sprint() {
  const indexes = b1Indexes(); const unfinished = indexes.filter((index) => !state.practised.has(index)); const pool = unfinished.length ? unfinished : indexes;
  const start = Math.abs(state.b1Cursor) % pool.length; const queue = Array.from({ length: Math.min(3, pool.length) }, (_, offset) => pool[(start + offset) % pool.length]);
  state.b1Cursor = (start + queue.length) % pool.length; localStorage.setItem("echoLoopDutchB1Cursor", String(state.b1Cursor)); state.sprint = { queue, position: 0, level: "B1" };
  state.levelFilter = "B1"; localStorage.setItem("echoLoopDutchLevel", state.levelFilter); selectPiece(queue[0], `B1 sprint · lesson 1 of ${queue.length}.`, { keepSprint: true });
}

function startB2Sprint() {
  const indexes = b2Indexes(); const unfinished = indexes.filter((index) => !state.practised.has(index)); const pool = unfinished.length ? unfinished : indexes;
  const start = Math.abs(state.b2Cursor) % pool.length; const queue = Array.from({ length: Math.min(3, pool.length) }, (_, offset) => pool[(start + offset) % pool.length]);
  state.b2Cursor = (start + queue.length) % pool.length; localStorage.setItem("echoLoopDutchB2Cursor", String(state.b2Cursor)); state.sprint = { queue, position: 0, level: "B2" };
  state.levelFilter = "B2"; localStorage.setItem("echoLoopDutchLevel", state.levelFilter); selectPiece(queue[0], `B2 sprint · lesson 1 of ${queue.length}.`, { keepSprint: true });
}

function startGuidedEcho() {
  if (!("speechSynthesis" in window)) { showToast("Guided repetition needs browser audio support."); return; }
  stopGuidedEcho(); const sequence = state.repeatMode === "backchain" ? backchainSequence() : Array(3).fill(currentPiece().phrase); state.echoRunning = true; nodes.startEcho.disabled = true; renderEchoCoach();
  const finish = () => { state.echoRunning = false; state.echoTurn = 0; state.echoTimer = null; renderEchoCoach(); nodes.echoCue.textContent = state.repeatMode === "backchain" ? "Backchain complete. Say the whole phrase once more without the model." : "Three passes complete. Keep the final rhythm in your ear, then continue."; };
  const runPass = () => {
    if (!state.echoRunning || steps[state.currentStep].id !== "repeat") return;
    const pass = state.echoTurn; const utterance = new SpeechSynthesisUtterance(sequence[pass]); utterance.lang = "nl-NL"; utterance.rate = state.speed; utterance.pitch = 1;
    utterance.onstart = () => { if (state.repeatMode === "shadow") nodes.echoCue.textContent = `Shadow ${pass + 1} of ${sequence.length} · begin one or two syllables behind the model.`; else if (state.repeatMode === "backchain") nodes.echoCue.textContent = `Build ${pass + 1} of ${sequence.length} · listen to this tail, then say it after the model.`; else nodes.echoCue.textContent = `Echo ${pass + 1} of ${sequence.length} · listen first; your pause comes next.`; };
    utterance.onend = () => {
      if (!state.echoRunning) return;
      state.echoTurn = pass + 1; const last = state.echoTurn >= sequence.length;
      if (state.repeatMode === "shadow") nodes.echoCue.textContent = last ? "Finish the final words, then keep the rhythm in your ear." : "Stay close to the model; the next shadow starts shortly.";
      else if (state.repeatMode === "backchain") nodes.echoCue.textContent = last ? "Say the full phrase once from memory." : "Your turn: repeat that tail. The next build adds more of the phrase.";
      else nodes.echoCue.textContent = last ? "Your turn: say it once more after the pause." : "Your turn: say it aloud. The next model starts after a short pause.";
      const pause = state.repeatMode === "delayed" ? 2300 : state.repeatMode === "backchain" ? 1800 : 700;
      state.echoTimer = window.setTimeout(last ? finish : runPass, pause);
    };
    utterance.onerror = () => { if (state.echoRunning) finish(); };
    window.speechSynthesis.speak(utterance);
  };
  runPass();
}

function finishModelPlayback() { nodes.playIcon.textContent = "▶"; window.setTimeout(() => { nodes.audioProgress.style.width = "0"; }, 230); if (state.loopModel) state.audioLoopTimer = window.setTimeout(() => playSpeech(), 420); }
function playSpeech(text = currentPiece().phrase) {
  recordListening(); stopGuidedEcho(); stopModelPlayback();
  if (state.modelAudioUrl && text === currentPiece().phrase) {
    const audio = new Audio(state.modelAudioUrl); const segment = state.loopSegment === null ? null : state.audioSegments[state.loopSegment]; state.modelAudio = audio; audio.playbackRate = state.speed; audio.addEventListener("play", () => { nodes.playIcon.textContent = "■"; nodes.audioProgress.style.width = "100%"; }, { once: true }); audio.addEventListener("ended", finishModelPlayback, { once: true }); audio.addEventListener("error", () => { nodes.audioSource.textContent = "Browser voice fallback · recording unavailable"; state.modelAudioUrl = null; playSpeech(text); }, { once: true });
    if (segment) { let segmentComplete = false; const startSegment = () => { audio.currentTime = segment.startMs / 1000; audio.play().catch(() => { nodes.audioSource.textContent = "Browser voice fallback · press play again if prompted"; }); }; if (audio.readyState >= 1) startSegment(); else audio.addEventListener("loadedmetadata", startSegment, { once: true }); audio.addEventListener("timeupdate", () => { if (!segmentComplete && audio.currentTime * 1000 >= segment.endMs) { segmentComplete = true; audio.pause(); finishModelPlayback(); } }); }
    else audio.play().catch(() => { nodes.audioSource.textContent = "Browser voice fallback · press play again if prompted"; }); return;
  }
  if (!("speechSynthesis" in window)) { showToast("Audio playback is not supported in this browser."); return; }
  const utterance = new SpeechSynthesisUtterance(text); utterance.lang = "nl-NL"; utterance.rate = state.speed; utterance.pitch = 1; utterance.onstart = () => { nodes.playIcon.textContent = "■"; nodes.audioProgress.style.width = "100%"; }; utterance.onend = finishModelPlayback; utterance.onerror = finishModelPlayback; window.speechSynthesis.speak(utterance);
}

async function toggleRecording() {
  if (state.recorder?.state === "recording") { state.recorder.stop(); return; }
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) { showToast("Recording needs a browser with microphone support."); return; }
  try { const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); state.chunks = []; state.recorder = new MediaRecorder(stream); state.recorder.addEventListener("dataavailable", (event) => state.chunks.push(event.data)); state.recorder.addEventListener("stop", () => { const clip = new Blob(state.chunks, { type: "audio/webm" }); if (state.recordingUrl) URL.revokeObjectURL(state.recordingUrl); state.recordingUrl = URL.createObjectURL(clip); nodes.recordedAudio.src = state.recordingUrl; nodes.recordedAudio.hidden = false; nodes.recordButton.classList.remove("recording"); nodes.recordButton.innerHTML = "● <span>Record another attempt</span>"; nodes.recordingLabel.textContent = "Attempt captured locally"; nodes.recordingFeedback.textContent = "This recording stays on this device. Listen once, then choose one change—stress, linking, or timing."; nodes.recordDot.classList.remove("recording"); queueAttempt(steps[state.currentStep].id, "self-recorded", null, "local-only"); stream.getTracks().forEach((track) => track.stop()); }); state.recorder.start(); nodes.recordButton.classList.add("recording"); nodes.recordButton.innerHTML = "■ <span>Stop recording</span>"; nodes.recordingLabel.textContent = "Recording your attempt…"; nodes.recordingFeedback.textContent = "Keep it natural. One honest attempt is more useful than several hidden restarts."; nodes.recordDot.classList.add("recording"); } catch { showToast("Microphone access was not granted. You can still practice aloud."); }
}

function completeStage() { if (state.currentStep < steps.length - 1) { state.currentStep += 1; renderStage(); showToast(`${steps[state.currentStep].title} is ready.`); return; } const reviewWasActive = state.reviewing; const rating = state.recallRating || "hint"; state.practised.add(state.activePiece); localStorage.setItem("echoLoopDutchPractised", JSON.stringify([...state.practised])); recordPracticeDay(); const scheduled = scheduleReview(state.activePiece, rating, reviewWasActive); state.completed += 1; localStorage.setItem("echoLoopDutchCompleted", String(state.completed)); queueAttempt("transfer", "independent", rating); queueCloudSync(); renderB1Progress(); renderB2Progress(); renderContentGrid(); renderReview(); renderLearningDashboard(); if (state.sprint && state.sprint.position < state.sprint.queue.length - 1) { state.sprint.position += 1; selectPiece(state.sprint.queue[state.sprint.position], `${state.sprint.level} sprint · lesson ${state.sprint.position + 1} of ${state.sprint.queue.length}.`, { keepSprint: true }); return; } const completedSprint = Boolean(state.sprint); const sprintLevel = state.sprint?.level; state.sprint = null; state.reviewing = false; state.recallRating = null; state.currentStep = 0; renderStage(); showToast(completedSprint ? `${sprintLevel} sprint complete. Those phrases are now scheduled for retrieval.` : `${state.cloudReady ? "Session synced." : "Session saved locally."} ${scheduled.reason}`); }

async function exportLearningData() {
  const label = nodes.exportProgress.textContent; nodes.exportProgress.disabled = true; nodes.exportProgress.textContent = "Preparing download…";
  try {
    let data;
    if (IS_STATIC_EDITION) data = { exportedAt: new Date().toISOString(), edition: "Echo Loop GitHub Pages", scope: "Browser-local learning data only; recordings are excluded.", sessionCount: state.completed, progress: progressSnapshot(), pendingAttempts: state.pendingAttempts, transferVariations: state.transferNotes, practiceDays: [...state.practiceDays], practiceChallenge: state.practiceChallenge, recordingsIncluded: false };
    else { const response = await fetch("/api/learning-export"); data = await response.json(); if (!response.ok) throw new Error(data.error || "Could not prepare your export."); }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }); const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = `echo-loop-learning-data-${new Date().toISOString().slice(0, 10)}.json`; document.body.append(link); link.click(); link.remove(); window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("Learning data downloaded. Device-local recordings are not included.");
  } catch (error) { showToast(error instanceof Error ? error.message : "Could not export learning data."); }
  finally { nodes.exportProgress.disabled = false; nodes.exportProgress.textContent = label; }
}

async function resetLocalLearningData() {
  if (!window.confirm("Erase all Echo Loop learning progress, review dates, written variations, and activity history from this account and this browser?")) return;
  if (state.cloudReady) { try { const response = await fetch("/api/learning-state", { method: "DELETE" }); if (!response.ok) throw new Error("delete failed"); } catch { showToast("Could not delete synced progress. Your local data was kept."); return; } }
  ["echoLoopDutchPiece", "echoLoopDutchLevel", "echoLoopDutchCompleted", "echoLoopDutchFocus", "echoLoopDutchPracticeChallenge", "echoLoopDutchRepeatMode", "echoLoopDutchPractised", "echoLoopDutchB1Cursor", "echoLoopDutchB2Cursor", "echoLoopDutchReviews", "echoLoopDutchTransferNotes", "echoLoopDutchPracticeDays", "echoLoopDutchListens"].forEach((key) => localStorage.removeItem(key));
  window.location.reload();
}

nodes.steps.forEach((button, index) => button.addEventListener("click", () => { state.currentStep = index; renderStage(); }));
nodes.stageAction.addEventListener("click", completeStage); nodes.transcriptToggle.addEventListener("click", () => setTranscript(!state.transcriptVisible)); nodes.playModel.addEventListener("click", () => playSpeech()); nodes.speedRange.addEventListener("input", (event) => { state.speed = Number(event.target.value); nodes.speedValue.textContent = `${state.speed.toFixed(1)}×`; loadAudioPlan(); }); nodes.loopModel.addEventListener("click", () => { const wasFullLoop = state.loopModel && state.loopSegment === null; state.loopSegment = null; nodes.loopSegment.setAttribute("aria-pressed", "false"); state.loopModel = !wasFullLoop; nodes.loopModel.setAttribute("aria-pressed", String(state.loopModel)); nodes.loopModel.textContent = state.loopModel ? "Looping model" : "Loop model"; if (!state.loopModel && state.audioLoopTimer) window.clearTimeout(state.audioLoopTimer); showToast(state.loopModel ? "Model will repeat until you turn looping off." : "Model looping off."); }); nodes.loopSegment.addEventListener("click", () => { const active = state.loopSegment !== null; state.loopSegment = active ? null : 0; state.loopModel = !active; nodes.loopSegment.setAttribute("aria-pressed", String(!active)); nodes.loopSegment.textContent = active ? "Loop first chunk" : "Looping first chunk"; nodes.loopModel.setAttribute("aria-pressed", "false"); nodes.loopModel.textContent = "Loop model"; if (active && state.audioLoopTimer) window.clearTimeout(state.audioLoopTimer); showToast(active ? "Chunk looping off." : "First timed chunk will repeat until you turn looping off."); }); nodes.recordButton.addEventListener("click", toggleRecording);
nodes.recallRating.querySelectorAll("[data-rating]").forEach((button) => button.addEventListener("click", () => chooseRecallRating(button.dataset.rating)));
nodes.saveTransferNote.addEventListener("click", saveTransferNote);
document.querySelectorAll(".focus-chip").forEach((chip) => chip.addEventListener("click", () => { state.focus = chip.dataset.focus; localStorage.setItem("echoLoopDutchFocus", state.focus); renderFocus(); renderStage(); showToast(`Listening focus: ${state.focus}.`); }));
nodes.levelFilters.querySelectorAll("[data-level]").forEach((button) => button.addEventListener("click", () => { state.levelFilter = button.dataset.level; localStorage.setItem("echoLoopDutchLevel", state.levelFilter); renderContentGrid(); showToast(state.levelFilter === "all" ? "Showing all Dutch lessons." : `Showing ${state.levelFilter} lessons.`); }));
nodes.startB1Sprint.addEventListener("click", startB1Sprint);
nodes.startB2Sprint.addEventListener("click", startB2Sprint);
nodes.startAssignment.addEventListener("click", startAssignedPractice);
nodes.startToday.addEventListener("click", startToday);
nodes.startEcho.addEventListener("click", startGuidedEcho);
nodes.repeatModes.querySelectorAll("[data-repeat-mode]").forEach((button) => button.addEventListener("click", () => selectRepeatMode(button.dataset.repeatMode)));
document.querySelectorAll("[data-practice-challenge]").forEach((button) => button.addEventListener("click", () => choosePracticeChallenge(button.dataset.practiceChallenge)));
nodes.applyPracticePlan.addEventListener("click", applyPracticePlan);
nodes.exportProgress.addEventListener("click", exportLearningData);
nodes.resetProgress.addEventListener("click", resetLocalLearningData);
nodes.installApp.addEventListener("click", installApp);
nodes.closeInstallGuide.addEventListener("click", () => { nodes.installGuide.hidden = true; nodes.installApp.focus(); });
nodes.installGuide.addEventListener("click", (event) => { if (event.target === nodes.installGuide) { nodes.installGuide.hidden = true; nodes.installApp.focus(); } });
nodes.profileButton.addEventListener("click", () => document.querySelector("#progress").scrollIntoView({ behavior: "smooth", block: "start" }));
document.querySelector("#themeToggle").addEventListener("click", () => { document.body.classList.toggle("high-contrast"); showToast(document.body.classList.contains("high-contrast") ? "High contrast on." : "High contrast off."); });
window.addEventListener("online", () => { if (IS_STATIC_EDITION) { setSyncStatus("Local-first edition", "local"); return; } setSyncStatus("Back online · saving…"); queueCloudSync(); });
window.addEventListener("offline", () => setSyncStatus("Offline · changes stay on this device", "offline"));
window.addEventListener("beforeinstallprompt", (event) => { event.preventDefault(); deferredInstallPrompt = event; renderInstallControl(); });
window.addEventListener("appinstalled", () => { deferredInstallPrompt = null; renderInstallControl(); showToast("Echo Loop is ready on your Home Screen."); });
window.addEventListener("beforeunload", () => { stopModelPlayback(); if (state.cloudSyncTimer) window.clearTimeout(state.cloudSyncTimer); });

if ("serviceWorker" in navigator && window.location.protocol === "https:") {
  window.addEventListener("load", () => {
    const appBase = new URL("./", window.location.href);
    navigator.serviceWorker.register(new URL("service-worker.js", appBase), { scope: appBase.pathname }).catch(() => {
      // The learner remains available online if the browser declines offline caching.
    });
  });
}

renderPiece(); renderStage(); renderContentGrid(); renderB1Progress(); renderB2Progress(); renderStreak(); renderReview(); renderLearningDashboard();
if (IS_STATIC_EDITION) setSyncStatus("Local-first edition", "local");
renderInstallControl();
(async () => { await hydrateContentOverrides(); await hydrateCloudState(); await hydrateAssignments(); })();
