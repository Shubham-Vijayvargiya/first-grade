window.AppData = window.AppData || {};
window.AppData.social = {
  id: 'social',
  name: 'World Arena',
  icon: '🌎',
  description: 'Communities, maps, history, and citizenship!',
  color: 'social',
  modules: [
    // ========================================
    // MODULE 17: Community & Citizenship
    // ========================================
    {
      id: 'module-17',
      number: 17,
      title: 'Community & Citizenship',
      subject: 'social',
      icon: '🏘️',
      badgeId: 'community-hero',
      badgeName: 'Community Hero',
      badgeIcon: '🏘️',
      description: 'Learn about communities, helpers, rules, and being a great citizen!',
      lessons: [
        // --- Lesson 17.1: What is a Community ---
        {
          id: 'lesson-17-1',
          number: '17.1',
          title: 'What is a Community',
          learnContent: {
            title: 'What is a Community?',
            paragraphs: [
              'A community is a place where people live, work, and play together! 🏡 Your neighborhood, your town, and your school are all communities.',
              'People in a community help each other. They share parks 🌳, libraries 📚, stores 🏪, and roads 🛣️. Everyone works together to make the community a great place to live!',
              'There are different kinds of communities. A city 🏙️ is a big community with lots of people and tall buildings. A suburb is a quieter area near a city. A rural area 🌾 is out in the country with farms and open land.'
            ],
            keyPoint: 'A community is a place where people live, work, and play together.',
            examples: [
              { visual: '🏙️', text: 'City', label: 'big community' },
              { visual: '🏡', text: 'Suburb', label: 'near a city' },
              { visual: '🌾', text: 'Rural', label: 'country area' },
              { visual: '🏫', text: 'School', label: 'learning community' }
            ],
            tip: 'Think about your own community! What places do you go to every day?'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these into the right type of community!',
            categories: [
              {
                name: 'City',
                items: [
                  { value: 'skyscrapers', text: 'Tall skyscrapers' },
                  { value: 'subway', text: 'Subway trains' }
                ]
              },
              {
                name: 'Rural',
                items: [
                  { value: 'farm', text: 'Big farm' },
                  { value: 'barn', text: 'Red barn' }
                ]
              }
            ],
            items: [
              { value: 'skyscrapers', text: 'Tall skyscrapers', icon: '🏙️' },
              { value: 'farm', text: 'Big farm', icon: '🌾' },
              { value: 'subway', text: 'Subway trains', icon: '🚇' },
              { value: 'barn', text: 'Red barn', icon: '🏚️' }
            ]
          },
          checkQuestions: [
            { question: 'What is a community?', options: ['A place where people live, work, and play together', 'A place with only houses', 'A place with no people', 'A single building'], correct: 0 },
            { question: 'Which is a BIG community with tall buildings?', options: ['Farm', 'City', 'Forest', 'Ocean'], correct: 1 },
            { question: 'What do people in a community do?', options: ['Ignore each other', 'Never share', 'Help each other', 'Stay alone'], correct: 2 }
          ]
        },
        // --- Lesson 17.2: Community Helpers ---
        {
          id: 'lesson-17-2',
          number: '17.2',
          title: 'Community Helpers',
          learnContent: {
            title: 'Who Are Community Helpers?',
            paragraphs: [
              'Community helpers are people who do important jobs to keep our community safe, healthy, and happy! 🌟 They work hard every day to help us.',
              'Firefighters 🚒 put out fires and rescue people. Police officers 👮 keep us safe and follow the rules. Doctors 👩‍⚕️ and nurses help us when we are sick. Teachers 👩‍🏫 help us learn new things!',
              'Mail carriers 📬 bring letters to our homes. Trash collectors 🗑️ keep our streets clean. Librarians 📖 help us find great books. Every community helper has an important job!'
            ],
            keyPoint: 'Community helpers are people who work to keep our community safe, healthy, and running smoothly.',
            examples: [
              { visual: '🚒', text: 'Firefighter', label: 'fights fires' },
              { visual: '👮', text: 'Police Officer', label: 'keeps us safe' },
              { visual: '👩‍⚕️', text: 'Doctor', label: 'helps sick people' },
              { visual: '👩‍🏫', text: 'Teacher', label: 'helps us learn' }
            ],
            tip: 'Next time you see a community helper, say thank you! They work hard for all of us.'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each community helper to what they do!',
            pairs: [
              { id: 'pair1', left: 'Firefighter', right: 'Puts out fires', leftIcon: '🚒', rightIcon: '🔥' },
              { id: 'pair2', left: 'Doctor', right: 'Helps sick people', leftIcon: '👩‍⚕️', rightIcon: '🏥' },
              { id: 'pair3', left: 'Teacher', right: 'Helps us learn', leftIcon: '👩‍🏫', rightIcon: '📚' },
              { id: 'pair4', left: 'Mail Carrier', right: 'Brings letters', leftIcon: '📬', rightIcon: '✉️' }
            ]
          },
          checkQuestions: [
            { question: 'What does a firefighter do?', options: ['Teaches kids', 'Puts out fires', 'Delivers mail', 'Drives a bus'], correct: 1 },
            { question: 'Who helps you when you are sick?', options: ['Firefighter', 'Librarian', 'Doctor', 'Mail carrier'], correct: 2 },
            { question: 'What is a community helper?', options: ['Someone who only plays', 'Someone who works to help the community', 'Someone who stays home', 'A pet'], correct: 1 }
          ]
        },
        // --- Lesson 17.3: Rules & Laws ---
        {
          id: 'lesson-17-3',
          number: '17.3',
          title: 'Rules & Laws',
          learnContent: {
            title: 'Why Do We Have Rules and Laws?',
            paragraphs: [
              'Rules are instructions that tell us how to behave. We have rules at home 🏠, at school 🏫, and in our community! Rules help keep everyone safe and happy.',
              'Laws are rules made by the government for the whole community. A law might say you must wear a seatbelt 🚗 in the car. Another law says you must stop at a red light 🔴. Laws protect everyone!',
              'Without rules, things would be very confusing and unsafe! 😟 Imagine if there were no rules in a game — nobody would know how to play! Rules make life fair for everyone. ⚖️'
            ],
            keyPoint: 'Rules and laws keep people safe and make life fair for everyone.',
            examples: [
              { visual: '🏫', text: 'Raise your hand', label: 'school rule' },
              { visual: '🔴', text: 'Stop at red light', label: 'traffic law' },
              { visual: '🚗', text: 'Wear a seatbelt', label: 'safety law' },
              { visual: '🤫', text: 'Be quiet in the library', label: 'library rule' }
            ],
            tip: 'Following rules is not just about staying out of trouble — it is about keeping everyone safe!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these into school rules or community laws!',
            categories: [
              {
                name: 'School Rules',
                items: [
                  { value: 'raise-hand', text: 'Raise your hand' },
                  { value: 'walk-hallway', text: 'Walk in the hallway' }
                ]
              },
              {
                name: 'Community Laws',
                items: [
                  { value: 'seatbelt', text: 'Wear a seatbelt' },
                  { value: 'stop-sign', text: 'Stop at stop signs' }
                ]
              }
            ],
            items: [
              { value: 'raise-hand', text: 'Raise your hand', icon: '✋' },
              { value: 'seatbelt', text: 'Wear a seatbelt', icon: '🚗' },
              { value: 'walk-hallway', text: 'Walk in the hallway', icon: '🏫' },
              { value: 'stop-sign', text: 'Stop at stop signs', icon: '🛑' }
            ]
          },
          checkQuestions: [
            { question: 'Why do we have rules?', options: ['To make life boring', 'To keep people safe and be fair', 'To punish everyone', 'For no reason'], correct: 1 },
            { question: 'What is a law?', options: ['A game you play', 'A type of food', 'A rule made by the government', 'A kind of toy'], correct: 2 },
            { question: 'Which is a school rule?', options: ['Stop at red lights', 'Pay taxes', 'Raise your hand to speak', 'Drive slowly'], correct: 2 }
          ]
        },
        // --- Lesson 17.4: Being a Good Citizen ---
        {
          id: 'lesson-17-4',
          number: '17.4',
          title: 'Being a Good Citizen',
          learnContent: {
            title: 'How Can You Be a Good Citizen?',
            paragraphs: [
              'A citizen is a person who belongs to a community or country. Being a GOOD citizen means doing your part to make your community a better place! 🌟',
              'Good citizens are kind and helpful. They follow rules, share with others, and treat everyone with respect. 🤝 You can be a good citizen by picking up litter 🗑️, helping a friend, or being honest.',
              'Good citizens also vote when they grow up! 🗳️ Voting means choosing leaders who will make good decisions for the community. Even kids can practice citizenship by making fair choices at school!'
            ],
            keyPoint: 'A good citizen follows rules, helps others, and makes their community a better place.',
            examples: [
              { visual: '🗑️', text: 'Pick up litter', label: 'helps the community' },
              { visual: '🤝', text: 'Help a friend', label: 'being kind' },
              { visual: '📏', text: 'Follow the rules', label: 'being responsible' },
              { visual: '🗳️', text: 'Vote (when grown up)', label: 'choosing leaders' }
            ],
            tip: 'You do not have to be a grown-up to be a good citizen. Every kind act counts!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color actions of a GOOD CITIZEN green, and bad actions red!',
            categories: [
              { name: 'Good Citizen', color: 'green', class: 'color-green' },
              { name: 'Not a Good Citizen', color: 'red', class: 'color-red' }
            ],
            items: [
              { text: 'Picks up trash in the park', category: 'Good Citizen' },
              { text: 'Littering on the street', category: 'Not a Good Citizen' },
              { text: 'Helping a classmate', category: 'Good Citizen' },
              { text: 'Cutting in line at recess', category: 'Not a Good Citizen' }
            ],
            explanation: 'Good citizens help their community and treat others with kindness!'
          },
          checkQuestions: [
            { question: 'What is a citizen?', options: ['A type of car', 'A person who belongs to a community', 'A building', 'A kind of animal'], correct: 1 },
            { question: 'Which is something a good citizen does?', options: ['Litters on the ground', 'Breaks the rules', 'Helps their neighbors', 'Ignores everyone'], correct: 2 },
            { question: 'What does voting mean?', options: ['Playing a game', 'Choosing leaders', 'Going to school', 'Eating lunch'], correct: 1 }
          ]
        },
        // --- Lesson 17.5: Rights & Responsibilities ---
        {
          id: 'lesson-17-5',
          number: '17.5',
          title: 'Rights & Responsibilities',
          learnContent: {
            title: 'What Are Rights and Responsibilities?',
            paragraphs: [
              'Rights are things you are allowed to do or have. In America, everyone has the right to go to school 🏫, speak freely 🗣️, and be treated fairly. Rights are very important!',
              'Responsibilities are things you SHOULD do. When you have rights, you also have responsibilities! If you have the right to go to school, you have the responsibility to do your best work. 📝',
              'Think of it like a seesaw ⚖️ — rights and responsibilities must be balanced! You have the right to play at recess, but you have the responsibility to play safely and be kind to others.'
            ],
            keyPoint: 'Rights are things you are allowed to do. Responsibilities are things you should do.',
            examples: [
              { visual: '🏫', text: 'Go to school', label: 'right' },
              { visual: '📝', text: 'Do your homework', label: 'responsibility' },
              { visual: '🗣️', text: 'Share your ideas', label: 'right' },
              { visual: '👂', text: 'Listen to others', label: 'responsibility' }
            ],
            tip: 'For every right you have, there is a responsibility that goes with it!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these into Rights or Responsibilities!',
            categories: [
              {
                name: 'Rights',
                items: [
                  { value: 'school', text: 'Go to school' },
                  { value: 'speak', text: 'Share your ideas' }
                ]
              },
              {
                name: 'Responsibilities',
                items: [
                  { value: 'homework', text: 'Do your homework' },
                  { value: 'clean', text: 'Clean up after yourself' }
                ]
              }
            ],
            items: [
              { value: 'school', text: 'Go to school', icon: '🏫' },
              { value: 'homework', text: 'Do your homework', icon: '📝' },
              { value: 'speak', text: 'Share your ideas', icon: '🗣️' },
              { value: 'clean', text: 'Clean up after yourself', icon: '🧹' }
            ]
          },
          checkQuestions: [
            { question: 'What is a right?', options: ['Something you must buy', 'Something you are allowed to do or have', 'A type of building', 'A kind of food'], correct: 1 },
            { question: 'What is a responsibility?', options: ['Something you should do', 'Something you should avoid', 'A type of animal', 'A game'], correct: 0 },
            { question: 'If you have the right to play at recess, what is your responsibility?', options: ['Break things', 'Play safely and be kind', 'Stay inside', 'Skip school'], correct: 1 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'What is a community?', options: ['A place where people live, work, and play together', 'An empty field', 'A single house', 'A toy store'], correct: 0, type: 'multiple-choice' },
        { question: 'Which community helper puts out fires?', options: ['Teacher', 'Doctor', 'Firefighter', 'Mail carrier'], correct: 2, type: 'multiple-choice' },
        { question: 'Why do we have rules?', options: ['To make us sad', 'To keep us safe and be fair', 'For no reason', 'To confuse people'], correct: 1, type: 'multiple-choice' },
        { question: 'What is a law?', options: ['A school subject', 'A rule made by the government', 'A kind of toy', 'A type of food'], correct: 1, type: 'multiple-choice' },
        { question: 'Which is something a good citizen does?', options: ['Litters', 'Breaks rules', 'Helps others', 'Ignores everyone'], correct: 2, type: 'multiple-choice' },
        { question: 'What is a right?', options: ['Something you are allowed to do', 'Something you must pay for', 'A type of car', 'A game you play'], correct: 0, type: 'multiple-choice' },
        { question: 'What is a responsibility?', options: ['A toy', 'Something you should do', 'A holiday', 'A type of food'], correct: 1, type: 'multiple-choice' },
        { question: 'Which is a BIG community with tall buildings and many people?', options: ['Farm', 'Forest', 'City', 'Desert'], correct: 2, type: 'multiple-choice' },
        { question: 'Who helps you learn at school?', options: ['Firefighter', 'Teacher', 'Mail carrier', 'Chef'], correct: 1, type: 'multiple-choice' },
        { question: 'What happens when people follow the rules?', options: ['Life becomes boring', 'Things are fair and safe', 'People get lost', 'Nothing happens'], correct: 1, type: 'multiple-choice' }
      ]
    },

    // ========================================
    // MODULE 18: American Symbols & Holidays
    // ========================================
    {
      id: 'module-18',
      number: 18,
      title: 'American Symbols & Holidays',
      subject: 'social',
      icon: '🗽',
      badgeId: 'patriot-star',
      badgeName: 'Patriot Star',
      badgeIcon: '🇺🇸',
      description: 'Discover American symbols, holidays, and what makes our country special!',
      lessons: [
        // --- Lesson 18.1: US Flag & Eagle ---
        {
          id: 'lesson-18-1',
          number: '18.1',
          title: 'US Flag & Eagle',
          learnContent: {
            title: 'The US Flag and the Bald Eagle',
            paragraphs: [
              'The American flag 🇺🇸 is a symbol of our country. It has 50 white stars on a blue background. Each star stands for one of the 50 states! It also has 13 red and white stripes for the first 13 colonies.',
              'We call our flag "Old Glory" or "The Stars and Stripes." We show respect to the flag by standing when we say the Pledge of Allegiance. We never let the flag touch the ground! 🫡',
              'The bald eagle 🦅 is another important American symbol. It was chosen because it is strong, brave, and free — just like our country! You can see the bald eagle on coins and on important government buildings.'
            ],
            keyPoint: 'The US flag has 50 stars for 50 states and 13 stripes for the first 13 colonies. The bald eagle is a symbol of strength and freedom.',
            examples: [
              { visual: '⭐', text: '50 Stars', label: '50 states' },
              { visual: '🟥', text: '13 Stripes', label: '13 colonies' },
              { visual: '🦅', text: 'Bald Eagle', label: 'strength & freedom' },
              { visual: '🇺🇸', text: 'Old Glory', label: 'flag nickname' }
            ],
            tip: 'Count the stars on a real flag next time you see one — there are 50!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the facts about the USA flag yellow, and false statements blue!',
            categories: [
              { name: 'True Facts', color: 'yellow', class: 'color-yellow' },
              { name: 'False Info', color: 'blue', class: 'color-blue' }
            ],
            items: [
              { text: 'It has 50 stars for the states', category: 'True Facts' },
              { text: 'It has 13 stripes for colonies', category: 'True Facts' },
              { text: 'It has 100 stars', category: 'False Info' },
              { text: 'It is green and orange', category: 'False Info' }
            ],
            explanation: 'The USA flag has 50 stars (for states) and 13 stripes (for colonies)!'
          },
          checkQuestions: [
            { question: 'How many stars are on the American flag?', options: ['13', '30', '50', '100'], correct: 2 },
            { question: 'What do the 13 stripes on the flag stand for?', options: ['13 presidents', 'The first 13 colonies', '13 holidays', '13 states today'], correct: 1 },
            { question: 'Why was the bald eagle chosen as a symbol?', options: ['It is colorful', 'It is small', 'It is strong and free', 'It is quiet'], correct: 2 }
          ]
        },
        // --- Lesson 18.2: Statue of Liberty & Liberty Bell ---
        {
          id: 'lesson-18-2',
          number: '18.2',
          title: 'Statue of Liberty & Liberty Bell',
          learnContent: {
            title: 'The Statue of Liberty and the Liberty Bell',
            paragraphs: [
              'The Statue of Liberty 🗽 is a giant green statue in New York City. She holds a torch 🔦 in one hand and a tablet in the other. France gave this statue to America as a gift of friendship! She stands for freedom and hope.',
              'The Liberty Bell 🔔 is a famous bell in Philadelphia, Pennsylvania. It was rung long ago to celebrate America becoming free! The bell has a big crack in it, but people still visit it because it is an important symbol of liberty.',
              'Both the Statue of Liberty and the Liberty Bell remind us that freedom is very special. People from all over the world come to see these amazing symbols! 🌍'
            ],
            keyPoint: 'The Statue of Liberty stands for freedom and hope. The Liberty Bell is a symbol of liberty.',
            examples: [
              { visual: '🗽', text: 'Statue of Liberty', label: 'in New York City' },
              { visual: '🔔', text: 'Liberty Bell', label: 'in Philadelphia' },
              { visual: '🔦', text: 'Torch', label: 'lights the way' },
              { visual: '🇫🇷', text: 'Gift from France', label: 'friendship' }
            ],
            tip: 'The word "liberty" means freedom! Both of these symbols remind us how important freedom is.'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each symbol to its fact!',
            pairs: [
              { id: 'pair1', left: 'Statue of Liberty', right: 'In New York City', leftIcon: '🗽', rightIcon: '🏙️' },
              { id: 'pair2', left: 'Liberty Bell', right: 'Has a big crack', leftIcon: '🔔', rightIcon: '💥' },
              { id: 'pair3', left: 'Torch', right: 'Held by the statue', leftIcon: '🔦', rightIcon: '🗽' },
              { id: 'pair4', left: 'France', right: 'Gave us the statue', leftIcon: '🇫🇷', rightIcon: '🎁' }
            ]
          },
          checkQuestions: [
            { question: 'Where is the Statue of Liberty?', options: ['California', 'Texas', 'New York City', 'Florida'], correct: 2 },
            { question: 'What does the Statue of Liberty hold in her hand?', options: ['A book', 'A torch', 'A flag', 'A flower'], correct: 1 },
            { question: 'What is special about the Liberty Bell?', options: ['It is gold', 'It has a big crack', 'It is very tiny', 'It rings every day'], correct: 1 }
          ]
        },
        // --- Lesson 18.3: National Holidays ---
        {
          id: 'lesson-18-3',
          number: '18.3',
          title: 'National Holidays',
          learnContent: {
            title: 'Our National Holidays!',
            paragraphs: [
              'National holidays are special days when we celebrate something important about our country! 🎉 On these days, many people do not go to work or school.',
              'The Fourth of July 🎆 is America\'s birthday! We celebrate with fireworks, parades, and picnics. Thanksgiving 🦃 is when we give thanks for the good things in our lives. We eat a big meal with family!',
              'Martin Luther King Jr. Day ✊ honors a brave leader who worked for fairness and peace. Presidents\' Day honors all the presidents of the United States. Memorial Day 🎗️ is when we remember brave soldiers who protected our country.'
            ],
            keyPoint: 'National holidays celebrate important people and events in our country\'s history.',
            examples: [
              { visual: '🎆', text: 'Fourth of July', label: 'America\'s birthday' },
              { visual: '🦃', text: 'Thanksgiving', label: 'giving thanks' },
              { visual: '✊', text: 'MLK Jr. Day', label: 'fairness & peace' },
              { visual: '🎗️', text: 'Memorial Day', label: 'honoring soldiers' }
            ],
            tip: 'Every holiday has a story behind it. Ask a grown-up to tell you the story of your favorite holiday!'
          },
          activity: {
            type: 'drag-drop',
            instruction: 'Drag each holiday to what it celebrates!',
            items: [
              { id: 'item1', text: 'Fourth of July', icon: '🎆', target: 'target1' },
              { id: 'item2', text: 'Thanksgiving', icon: '🦃', target: 'target2' },
              { id: 'item3', text: 'MLK Jr. Day', icon: '✊', target: 'target3' },
              { id: 'item4', text: 'Memorial Day', icon: '🎗️', target: 'target4' }
            ],
            targets: [
              { id: 'target1', text: 'America\'s Birthday', label: 'America\'s Birthday' },
              { id: 'target2', text: 'Giving Thanks', label: 'Giving Thanks' },
              { id: 'target3', text: 'Fairness & Peace', label: 'Fairness & Peace' },
              { id: 'target4', text: 'Honoring Soldiers', label: 'Honoring Soldiers' }
            ]
          },
          checkQuestions: [
            { question: 'What do we celebrate on the Fourth of July?', options: ['Thanksgiving', 'America\'s birthday', 'Valentine\'s Day', 'Halloween'], correct: 1 },
            { question: 'Who did Martin Luther King Jr. work for?', options: ['Fairness and peace', 'Building houses', 'Playing sports', 'Cooking food'], correct: 0 },
            { question: 'What do we do on Thanksgiving?', options: ['Light fireworks', 'Give thanks and eat together', 'Go trick-or-treating', 'Open presents'], correct: 1 }
          ]
        },
        // --- Lesson 18.4: The Pledge of Allegiance ---
        {
          id: 'lesson-18-4',
          number: '18.4',
          title: 'The Pledge of Allegiance',
          learnContent: {
            title: 'The Pledge of Allegiance',
            paragraphs: [
              'The Pledge of Allegiance is a promise that Americans say to show love for their country. 🇺🇸 You have probably said it at school! We stand up, face the flag, and put our right hand over our heart. ❤️',
              'The words say: "I pledge allegiance to the flag of the United States of America, and to the Republic for which it stands, one nation, under God, indivisible, with liberty and justice for all."',
              '"Allegiance" means loyalty. "Indivisible" means we cannot be split apart. "Liberty" means freedom. "Justice" means fairness. The Pledge reminds us that America is one country where everyone should be treated fairly! ⚖️'
            ],
            keyPoint: 'The Pledge of Allegiance is a promise of loyalty to America and its values of freedom and fairness.',
            examples: [
              { visual: '🫡', text: 'Stand tall', label: 'show respect' },
              { visual: '❤️', text: 'Hand on heart', label: 'show loyalty' },
              { visual: '🇺🇸', text: 'Face the flag', label: 'honor the flag' },
              { visual: '⚖️', text: 'Justice for all', label: 'fairness for everyone' }
            ],
            tip: 'When you say the Pledge, you are promising to be a good American citizen!'
          },
          activity: {
            type: 'sequence',
            instruction: 'Put these steps for saying the Pledge in the right order!',
            items: [
              { text: 'Stand up from your seat' },
              { text: 'Face the American flag' },
              { text: 'Put your right hand over your heart' },
              { text: 'Say the Pledge of Allegiance' }
            ]
          },
          checkQuestions: [
            { question: 'What is the Pledge of Allegiance?', options: ['A song', 'A promise of loyalty to our country', 'A game', 'A type of flag'], correct: 1 },
            { question: 'What does "liberty" mean?', options: ['Sadness', 'Freedom', 'A bell', 'A state'], correct: 1 },
            { question: 'Where do you put your hand when saying the Pledge?', options: ['On your head', 'Behind your back', 'Over your heart', 'In your pocket'], correct: 2 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'How many stars are on the American flag?', options: ['13', '50', '25', '100'], correct: 1, type: 'multiple-choice' },
        { question: 'What do the 13 stripes on the flag stand for?', options: ['13 holidays', 'The first 13 colonies', '13 songs', '13 animals'], correct: 1, type: 'multiple-choice' },
        { question: 'Who gave the Statue of Liberty to America?', options: ['England', 'Spain', 'France', 'Canada'], correct: 2, type: 'multiple-choice' },
        { question: 'Where is the Liberty Bell?', options: ['New York', 'Philadelphia', 'Washington DC', 'Boston'], correct: 1, type: 'multiple-choice' },
        { question: 'What holiday is America\'s birthday?', options: ['Thanksgiving', 'Memorial Day', 'Fourth of July', 'Labor Day'], correct: 2, type: 'multiple-choice' },
        { question: 'What does the bald eagle stand for?', options: ['Weakness', 'Strength and freedom', 'Sadness', 'Sleep'], correct: 1, type: 'multiple-choice' },
        { question: 'What does "allegiance" mean?', options: ['Loyalty', 'Sadness', 'Anger', 'Happiness'], correct: 0, type: 'multiple-choice' },
        { question: 'What does the Statue of Liberty hold?', options: ['A flag', 'A torch', 'A book', 'A flower'], correct: 1, type: 'multiple-choice' },
        { question: 'Who do we honor on Martin Luther King Jr. Day?', options: ['A president', 'A leader for fairness and peace', 'A soldier', 'A teacher'], correct: 1, type: 'multiple-choice' },
        { question: 'What does "justice for all" mean?', options: ['Fairness for everyone', 'Fun for some', 'Lunch for all', 'Games for all'], correct: 0, type: 'multiple-choice' }
      ]
    },

    // ========================================
    // MODULE 19: Geography & Maps
    // ========================================
    {
      id: 'module-19',
      number: 19,
      title: 'Geography & Maps',
      subject: 'social',
      icon: '🗺️',
      badgeId: 'map-explorer',
      badgeName: 'Map Explorer',
      badgeIcon: '🗺️',
      description: 'Explore maps, continents, oceans, and landforms around the world!',
      lessons: [
        // --- Lesson 19.1: Maps vs Globes ---
        {
          id: 'lesson-19-1',
          number: '19.1',
          title: 'Maps vs Globes',
          learnContent: {
            title: 'Maps and Globes',
            paragraphs: [
              'A map is a flat picture that shows places from above. 🗺️ Maps can show your neighborhood, your city, your state, or even the whole world! Maps are flat, so you can put them on a wall or in a book.',
              'A globe is a round model of the Earth. 🌍 It is shaped like a ball because the Earth is round! A globe shows you where the land and water are on our planet. You can spin a globe to see different parts of the world.',
              'Maps and globes both help us find places. A map is easy to carry around, but a globe shows the true shape of the Earth. Maps use special things like a compass rose 🧭 to show directions: North, South, East, and West!'
            ],
            keyPoint: 'A map is a flat picture of a place. A globe is a round model of the Earth.',
            examples: [
              { visual: '🗺️', text: 'Map', label: 'flat picture' },
              { visual: '🌍', text: 'Globe', label: 'round model' },
              { visual: '🧭', text: 'Compass Rose', label: 'shows directions' },
              { visual: '📍', text: 'Map Key', label: 'explains symbols' }
            ],
            tip: 'Remember: a MAP is flat, and a GLOBE is round — just like the Earth!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these facts about maps and globes!',
            categories: [
              {
                name: 'Map',
                items: [
                  { value: 'flat', text: 'It is flat' },
                  { value: 'book', text: 'Can go in a book' }
                ]
              },
              {
                name: 'Globe',
                items: [
                  { value: 'round', text: 'It is round' },
                  { value: 'spin', text: 'You can spin it' }
                ]
              }
            ],
            items: [
              { value: 'flat', text: 'It is flat', icon: '📄' },
              { value: 'round', text: 'It is round', icon: '🌍' },
              { value: 'book', text: 'Can go in a book', icon: '📖' },
              { value: 'spin', text: 'You can spin it', icon: '🔄' }
            ]
          },
          checkQuestions: [
            { question: 'What shape is a map?', options: ['Round', 'Flat', 'Triangle', 'Square'], correct: 1 },
            { question: 'What shape is a globe?', options: ['Flat', 'Round like a ball', 'Long like a rope', 'Tiny like a dot'], correct: 1 },
            { question: 'What does a compass rose show?', options: ['Colors', 'Directions', 'Animals', 'Weather'], correct: 1 }
          ]
        },
        // --- Lesson 19.2: Continents & Oceans ---
        {
          id: 'lesson-19-2',
          number: '19.2',
          title: 'Continents & Oceans',
          learnContent: {
            title: 'The 7 Continents and 5 Oceans',
            paragraphs: [
              'The Earth has 7 large land areas called continents! 🌍 They are: North America, South America, Europe, Africa, Asia, Australia, and Antarctica. We live on the continent of North America!',
              'The Earth also has 5 big bodies of water called oceans! 🌊 They are: the Pacific Ocean, the Atlantic Ocean, the Indian Ocean, the Southern Ocean, and the Arctic Ocean. The Pacific Ocean is the biggest!',
              'More than half of the Earth is covered by water! 💧 That is why the Earth looks blue from space. Continents and oceans together make up our amazing planet!'
            ],
            keyPoint: 'There are 7 continents and 5 oceans on Earth. We live in North America.',
            examples: [
              { visual: '🌎', text: 'North America', label: 'where we live' },
              { visual: '🌍', text: 'Africa', label: 'largest hot continent' },
              { visual: '🌊', text: 'Pacific Ocean', label: 'biggest ocean' },
              { visual: '🧊', text: 'Antarctica', label: 'coldest continent' }
            ],
            tip: 'Try singing "7 continents, 5 oceans" to help you remember the numbers!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these into continents or oceans!',
            categories: [
              {
                name: 'Continents',
                items: [
                  { value: 'africa', text: 'Africa' },
                  { value: 'asia', text: 'Asia' }
                ]
              },
              {
                name: 'Oceans',
                items: [
                  { value: 'pacific', text: 'Pacific' },
                  { value: 'atlantic', text: 'Atlantic' }
                ]
              }
            ],
            items: [
              { value: 'africa', text: 'Africa', icon: '🌍' },
              { value: 'pacific', text: 'Pacific', icon: '🌊' },
              { value: 'asia', text: 'Asia', icon: '🌏' },
              { value: 'atlantic', text: 'Atlantic', icon: '🌊' }
            ]
          },
          checkQuestions: [
            { question: 'How many continents are there?', options: ['3', '5', '7', '10'], correct: 2 },
            { question: 'Which continent do we live on?', options: ['Africa', 'North America', 'Europe', 'Asia'], correct: 1 },
            { question: 'Which is the biggest ocean?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correct: 3 }
          ]
        },
        // --- Lesson 19.3: Landforms ---
        {
          id: 'lesson-19-3',
          number: '19.3',
          title: 'Landforms',
          learnContent: {
            title: 'Amazing Landforms!',
            paragraphs: [
              'The Earth has many different shapes of land called landforms! 🏔️ Mountains are very tall and rocky. Some mountains are so tall they have snow on top! Hills are smaller than mountains.',
              'Valleys are low areas between mountains or hills. 🌿 Plains are big, flat areas of land — great for farming! Deserts 🏜️ are dry places with very little rain. Islands are land that is completely surrounded by water. 🏝️',
              'Rivers 🏞️ are long bodies of moving water that flow through the land. Lakes are bodies of water surrounded by land. Each landform is special and different animals and plants live in each one!'
            ],
            keyPoint: 'Landforms are different shapes of land like mountains, hills, valleys, plains, and islands.',
            examples: [
              { visual: '🏔️', text: 'Mountain', label: 'very tall land' },
              { visual: '🌿', text: 'Valley', label: 'low area between hills' },
              { visual: '🏜️', text: 'Desert', label: 'hot and dry' },
              { visual: '🏝️', text: 'Island', label: 'land in water' }
            ],
            tip: 'Look outside your window! Can you see any landforms like hills or plains?'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each landform to its description!',
            pairs: [
              { id: 'pair1', left: 'Mountain', right: 'Very tall and rocky', leftIcon: '🏔️', rightIcon: '🪨' },
              { id: 'pair2', left: 'Desert', right: 'Hot and dry', leftIcon: '🏜️', rightIcon: '☀️' },
              { id: 'pair3', left: 'Island', right: 'Land in water', leftIcon: '🏝️', rightIcon: '🌊' },
              { id: 'pair4', left: 'Valley', right: 'Low area between hills', leftIcon: '🌿', rightIcon: '⬇️' }
            ]
          },
          checkQuestions: [
            { question: 'What is a mountain?', options: ['A flat area', 'Very tall and rocky land', 'A body of water', 'A type of tree'], correct: 1 },
            { question: 'What is an island?', options: ['A tall hill', 'A dry desert', 'Land surrounded by water', 'A type of cloud'], correct: 2 },
            { question: 'What is a desert like?', options: ['Wet and rainy', 'Hot and dry', 'Cold and snowy', 'Full of trees'], correct: 1 }
          ]
        },
        // --- Lesson 19.4: My Address & Location ---
        {
          id: 'lesson-19-4',
          number: '19.4',
          title: 'My Address & Location',
          learnContent: {
            title: 'Where Do You Live?',
            paragraphs: [
              'Your address tells people where you live! 🏠 It is like directions to your home. An address has a number, a street name, a city, a state, and a zip code. For example: 123 Oak Street, Springfield, Illinois 62704.',
              'Your home is in a neighborhood, which is part of a city or town. Your city is in a state. Your state is in a country — the United States of America 🇺🇸! And your country is on the continent of North America, on planet Earth! 🌍',
              'Knowing your address is very important! If you ever get lost, you can tell a helper your address so they can take you home. It is also how your mail gets delivered to the right place! 📬'
            ],
            keyPoint: 'Your address tells people exactly where you live — from your house to the whole Earth!',
            examples: [
              { visual: '🏠', text: 'Home', label: 'your house' },
              { visual: '🏘️', text: 'Neighborhood', label: 'houses near you' },
              { visual: '🏙️', text: 'City', label: 'many neighborhoods' },
              { visual: '🌎', text: 'Country', label: 'United States' }
            ],
            tip: 'It is very important to know your home address. Practice saying it out loud!'
          },
          activity: {
            type: 'sequence',
            instruction: 'Put these in order from SMALLEST to BIGGEST!',
            items: [
              { text: '🏠 Your Home' },
              { text: '🏘️ Your Neighborhood' },
              { text: '🏙️ Your City' },
              { text: '📍 Your State' },
              { text: '🇺🇸 Your Country' },
              { text: '🌎 Your Continent' }
            ]
          },
          checkQuestions: [
            { question: 'Why is it important to know your address?', options: ['So you can play games', 'So helpers can find your home', 'So you can draw pictures', 'For no reason'], correct: 1 },
            { question: 'What is part of an address?', options: ['Your favorite color', 'Street name and city', 'Your pet\'s name', 'Your shoe size'], correct: 1 },
            { question: 'What continent is the United States on?', options: ['Europe', 'Asia', 'North America', 'Africa'], correct: 2 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'What is a map?', options: ['A round ball', 'A flat picture of a place', 'A type of car', 'A kind of food'], correct: 1, type: 'multiple-choice' },
        { question: 'What shape is a globe?', options: ['Square', 'Flat', 'Round like a ball', 'Triangle'], correct: 2, type: 'multiple-choice' },
        { question: 'How many continents are there?', options: ['4', '5', '6', '7'], correct: 3, type: 'multiple-choice' },
        { question: 'How many oceans are there?', options: ['3', '5', '7', '10'], correct: 1, type: 'multiple-choice' },
        { question: 'Which is the biggest ocean?', options: ['Atlantic', 'Pacific', 'Indian', 'Arctic'], correct: 1, type: 'multiple-choice' },
        { question: 'What is a mountain?', options: ['Flat land', 'A body of water', 'Very tall and rocky land', 'A dry place'], correct: 2, type: 'multiple-choice' },
        { question: 'What is an island?', options: ['A tall hill', 'Land surrounded by water', 'A river', 'A desert'], correct: 1, type: 'multiple-choice' },
        { question: 'What does a compass rose show?', options: ['Time', 'Temperature', 'Directions', 'Colors'], correct: 2, type: 'multiple-choice' },
        { question: 'Which continent do we live on?', options: ['Europe', 'Asia', 'North America', 'Africa'], correct: 2, type: 'multiple-choice' },
        { question: 'Why should you know your address?', options: ['To win a prize', 'So helpers can find your home', 'To draw a picture', 'For fun'], correct: 1, type: 'multiple-choice' }
      ]
    },

    // ========================================
    // MODULE 20: Economics Basics
    // ========================================
    {
      id: 'module-20',
      number: 20,
      title: 'Economics Basics',
      subject: 'social',
      icon: '🏪',
      badgeId: 'smart-shopper',
      badgeName: 'Smart Shopper',
      badgeIcon: '🏪',
      description: 'Learn about money, jobs, needs, wants, and being smart with spending!',
      lessons: [
        // --- Lesson 20.1: Needs vs Wants ---
        {
          id: 'lesson-20-1',
          number: '20.1',
          title: 'Needs vs Wants',
          learnContent: {
            title: 'Needs vs. Wants',
            paragraphs: [
              'A need is something you MUST have to live. 🏠 You need food to eat, water to drink, clothes to wear, and a home to live in. Without these things, you cannot survive!',
              'A want is something you would LIKE to have but do not need to survive. 🎮 Toys, candy, video games, and fancy shoes are wants. They are nice to have, but you can live without them.',
              'It is important to know the difference! When families spend money, they buy needs first. After the needs are taken care of, they can use leftover money for wants. Being smart about needs and wants helps families take care of everyone! 💰'
            ],
            keyPoint: 'Needs are things you must have to survive. Wants are things you would like to have but do not need.',
            examples: [
              { visual: '🍎', text: 'Food', label: 'need' },
              { visual: '🎮', text: 'Video Game', label: 'want' },
              { visual: '🏠', text: 'A Home', label: 'need' },
              { visual: '🍭', text: 'Candy', label: 'want' }
            ],
            tip: 'Ask yourself: "Can I live without this?" If yes, it is a want. If no, it is a need!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these into needs or wants!',
            categories: [
              {
                name: 'Needs',
                items: [
                  { value: 'water', text: 'Water' },
                  { value: 'clothes', text: 'Clothes' }
                ]
              },
              {
                name: 'Wants',
                items: [
                  { value: 'toy', text: 'New toy' },
                  { value: 'candy', text: 'Candy bar' }
                ]
              }
            ],
            items: [
              { value: 'water', text: 'Water', icon: '💧' },
              { value: 'toy', text: 'New toy', icon: '🧸' },
              { value: 'clothes', text: 'Clothes', icon: '👕' },
              { value: 'candy', text: 'Candy bar', icon: '🍫' }
            ]
          },
          checkQuestions: [
            { question: 'What is a need?', options: ['Something fun', 'Something you must have to live', 'Something expensive', 'A type of toy'], correct: 1 },
            { question: 'Which of these is a WANT?', options: ['Food', 'Water', 'A home', 'A video game'], correct: 3 },
            { question: 'What should families buy first?', options: ['Toys', 'Candy', 'Needs', 'Games'], correct: 2 }
          ]
        },
        // --- Lesson 20.2: Goods and Services ---
        {
          id: 'lesson-20-2',
          number: '20.2',
          title: 'Goods and Services',
          learnContent: {
            title: 'Goods and Services',
            paragraphs: [
              'Goods are things you can touch, hold, and buy. 📦 A toy, a book, food, a shirt — these are all goods! Goods are made or grown by people. Farmers grow food, and factories make toys.',
              'Services are jobs that people do for others. 💇 A haircut is a service. When a doctor checks your health, that is a service. When a teacher helps you learn, that is a service too!',
              'We use money 💵 to pay for both goods and services. When you buy an apple at the store, you are paying for a good. When you go to the dentist, you are paying for a service. Both goods and services help us every day!'
            ],
            keyPoint: 'Goods are things you can buy and hold. Services are helpful jobs people do for you.',
            examples: [
              { visual: '🍎', text: 'Apple', label: 'good' },
              { visual: '💇', text: 'Haircut', label: 'service' },
              { visual: '📚', text: 'Book', label: 'good' },
              { visual: '👩‍⚕️', text: 'Doctor visit', label: 'service' }
            ],
            tip: 'If you can hold it in your hand, it is a good. If someone does it for you, it is a service!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these into goods or services!',
            categories: [
              {
                name: 'Goods',
                items: [
                  { value: 'shoes', text: 'Shoes' },
                  { value: 'pizza', text: 'Pizza' }
                ]
              },
              {
                name: 'Services',
                items: [
                  { value: 'haircut', text: 'Haircut' },
                  { value: 'bus-ride', text: 'Bus ride' }
                ]
              }
            ],
            items: [
              { value: 'shoes', text: 'Shoes', icon: '👟' },
              { value: 'haircut', text: 'Haircut', icon: '💇' },
              { value: 'pizza', text: 'Pizza', icon: '🍕' },
              { value: 'bus-ride', text: 'Bus ride', icon: '🚌' }
            ]
          },
          checkQuestions: [
            { question: 'What is a good?', options: ['A job someone does for you', 'Something you can touch and buy', 'A type of weather', 'A place to live'], correct: 1 },
            { question: 'Which of these is a service?', options: ['A toy', 'A book', 'A haircut', 'A banana'], correct: 2 },
            { question: 'What do we use to pay for goods and services?', options: ['Stickers', 'Money', 'Crayons', 'Rocks'], correct: 1 }
          ]
        },
        // --- Lesson 20.3: Jobs & Work ---
        {
          id: 'lesson-20-3',
          number: '20.3',
          title: 'Jobs & Work',
          learnContent: {
            title: 'Jobs and Work',
            paragraphs: [
              'A job is work that a person does to earn money. 💼 People use the money they earn to buy the things they need and want. There are SO many different kinds of jobs!',
              'Some people work indoors, like office workers 🖥️, teachers 👩‍🏫, and chefs 👨‍🍳. Other people work outdoors, like farmers 🌾, construction workers 👷, and mail carriers 📬. Every job is important!',
              'When you grow up, you will choose a job too! Think about what you are good at and what you like to do. 🤔 If you love animals, you could be a veterinarian. If you love building things, you could be an engineer. The choice is yours!'
            ],
            keyPoint: 'People work at jobs to earn money so they can buy the things they need and want.',
            examples: [
              { visual: '👩‍🏫', text: 'Teacher', label: 'works in school' },
              { visual: '👨‍🍳', text: 'Chef', label: 'cooks food' },
              { visual: '👷', text: 'Builder', label: 'builds things' },
              { visual: '👩‍⚕️', text: 'Vet', label: 'helps animals' }
            ],
            tip: 'Start thinking about what job you might want! What do you love to do?'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each job to what they do!',
            pairs: [
              { id: 'pair1', left: 'Chef', right: 'Cooks food', leftIcon: '👨‍🍳', rightIcon: '🍳' },
              { id: 'pair2', left: 'Farmer', right: 'Grows crops', leftIcon: '🌾', rightIcon: '🥕' },
              { id: 'pair3', left: 'Vet', right: 'Helps animals', leftIcon: '👩‍⚕️', rightIcon: '🐶' },
              { id: 'pair4', left: 'Builder', right: 'Builds houses', leftIcon: '👷', rightIcon: '🏠' }
            ]
          },
          checkQuestions: [
            { question: 'Why do people have jobs?', options: ['To play all day', 'To earn money', 'To sleep more', 'To eat candy'], correct: 1 },
            { question: 'What does a chef do?', options: ['Builds houses', 'Drives a bus', 'Cooks food', 'Fixes cars'], correct: 2 },
            { question: 'Which person works outdoors?', options: ['Office worker', 'Librarian', 'Farmer', 'Computer programmer'], correct: 2 }
          ]
        },
        // --- Lesson 20.4: Saving & Spending ---
        {
          id: 'lesson-20-4',
          number: '20.4',
          title: 'Saving & Spending',
          learnContent: {
            title: 'Saving and Spending Money',
            paragraphs: [
              'Spending money means using your money to buy things. 🛒 When you buy a toy or a snack, you are spending money. Once you spend it, the money is gone!',
              'Saving money means keeping your money to use later. 🐷 You can put money in a piggy bank or a savings account at a bank. Saving helps you buy bigger things later — like a bicycle or a special toy!',
              'Smart shoppers think before they spend! 🤔 They ask: "Do I really need this? Can I wait and save for something better?" It is good to save some money and spend some money. That is called being responsible with money! ⚖️'
            ],
            keyPoint: 'Spending is using money to buy things now. Saving is keeping money to use later.',
            examples: [
              { visual: '🛒', text: 'Buying lunch', label: 'spending' },
              { visual: '🐷', text: 'Piggy bank', label: 'saving' },
              { visual: '💳', text: 'Buying a toy', label: 'spending' },
              { visual: '🏦', text: 'Bank account', label: 'saving' }
            ],
            tip: 'A good plan is to save half of any money you get and spend the other half!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the actions of SAVING money green, and SPENDING money red!',
            categories: [
              { name: 'Saving Money', color: 'green', class: 'color-green' },
              { name: 'Spending Money', color: 'red', class: 'color-red' }
            ],
            items: [
              { text: 'Putting coins in piggy bank', category: 'Saving Money' },
              { text: 'Buying a new video game', category: 'Spending Money' },
              { text: 'Depositing money in a bank', category: 'Saving Money' },
              { text: 'Buying ice cream at school', category: 'Spending Money' }
            ],
            explanation: 'Saving means keeping money for later, and spending means buying things now!'
          },
          checkQuestions: [
            { question: 'What does spending money mean?', options: ['Keeping money for later', 'Using money to buy things', 'Throwing money away', 'Hiding money'], correct: 1 },
            { question: 'What is a piggy bank used for?', options: ['Playing', 'Saving money', 'Cooking', 'Drawing'], correct: 1 },
            { question: 'What does a smart shopper do?', options: ['Buys everything they see', 'Thinks before spending', 'Never buys anything', 'Throws money away'], correct: 1 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'Which is a NEED?', options: ['Video game', 'Candy', 'Toy robot', 'Food'], correct: 3, type: 'multiple-choice' },
        { question: 'Which is a WANT?', options: ['Water', 'A home', 'A new toy', 'Clothes'], correct: 2, type: 'multiple-choice' },
        { question: 'What is a good?', options: ['A job someone does', 'Something you can touch and buy', 'A place to live', 'A type of weather'], correct: 1, type: 'multiple-choice' },
        { question: 'Which is a service?', options: ['A ball', 'A sandwich', 'A doctor visit', 'A book'], correct: 2, type: 'multiple-choice' },
        { question: 'Why do people have jobs?', options: ['To play', 'To earn money', 'To sleep', 'To eat candy'], correct: 1, type: 'multiple-choice' },
        { question: 'What does saving money mean?', options: ['Spending it all', 'Keeping it for later', 'Throwing it away', 'Giving it all away'], correct: 1, type: 'multiple-choice' },
        { question: 'What does a farmer do?', options: ['Cooks food', 'Grows crops', 'Drives a taxi', 'Fixes computers'], correct: 1, type: 'multiple-choice' },
        { question: 'Where can you save money?', options: ['In a piggy bank', 'In the trash', 'Under a rock outside', 'In the ocean'], correct: 0, type: 'multiple-choice' },
        { question: 'What should families buy first?', options: ['Toys', 'Games', 'Needs like food and shelter', 'Candy'], correct: 2, type: 'multiple-choice' },
        { question: 'What does a smart shopper do?', options: ['Buys everything right away', 'Thinks before spending money', 'Never goes shopping', 'Only buys candy'], correct: 1, type: 'multiple-choice' }
      ]
    }
  ]
};
