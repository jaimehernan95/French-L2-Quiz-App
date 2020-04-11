const qBank = [
  {
    question: "Fréquence: Je Passe l' aspirateur six fois par mois",
    answers: ["Je Passe parfois l' aspirateur", "Je Passe rarement l' aspirateur", "Je Passe souvent l' aspirateur"],
    correct: "Je Passe souvent l' aspirateur",
    questionId: "099099"
  },
  {
    question: "Fréquence: Je fais mon lit deux par semaine",
    answers: ["Je fais souvent mon lit", "Je fais rarement mon lit", "Je fais parfois mon lit"],
    correct: "Je fais rarement mon lit",
    questionId: "183452"
  },
  {
    question: "Fréquence: Je regarde la television quinze fois par mois",
    answers: ["Je regarde rarement la television", 
    "Je regarde souvent la television", 
    "Je regarde parfois la television"],
    correct: "Je regarde souvent la television",
    questionId: "267908"
  },
  {
    question: "Fréquence: Je fais la lessive huit fois par mois",
    answers: [
      "Je fais rarement la lessive",
      "Je fais souvent la lessive",
      "Je fais parfois la lessive"
    ],
    correct: "Fréquence: Je fais souvent la lessive",
    questionId: "333247"
  },
  {
    question: "Fréquence: Je vais au cinema trente fois par anne",
    answers: ["Je vais souvent au cinema", "Je vais rarement au cinema", "Je vais parfois au cinema"],
    correct: "Je vais souvent au cinema",
    questionId: "496293"
  },
  {
    question: "Fréquence: Je parle au téléphone six fois par semaine",
    answers: [
      "Je parle parfois au téléphone",
      "Je parle rarement au téléphone",
      "Je parle souvent au téléphone"
    ],
    correct: "Fréquence: Je parle souvent au téléphone",
    questionId: "588909"
  },
  {
    question: "Fréquence: Je vais chez le medicine une fois par année",
    answers: ["Je vais souvent chez le medicine", "Je vais parfois chez le medicine", "Je vais rarement chez le medicine"],
    correct: "Je vais rarement chez le medicine",
    questionId: "648452"
  },
  {
    question: "Fréquence: Fréquence: Je sors avec mes amis quatre fois par mois",
    answers: ["Je sors rarement avec mes amis", "Je sors parfois avec mes amis", "Je sors souvent avec mes amis"],
    correct: "Je sors souvent avec mes amis",
    questionId: "839754"
  },
  {
    question: "Les Pronoms: Est-ce que tu fais le repassage? / Do you iron?",
    answers: [
      "Oui, Je le fais / Non, Je ne la fais pas.",
      "Oui, Je le faiss / Non, Je ne le fais pass.",
      "Oui, Je le fais / Non, Je ne le fais pas."
    ],
    correct: "Oui, Je le fais / Non, Je ne le fais pas.",
    questionId: "98390"
  },
  {
    question: "Les Pronoms: Est-ce que tu fais la vasielle?",
    answers: [
    "Oui, Je le fais / Non, Je ne la fais pas.", 
    "Oui, Je la fais / Non, Je ne la fais pas.", 
    "Oui, Je la fais / Non, Je ne le fais pass."
    ],
    correct: "Oui, Je la fais / Non, Je ne la fais pas.",
    questionId: "1071006"
  },
  {
    question: "Les Pronoms: Est-ce que tu fais la vasielle deux fois par jour?",
    answers: [
    "Oui, Je le fais / Non, Je ne la fais pas",
    "Oui, Je le fais deux fois par jour / Non, Je ne la fais pas deux fois par jour", 
    "Oui, Je la fais deux fois par jour / Non, Je ne la fais pas deux fois par jour"
    ],
    correct: "Oui, Je la fais deux fois par jour / Non, Je ne la fais pas deux fois par jour",
    questionId: "1174154"
  },
  {
    question: "Les Pronoms: Est-ce que tu passes l'aspirateur tous les jours?",
    answers: ["Oui,je la passe tous les jours / Non, je ne la passe pas tous les jours", 
    "Oui,je le passe tous les jours / Non, je ne le passe pas tous les jours", 
    "Oui,je le passe tous les jours / Non, je ne la passe pas tous les jours"
    ],
    correct: "Les Pronoms:Oui,je le passe tous les jours / Non, je ne la passe pas tous les jours",
    questionId: "1226535"
  },
  {
    question: "Les Pronoms: Est-ce que tu brosses le chien une fois par semaine?",
    answers: ["Oui, je le brosses un fois per semaine / Non, je ne le brosses pas un fois per semaine",
     "Oui, je le brosse une fois per semaine / Non, je ne le brosse pas une fois per semaine",
     "Oui, je la brosse / Non, je ne la brosse "
     ],
    correct: "Oui, je le brosse une fois per semaine / Non, je ne le brosse pas une fois per semaine",
    questionId: "1310938"
  },
  {
    question: "Les Pronoms: Est-ce que tu repasses les chemises à la vapeur?",
    answers: ["Oui, je les repasse a la vapeur/Non, je ne les repasse pas à la vapeur", 
    "Oui, je les repasses à  la vapeur/Non, je ne les repasses pas à la vapeur", 
    "Oui, je les repasse à la vapeur/Non, je ne las repasse pas à la vapeur"
    ],
    correct: "Oui, je les repasse à  la vapeur/Non, je ne les repasse pas à la vapeur",
    questionId: "1436873"
  },
  {
    question: "Les Pronoms: Est-ce que tu enlevés la niege devant ton garage?",
    answers: ["Oui, je l'enlevés de devant mon garage/Non, je ne l'enlevés pas devant mon garage", 
    "Oui, je l'enlevé de devant le garage/Non, je ne l'enlevé pas devant le garage", 
    "Oui, je l'enlevé de devant mon garage/Non, je ne l'enlevé pas devant mon garage"
    ],
    correct: "Oui, je l'enlevé de devant mon garage/Non, je ne l'enlevé pas devant mon garage",
    questionId: "1515110"
  },
  {
    question: "Les Pronoms: Est-ce que tu tonds le gazon avec une tondeuse électrique?",
    answers: ["Oui, je le tond avec une tondeuse électrique / Non, je ne le tond pas avec une tondeuse électrique", 
    "Oui, je la tonds avec une tondeuse électrique / Non, je ne la tonds pas avec une tondeuse électrique", 
    "Oui, je le tonds avec une tondeuse électrique / Non, je ne le tonds pas avec une tondeuse électrique"
    ],
    correct: "Oui, je le tonds avec une tondeuse électrique / Non, je ne le tonds pas avec une tondeuse électrique",
    questionId: "1642728"
  },
  {
    question:
      "Les Pronoms: Est-ce que tu sors les ordures chaque matin?",
    answers: ["Oui, je les sor chaque matin/Non, je ne les sor pas chaque matin",
    "Oui, je las sors chaque matin/Non, je ne las sors pas chaque matin", 
    "Oui, je les sors chaque matin/Non, je ne les sors pas chaque matin"
    ],
    correct: "Oui, je les sors chaque matin/Non, je ne les sors pas chaque matin",
    questionId: "1747256"
  },
  {
    question: "Les Pronoms: Est-ce que tu cires le parquet chaque année?",
    answers: ["Oui, je le cires chaque année/ Non, je ne le cires pas chaque année", 
    "Oui, je la cire chaque année/ Non, je ne la cire pas chaque année", 
    "Oui, je le cire chaque année/ Non, je ne le cire pas chaque année", "Turkey"
    ],
    correct: "Oui, je le cire chaque année/ Non, je ne le cire pas chaque année",
    questionId: "1822532"
  },
  {
    question: "Les Pronoms: Est-ce que tu râtelles souvent les feuilles?",
    answers: [
      "Oui, je las râtelle souvent/Non, je ne las râtelle pas souvent",
      "Oui, je les râtelles souvent/Non, je ne les râtelles pas souvent",
      "Oui, je les râtelle souvent/Non, je ne les râtelle pas souvent"
    ],
    correct: "Oui, je les râtelle souvent/Non, je ne les râtelle pas souvent",
    questionId: "195075"
  },
  {
    //P15 Les Verbes Semi-aux
    question: "Les Pronoms: Faut-il passer l'aspirateur?",
    answers: ["Oui, il faut le passe/ Non, el ne faut pas le passe", 
    "Oui, il faut la passer/ Non, il ne faut pas la passer", 
    "Oui, il faut le passer/ Non, il ne faut pas le passer"
    ],
    correct: "Oui, il faut le passer/ Non, il ne faut pas le passer",
    questionId: "2019778"
  },
  {
    question: "Les Pronoms: Peux-tu repasser la blouse?",
    answers: ["Oui, je peux la repasse/Non, je ne peux pas la repasse", 
    "Oui, je peux le repasser/Non, je ne peux pas le repasser", 
    "Oui, je peux la repasser/Non, je ne peux pas la repasser"
    ],
    correct: "Oui, je peux la repasser/Non, je ne peux pas la repasser",
    questionId: "2134343"
  },
  {
    question: "Les Pronoms: Devons-nous mettre le couvert?",
    answers: [
      "Oui, vous devez le mettres/Non, vous ne devez pas le mettres",
      "Oui, vous devez la mettre/Non, vous ne devez pas la mettre",
      "Oui, vous devez le mettre/Non, vous ne devez pas le mettre"
    ],
    correct: "Oui, vous devez le mettre/Non, vous ne devez pas le mettre",
    questionId: "2210799"
  },
  {
    question: "Les Pronoms: Vas-tu arroser les plantes?",
    answers: ["Oui, je va les arroser/ Non, je ne va pas les arroser", 
    "Oui, je vas les arroser/ Non, je ne vass pas les arroser", 
    "Oui, je vais les arroser/ Non, je ne vais pas les arroser"
    ],
    correct: "Oui, je vais les arroser/ Non, je ne vais pas les arroser",
    questionId: "2379831"
  },
  {
    question: "Les Pronoms: Peux-tu allumer le téléviseur?",
    answers: ["Oui, je peux l'allume /Non, je ne peux pas l'allume", 
    "Oui, je peuxs l'allumer/Non, je ne peuxs pas l'allumer", 
    "Oui, je peux l'allumer/Non, je ne peux pas l'allumer"
    ],
    correct: "Oui, je peux l'allumer/Non, je ne peux pas l'allumer",
    questionId: "2426418"
  },
  {
    question: "Les Pronoms: Faut-il envoyer les invitations",
    answers: ["Oui, il faut les envoyer/ Non, il ne faut pas les envoyer", 
    "Oui, il faut les envoye/ Non, il ne faut pas les envoye",
    "Oui, il faut las envoyer/ Non, il ne faut pas las envoyer"
    ],
    correct: "Oui, il faut les envoye/ Non, il ne faut pas les envoye",
    questionId: "2510086"
  },
  {
    question: "Les Pronoms: Peux-tu signer la carte d' anniversaire?",
    answers: [
      "Oui, je peux la signer/Non, je ne peux pas la signer",
      "Oui, je peux la signer/Non, je ne peux pas la signer",
      "Oui, je peux la signer/Non, je ne peux pas la signer"
    ],
    correct: "Oui, je peux la signer/Non, je ne peux pas la signer",
    questionId: "2685745"
  },
  {
    // Pg 16
    question: "Les Pronoms: Je fais cuire le chou?",
    answers: ["Oui,fais-le cuirer", 
    "Oui,fais-la cuires", "Oui,fais-le cuire"
    ],
    correct: "Oui,fais-le cuire",
    questionId: "2796884"
  },
  {
    question: "Les Pronoms: Nos orgnisons le repas?",
    answers: ["Oui, organisez", 
    "Oui, organisez-la /Oui, orgnisons-la", 
    "Oui, organisez-le /Oui, orgnisons-le"
    ],
    correct: "Oui, organisez-le /Oui, orgnisons-le",
    questionId: "2838900"
  },
  {
    question: "Les Pronoms: Les Pronoms: What is the French word for?",
    answers: ["Chapeau", "Bonnet", " Écharpe", " Casque"],
    correct: "Chapeau",
    questionId: "298060"
  },
  {
    question: "Les Pronoms: je nettoie la baignoire?",
    answers: ["Oui, nettoie-le", 
    "Oui, nettoies la", 
    "Oui, nettoie-la"
    ],
    correct: "Oui, nettoie-la",
    questionId: "3096579"
  },
  {
    question: "Les Pronoms: Nos rangeons la vasielle?",
    answers: [
      "Oui, rangez-le/Oui,rangeons-le",
      "Oui, rangeons-le",
      "Oui, rangez-la/Oui,rangeons-la"
    ],
    correct: "Oui, rangez-la/Oui,rangeons-la",
    questionId: "3239112"
  },
  {
    question: "Les Pronoms: Je remplis les verres",
    answers: [
      "Oui, remplise-las",
      "Oui, remplis-las",
      "Oui, remplis-les"
    ],
    correct: "Oui, remplis-les",
    questionId: "3182461"
  },
  {
    question: "Les Pronoms: Nous lavons les planchers?",
    answers: ["Oui, laveze-les", 
    "Oui, lavez-las", 
    "Oui, lavez-les"
    ],
    correct: "Oui, lavez-les",
    questionId: "3318503"
  },
  {
    question: "Les Pronoms: J'allume la lampe?",
    answers: ["Oui, allumes-la", 
    "Oui, allume-le",
    "Oui, allume-la"
    ],
    correct: "Oui, allume-la",
    questionId: "3410327"
  },
  {
    question: "Les Pronoms: Oui: Je fais le lavage",
    answers: ["Oui,fai-le", "Oui,fais-la", "Oui,fais-le"],
    correct: "Oui,fais-le",
    questionId: "3542596"
  },
  {
    // Pag. 17 pronoms complements directs
    question: "Les Pronoms: Therese lave la vasielle?",
    answers: ["Oui, elle la laves", 
    "Oui, elle le lave", 
    "Oui, elle la lave"
    ],
    correct: "Oui, elle la lave",
    questionId: "3667517"
  },
  {
    question: "Les Pronoms: Les enfants mangent les fruit",
    answers: ["Non, elle ne les mangent pas",
      "Non, ils ne les mange pas",
      "Non, ils ne les mangent pas"
    ],
    correct: "Non, ils ne les mangent pas",
    questionId: "3791672"
  },
  {
    question: "Les Pronoms: Poulette passe l'aspirateur? ",
    answers: ["Oui, il l'epoussette", "Oui, il l'epoussette", "Oui, il l'epoussette"
    ],
    correct: "Oui, il l'epoussette",
    questionId: "3893585"
  },
  {
    question: "Les Pronoms: Alain réveille son enfant?",
    answers: ["Non, il ne le réveilles pa", 
    "Non, il ne le réveille pas", 
    "Non, el ne le réveille pa"
    ],
    correct: "Non, il ne le réveille pas",
    questionId: "3913430"
  },
  {
    question: "Les Pronoms: Jeanne balaie le plancher?",
    answers: ["Oui, elle le balaies", "Oui, elle la balaie", 
    "Oui, elle le balaie"
    ],
    correct: "Oui, elle le balaie",
    questionId: "4049121"
  },
  {
    question: "Les Pronoms: Jean met la salière sur la table?",
    answers: ["Oui, elle la met sur la table", 
    "Oui, elle le met sur la table", 
    "il la met sur la table"
    ],
    correct: "Oui, il la met sur la table",
    questionId: "4150746"
  },
  {
    question: "Les Pronoms: vous placez les chaises?",
    answers: ["Non, nous ne le place pas/Non, je ne le place pas", 
    "Non, nous ne les placent pas/Non, je ne les places pas", 
    "Non, nous ne les placons pas/Non, je ne les place pas"
    ],
    correct: "Non, nous ne les placons pas/Non, je ne les place pas",
    questionId: "4235063"
  },
  {
    question: "Les Pronoms: Les Pronoms: Nos orgnisons le souper?",
    answers: ["Oui,vous ne l'organise pas/Non, nous ne l'orgnison pas.", 
    "Oui,elle ne l'organisez pas/Non, nous ne l'orgnisons pas.", 
    "Oui,vous ne l'organisez pas/Non, nous ne l'organisons pas."
    ],
    correct: "Oui,vous ne l'organisez pas/Non, nous ne l'organisons pas.",
    questionId: "4321002"
  },
  {
    question: "Les Pronoms: Tu remplis ton panier",
    answers: [
      "Oui, je la remplis",
      "Oui, je le remplise",
      "Oui, je le remplis"
    ],
    correct: "Oui, je le remplis",
    questionId: "4442286"
  },
  {
    question: "Les Pronoms: il tranche le pain",
    answers: [
      "Non, il ne le tranche pas",
      "Non, il ne le tranche pas",
      "Non, il ne le tranche pas"
    ],
    correct: "Non, il ne le tranche pas",
    questionId: "4564430"
  },
  {
    question: "Les Pronoms: Vous regardez la télévision",
    answers: ["Oui, nous la regarde/ Oui, je la regardons", 
    "Oui, nous le regardons/ Oui, je le regarde", 
    "Oui, nous la regardons/ Oui, je la regarde"
    ],
    correct: "Oui, nous la regardons/ Oui, je la regarde",
    questionId: "4630606"
  },
  {
    question: "Les Pronoms: Carole et Marc ouvrent la boîte?",
    answers: ["Non, ils ne l'ouvrente pa",
    "Non, il ne l'ouvrent pas", 
    "Non, ils ne l'ouvrent pas"
    ],
    correct: "Non, ils ne l'ouvrent pas",
    questionId: "4795960"
  },
  {
    question: "Les Pronoms: Sylvie et Suzanne accordent le piano?",
    answers: ["Oui, ils l'accordent", 
    "Oui, elle l'accordent", 
    "Oui, elles l'accordent"
    ],
    correct: "Oui, elles l'accordent",
    questionId: "4811162"
  },
  {
    question: "Les Pronoms: David et Jean-Francois lisent le livre?",
    answers: ["Non, ils ne la lisent pas", 
    "Non, ils ne le lisent pas", 
    "Non, elle ne le lisent pas"
    ],
    correct: "Non, ils ne le lisent pas",
    questionId: "4982981"
  }
];

export default (n = 3) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
