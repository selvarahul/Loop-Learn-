const syllogism = {
  1: [
    { question: "All dogs are animals. All animals are living beings. Conclusion?", options: ["All dogs are living beings", "Some animals are dogs", "All living beings are animals", "None"], answer: "All dogs are living beings" },
    { question: "Some books are pens. All pens are pencils. Conclusion?", options: ["Some books are pencils", "All books are pencils", "Some pencils are books", "None"], answer: "Some books are pencils" },
    { question: "All roses are flowers. Some flowers are red. Conclusion?", options: ["All roses are red", "Some roses are flowers", "Some flowers are roses", "None"], answer: "Some flowers are roses" },
    { question: "Some cats are animals. All animals are humans. Conclusion?", options: ["Some cats are humans", "All cats are humans", "Some humans are cats", "None"], answer: "Some cats are humans" },
    { question: "All cars are vehicles. All vehicles are machines. Conclusion?", options: ["All cars are machines", "Some machines are cars", "All machines are cars", "None"], answer: "All cars are machines" },
    { question: "All apples are fruits. Some fruits are sweet. Conclusion?", options: ["Some apples are sweet", "All fruits are apples", "Some fruits are apples", "None"], answer: "Some fruits are apples" },
    { question: "Some boys are students. All students are players. Conclusion?", options: ["Some boys are players", "All boys are players", "Some players are boys", "None"], answer: "Some boys are players" },
    { question: "All teachers are intelligent. Some intelligent are doctors. Conclusion?", options: ["Some teachers are doctors", "All intelligent are teachers", "Some intelligent are teachers", "None"], answer: "None" },
    { question: "All chairs are furniture. Some furniture are wooden. Conclusion?", options: ["Some chairs are wooden", "Some wooden are chairs", "All chairs are wooden", "None"], answer: "None" },
    { question: "All birds can fly. Some birds are parrots. Conclusion?", options: ["Some parrots can fly", "All parrots can fly", "Some birds are parrots", "None"], answer: "Some parrots can fly" }
  ],
  2: [
    { question: "Some men are soldiers. All soldiers are brave. Conclusion?", options: ["Some men are brave", "All men are brave", "Some brave are men", "None"], answer: "Some men are brave" },
    { question: "All mobiles are electronics. Some electronics are useful. Conclusion?", options: ["All mobiles are useful", "Some mobiles are useful", "Some useful are mobiles", "None"], answer: "Some mobiles are useful" },
    { question: "Some girls are students. All students are dancers. Conclusion?", options: ["Some girls are dancers", "All girls are dancers", "Some dancers are girls", "None"], answer: "Some girls are dancers" },
    { question: "All dogs are faithful. Some faithful are humans. Conclusion?", options: ["Some dogs are humans", "Some humans are dogs", "None", "Some faithful are dogs"], answer: "Some faithful are dogs" },
    { question: "All fruits are healthy. All apples are fruits. Conclusion?", options: ["All apples are healthy", "Some healthy are apples", "All fruits are apples", "None"], answer: "All apples are healthy" },
    { question: "All flowers are plants. Some plants are green. Conclusion?", options: ["Some flowers are green", "All plants are flowers", "Some plants are flowers", "None"], answer: "Some plants are flowers" },
    { question: "Some boys are tall. All tall are strong. Conclusion?", options: ["Some boys are strong", "All boys are strong", "Some strong are boys", "None"], answer: "Some boys are strong" },
    { question: "All fish are aquatic. Some aquatic are mammals. Conclusion?", options: ["Some fish are mammals", "Some mammals are aquatic", "All aquatic are fish", "None"], answer: "Some mammals are aquatic" },
    { question: "Some teachers are strict. All strict are feared. Conclusion?", options: ["Some teachers are feared", "All teachers are feared", "Some feared are teachers", "None"], answer: "Some teachers are feared" },
    { question: "All pens are tools. Some tools are machines. Conclusion?", options: ["Some pens are machines", "Some machines are pens", "None", "Some tools are pens"], answer: "Some tools are pens" }
  ],
  3: [
    { question: "All men are mortal. Socrates is a man. Conclusion?", options: ["Socrates is mortal", "Socrates is immortal", "All mortals are Socrates", "None"], answer: "Socrates is mortal" },
    { question: "All squares are rectangles. All rectangles are quadrilaterals. Conclusion?", options: ["All squares are quadrilaterals", "All quadrilaterals are squares", "Some rectangles are squares", "None"], answer: "All squares are quadrilaterals" },
    { question: "All books are readable. Some readable are interesting. Conclusion?", options: ["Some books are interesting", "Some interesting are books", "None", "All books are interesting"], answer: "None" },
    { question: "Some cats are black. All black are cute. Conclusion?", options: ["Some cats are cute", "All cats are cute", "Some cute are cats", "None"], answer: "Some cats are cute" },
    { question: "All rivers flow. Some rivers are long. Conclusion?", options: ["Some rivers are long", "All rivers are long", "Some long are rivers", "None"], answer: "Some rivers are long" },
    { question: "Some students are smart. All smart are successful. Conclusion?", options: ["Some students are successful", "All students are successful", "Some successful are students", "None"], answer: "Some students are successful" },
    { question: "All tigers are animals. Some animals are dangerous. Conclusion?", options: ["Some tigers are dangerous", "Some animals are tigers", "All animals are tigers", "None"], answer: "Some animals are tigers" },
    { question: "Some fruits are tasty. All tasty are expensive. Conclusion?", options: ["Some fruits are expensive", "All fruits are expensive", "Some expensive are fruits", "None"], answer: "Some fruits are expensive" },
    { question: "All roads are paths. Some paths are narrow. Conclusion?", options: ["Some roads are narrow", "Some paths are roads", "None", "All roads are narrow"], answer: "Some paths are roads" },
    { question: "All boys are humans. All humans are living beings. Conclusion?", options: ["All boys are living beings", "All living beings are boys", "Some living beings are boys", "None"], answer: "All boys are living beings" }
  ],
  4: [
    {
      question: "📘 Statements: All dogs are animals. Some animals are cats. Conclusion: Some dogs are cats.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All roses are flowers. All flowers are plants. Conclusion: All roses are plants.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some books are novels. All novels are stories. Conclusion: Some books are stories.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: No pen is pencil. All pencils are sharp. Conclusion: No pen is sharp.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some fruits are apples. All apples are sweet. Conclusion: Some fruits are sweet.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some birds are parrots. All parrots are green. Conclusion: Some birds are green.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All cars are vehicles. Some vehicles are bikes. Conclusion: Some cars are bikes.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No student is lazy. All lazy are failures. Conclusion: No student is failure.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All men are human. All humans are mortal. Conclusion: All men are mortal.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some chairs are tables. All tables are wood. Conclusion: Some chairs are wood.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
  ],

  5: [
    {
      question: "📘 Statements: Some doctors are teachers. All teachers are educated. Conclusion: Some doctors are educated.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All boys are students. Some students are girls. Conclusion: Some boys are girls.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No cat is dog. All dogs are loyal. Conclusion: No cat is loyal.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some pens are blue. Some blue are ink. Conclusion: Some pens are ink.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All kings are men. Some men are rich. Conclusion: Some kings are rich.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All soldiers are brave. Some brave are winners. Conclusion: Some soldiers are winners.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some mobiles are phones. All phones are devices. Conclusion: Some mobiles are devices.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: No fruit is vegetable. Some vegetables are green. Conclusion: No fruit is green.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All cups are mugs. All mugs are glass. Conclusion: All cups are glass.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some trains are fast. All fast are expensive. Conclusion: Some trains are expensive.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
  ],

  6: [
    {
      question: "📘 Statements: All stars are suns. All suns are hot. Conclusion: All stars are hot.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some toys are dolls. Some dolls are games. Conclusion: Some toys are games.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All buses are vehicles. Some vehicles are trucks. Conclusion: Some buses are trucks.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No flower is thorn. All thorns are hard. Conclusion: No flower is hard.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some people are wise. All wise are respected. Conclusion: Some people are respected.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All students are children. Some children are naughty. Conclusion: Some students are naughty.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some water is pure. All pure is healthy. Conclusion: Some water is healthy.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All pens are tools. No tool is toy. Conclusion: No pen is toy.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some chairs are plastic. All plastic is strong. Conclusion: Some chairs are strong.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some girls are dancers. Some dancers are tall. Conclusion: Some girls are tall.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
  ],

  7: [
    {
      question: "📘 Statements: All lions are animals. Some animals are wild. Conclusion: Some lions are wild.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No human is immortal. All men are human. Conclusion: No man is immortal.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All actors are artists. Some artists are rich. Conclusion: Some actors are rich.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some birds are black. All black are shiny. Conclusion: Some birds are shiny.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All stars are bright. No bright is dark. Conclusion: No star is dark.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some trees are tall. Some tall are green. Conclusion: Some trees are green.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All poets are writers. All writers are thinkers. Conclusion: All poets are thinkers.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some girls are clever. All clever are intelligent. Conclusion: Some girls are intelligent.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: No toy is pen. Some pens are books. Conclusion: Some toys are books.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All boys are good. Some good are bad. Conclusion: Some boys are bad.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
  ],

  8: [
    {
      question: "📘 Statements: Some singers are dancers. All dancers are talented. Conclusion: Some singers are talented.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All engineers are workers. Some workers are lazy. Conclusion: Some engineers are lazy.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No man is perfect. All students are men. Conclusion: No student is perfect.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All mangoes are fruits. All fruits are sweet. Conclusion: All mangoes are sweet.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some bottles are red. Some red are glass. Conclusion: Some bottles are glass.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All players are strong. Some strong are healthy. Conclusion: Some players are healthy.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All teachers are guides. All guides are leaders. Conclusion: All teachers are leaders.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some boys are weak. All weak are failures. Conclusion: Some boys are failures.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: No computer is book. All books are useful. Conclusion: No computer is useful.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All pens are pencils. Some pencils are erasers. Conclusion: Some pens are erasers.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
  ],

  9: [
    {
      question: "📘 Statements: Some roads are long. All long are wide. Conclusion: Some roads are wide.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All boys are tall. Some tall are strong. Conclusion: Some boys are strong.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All books are papers. All papers are sheets. Conclusion: All books are sheets.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: No pen is red. Some red are ink. Conclusion: No pen is ink.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All games are fun. Some fun are joy. Conclusion: Some games are joy.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some fruits are tasty. All tasty are healthy. Conclusion: Some fruits are healthy.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: No man is child. All children are innocent. Conclusion: No man is innocent.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All trains are fast. Some fast are costly. Conclusion: Some trains are costly.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some cats are pets. All pets are loved. Conclusion: Some cats are loved.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All soldiers are strong. No strong is weak. Conclusion: No soldier is weak.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
  ],

  10: [
    {
      question: "📘 Statements: All fish are water. All water is life. Conclusion: All fish are life.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some tables are chairs. All chairs are wood. Conclusion: Some tables are wood.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No dog is cat. All cats are pets. Conclusion: No dog is pet.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All birds are flying. Some flying are fast. Conclusion: Some birds are fast.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All doctors are educated. Some educated are noble. Conclusion: Some doctors are noble.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some books are novels. Some novels are famous. Conclusion: Some books are famous.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All girls are women. All women are humans. Conclusion: All girls are humans.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some houses are flats. All flats are tall. Conclusion: Some houses are tall.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All pencils are tools. No tool is useless. Conclusion: No pencil is useless.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: No man is God. All Gods are powerful. Conclusion: No man is powerful.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
  ],
   11: [
    {
      question: "📘 Statements: All pens are blue. Some blue are costly. Conclusion: Some pens are costly.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some apples are red. All red are tasty. Conclusion: Some apples are tasty.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: No student is teacher. All teachers are guides. Conclusion: No student is guide.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some cars are fast. All fast are risky. Conclusion: Some cars are risky.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All rooms are big. Some big are costly. Conclusion: Some rooms are costly.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All mobiles are smart. No smart is dumb. Conclusion: No mobile is dumb.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some players are tall. Some tall are thin. Conclusion: Some players are thin.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All leaders are honest. Some honest are brave. Conclusion: Some leaders are brave.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some doctors are surgeons. All surgeons are skilled. Conclusion: Some doctors are skilled.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All students are readers. All readers are thinkers. Conclusion: All students are thinkers.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
  ],

  12: [
    {
      question: "📘 Statements: Some birds are eagles. All eagles are strong. Conclusion: Some birds are strong.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: No pen is book. All books are useful. Conclusion: No pen is useful.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All shirts are clothes. Some clothes are new. Conclusion: Some shirts are new.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All girls are students. Some students are brilliant. Conclusion: Some girls are brilliant.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some papers are white. All white are clean. Conclusion: Some papers are clean.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All gold is precious. Some precious are rare. Conclusion: Some gold is rare.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No man is perfect. All perfect are God. Conclusion: No man is God.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All pens are tools. Some tools are sharp. Conclusion: Some pens are sharp.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some bags are red. All red are colored. Conclusion: Some bags are colored.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All roads are long. No long is short. Conclusion: No road is short.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
  ],

  13: [
    {
      question: "📘 Statements: Some fruits are mangoes. All mangoes are sweet. Conclusion: Some fruits are sweet.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All books are knowledge. Some knowledge is power. Conclusion: Some books are power.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No teacher is lazy. All lazy are weak. Conclusion: No teacher is weak.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All roses are flowers. Some flowers are red. Conclusion: Some roses are red.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some boys are naughty. All naughty are punished. Conclusion: Some boys are punished.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All men are human. No human is perfect. Conclusion: No man is perfect.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some toys are plastic. All plastic is light. Conclusion: Some toys are light.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: No car is bike. All bikes are vehicles. Conclusion: No car is vehicle.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All birds are flying. Some flying are colorful. Conclusion: Some birds are colorful.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All students are boys. Some boys are tall. Conclusion: Some students are tall.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
  ],

  14: [
    {
      question: "📘 Statements: All water is liquid. All liquid is pure. Conclusion: All water is pure.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some teachers are women. All women are human. Conclusion: Some teachers are human.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All men are workers. Some workers are poor. Conclusion: Some men are poor.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No car is bike. Some bikes are fast. Conclusion: No car is fast.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some fruits are bananas. All bananas are yellow. Conclusion: Some fruits are yellow.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All actors are men. All men are humans. Conclusion: All actors are humans.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some players are boys. All boys are strong. Conclusion: Some players are strong.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All rooms are big. Some big are decorated. Conclusion: Some rooms are decorated.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some books are novels. No novel is boring. Conclusion: Some books are not boring.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All soldiers are brave. Some brave are strong. Conclusion: Some soldiers are strong.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
  ],

  15: [
    {
      question: "📘 Statements: All cups are glass. Some glass is breakable. Conclusion: Some cups are breakable.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some men are honest. All honest are noble. Conclusion: Some men are noble.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All birds are animals. Some animals are wild. Conclusion: Some birds are wild.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No pen is pencil. All pencils are wood. Conclusion: No pen is wood.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some papers are books. Some books are novels. Conclusion: Some papers are novels.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All trains are vehicles. No vehicle is slow. Conclusion: No train is slow.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some men are doctors. All doctors are respected. Conclusion: Some men are respected.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All toys are plastic. Some plastic is strong. Conclusion: Some toys are strong.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No woman is king. All kings are men. Conclusion: No woman is man.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All poets are writers. Some writers are famous. Conclusion: Some poets are famous.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
  ],

  16: [
    {
      question: "📘 Statements: All pens are ink. All ink is liquid. Conclusion: All pens are liquid.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some dogs are black. All black are cute. Conclusion: Some dogs are cute.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All apples are fruits. Some fruits are red. Conclusion: Some apples are red.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No man is animal. All animals are living. Conclusion: No man is living.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "False",
    },
    {
      question: "📘 Statements: All teachers are guides. Some guides are helpers. Conclusion: Some teachers are helpers.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some cars are red. All red are colored. Conclusion: Some cars are colored.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All boys are students. All students are readers. Conclusion: All boys are readers.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some games are cricket. All cricket is sport. Conclusion: Some games are sport.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: No doctor is lazy. Some lazy are fools. Conclusion: Some doctors are fools.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All roads are long. Some long are narrow. Conclusion: Some roads are narrow.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
  ],

  17: [
    {
      question: "📘 Statements: All fruits are tasty. No tasty is bitter. Conclusion: No fruit is bitter.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some men are strong. All strong are brave. Conclusion: Some men are brave.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All books are knowledge. Some knowledge is power. Conclusion: Some books are power.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No girl is boy. All boys are students. Conclusion: No girl is student.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some flowers are red. Some red are beautiful. Conclusion: Some flowers are beautiful.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All soldiers are fighters. No fighter is weak. Conclusion: No soldier is weak.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some toys are plastic. All plastic is light. Conclusion: Some toys are light.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All pens are tools. Some tools are sharp. Conclusion: Some pens are sharp.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No student is lazy. Some lazy are failures. Conclusion: Some students are failures.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All leaders are respected. Some respected are loved. Conclusion: Some leaders are loved.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
  ],
    18: [
    {
      question: "📘 Statements: Some birds are parrots. All parrots are green. Conclusion: Some birds are green.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All kings are men. Some men are rich. Conclusion: Some kings are rich.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some mobiles are phones. All phones are devices. Conclusion: Some mobiles are devices.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: No pen is pencil. All pencils are sharp. Conclusion: No pen is sharp.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All poets are writers. All writers are thinkers. Conclusion: All poets are thinkers.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some boys are clever. All clever are intelligent. Conclusion: Some boys are intelligent.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All cars are vehicles. Some vehicles are bikes. Conclusion: Some cars are bikes.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No fruit is vegetable. Some vegetables are green. Conclusion: No fruit is green.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some doctors are surgeons. All surgeons are skilled. Conclusion: Some doctors are skilled.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All metals are conductors. No conductor is an insulator. Conclusion: No metal is an insulator.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
  ],

  19: [
    {
      question: "📘 Statements: All cats are mammals. Some mammals are carnivores. Conclusion: Some cats are carnivores.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some papers are white. All white are clean. Conclusion: Some papers are clean.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: No student is a teacher. Some teachers are kind. Conclusion: No student is kind.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All roses are flowers. Some flowers are fragrant. Conclusion: Some roses are fragrant.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some tables are wooden. Some wooden things are heavy. Conclusion: Some tables are heavy.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: All athletes are fit. No fit person is lazy. Conclusion: No athlete is lazy.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some books are novels. All novels are fiction. Conclusion: Some books are fiction.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All birds are animals. Some animals can fly. Conclusion: Some birds can fly.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No dog is a cat. Some pets are dogs. Conclusion: Some pets are not cats.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All squares are rectangles. Some rectangles are blue. Conclusion: Some squares are blue.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
  ],

  20: [
    {
      question: "📘 Statements: Some musicians are singers. All singers are artists. Conclusion: Some musicians are artists.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All planets are round. No round thing is flat. Conclusion: No planet is flat.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: No book is a pen. Some pens are blue. Conclusion: Some blue things are not books.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All scientists are curious. Some curious people are eccentric. Conclusion: Some scientists are eccentric.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: Some cars are electric. No electric thing is polluting. Conclusion: Some cars are not polluting.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All teachers are educated. Some educated people are poor. Conclusion: Some teachers are poor.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "Cannot be determined",
    },
    {
      question: "📘 Statements: No reptile is warm-blooded. All snakes are reptiles. Conclusion: No snake is warm-blooded.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some oranges are fruits. All fruits are edible. Conclusion: Some oranges are edible.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: All students are readers. No reader is illiterate. Conclusion: No student is illiterate.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
    {
      question: "📘 Statements: Some poets are singers. No singer is a dancer. Conclusion: Some poets are not dancers.",
      options: ["True", "False", "Cannot be determined", "Both"],
      answer: "True",
    },
  ],
};

export default syllogism;

