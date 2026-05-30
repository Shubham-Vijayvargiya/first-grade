window.AppData = window.AppData || {};
window.AppData.ela = {
  id: 'ela',
  name: 'Word Arena',
  icon: '📚',
  description: 'Reading, writing, phonics, and grammar adventures!',
  color: 'ela',
  modules: [
    // ==================== MODULE 1: Phonics & Word Decoding ====================
    {
      id: 'module-1',
      number: 1,
      title: 'Phonics & Word Decoding',
      subject: 'ela',
      icon: '🔤',
      badgeId: 'phonics-star',
      badgeName: 'Phonics Star',
      badgeIcon: '⭐',
      description: 'Master consonant sounds, short and long vowels, blends, digraphs, and rules!',
      lessons: [
        {
          id: 'lesson-1-1',
          number: '1.1',
          title: 'Consonant Sounds',
          learnContent: {
            title: 'Learning Consonant Sounds!',
            paragraphs: [
              'Consonants are letters like B, C, D, F, G, and more. Each consonant makes a special sound that helps us build words! 🔤',
              'For example, the letter B makes the /b/ sound, like in Bat 🦇. The letter C makes the /k/ sound, like in Cat 🐱. The letter D makes the /d/ sound, like in Dog 🐶.',
              'When we put consonant sounds together with vowel sounds, we can read words! Let\'s practice finding beginning consonant sounds in words.'
            ],
            keyPoint: 'Consonants are letters that make specific sounds at the beginning, middle, or end of words.',
            examples: [
              { visual: '🐶', text: 'Dog starts with D', label: '/d/ sound' },
              { visual: '🐱', text: 'Cat starts with C', label: '/k/ sound' },
              { visual: '🦇', text: 'Bat starts with B', label: '/b/ sound' },
              { visual: '🦊', text: 'Fox starts with F', label: '/f/ sound' }
            ],
            tip: 'Say the word slowly and listen to the very first sound your mouth makes!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort the items by their beginning consonant sounds (/b/ or /c/)!',
            categories: [
              {
                name: 'Starts with B',
                items: [
                  { value: 'ball', text: 'Ball' },
                  { value: 'banana', text: 'Banana' }
                ]
              },
              {
                name: 'Starts with C',
                items: [
                  { value: 'cup', text: 'Cup' },
                  { value: 'car', text: 'Car' }
                ]
              }
            ],
            items: [
              { value: 'ball', text: 'Ball', icon: '⚽' },
              { value: 'cup', text: 'Cup', icon: '🥛' },
              { value: 'banana', text: 'Banana', icon: '🍌' },
              { value: 'car', text: 'Car', icon: '🚗' }
            ]
          },
          checkQuestions: [
            { question: 'What sound does the letter D make at the start of "Dog"?', options: ['/b/', '/d/', '/m/', '/s/'], correct: 1 },
            { question: 'Which word starts with the /f/ sound?', options: ['Fox', 'Cat', 'Hat', 'Pig'], correct: 0 },
            { question: 'What letter makes the starting sound in "Pig"?', options: ['B', 'P', 'T', 'G'], correct: 1 }
          ]
        },
        {
          id: 'lesson-1-2',
          number: '1.2',
          title: 'Short Vowel Sounds',
          learnContent: {
            title: 'Meet the Short Vowels!',
            paragraphs: [
              'Vowels are very special letters: A, E, I, O, and U. Every single English word must have at least one vowel! 🌟',
              'Short vowels make quick, simple sounds: short A says /a/ as in Cat 🐱; short E says /e/ as in Hen 🐔; short I says /i/ as in Pig 🐷; short O says /o/ as in Dog 🐶; short U says /u/ as in Sun ☀️.',
              'Practice making these sounds with your mouth wide open. Let\'s find short vowel sounds inside simple three-letter words (CVC words)!'
            ],
            keyPoint: 'Short vowels make the quick sounds /a/, /e/, /i/, /o/, and /u/ in short words.',
            examples: [
              { visual: '🍎', text: 'Apple', label: 'short A sound' },
              { visual: '🥚', text: 'Egg', label: 'short E sound' },
              { visual: '🐟', text: 'Fish', label: 'short I sound' },
              { visual: '🐙', text: 'Octopus', label: 'short O sound' }
            ],
            tip: 'Place your hand under your chin. Your jaw drops when you make short vowel sounds!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these words into Short A or Short I words!',
            categories: [
              {
                name: 'Short A (/a/)',
                items: [
                  { value: 'cat', text: 'Cat' },
                  { value: 'hat', text: 'Hat' }
                ]
              },
              {
                name: 'Short I (/i/)',
                items: [
                  { value: 'pig', text: 'Pig' },
                  { value: 'wig', text: 'Wig' }
                ]
              }
            ],
            items: [
              { value: 'cat', text: 'Cat', icon: '🐱' },
              { value: 'pig', text: 'Pig', icon: '🐷' },
              { value: 'hat', text: 'Hat', icon: '🎩' },
              { value: 'wig', text: 'Wig', icon: '💇' }
            ]
          },
          checkQuestions: [
            { question: 'Which vowel is in the middle of the word "Sun"?', options: ['A', 'E', 'O', 'U'], correct: 3 },
            { question: 'What is the short vowel sound in "Hen"?', options: ['/a/', '/e/', '/i/', '/u/'], correct: 1 },
            { question: 'Which of these is a short O word?', options: ['Hat', 'Pig', 'Dog', 'Bug'], correct: 2 }
          ]
        },
        {
          id: 'lesson-1-3',
          number: '1.3',
          title: 'Long Vowel Sounds',
          learnContent: {
            title: 'Vowels Say Their Names!',
            paragraphs: [
              'Vowels can also make long sounds. A long vowel sound is when the letter says its own name! 🗣️',
              'Long A says "A" as in Cake 🎂. Long E says "E" as in Tree 🌲. Long I says "I" as in Kite 🪁. Long O says "O" as in Rope 🪢. Long U says "U" as in Glue 🧪.',
              'Long vowels usually happen when two vowels work together or when a magic "e" is at the end of the word.'
            ],
            keyPoint: 'Long vowels sound exactly like the name of the letter itself.',
            examples: [
              { visual: '🎂', text: 'Cake', label: 'Long A' },
              { visual: '🌲', text: 'Tree', label: 'Long E' },
              { visual: '🪁', text: 'Kite', label: 'Long I' },
              { visual: '🏠', text: 'Home', label: 'Long O' }
            ],
            tip: 'If you hear the letter say its own name in a word, it is a long vowel!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Tap the missing long vowel letters to complete the words!',
            cards: [
              { word: 'CAKE', text: 'C _ K E', missing: 'A', options: ['A', 'E', 'O'], icon: '🎂' },
              { word: 'KITE', text: 'K _ T E', missing: 'I', options: ['I', 'A', 'E'], icon: '🪁' },
              { word: 'ROPE', text: 'R _ P E', missing: 'O', options: ['O', 'I', 'U'], icon: '🪢' }
            ],
            explanation: 'In Cake, Kite, and Rope, long vowels say their own name!'
          },
          checkQuestions: [
            { question: 'Which word contains a long A sound?', options: ['Cat', 'Hat', 'Cake', 'Map'], correct: 2 },
            { question: 'What is the vowel sound in the word "Tree"?', options: ['Short E', 'Long E', 'Short I', 'Long A'], correct: 1 },
            { question: 'Which of these words has a long O sound?', options: ['Dog', 'Rope', 'Hot', 'Pot'], correct: 1 }
          ]
        },
        {
          id: 'lesson-1-4',
          number: '1.4',
          title: 'Consonant Digraphs',
          learnContent: {
            title: 'Two Letters, One Sound!',
            paragraphs: [
              'A consonant digraph is when two consonants stand next to each other to make a brand-new sound! 🤝',
              'Let\'s learn the main digraphs: SH says /sh/ as in Ship 🚢; CH says /ch/ as in Chair 🪑; TH says /th/ as in Thumb 👍; WH says /wh/ as in Whale 🐋.',
              'These digraphs can be at the beginning of a word or at the end, like the /sh/ at the end of Fish 🐟!'
            ],
            keyPoint: 'Consonant digraphs combine two letters to make a single new sound: sh, ch, th, wh.',
            examples: [
              { visual: '🚢', text: 'Ship starts with SH', label: '/sh/ sound' },
              { visual: '🪑', text: 'Chair starts with CH', label: '/ch/ sound' },
              { visual: '👍', text: 'Thumb starts with TH', label: '/th/ sound' },
              { visual: '🐋', text: 'Whale starts with WH', label: '/wh/ sound' }
            ],
            tip: 'Put your finger to your lips for "sh" to remember the quiet /sh/ sound!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each digraph to the correct picture!',
            pairs: [
              { id: 'pair1', left: 'SH', right: 'Ship', leftIcon: 'sh', rightIcon: '🚢' },
              { id: 'pair2', left: 'CH', right: 'Chair', leftIcon: 'ch', rightIcon: '🪑' },
              { id: 'pair3', left: 'TH', right: 'Thumb', leftIcon: 'th', rightIcon: '👍' },
              { id: 'pair4', left: 'WH', right: 'Whale', leftIcon: 'wh', rightIcon: '🐋' }
            ]
          },
          checkQuestions: [
            { question: 'What digraph is at the beginning of "Chair"?', options: ['sh', 'ch', 'th', 'wh'], correct: 1 },
            { question: 'Which word starts with the /th/ sound?', options: ['Ship', 'Whale', 'Thin', 'Cat'], correct: 2 },
            { question: 'What digraph is at the end of the word "Fish"?', options: ['ch', 'th', 'sh', 'ck'], correct: 2 }
          ]
        },
        {
          id: 'lesson-1-5',
          number: '1.5',
          title: 'Consonant Blends',
          learnContent: {
            title: 'Blending Sounds Together!',
            paragraphs: [
              'Consonant blends are two or three consonants next to each other, but you can still hear each letter\'s sound blended smoothly together! 🤝',
              'For example, in Frog 🐸, the letters F and R make /f/ and /r/ which blend into /fr/. In Star ⭐, S and T blend into /st/.',
              'Common blends include: L-blends (bl, cl, fl, gl), R-blends (br, cr, dr, fr, gr), and S-blends (st, sp, sn, sm).'
            ],
            keyPoint: 'Consonant blends are letters that work together but keep their individual sounds.',
            examples: [
              { visual: '🐸', text: 'Frog', label: '/fr/ blend' },
              { visual: '⭐', text: 'Star', label: '/st/ blend' },
              { visual: '🌳', text: 'Tree', label: '/tr/ blend' },
              { visual: '🦀', text: 'Crab', label: '/cr/ blend' }
            ],
            tip: 'Try saying each sound slowly first, then run them together fast!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these words by their beginning blend: L-blends or R-blends!',
            categories: [
              {
                name: 'L-blends (bl, cl, fl)',
                items: [
                  { value: 'blue', text: 'Blue' },
                  { value: 'frog', text: 'Fly' } // wait, fly has fl
                ]
              },
              {
                name: 'R-blends (br, cr, fr)',
                items: [
                  { value: 'frog', text: 'Frog' },
                  { value: 'crab', text: 'Crab' }
                ]
              }
            ],
            items: [
              { value: 'blue', text: 'Blue', icon: '🔵' },
              { value: 'frog', text: 'Frog', icon: '🐸' },
              { value: 'crab', text: 'Crab', icon: '🦀' },
              { value: 'fly', text: 'Fly', icon: '🪰' }
            ]
          },
          checkQuestions: [
            { question: 'What blend is at the beginning of the word "Star"?', options: ['bl', 'st', 'cr', 'sn'], correct: 1 },
            { question: 'Which word starts with an L-blend?', options: ['Frog', 'Star', 'Blue', 'Tree'], correct: 2 },
            { question: 'What sounds are blended at the start of "Crab"?', options: ['/c/ and /l/', '/s/ and /t/', '/c/ and /r/', '/f/ and /r/'], correct: 2 }
          ]
        },
        {
          id: 'lesson-1-6',
          number: '1.6',
          title: 'Silent-e Rule',
          learnContent: {
            title: 'The Magic / Silent E!',
            paragraphs: [
              'The Silent E (or Magic E) is a special letter that sits at the end of a word. It does not make any sound itself, but it does magic to the other vowel! 🪄',
              'The Magic E tells the middle vowel to "say its own name" (make its long sound).',
              'Let\'s watch the magic: Cap (short A) + E = Cape (long A) 🧥! Pin (short I) + E = Pine (long I) 🌲! Cub (short U) + E = Cube (long U) 🧊!'
            ],
            keyPoint: 'Silent E makes the middle vowel say its name (long sound) and remains quiet at the end.',
            examples: [
              { visual: '🧥', text: 'Cap → Cape', label: 'Magic E changes sound' },
              { visual: '🌲', text: 'Pin → Pine', label: 'Magic E changes sound' },
              { visual: '🧊', text: 'Cub → Cube', label: 'Magic E changes sound' },
              { visual: '🪁', text: 'Kit → Kite', label: 'Magic E changes sound' }
            ],
            tip: 'The Silent E is quiet! It points its magic wand back to make the first vowel long.'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Find the missing Silent-E to complete the long vowel words!',
            cards: [
              { word: 'CAPE', text: 'C A P _', missing: 'E', options: ['E', 'A', 'O'], icon: '🧥' },
              { word: 'PINE', text: 'P I N _', missing: 'E', options: ['E', 'I', 'U'], icon: '🌲' },
              { word: 'CUBE', text: 'C U B _', missing: 'E', options: ['E', 'O', 'Y'], icon: '🧊' }
            ],
            explanation: 'The Silent E goes at the end of the word to make the middle vowel say its long sound!'
          },
          checkQuestions: [
            { question: 'How does the word "Can" change when you add a Silent E?', options: ['It stays Can', 'It becomes Cane', 'It becomes Con', 'It becomes Cana'], correct: 1 },
            { question: 'What does the Magic E do to the vowel in the middle of a word?', options: ['Makes it silent', 'Makes it say its name (long)', 'Makes it short', 'Changes it to a consonant'], correct: 1 },
            { question: 'Which word uses the Silent E rule?', options: ['Cat', 'Hen', 'Cake', 'Pig'], correct: 2 }
          ]
        },
        {
          id: 'lesson-1-7',
          number: '1.7',
          title: 'Common Vowel Teams',
          learnContent: {
            title: 'When Vowels Go Walking!',
            paragraphs: [
              'Vowel teams are two vowels that stand next to each other. When two vowels go walking, the first one does the talking! It says its long sound (its name), and the second vowel stays quiet. 🚶‍♂️',
              'For example, in Rain (AI team), the A says "A" and the I is quiet. In Boat ⛵ (OA team), the O says "O" and the A is quiet. In Tree 🌲 (EE team), the first E talks and the second is quiet.',
              'Common vowel teams include: ai (rain), ea (leaf 🍃), oa (boat), ee (bee 🐝), and ay (play 🎮).'
            ],
            keyPoint: 'Vowel teams are two vowels next to each other where the first vowel makes its long sound.',
            examples: [
              { visual: '🌧️', text: 'Rain', label: 'AI team' },
              { visual: '⛵', text: 'Boat', label: 'OA team' },
              { visual: '🍃', text: 'Leaf', label: 'EA team' },
              { visual: '🐝', text: 'Bee', label: 'EE team' }
            ],
            tip: 'Remember the rhyme: "When two vowels go walking, the first one does the talking!"'
          },
          activity: {
            type: 'matching',
            instruction: 'Match the vowel team to the correct word and picture!',
            pairs: [
              { id: 'pair1', left: 'AI', right: 'Rain', leftIcon: 'ai', rightIcon: '🌧️' },
              { id: 'pair2', left: 'OA', right: 'Boat', leftIcon: 'oa', rightIcon: '⛵' },
              { id: 'pair3', left: 'EA', right: 'Leaf', leftIcon: 'ea', rightIcon: '🍃' },
              { id: 'pair4', left: 'EE', right: 'Bee', leftIcon: 'ee', rightIcon: '🐝' }
            ]
          },
          checkQuestions: [
            { question: 'Which vowel team is in the word "Boat"?', options: ['ai', 'ea', 'ee', 'oa'], correct: 3 },
            { question: 'What sound does the Vowel Team "EE" make in "Tree"?', options: ['Short E', 'Long E', 'Short I', 'Long A'], correct: 1 },
            { question: 'Which word contains the vowel team "EA"?', options: ['Red', 'Leaf', 'Bed', 'Cake'], correct: 1 }
          ]
        },
        {
          id: 'lesson-1-8',
          number: '1.8',
          title: 'Inflectional Endings',
          learnContent: {
            title: 'Adding Endings to Words!',
            paragraphs: [
              'We can add special endings to words to change their meaning! These are called inflectional endings. ➕',
              'Adding -s makes a word plural (more than one): cat 🐱 → cats 🐱🐱.',
              'Adding -ed means it happened in the past: jump 🦘 → jumped. Adding -ing means it is happening right now: play 🎮 → playing.'
            ],
            keyPoint: 'Inflectional endings like -s, -ed, and -ing change when or how many things are happening.',
            examples: [
              { visual: '🐱🐱', text: 'Cats', label: 'more than one (-s)' },
              { visual: '🏃', text: 'Jumped', label: 'happened in the past (-ed)' },
              { visual: '✍️', text: 'Writing', label: 'happening now (-ing)' },
              { visual: '🐶🐶', text: 'Dogs', label: 'plural noun (-s)' }
            ],
            tip: 'Look at the end of the word to find out if it is about one, many, past, or present!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Tap the correct inflectional endings to complete the words!',
            cards: [
              { word: 'CATS', text: 'C A T _', missing: 'S', options: ['S', 'ED', 'ING'], icon: '🐱' },
              { word: 'JUMPED', text: 'J U M P _ _', missing: 'ED', options: ['ED', 'ING', 'S'], icon: '🏃' },
              { word: 'PLAYING', text: 'P L A Y _ _ _', missing: 'ING', options: ['ING', 'ED', 'S'], icon: '🎮' }
            ],
            explanation: 'Adding -s makes a noun plural, -ed means it happened in the past, and -ing means it is happening now!'
          },
          checkQuestions: [
            { question: 'What does adding "-s" to "Dog" mean?', options: ['The dog is running', 'More than one dog', 'The dog is sleeping', 'A small dog'], correct: 1 },
            { question: 'Which word describes action happening right now?', options: ['Walk', 'Walked', 'Walking', 'Walks'], correct: 2 },
            { question: 'What does the ending "-ed" stand for?', options: ['Something in the past', 'Something happening now', 'More than one', 'A question'], correct: 0 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'Which word begins with the consonant sound B?', options: ['Cat', 'Dog', 'Ball', 'Sun'], correct: 2, type: 'multiple-choice' },
        { question: 'What is the short vowel sound in the word "Cat"?', options: ['/a/', '/e/', '/i/', '/o/'], correct: 0, type: 'multiple-choice' },
        { question: 'Which word has a long vowel sound?', options: ['Hat', 'Cake', 'Pig', 'Sun'], correct: 1, type: 'multiple-choice' },
        { question: 'What digraph starts the word "Ship"?', options: ['ch', 'sh', 'th', 'wh'], correct: 1, type: 'multiple-choice' },
        { question: 'Which word starts with the blend "st"?', options: ['Blue', 'Frog', 'Star', 'Tree'], correct: 2, type: 'multiple-choice' },
        { question: 'What does the magic "E" do in the word "Kite"?', options: ['Makes the E sound loud', 'Makes the I say its name (long I)', 'Makes the K silent', 'It does nothing'], correct: 1, type: 'multiple-choice' },
        { question: 'Which vowel team is in the word "Rain"?', options: ['ee', 'ea', 'oa', 'ai'], correct: 3, type: 'multiple-choice' },
        { question: 'What ending do we add to "play" to show we did it yesterday?', options: ['-s', '-ed', '-ing', '-er'], correct: 1, type: 'multiple-choice' },
        { question: 'Which of these is a short I word?', options: ['Pig', 'Pine', 'Pie', 'Play'], correct: 0, type: 'multiple-choice' },
        { question: 'What do the 2 letters in a digraph make?', options: ['Two sounds', 'One new sound', 'No sound', 'A long vowel sound'], correct: 1, type: 'multiple-choice' }
      ]
    },

    // ==================== MODULE 2: Sight Words & Vocabulary ====================
    {
      id: 'module-2',
      number: 2,
      title: 'Sight Words & Vocabulary',
      subject: 'ela',
      icon: '👁️',
      badgeId: 'word-wizard',
      badgeName: 'Word Wizard',
      badgeIcon: '📖',
      description: 'Master Dolch sight words, compound words, context clues, and word families!',
      lessons: [
        {
          id: 'lesson-2-1',
          number: '2.1',
          title: 'Dolch Sight Words Set 1',
          learnContent: {
            title: 'Sight Words Set 1!',
            paragraphs: [
              'Sight words are words that appear very often in books. We need to recognize them in a snap, just by looking at them! 👁️',
              'Set 1 words: the, of, and, to, a, in, is, you. These words are the building blocks of almost every sentence.',
              'Since these words do not always follow regular phonics rules, we practice reading them by sight!'
            ],
            keyPoint: 'Sight words are common words we should know instantly without sounding them out.',
            examples: [
              { visual: '📖', text: 'the', label: 'sight word' },
              { visual: '➕', text: 'and', label: 'sight word' },
              { visual: '👉', text: 'you', label: 'sight word' },
              { visual: '📍', text: 'in', label: 'sight word' }
            ],
            tip: 'Take a picture of the word with your eyes to save it in your brain!'
          },
                    activity: {
            type: 'word-search',
            instruction: 'Find the sight words from Set 1 in the word search grid!',
            grid: [
              ['T', 'H', 'E', 'X', 'Y', 'Z'],
              ['O', 'F', 'A', 'N', 'D', 'W'],
              ['T', 'O', 'P', 'Q', 'R', 'S'],
              ['Y', 'O', 'U', 'I', 'N', 'K'],
              ['A', 'B', 'C', 'I', 'S', 'D'],
              ['E', 'F', 'G', 'H', 'I', 'J']
            ],
            words: ['the', 'of', 'and', 'to', 'a', 'in', 'is', 'you'],
            solutions: [
              [0,0], [0,1], [0,2],
              [1,0], [1,1],
              [1,2], [1,3], [1,4],
              [2,0], [2,1],
              [3,0], [3,1], [3,2],
              [3,3], [3,4],
              [4,3], [4,4],
              [4,0]
            ],
            explanation: 'Great job finding the sight words! These are words we see very often when reading.'
          },
          checkQuestions: [
            { question: 'Which word is a common sight word?', options: ['the', 'frog', 'jump', 'skip'], correct: 0 },
            { question: 'Complete the phrase: "A cup _____ water."', options: ['and', 'you', 'of', 'the'], correct: 2 },
            { question: 'Which word links "cats" and "dogs" in: "I have cats ____ dogs"?', options: ['you', 'and', 'the', 'of'], correct: 1 }
          ]
        },
        {
          id: 'lesson-2-2',
          number: '2.2',
          title: 'Dolch Sight Words Set 2',
          learnContent: {
            title: 'More Sight Words!',
            paragraphs: [
              'Let\'s build our sight word vocabulary even bigger with Set 2! 🧱',
              'Set 2 words: that, it, he, was, for, on, are, as. These words help describe people, places, and actions.',
              'Recognizing these words quickly will make your reading smoother and faster!'
            ],
            keyPoint: 'Learning more sight words helps you read whole sentences without stopping.',
            examples: [
              { visual: '👦', text: 'he', label: 'he is a boy' },
              { visual: '🕰️', text: 'was', label: 'happened before' },
              { visual: '📦', text: 'on', label: 'on the box' },
              { visual: '👥', text: 'are', label: 'we are happy' }
            ],
            tip: 'Practice reading these words in short sentences to see how they work!'
          },
                    activity: {
            type: 'word-search',
            instruction: 'Find the sight words from Set 2 in the word search grid!',
            grid: [
              ['T', 'H', 'A', 'T', 'X', 'Y'],
              ['I', 'T', 'A', 'W', 'A', 'S'],
              ['H', 'E', 'B', 'F', 'O', 'R'],
              ['O', 'N', 'C', 'A', 'R', 'E'],
              ['A', 'S', 'D', 'E', 'F', 'G'],
              ['H', 'I', 'J', 'K', 'L', 'M']
            ],
            words: ['that', 'it', 'he', 'was', 'for', 'on', 'are', 'as'],
            solutions: [
              [0,0], [0,1], [0,2], [0,3],
              [1,0], [1,1],
              [1,3], [1,4], [1,5],
              [2,0], [2,1],
              [2,3], [2,4], [2,5],
              [3,0], [3,1],
              [3,3], [3,4], [3,5],
              [4,0], [4,1]
            ],
            explanation: 'Amazing! You found all the sight words from Set 2!'
          },
          checkQuestions: [
            { question: 'Complete the sentence: "_______ is a very happy boy."', options: ['It', 'He', 'Are', 'As'], correct: 1 },
            { question: 'Which word fits: "The book is _____ the table"?', options: ['was', 'on', 'are', 'he'], correct: 1 },
            { question: 'Complete the sentence: "We ______ learning English today."', options: ['was', 'are', 'it', 'he'], correct: 1 }
          ]
        },
        {
          id: 'lesson-2-3',
          number: '2.3',
          title: 'Dolch Sight Words Set 3',
          learnContent: {
            title: 'Sight Words Set 3!',
            paragraphs: [
              'Let\'s finish our core sight words with Set 3! 🌟',
              'Set 3 words: with, his, they, I, at, be, this, have. These words connect ideas and show who owns things.',
              'Once you master these, you will know more than half of the words in most storybooks!'
            ],
            keyPoint: 'Dolch Set 3 includes words that connect ideas, show possession, or identify groups.',
            examples: [
              { visual: '👥', text: 'they', label: 'they are friends' },
              { visual: '🤝', text: 'with', label: 'play with me' },
              { visual: '🙋‍♂️', text: 'I', label: 'I am a reader' },
              { visual: '🎁', text: 'have', label: 'I have a gift' }
            ],
            tip: 'Try writing sentences using words from Set 1, 2, and 3 together!'
          },
                    activity: {
            type: 'word-search',
            instruction: 'Find the sight words from Set 3 in the word search grid!',
            grid: [
              ['W', 'I', 'T', 'H', 'X', 'Y'],
              ['H', 'I', 'S', 'T', 'H', 'E'],
              ['T', 'H', 'E', 'Y', 'A', 'B'],
              ['I', 'A', 'T', 'B', 'E', 'C'],
              ['T', 'H', 'I', 'S', 'D', 'E'],
              ['H', 'A', 'V', 'E', 'F', 'G']
            ],
            words: ['with', 'his', 'they', 'I', 'at', 'be', 'this', 'have'],
            solutions: [
              [0,0], [0,1], [0,2], [0,3],
              [1,0], [1,1], [1,2],
              [2,0], [2,1], [2,2], [2,3],
              [3,0],
              [3,1], [3,2],
              [3,3], [3,4],
              [4,0], [4,1], [4,2], [4,3],
              [5,0], [5,1], [5,2], [5,3]
            ],
            explanation: 'Wonderful! You successfully completed the Set 3 sight words search!'
          },
          checkQuestions: [
            { question: 'Complete the sentence: "I play ______ my friends."', options: ['at', 'with', 'be', 'his'], correct: 1 },
            { question: 'Which word means more than one person?', options: ['I', 'They', 'This', 'At'], correct: 1 },
            { question: 'Complete the sentence: "I ______ a red bicycle."', options: ['have', 'be', 'his', 'at'], correct: 0 }
          ]
        },
        {
          id: 'lesson-2-4',
          number: '2.4',
          title: 'Context Clues',
          learnContent: {
            title: 'Be a Word Detective!',
            paragraphs: [
              'When you see a word you do not know, do not panic! You can use context clues. These are clues in the rest of the sentence that help you guess what the word means. 🔍',
              'For example: "The sky was dark and cloudy, so I grabbed my umbrella." The clues "dark, cloudy, umbrella" help us know it is going to rain!',
              'Using pictures and other words is a superpower that helps you understand new stories.'
            ],
            keyPoint: 'Context clues are details in a sentence or picture that help you find the meaning of a new word.',
            examples: [
              { visual: '🔍', text: 'Clues', label: 'words around the target' },
              { visual: '☔', text: 'Umbrella', label: 'clue for rain' },
              { visual: '😋', text: 'Delicious', label: 'clue for good food' },
              { visual: '💤', text: 'Fatigued', label: 'clue for tired' }
            ],
            tip: 'Read the whole sentence first, then think about what word would make sense in that spot!'
          },
                    activity: {
            type: 'read-fluency',
            instruction: 'Read the short story with context clues 3 times out loud!',
            passage: 'Leo the Lion has a tiny toy. It is so small that it can fit in a little teacup. He plays with the tiny toy on his soft rug every single day.',
            explanation: 'Reading stories multiple times helps build fluency and comprehension!'
          },
          checkQuestions: [
            { question: 'If someone is "sobbing because they dropped their ice cream," what does sobbing mean?', options: ['Laughing', 'Crying', 'Singing', 'Running'], correct: 1 },
            { question: 'In: "The sun was bright and hot, so we swam in the pool." What season is it likely?', options: ['Winter', 'Summer', 'Fall', 'Night'], correct: 1 },
            { question: 'What helps you figure out a word you do not know in a picture book?', options: ['Closing your eyes', 'Looking at the pictures and nearby words', 'Skipping the page', 'Throwing the book'], correct: 1 }
          ]
        },
        {
          id: 'lesson-2-5',
          number: '2.5',
          title: 'Word Families',
          learnContent: {
            title: 'Welcome to Word Houses!',
            paragraphs: [
              'Word families are groups of words that share the same ending pattern. They rhyme! 🏠',
              'For example, the "-at" family has: Cat 🐱, Hat 🎩, Mat 🧘, Bat 🦇, Rat 🐀.',
              'The "-ig" family has: Pig 🐷, Wig 💇, Dig ⛏️, Big 🦖.',
              'When you learn one word in a family, you can read all the others just by changing the first letter!'
            ],
            keyPoint: 'Word families have the same ending letters and sound, which makes them rhyme.',
            examples: [
              { visual: '🐱', text: 'Cat', label: '-at family' },
              { visual: '🐷', text: 'Pig', label: '-ig family' },
              { visual: '☀️', text: 'Sun', label: '-un family' },
              { visual: '🪵', text: 'Log', label: '-og family' }
            ],
            tip: 'If you can read "Cat", you can read "Hat", "Sat", "Pat", and "Flat" too!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these words into the -at family or the -og family!',
            categories: [
              {
                name: '-at Family',
                items: [
                  { value: 'bat', text: 'Bat' },
                  { value: 'hat', text: 'Hat' }
                ]
              },
              {
                name: '-og Family',
                items: [
                  { value: 'dog', text: 'Dog' },
                  { value: 'log', text: 'Log' }
                ]
              }
            ],
            items: [
              { value: 'bat', text: 'Bat', icon: '🦇' },
              { value: 'dog', text: 'Dog', icon: '🐶' },
              { value: 'hat', text: 'Hat', icon: '🎩' },
              { value: 'log', text: 'Log', icon: '🪵' }
            ]
          },
          checkQuestions: [
            { question: 'Which word belongs to the "-at" family?', options: ['Pig', 'Hop', 'Bat', 'Sun'], correct: 2 },
            { question: 'Which word rhymes with "Pig"?', options: ['Dog', 'Wig', 'Cat', 'Bag'], correct: 1 },
            { question: 'What is the ending sound of the "-an" word family?', options: ['/at/', '/an/', '/ig/', '/op/'], correct: 1 }
          ]
        },
        {
          id: 'lesson-2-6',
          number: '2.6',
          title: 'Compound Words',
          learnContent: {
            title: 'Two Words Join Forces!',
            paragraphs: [
              'A compound word is made when two smaller words are put together to make a brand-new word! 🤝',
              'For example: Rain 🌧️ + Bow 🏹 = Rainbow 🌈! Sun ☀️ + Flower 🌻 = Sunflower 🌻! Rain 🌧️ + Coat 🧥 = Raincoat 🧥!',
              'Breaking a compound word back into its two smaller parts can help you read and spell it easily.'
            ],
            keyPoint: 'Compound words combine two separate words to create a new word with a new meaning.',
            examples: [
              { visual: '🌈', text: 'Rain + Bow = Rainbow', label: 'compound word' },
              { visual: '🌻', text: 'Sun + Flower = Sunflower', label: 'compound word' },
              { visual: '🧁', text: 'Cup + Cake = Cupcake', label: 'compound word' },
              { visual: '🦋', text: 'Butter + Fly = Butterfly', label: 'compound word' }
            ],
            tip: 'Look for two smaller words hidden inside a big word!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match the two words that make a compound word!',
            pairs: [
              { id: 'pair1', left: 'Rain', right: 'bow (Rainbow)', leftIcon: 'Rain', rightIcon: '🌈' },
              { id: 'pair2', left: 'Cup', right: 'cake (Cupcake)', leftIcon: 'Cup', rightIcon: '🧁' },
              { id: 'pair3', left: 'Sun', right: 'flower (Sunflower)', leftIcon: 'Sun', rightIcon: '🌻' },
              { id: 'pair4', left: 'Butter', right: 'fly (Butterfly)', leftIcon: 'Butter', rightIcon: '🦋' }
            ]
          },
          checkQuestions: [
            { question: 'What compound word do you make with "Sun" and "Flower"?', options: ['Sunlight', 'Flowerpot', 'Sunflower', 'Sunny'], correct: 2 },
            { question: 'What two words make up "Cupcake"?', options: ['Cup and Plate', 'Cup and Cake', 'Cake and Bake', 'Bowl and Cake'], correct: 1 },
            { question: 'Which of these is a compound word?', options: ['Puppy', 'Butterfly', 'Running', 'Flower'], correct: 1 }
          ]
        },
        {
          id: 'lesson-2-7',
          number: '2.7',
          title: 'Synonyms & Antonyms',
          learnContent: {
            title: 'Sames and Opposites!',
            paragraphs: [
              'Words can have similar meanings, or opposite meanings. ⚖️',
              'Synonyms are words that mean the SAME thing. For example, happy 😊 and glad; big 🦖 and huge; small 🐭 and tiny.',
              'Antonyms are words that mean the OPPOSITE. For example, hot ☀️ and cold ❄️; up ⬆️ and down ⬇️; happy 😊 and sad 😢.'
            ],
            keyPoint: 'Synonyms are words with the same meaning. Antonyms are opposite words.',
            examples: [
              { visual: '😊', text: 'Happy / Glad', label: 'synonyms' },
              { visual: '🦖', text: 'Big / Large', label: 'synonyms' },
              { visual: '☀️❄️', text: 'Hot / Cold', label: 'antonyms' },
              { visual: '⬆️⬇️', text: 'Up / Down', label: 'antonyms' }
            ],
            tip: 'Matching synonyms helps make your writing more interesting, and antonyms help you show differences!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each word to its opposite (antonym)!',
            pairs: [
              { id: 'pair1', left: 'Hot', right: 'Cold', leftIcon: '🔥', rightIcon: '❄️' },
              { id: 'pair2', left: 'Big', right: 'Small', leftIcon: '🐘', rightIcon: '🐭' },
              { id: 'pair3', left: 'Happy', right: 'Sad', leftIcon: '😊', rightIcon: '😢' },
              { id: 'pair4', left: 'Day', right: 'Night', leftIcon: '☀️', rightIcon: '🌙' }
            ]
          },
          checkQuestions: [
            { question: 'What is a synonym for "small"?', options: ['Huge', 'Tiny', 'Loud', 'Fast'], correct: 1 },
            { question: 'What is the antonym (opposite) of "up"?', options: ['High', 'Down', 'Left', 'Right'], correct: 1 },
            { question: 'Which pair of words are synonyms?', options: ['Hot and Cold', 'Happy and Sad', 'Big and Large', 'Fast and Slow'], correct: 2 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'Which of these is a sight word?', options: ['frog', 'the', 'jump', 'green'], correct: 1, type: 'multiple-choice' },
        { question: 'Complete the sentence: "He is playing ______ a ball."', options: ['with', 'they', 'at', 'be'], correct: 0, type: 'multiple-choice' },
        { question: 'Which word belongs to the same word family as "Cat"?', options: ['Dog', 'Pig', 'Hat', 'Sun'], correct: 2, type: 'multiple-choice' },
        { question: 'What is the opposite (antonym) of "hot"?', options: ['warm', 'cold', 'sunny', 'dry'], correct: 1, type: 'multiple-choice' },
        { question: 'What compound word is made from "Rain" and "Bow"?', options: ['Rainy', 'Rainbow', 'Raincoat', 'Bowtie'], correct: 1, type: 'multiple-choice' },
        { question: 'If a box is "huge", what does huge mean?', options: ['Tiny', 'Very big', 'Blue', 'Heavy'], correct: 1, type: 'multiple-choice' },
        { question: 'Which word rhymes with "Wig"?', options: ['Wag', 'Pig', 'Dog', 'Bag'], correct: 1, type: 'multiple-choice' },
        { question: 'What does "synonym" mean?', options: ['Opposite words', 'Words that mean the same', 'Words that sound like animals', 'Short words'], correct: 1, type: 'multiple-choice' },
        { question: 'Complete the sentence: "Yesterday, it ______ very cold."', options: ['are', 'he', 'was', 'is'], correct: 2, type: 'multiple-choice' },
        { question: 'What two words make up "Sunflower"?', options: ['Sun and Flower', 'Sun and Day', 'Flower and Pot', 'Day and Light'], correct: 0, type: 'multiple-choice' }
      ]
    },

    // ==================== MODULE 3: Reading Comprehension ====================
    {
      id: 'module-3',
      number: 3,
      title: 'Reading Comprehension',
      subject: 'ela',
      icon: '📚',
      badgeId: 'reading-detective',
      badgeName: 'Reading Detective',
      badgeIcon: '🔍',
      description: 'Learn to ask questions, retell stories, identify characters and settings, and find themes!',
      lessons: [
        {
          id: 'lesson-3-1',
          number: '3.1',
          title: 'Asking Questions',
          learnContent: {
            title: 'Ask Questions Like a Detective!',
            paragraphs: [
              'When we read a story, we should ask questions like a detective: Who? What? Where? Why? How? 🔍',
              'Asking questions keeps our brain active. Who is in the story? Where does the story take place? What is the main problem?',
              'Answering these questions helps us understand and remember what we read!'
            ],
            keyPoint: 'Asking Who, What, Where, and Why helps us understand stories.',
            examples: [
              { visual: '👤', text: 'Who', label: 'the characters' },
              { visual: '🏡', text: 'Where', label: 'the setting' },
              { visual: '❗', text: 'What', label: 'the main event' },
              { visual: '❓', text: 'Why', label: 'the reason' }
            ],
            tip: 'Before reading, look at the cover and ask: "What do I think this book is about?"'
          },
                    activity: {
            type: 'read-fluency',
            instruction: 'Read the story about Leo the Lion 3 times out loud!',
            passage: 'Leo the Lion lived in a sunny forest. One day, he lost his favorite soccer ball. He looked behind the trees and found it near the pond. Leo was very happy!',
            explanation: 'Leo the Lion is the main character in this story!'
          },
          checkQuestions: [
            { question: 'Which question word helps us find the location of a story?', options: ['Who', 'What', 'Where', 'Why'], correct: 2 },
            { question: 'If we ask "Who is in the story?", we want to find the...', options: ['Setting', 'Characters', 'Moral', 'Worksheet'], correct: 1 },
            { question: 'In the story "Leo lost his ball," what did Leo lose?', options: ['His keys', 'His crown', 'His soccer ball', 'His lunch'], correct: 2 }
          ]
        },
        {
          id: 'lesson-3-2',
          number: '3.2',
          title: 'Retelling a Story',
          learnContent: {
            title: 'Retelling a Story Step-by-Step!',
            paragraphs: [
              'Retelling a story means telling what happened in your own words, in the correct order! 🗣️',
              'We structure retelling using three main parts: Beginning (what happens first), Middle (the problem or main event), and End (how the problem is solved).',
              'Sequencing words like First, Next, Then, and Last help us retell stories smoothly.'
            ],
            keyPoint: 'Retelling keeps events in order: Beginning, Middle, and End.',
            examples: [
              { visual: '🥇', text: 'Beginning', label: 'First' },
              { visual: '🥈', text: 'Middle', label: 'Next' },
              { visual: '🥉', text: 'End', label: 'Last' },
              { visual: '🔄', text: 'Sequence', label: 'correct order' }
            ],
            tip: 'Use your fingers to count the steps: "First this, next that, last this!"'
          },
          activity: {
            type: 'sequence',
            instruction: 'Put these story events in order from first to last!',
            items: [
              { text: 'First, the little caterpillar crawled onto a green leaf. 🐛' },
              { text: 'Next, the caterpillar built a cozy cocoon around itself. 🕸️' },
              { text: 'Then, it rested inside the cocoon for two weeks. 💤' },
              { text: 'Last, it popped out as a beautiful butterfly! 🦋' }
            ]
          },
          checkQuestions: [
            { question: 'What part of the story introduces the characters and setting?', options: ['Middle', 'Beginning', 'End', 'Title'], correct: 1 },
            { question: 'Which word shows that something happens after the beginning?', options: ['First', 'Next', 'Yesterday', 'Once'], correct: 1 },
            { question: 'What is typically found in the "End" of a story?', options: ['The main problem starts', 'How the problem is solved', 'New characters appear', 'Nothing happens'], correct: 1 }
          ]
        },
        {
          id: 'lesson-3-3',
          number: '3.3',
          title: 'Characters, Setting, Events',
          learnContent: {
            title: 'The Parts of a Story!',
            paragraphs: [
              'Every story has three key parts: ⚙️',
              '1. Characters: The people or animals in the story.',
              '2. Setting: WHERE and WHEN the story takes place (like a castle 🏰 at night 🌙).',
              '3. Events: The things that happen in the story (the plot).'
            ],
            keyPoint: 'Characters are who, setting is where/when, and events are what happens.',
            examples: [
              { visual: '🐻', text: 'Bear', label: 'Character' },
              { visual: '🌲', text: 'Forest', label: 'Setting' },
              { visual: '🧺', text: 'Picnic', label: 'Event' },
              { visual: '🏰', text: 'Castle', label: 'Setting' }
            ],
            tip: 'Draw a picture of the characters in their setting to help remember them!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these items into Characters or Settings!',
            categories: [
              {
                name: 'Characters (Who)',
                items: [
                  { value: 'rabbit', text: 'Fluffy Rabbit' },
                  { value: 'wizard', text: 'Old Wizard' }
                ]
              },
              {
                name: 'Settings (Where)',
                items: [
                  { value: 'forest', text: 'Deep Forest' },
                  { value: 'space', text: 'Outer Space' }
                ]
              }
            ],
            items: [
              { value: 'rabbit', text: 'Fluffy Rabbit', icon: '🐰' },
              { value: 'forest', text: 'Deep Forest', icon: '🌲' },
              { value: 'wizard', text: 'Old Wizard', icon: '🧙‍♂️' },
              { value: 'space', text: 'Outer Space', icon: '🚀' }
            ]
          },
          checkQuestions: [
            { question: 'If a story takes place "in a school during daytime," what is that called?', options: ['Character', 'Setting', 'Event', 'Comprehension'], correct: 1 },
            { question: 'Which of these is a character?', options: ['A tall tree', 'A talking bear', 'A school bus', 'The blue sky'], correct: 1 },
            { question: 'What are the events of a story?', options: ['Who is in the story', 'Where it takes place', 'The actions and things that happen', 'The pictures in the book'], correct: 2 }
          ]
        },
        {
          id: 'lesson-3-4',
          number: '3.4',
          title: 'Central Message',
          learnContent: {
            title: 'Finding the Lesson / Moral!',
            paragraphs: [
              'Many stories are written to teach us an important lesson. We call this the central message or the moral of the story. 🌟',
              'For example, in "The Tortoise and the Hare," the hare is fast but lazy, and the slow tortoise wins by never giving up. The lesson is: slow and steady wins the race!',
              'When you finish reading, think: "What does the author want me to learn about being a good person?"'
            ],
            keyPoint: 'The central message is the main lesson or moral the author wants you to learn.',
            examples: [
              { visual: '🐢', text: 'Never give up', label: 'Tortoise lesson' },
              { visual: '🤝', text: 'Share with friends', label: 'sharing lesson' },
              { visual: '🗣️', text: 'Tell the truth', label: 'honesty lesson' },
              { visual: '🐝', text: 'Work hard', label: 'hard work lesson' }
            ],
            tip: 'Look at the mistakes characters make — they usually learn the lesson by fixing them!'
          },
                    activity: {
            type: 'read-fluency',
            instruction: 'Read this sharing story 3 times out loud!',
            passage: 'Mindy did not want to share her blocks. Playing alone was very boring. Then she shared them with her brother. Together they built a giant castle!',
            explanation: 'This story teaches us that sharing makes playing more fun!'
          },
          checkQuestions: [
            { question: 'What is a "moral" of a story?', options: ['The main character\'s name', 'The lesson the story teaches us', 'The illustrations', 'The back cover'], correct: 1 },
            { question: 'In a story where a character tells a lie and gets in trouble, what might the lesson be?', options: ['Always lie', 'Lying is fun', 'It is best to tell the truth', 'Never play games'], correct: 2 },
            { question: 'Who teaches us the central message in a story?', options: ['The teacher', 'The characters through their actions', 'The pages', 'The library'], correct: 1 }
          ]
        },
        {
          id: 'lesson-3-5',
          number: '3.5',
          title: 'Comparing Stories',
          learnContent: {
            title: 'Comparing Two Stories!',
            paragraphs: [
              'We can compare two different stories to see how they are the same and how they are different! 👥',
              'For example, we might read two stories about bears. In one story, the bear lives in the forest and eats honey 🍯. In the other, the bear lives in the snow ❄️ and eats fish 🐟.',
              'They are the same because they are both about bears, but different because they live in different places and eat different food!'
            ],
            keyPoint: 'Comparing stories means finding ways they are alike and ways they are different.',
            examples: [
              { visual: '🐻🐻', text: 'Same animal', label: 'alike' },
              { visual: '🌲❄️', text: 'Different places', label: 'different' },
              { visual: '🍯🐟', text: 'Different food', label: 'different' },
              { visual: '📖📖', text: 'Venn Diagram', label: 'compare tool' }
            ],
            tip: 'Ask: "Do these stories have the same characters? Do they have the same setting?"'
          },
                    activity: {
            type: 'read-fluency',
            instruction: 'Read about the rabbit and the turtle 3 times out loud!',
            passage: 'A rabbit ran fast but lost the race. A turtle walked slowly but never stopped. Both stories teach us that trying our best is what matters most!',
            explanation: 'Two different stories can teach the very same lesson!'
          },
          checkQuestions: [
            { question: 'What does it mean to compare two stories?', options: ['To throw them away', 'To look for how they are alike and different', 'To read them in one second', 'To write a new story'], correct: 1 },
            { question: 'How can two stories be different?', options: ['They have different characters', 'They have different settings', 'They have different plots', 'All of the above'], correct: 3 },
            { question: 'If Story A is about a dog in a city, and Story B is about a cat in a city, what is the SAME?', options: ['The characters', 'The settings', 'The names', 'Nothing'], correct: 1 }
          ]
        },
        {
          id: 'lesson-3-6',
          number: '3.6',
          title: 'Informational Text Main Topic',
          learnContent: {
            title: 'What is the Main Topic?',
            paragraphs: [
              'Non-fiction or informational books tell us real facts about the world! 🌍',
              'The main topic is what the whole book or paragraph is mostly about. For example, a book might tell us about plant roots, leaves, and seeds. The main topic is PLANTS! 🌱',
              'Finding the main topic helps us know what we are learning from the text.'
            ],
            keyPoint: 'The main topic is the big idea that all the facts in a text support.',
            examples: [
              { visual: '🦁', text: 'Lions', label: 'Main Topic' },
              { visual: '🥩🐾🦁', text: 'Facts about lions', label: 'Details' },
              { visual: '🪐', text: 'Planets', label: 'Main Topic' },
              { visual: '🚀🪐🛰️', text: 'Facts about space', label: 'Details' }
            ],
            tip: 'Look at the title and the pictures first — they usually tell you the main topic right away!'
          },
                    activity: {
            type: 'read-fluency',
            instruction: 'Read this informational text about apples 3 times out loud!',
            passage: 'Apples grow on trees. They can be red, green, or yellow. Apples are sweet and healthy to eat. Many people love to eat apples for a snack.',
            explanation: 'The main topic of this informational text is all about apples!'
          },
          checkQuestions: [
            { question: 'What does an informational text tell us?', options: ['Made-up fairy tales', 'Real facts and information', 'Funny jokes', 'Just drawings'], correct: 1 },
            { question: 'What is a "main topic"?', options: ['The author\'s favorite animal', 'What the text is mostly about', 'The last page of the book', 'A small detail'], correct: 1 },
            { question: 'If a paragraph describes rain, snow, and wind, what is the main topic?', options: ['Seasons', 'Weather', 'Water', 'Summer'], correct: 1 }
          ]
        },
        {
          id: 'lesson-3-7',
          number: '3.7',
          title: 'Text Features',
          learnContent: {
            title: 'Using Text Features!',
            paragraphs: [
              'Informational books have special helpers called text features. They help us find and understand information quickly! 🗺️',
              'Headings: Large words at the top of a section that tell what it is about.',
              'Captions: Small words next to a photo that explain the picture.',
              'Glossary: A mini-dictionary at the back that defines tricky words.'
            ],
            keyPoint: 'Text features like headings, captions, and glossaries make finding facts easier.',
            examples: [
              { visual: '🏷️', text: 'Heading', label: 'section title' },
              { visual: '🖼️💬', text: 'Caption', label: 'picture description' },
              { visual: '📖', text: 'Glossary', label: 'word meanings' },
              { visual: '📍', text: 'Table of Contents', label: 'page finder' }
            ],
            tip: 'Always read captions! They often tell you cool extra facts that are not in the main text.'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each text feature to what it does!',
            pairs: [
              { id: 'pair1', left: 'Heading', right: 'Tells what section is about', leftIcon: 'Heading', rightIcon: '🏷️' },
              { id: 'pair2', left: 'Caption', right: 'Explains a picture', leftIcon: 'Caption', rightIcon: '💬' },
              { id: 'pair3', left: 'Glossary', right: 'Gives word definitions', leftIcon: 'Glossary', rightIcon: '📖' },
              { id: 'pair4', left: 'Table of Contents', right: 'Shows page numbers', leftIcon: 'Contents', rightIcon: '📍' }
            ]
          },
          checkQuestions: [
            { question: 'What text feature explains a picture or photo?', options: ['Glossary', 'Caption', 'Heading', 'Index'], correct: 1 },
            { question: 'Where would you look to find the definition of a tricky word in a book?', options: ['Front cover', 'Glossary', 'Title page', 'Caption'], correct: 1 },
            { question: 'What do headings do in a text?', options: ['List the page numbers', 'Tell what the next section is about', 'Explain illustrations', 'Nothing'], correct: 1 }
          ]
        },
        {
          id: 'lesson-3-8',
          number: '3.8',
          title: 'Author vs Illustrator',
          learnContent: {
            title: 'Who Made the Book?',
            paragraphs: [
              'Creating a book takes teamwork! Two very important people make a book: 👥',
              'The Author writes the words. They think of the story, type the sentences, and choose the message. ✍️',
              'The Illustrator draws or paints the pictures. They create the visual world, design the characters, and add colors! 🎨'
            ],
            keyPoint: 'The author writes the words, and the illustrator creates the pictures.',
            examples: [
              { visual: '✍️', text: 'Author', label: 'writes the words' },
              { visual: '🎨', text: 'Illustrator', label: 'makes the pictures' },
              { visual: '📚', text: 'Book', label: 'their teamwork!' },
              { visual: '🧑‍🤝‍🧑', text: 'Creators', label: 'work together' }
            ],
            tip: 'Look at the front cover! You will see: "Written by [Author]" and "Illustrated by [Illustrator]".'
          },
          activity: {
            type: 'matching',
            instruction: 'Match the role to what the person does!',
            pairs: [
              { id: 'pair1', left: 'Author', right: 'Writes the sentences', leftIcon: '✍️', rightIcon: '📝' },
              { id: 'pair2', left: 'Illustrator', right: 'Paints the pictures', leftIcon: '🎨', rightIcon: '🖼️' }
            ]
          },
          checkQuestions: [
            { question: 'What does the author of a book do?', options: ['Draws characters', 'Writes the words', 'Sells the book', 'Reads out loud'], correct: 1 },
            { question: 'What does the illustrator of a book do?', options: ['Writes sentences', 'Creates the pictures', 'Prints the pages', 'Deletes words'], correct: 1 },
            { question: 'If a book says "Illustrated by Eric Carle," what did Eric Carle do?', options: ['He wrote the story', 'He made the pictures', 'He bought the book', 'He read the book'], correct: 1 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'What should we ask when reading to understand characters?', options: ['Where', 'Who', 'When', 'Why'], correct: 1, type: 'multiple-choice' },
        { question: 'In what order do we retell a story?', options: ['End, Beginning, Middle', 'Middle, End, Beginning', 'Beginning, Middle, End', 'Any order is fine'], correct: 2, type: 'multiple-choice' },
        { question: 'What is the setting of a story?', options: ['Who is in the story', 'WHERE and WHEN it happens', 'What happens in the middle', 'The author\'s name'], correct: 1, type: 'multiple-choice' },
        { question: 'What is a moral of a story?', options: ['The first page', 'An illustration', 'The main lesson taught', 'The title'], correct: 2, type: 'multiple-choice' },
        { question: 'What does the illustrator of a book do?', options: ['Writes the sentences', 'Draws the pictures', 'Sells the book', 'Reads to children'], correct: 1, type: 'multiple-choice' },
        { question: 'What does an author do?', options: ['Draws pictures', 'Writes the words', 'Fixes the cover', 'Keeps the books'], correct: 1, type: 'multiple-choice' },
        { question: 'What is the main topic of a text?', options: ['A tiny detail', 'What the text is mostly about', 'The glossary', 'The page numbers'], correct: 1, type: 'multiple-choice' },
        { question: 'What text feature explains a picture?', options: ['Heading', 'Glossary', 'Caption', 'Table of Contents'], correct: 2, type: 'multiple-choice' },
        { question: 'Where is the glossary located in a book?', options: ['On the front cover', 'At the back of the book', 'Next to a picture', 'In the middle'], correct: 1, type: 'multiple-choice' },
        { question: 'What is the setting of a story that starts: "Once upon a time in a dark cave..."?', options: ['A castle', 'A forest', 'A dark cave', 'Outer space'], correct: 2, type: 'multiple-choice' }
      ]
    },

    // ==================== MODULE 4: Writing ====================
    {
      id: 'module-4',
      number: 4,
      title: 'Writing',
      subject: 'ela',
      icon: '✍️',
      badgeId: 'young-author',
      badgeName: 'Young Author',
      badgeIcon: '✏️',
      description: 'Learn letter formation, sentence structure, opinion, informative, and narrative writing!',
      lessons: [
        {
          id: 'lesson-4-1',
          number: '4.1',
          title: 'Writing Letters & Words',
          learnContent: {
            title: 'Trace and Write Letters!',
            paragraphs: [
              'Writing starts with forming our letters neatly. We write from top to bottom, and from left to right! ✍️',
              'Lowercase letters have different heights: tall letters (like t, h, b) reach the top line; short letters (like a, c, e) stay in the middle; and tail letters (like g, y, p) hang below the bottom line.',
              'Leaving space between letters helps make our words clear and readable.'
            ],
            keyPoint: 'Writing letters correctly and leaving space between them makes our words clear.',
            examples: [
              { visual: 't', text: 'Tall letter', label: 'reaches the top' },
              { visual: 'a', text: 'Short letter', label: 'stays in middle' },
              { visual: 'g', text: 'Tail letter', label: 'hangs down' },
              { visual: '✍️', text: 'Left to Right', label: 'writing path' }
            ],
            tip: 'Hold your pencil gently like a baby bird — not too tight!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the sentences with correct spaces YELLOW and sentences with no spaces BLUE!',
            categories: [
              { name: 'Correct Spacing', color: 'yellow', class: 'color-yellow' },
              { name: 'No Spacing', color: 'blue', class: 'color-blue' }
            ],
            items: [
              { text: 'I see a dog.', category: 'Correct Spacing' },
              { text: 'Iseeadog.', category: 'No Spacing' },
              { text: 'The sun is hot.', category: 'Correct Spacing' },
              { text: 'Thesunishot.', category: 'No Spacing' }
            ],
            explanation: 'Putting finger spaces between words makes them easy to read!'
          },
          checkQuestions: [
            { question: 'Which letter has a "tail" that goes below the writing line?', options: ['a', 't', 'g', 'h'], correct: 2 },
            { question: 'In what direction do we write sentences in English?', options: ['Right to left', 'Bottom to top', 'Left to right', 'Up and down'], correct: 2 },
            { question: 'Which letter is a "tall" letter?', options: ['e', 'o', 'h', 'u'], correct: 2 }
          ]
        },
        {
          id: 'lesson-4-2',
          number: '4.2',
          title: 'Writing Complete Sentences',
          learnContent: {
            title: 'Building a Complete Sentence!',
            paragraphs: [
              'A complete sentence is like a complete train — it needs all its cars to roll! 🚂',
              'Every sentence needs two main things: 1. A Subject (WHO or WHAT the sentence is about); 2. An Action (what the subject is DOING).',
              'For example: "The dog (subject) barks (action) 🐶." If we just write "Barks," it is not a complete sentence because we do not know who barks!'
            ],
            keyPoint: 'A complete sentence must tell WHO and WHAT is happening.',
            examples: [
              { visual: '🐸', text: 'The frog', label: 'Subject (Who)' },
              { visual: '🦘', text: 'jumps', label: 'Action (What)' },
              { visual: '🚂', text: 'Complete sentence', label: 'The frog jumps.' },
              { visual: '❌', text: 'Incomplete', label: 'Running fast' }
            ],
            tip: 'Check your sentence! Does it tell who? Does it tell what they did?'
          },
          activity: {
            type: 'sequence',
            instruction: 'Put the word tiles in the correct order to make a complete sentence!',
            items: [
              { text: 'The' },
              { text: 'happy' },
              { text: 'dog' },
              { text: 'barks' },
              { text: 'loudly.' }
            ]
          },
          checkQuestions: [
            { question: 'What two things does every complete sentence need?', options: ['A title and page number', 'A subject (who) and an action (does)', 'Numbers and colors', 'Big spaces and shapes'], correct: 1 },
            { question: 'Which of these is a complete sentence?', options: ['The fish swims.', 'Swimming fast', 'My red bicycle', 'In the yard'], correct: 0 },
            { question: 'What is missing from the sentence fragment: "Ran to the park"?', options: ['A period', 'Who ran (subject)', 'Where they ran', 'The actions'], correct: 1 }
          ]
        },
        {
          id: 'lesson-4-3',
          number: '4.3',
          title: 'Opinion Writing',
          learnContent: {
            title: 'Share Your Opinion!',
            paragraphs: [
              'An opinion is how you feel or what you think about something. 💭 Everyone can have different opinions, and that is okay!',
              'When you write an opinion, you should: 1. State your opinion clearly; 2. Give a REASON why you think that way.',
              'For example: "I think dogs are the best pets (opinion) because they can play fetch with you (reason) 🐶!"'
            ],
            keyPoint: 'Opinion writing tells what you think, and uses "because" to give a reason.',
            examples: [
              { visual: '💭', text: 'I think...', label: 'State opinion' },
              { visual: '💡', text: 'because...', label: 'Give a reason' },
              { visual: '🍕', text: 'Pizza is best', label: 'Opinion' },
              { visual: '😋', text: 'It tastes yummy', label: 'Reason' }
            ],
            tip: 'Use key words like "I believe," "I think," and "My favorite" to start your writing!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these statements into Opinions or Facts!',
            categories: [
              {
                name: 'Opinions (Feelings)',
                items: [
                  { value: 'cats-best', text: 'Cats are the best pets.' },
                  { value: 'yellow-best', text: 'Yellow is the prettiest color.' }
                ]
              },
              {
                name: 'Facts (Truths)',
                items: [
                  { value: 'cats-fur', text: 'Cats have fur.' },
                  { value: 'sun-yellow', text: 'The sun is yellow.' }
                ]
              }
            ],
            items: [
              { value: 'cats-best', text: 'Cats are the best pets.', icon: '🐱' },
              { value: 'cats-fur', text: 'Cats have fur.', icon: '🐾' },
              { value: 'yellow-best', text: 'Yellow is the prettiest color.', icon: '💛' },
              { value: 'sun-yellow', text: 'The sun is yellow.', icon: '☀️' }
            ]
          },
          checkQuestions: [
            { question: 'What is an opinion?', options: ['A truth that can be proven', 'What you think or feel about something', 'A dictionary definition', 'The title of a book'], correct: 1 },
            { question: 'What word do we use to connect our opinion to our reason?', options: ['and', 'because', 'but', 'or'], correct: 1 },
            { question: 'Which statement is an opinion?', options: ['Apples are fruit.', 'Apples are delicious.', 'Apples grow on trees.', 'Apples can be red.'], correct: 1 }
          ]
        },
        {
          id: 'lesson-4-4',
          number: '4.4',
          title: 'Informative Writing',
          learnContent: {
            title: 'Write to Teach Facts!',
            paragraphs: [
              'Informative writing teaches real facts about a topic! 📝 It is non-fiction.',
              'When you write informative texts, you choose a topic, tell facts, and use details. You do not share your opinions here — only what is true!',
              'For example, writing about Frogs: "Frogs are amphibians. They live near water. They can jump very high 🐸."'
            ],
            keyPoint: 'Informative writing teaches real, true facts about a specific topic.',
            examples: [
              { visual: '📝', text: 'True Facts', label: 'no opinions' },
              { visual: '🐸', text: 'Frogs jump', label: 'fact' },
              { visual: '🌱', text: 'Plants need water', label: 'fact' },
              { visual: '🍯', text: 'Bears eat honey', label: 'fact' }
            ],
            tip: 'Use facts you learned from Science or Social Studies to do informative writing!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the FACTS yellow and the OPINIONS blue!',
            categories: [
              { name: 'Facts', color: 'yellow', class: 'color-yellow' },
              { name: 'Opinions', color: 'blue', class: 'color-blue' }
            ],
            items: [
              { text: 'Butterflies grow from caterpillars.', category: 'Facts' },
              { text: 'Butterflies are the prettiest bugs.', category: 'Opinions' },
              { text: 'Birds have feathers.', category: 'Facts' },
              { text: 'Birds are the best pets.', category: 'Opinions' }
            ],
            explanation: 'Facts can be proven true, while opinions are just how someone feels!'
          },
          checkQuestions: [
            { question: 'What is the goal of informative writing?', options: ['To make people laugh', 'To teach real facts about a topic', 'To write a scary story', 'To draw pictures'], correct: 1 },
            { question: 'Which of these should NOT be in informative writing?', options: ['Real facts', 'Your personal opinion', 'True details', 'A clear topic sentence'], correct: 1 },
            { question: 'Which is a fact about dogs?', options: ['Dogs are cute.', 'Dogs are the best.', 'Dogs have four legs.', 'Dogs are fun to play with.'], correct: 2 }
          ]
        },
        {
          id: 'lesson-4-5',
          number: '4.5',
          title: 'Narrative Writing',
          learnContent: {
            title: 'Tell a Fun Story!',
            paragraphs: [
              'Narrative writing is telling a story from your imagination or about something real that happened to you! 📖',
              'A narrative story should have: 1. A Beginning (who, where, when); 2. A Middle (something exciting happens or a problem); 3. An End (resolution).',
              'Use transition words: First, Then, After that, Finally, to guide your reader!'
            ],
            keyPoint: 'Narrative writing tells a story with a beginning, middle, and end.',
            examples: [
              { visual: '📖', text: 'Narrative', label: 'tells a story' },
              { visual: '📍', text: 'Beginning', label: 'First' },
              { visual: '⚡', text: 'Middle', label: 'Then' },
              { visual: '🏁', text: 'End', label: 'Finally' }
            ],
            tip: 'Think about a fun day you had, and write down exactly what happened from start to finish!'
          },
          activity: {
            type: 'sequence',
            instruction: 'Put these narrative sentences in order to build the story!',
            items: [
              { text: 'First, Tim got a new blue bicycle for his birthday. 🚲' },
              { text: 'Then, he practiced riding it in the driveway with his dad. 🤝' },
              { text: 'After that, he fell down but got right back up and tried again! 💪' },
              { text: 'Finally, Tim learned to ride all by himself and smiled big! 😊' }
            ]
          },
          checkQuestions: [
            { question: 'What does narrative writing do?', options: ['Teaches facts about history', 'Tells a story', 'Lists rules to follow', 'Gives directions'], correct: 1 },
            { question: 'What helps readers follow the steps in a narrative story?', options: ['Using small letters', 'Transition words like first, then, finally', 'Listing numbers', 'Only showing pictures'], correct: 1 },
            { question: 'What part of a narrative story shows how the problem was solved?', options: ['Beginning', 'Middle', 'End', 'Title'], correct: 2 }
          ]
        },
        {
          id: 'lesson-4-6',
          number: '4.6',
          title: 'Capitalization & Punctuation',
          learnContent: {
            title: 'Sentence Police!',
            paragraphs: [
              'We must follow two very important rules to make our sentences correct and readable: 👮',
              '1. Capitalization: Every sentence starts with a CAPITAL letter. Also, names of people, places, and the word "I" must be capitalized!',
              '2. Punctuation: Every sentence needs a punctuation mark at the end. Use a period . for telling, a question mark ? for asking, and an exclamation mark ! for excited sentences!'
            ],
            keyPoint: 'Sentences start with capital letters and end with punctuation marks (. ? !).',
            examples: [
              { visual: '🔠', text: 'Capital letter', label: 'at start of sentence' },
              { visual: '🙋‍♂️', text: 'I', label: 'always capitalized' },
              { visual: '🛑', text: 'Period .', label: 'ends a statement' },
              { visual: '❓', text: 'Question mark ?', label: 'ends a question' }
            ],
            tip: 'Check the start and end of every sentence you write! Do you see a capital and a stop sign?'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these sentences! Which ones are CORRECT and which have errors?',
            categories: [
              {
                name: 'Correct Sentences',
                items: [
                  { value: 'correct1', text: 'The cat slept.' },
                  { value: 'correct2', text: 'Where is my ball?' }
                ]
              },
              {
                name: 'Incorrect Sentences',
                items: [
                  { value: 'incorrect1', text: 'the cat slept' },
                  { value: 'incorrect2', text: 'where is my ball' }
                ]
              }
            ],
            items: [
              { value: 'correct1', text: 'The cat slept.', icon: '🐱' },
              { value: 'incorrect1', text: 'the cat slept', icon: '❌' },
              { value: 'correct2', text: 'Where is my ball?', icon: '⚽' },
              { value: 'incorrect2', text: 'where is my ball', icon: '❌' }
            ]
          },
          checkQuestions: [
            { question: 'What letter should be at the start of a sentence?', options: ['Lowercase', 'Capital', 'Numbers', 'It does not matter'], correct: 1 },
            { question: 'Which punctuation mark fits the sentence: "How old are you"', options: ['.', '?', '!', ','], correct: 1 },
            { question: 'Which word should ALWAYS be capitalized inside a sentence?', options: ['cat', 'the', 'I', 'play'], correct: 2 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'What type of letter should start a sentence?', options: ['Small letter', 'Capital letter', 'Number', 'None'], correct: 1, type: 'multiple-choice' },
        { question: 'Which punctuation mark fits: "I love cats!"?', options: ['Period', 'Exclamation mark', 'Question mark', 'Comma'], correct: 1, type: 'multiple-choice' },
        { question: 'What is a complete sentence missing if it says: "Jumps over the fence."?', options: ['A period', 'Who jumps (subject)', 'An action word', 'Capital letters'], correct: 1, type: 'multiple-choice' },
        { question: 'Which of these is a FACT that fits in informative writing?', options: ['Apples are the best fruit.', 'Apples can be red or green.', 'Apples taste better than oranges.', 'I like apples.'], correct: 1, type: 'multiple-choice' },
        { question: 'What type of writing tells a story?', options: ['Informative', 'Opinion', 'Narrative', 'List'], correct: 2, type: 'multiple-choice' },
        { question: 'What word do we use to give a reason in opinion writing?', options: ['and', 'but', 'because', 'or'], correct: 2, type: 'multiple-choice' },
        { question: 'Which sentence has correct capitalization?', options: ['my name is Sam.', 'My name is sam.', 'My name is Sam.', 'my name is sam.'], correct: 2, type: 'multiple-choice' },
        { question: 'Which punctuation mark is used for asking a question?', options: ['.', '!', '?', ','], correct: 2, type: 'multiple-choice' },
        { question: 'Which of these is an opinion statement?', options: ['Dogs have tails.', 'Dogs are mammals.', 'Dogs are the best animals.', 'Dogs can bark.'], correct: 2, type: 'multiple-choice' },
        { question: 'What direction do we write in English?', options: ['Right to left', 'Top to bottom', 'Left to right', 'In circles'], correct: 2, type: 'multiple-choice' }
      ]
    },

    // ==================== MODULE 5: Grammar & Language ====================
    {
      id: 'module-5',
      number: 5,
      title: 'Grammar & Language',
      subject: 'ela',
      icon: '🔠',
      badgeId: 'sentence-builder',
      badgeName: 'Sentence Builder',
      badgeIcon: '🏗️',
      description: 'Master nouns, verbs, adjectives, plurals, pronouns, prepositions, and conjunctions!',
      lessons: [
        {
          id: 'lesson-5-1',
          number: '5.1',
          title: 'Nouns',
          learnContent: {
            title: 'Nouns are Everywhere!',
            paragraphs: [
              'A noun is a naming word. Nouns name: 👥',
              '1. People (like girl, doctor, firefighter 🧑‍🚒).',
              '2. Places (like school, park 🌳, city 🏙️).',
              '3. Things (like ball ⚽, apple 🍎, dog 🐶).',
              'Look around you right now! Almost every object you can see is a noun.'
            ],
            keyPoint: 'A noun is a word that names a person, place, or thing.',
            examples: [
              { visual: '👩‍🏫', text: 'Teacher', label: 'Person noun' },
              { visual: '🏫', text: 'School', label: 'Place noun' },
              { visual: '🎒', text: 'Backpack', label: 'Thing noun' },
              { visual: '🦁', text: 'Lion', label: 'Thing (Animal) noun' }
            ],
            tip: 'If you can touch it, go to it, or talk to them, it is a noun!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the NOUNS yellow and other words BLUE!',
            categories: [
              { name: 'Nouns', color: 'yellow', class: 'color-yellow' },
              { name: 'Other Words', color: 'blue', class: 'color-blue' }
            ],
            items: [
              { text: 'doctor', category: 'Nouns' },
              { text: 'run', category: 'Other Words' },
              { text: 'park', category: 'Nouns' },
              { text: 'blue', category: 'Other Words' },
              { text: 'teacher', category: 'Nouns' },
              { text: 'jump', category: 'Other Words' }
            ],
            explanation: 'Nouns are naming words for people, places, or things!'
          },
          checkQuestions: [
            { question: 'What is a noun?', options: ['An action word', 'A describing word', 'A person, place, or thing', 'A punctuation mark'], correct: 2 },
            { question: 'Which noun is a PLACE?', options: ['Teacher', 'Apple', 'Park', 'Pencil'], correct: 2 },
            { question: 'Which of these is a noun that names a person?', options: ['Dog', 'Doctor', 'Desk', 'Day'], correct: 1 }
          ]
        },
        {
          id: 'lesson-5-2',
          number: '5.2',
          title: 'Verbs',
          learnContent: {
            title: 'Verbs are Actions!',
            paragraphs: [
              'A verb is an action word. Verbs tell us what people, animals, or things are DOING! 🏃',
              'Examples of verbs: run 🏃, jump 🦘, swim 🏊, sing 🎤, read 📖, write ✍️, sleep 💤.',
              'Every complete sentence needs a verb to show the action.'
            ],
            keyPoint: 'A verb is an action word that tells what the subject does.',
            examples: [
              { visual: '🏃', text: 'Run', label: 'action verb' },
              { visual: '🦘', text: 'Jump', label: 'action verb' },
              { visual: '📖', text: 'Read', label: 'action verb' },
              { visual: '💤', text: 'Sleep', label: 'action verb' }
            ],
            tip: 'Act it out! If you can do it with your body, it is a verb!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the VERBS blue and other words YELLOW!',
            categories: [
              { name: 'Verbs', color: 'blue', class: 'color-blue' },
              { name: 'Other Words', color: 'yellow', class: 'color-yellow' }
            ],
            items: [
              { text: 'run', category: 'Verbs' },
              { text: 'dog', category: 'Other Words' },
              { text: 'jump', category: 'Verbs' },
              { text: 'green', category: 'Other Words' },
              { text: 'swim', category: 'Verbs' },
              { text: 'ball', category: 'Other Words' }
            ],
            explanation: 'Verbs are action words that show what we do!'
          },
          checkQuestions: [
            { question: 'What is a verb?', options: ['A person', 'A place', 'An action word', 'A color'], correct: 2 },
            { question: 'Which word in this sentence is the verb: "The fish swims fast"?', options: ['The', 'fish', 'swims', 'fast'], correct: 2 },
            { question: 'Which of these is an action verb?', options: ['Desk', 'Apple', 'Jump', 'School'], correct: 2 }
          ]
        },
        {
          id: 'lesson-5-3',
          number: '5.3',
          title: 'Adjectives',
          learnContent: {
            title: 'Adjectives Describe!',
            paragraphs: [
              'Adjectives are describing words. They tell us more information about nouns! 🎨',
              'Adjectives can tell us: 1. Color (red 🔴, blue 🔵); 2. Size (big 🦖, tiny 🐭); 3. How many (three 3️⃣); 4. How something feels or looks (happy 😊, soft, cold ❄️).',
              'For example, in "The red ball rolls," the word "red" is an adjective describing the ball.'
            ],
            keyPoint: 'An adjective describes a noun, telling about color, size, feelings, or numbers.',
            examples: [
              { visual: '🔴', text: 'Red', label: 'color adjective' },
              { visual: '🦖', text: 'Big', label: 'size adjective' },
              { visual: '😊', text: 'Happy', label: 'feeling adjective' },
              { visual: '3️⃣', text: 'Three', label: 'number adjective' }
            ],
            tip: 'Ask: "What kind?" or "How many?" to find the adjective in a sentence!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the ADJECTIVES green and other words YELLOW!',
            categories: [
              { name: 'Adjectives', color: 'green', class: 'color-green' },
              { name: 'Other Words', color: 'yellow', class: 'color-yellow' }
            ],
            items: [
              { text: 'happy', category: 'Adjectives' },
              { text: 'dog', category: 'Other Words' },
              { text: 'big', category: 'Adjectives' },
              { text: 'run', category: 'Other Words' },
              { text: 'green', category: 'Adjectives' },
              { text: 'desk', category: 'Other Words' }
            ],
            explanation: 'Adjectives are describing words that tell us about nouns!'
          },
          checkQuestions: [
            { question: 'What does an adjective do?', options: ['Tells the action', 'Names a place', 'Describes a noun', 'Ends a sentence'], correct: 2 },
            { question: 'Find the adjective in the phrase: "A tiny mouse"', options: ['A', 'tiny', 'mouse', 'none'], correct: 1 },
            { question: 'Which word is an adjective that describes size?', options: ['Blue', 'Big', 'Cat', 'Run'], correct: 1 }
          ]
        },
        {
          id: 'lesson-5-4',
          number: '5.4',
          title: 'Singular & Plural Nouns',
          learnContent: {
            title: 'One or Many?',
            paragraphs: [
              'Nouns can change based on how many there are! 👥',
              'Singular nouns name ONE person, place, or thing. Plural nouns name MORE THAN ONE.',
              'To make most nouns plural, we simply add an -s at the end: cup 🥛 → cups 🥛🥛; dog 🐶 → dogs 🐶🐶.'
            ],
            keyPoint: 'Singular means one, and plural means more than one (usually ends in -s).',
            examples: [
              { visual: '🍎', text: 'Apple', label: 'singular (one)' },
              { visual: '🍎🍎', text: 'Apples', label: 'plural (many)' },
              { visual: '🐱', text: 'Cat', label: 'singular (one)' },
              { visual: '🐱🐱', text: 'Cats', label: 'plural (many)' }
            ],
            tip: 'Look for the -s at the end of the noun to know if there are many!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match the singular noun to its plural form!',
            pairs: [
              { id: 'pair1', left: 'Dog', right: 'Dogs', leftIcon: '🐶', rightIcon: '🐶🐶' },
              { id: 'pair2', left: 'Apple', right: 'Apples', leftIcon: '🍎', rightIcon: '🍎🍎' },
              { id: 'pair3', left: 'Cup', right: 'Cups', leftIcon: '🥛', rightIcon: '🥛🥛' },
              { id: 'pair4', left: 'Cat', right: 'Cats', leftIcon: '🐱', rightIcon: '🐱🐱' }
            ]
          },
          checkQuestions: [
            { question: 'What does "singular" mean?', options: ['None', 'One', 'Two', 'Many'], correct: 1 },
            { question: 'What does "plural" mean?', options: ['One', 'More than one', 'A type of verb', 'A color'], correct: 1 },
            { question: 'What is the plural of the word "Book"?', options: ['Booked', 'Books', 'Booking', 'Bookes'], correct: 1 }
          ]
        },
        {
          id: 'lesson-5-5',
          number: '5.5',
          title: 'Pronouns',
          learnContent: {
            title: 'Pronouns Stand In!',
            paragraphs: [
              'Pronouns are short words that take the place of a noun. They help us avoid repeating the same names over and over! 👤',
              'For example: "Sam has a dog. Sam plays with the dog." is repetitive. We can use pronouns instead: "Sam has a dog. He plays with it!"',
              'Common pronouns: He (for a boy 👦), She (for a girl 👧), It (for a thing or animal 📦), They (for a group 👥).'
            ],
            keyPoint: 'Pronouns replace nouns: he, she, it, they, we.',
            examples: [
              { visual: '👦', text: 'He', label: 'replaces a boy\'s name' },
              { visual: '👧', text: 'She', label: 'replaces a girl\'s name' },
              { visual: '📦', text: 'It', label: 'replaces a thing' },
              { visual: '👥', text: 'They', label: 'replaces many people' }
            ],
            tip: 'Use "it" for items or animals, and "he" or "she" for people!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort the items by which pronoun should replace them: He, She, or It!',
            categories: [
              {
                name: 'He / She (People)',
                items: [
                  { value: 'boy', text: 'A boy' },
                  { value: 'girl', text: 'A girl' }
                ]
              },
              {
                name: 'It (Things)',
                items: [
                  { value: 'ball', text: 'A soccer ball' },
                  { value: 'book', text: 'A textbook' }
                ]
              }
            ],
            items: [
              { value: 'boy', text: 'A boy', icon: '👦' },
              { value: 'ball', text: 'A soccer ball', icon: '⚽' },
              { value: 'girl', text: 'A girl', icon: '👧' },
              { value: 'book', text: 'A textbook', icon: '📖' }
            ]
          },
          checkQuestions: [
            { question: 'What word can replace "Amy" in: "Amy is reading"?', options: ['He', 'She', 'It', 'They'], correct: 1 },
            { question: 'What pronoun replaces a book?', options: ['He', 'She', 'It', 'They'], correct: 2 },
            { question: 'What pronoun replaces "Tim and Pam"?', options: ['He', 'She', 'It', 'They'], correct: 3 }
          ]
        },
        {
          id: 'lesson-5-6',
          number: '5.6',
          title: 'Prepositions',
          learnContent: {
            title: 'Where is the Object?',
            paragraphs: [
              'Prepositions are words that tell us WHERE something is compared to something else! 📍',
              'Examples of prepositions: in 📦, on, under, next to, behind, over.',
              'For example: "The ball is inside the box." or "The cat is sleeping under the bed 🐱."'
            ],
            keyPoint: 'Prepositions tell the position or location of an object.',
            examples: [
              { visual: '📦', text: 'In', label: 'inside a box' },
              { visual: '📥', text: 'On', label: 'on top of a surface' },
              { visual: '⬇️', text: 'Under', label: 'below something' },
              { visual: '🤝', text: 'Next to', label: 'beside something' }
            ],
            tip: 'Play "hide and seek" with a toy and name the preposition where you find it!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each preposition to the correct picture scenario!',
            pairs: [
              { id: 'pair1', left: 'In', right: 'In the box', leftIcon: 'in', rightIcon: '📦' },
              { id: 'pair2', left: 'Under', right: 'Under the umbrella', leftIcon: 'under', rightIcon: '☔' },
              { id: 'pair3', left: 'On', right: 'On the desk', leftIcon: 'on', rightIcon: '✍️' },
              { id: 'pair4', left: 'Behind', right: 'Behind the door', leftIcon: 'behind', rightIcon: '🚪' }
            ]
          },
          checkQuestions: [
            { question: 'Where is the dog if "the dog sleeps under the table"?', options: ['On top of it', 'Inside it', 'Below it (under)', 'Next to it'], correct: 2 },
            { question: 'Which word is a preposition showing location?', options: ['Run', 'On', 'Apple', 'Happy'], correct: 1 },
            { question: 'Complete the sentence: "The apple is sitting _______ the plate."', options: ['under', 'on', 'with', 'because'], correct: 1 }
          ]
        },
        {
          id: 'lesson-5-7',
          number: '5.7',
          title: 'Conjunctions',
          learnContent: {
            title: 'Sentence Glue!',
            paragraphs: [
              'Conjunctions are connecting words. They act like glue to join words or sentences together! 🤝',
              'The most common conjunction is "and," which joins things together: "I like apples and bananas 🍎🍌."',
              'We also use "but" to show contrast ("I like cats, but not dogs") and "or" to show a choice ("Do you want milk or water?").'
            ],
            keyPoint: 'Conjunctions join words or sentences: and, but, or.',
            examples: [
              { visual: '🤝', text: 'and', label: 'joins together' },
              { visual: '⚖️', text: 'but', label: 'shows difference' },
              { visual: '❓', text: 'or', label: 'shows choice' },
              { visual: '🧪', text: 'Glue', label: 'joins sentence parts' }
            ],
            tip: 'Use "and" when you want to add more things, and "or" when you have to make a choice!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the CONJUNCTIONS purple and other words YELLOW!',
            categories: [
              { name: 'Conjunctions', color: 'purple', class: 'color-purple' },
              { name: 'Other Words', color: 'yellow', class: 'color-yellow' }
            ],
            items: [
              { text: 'and', category: 'Conjunctions' },
              { text: 'dog', category: 'Other Words' },
              { text: 'but', category: 'Conjunctions' },
              { text: 'run', category: 'Other Words' },
              { text: 'or', category: 'Conjunctions' },
              { text: 'happy', category: 'Other Words' }
            ],
            explanation: 'Conjunctions are joining words like and, but, or!'
          },
          checkQuestions: [
            { question: 'Which conjunction joins two foods: "I eat bread ____ butter"?', options: ['but', 'or', 'and', 'so'], correct: 2 },
            { question: 'Complete the sentence: "I want to play outside, ______ it is raining."', options: ['and', 'but', 'or', 'so'], correct: 1 },
            { question: 'Which of these is a conjunction?', options: ['apple', 'under', 'but', 'happy'], correct: 2 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'What is a noun?', options: ['An action word', 'A describing word', 'A person, place, or thing', 'A conjunction'], correct: 2, type: 'multiple-choice' },
        { question: 'Which word is a verb?', options: ['School', 'Run', 'Blue', 'Teacher'], correct: 1, type: 'multiple-choice' },
        { question: 'Which word is an adjective?', options: ['Dog', 'Big', 'Run', 'Behind'], correct: 1, type: 'multiple-choice' },
        { question: 'What is the plural of "Cat"?', options: ['Cats', 'Cates', 'Cating', 'Cated'], correct: 0, type: 'multiple-choice' },
        { question: 'What pronoun replaces a boy\'s name?', options: ['She', 'He', 'It', 'They'], correct: 1, type: 'multiple-choice' },
        { question: 'In the sentence: "The cup is on the table," what is the preposition?', options: ['cup', 'is', 'on', 'table'], correct: 2, type: 'multiple-choice' },
        { question: 'Which conjunction shows a choice?', options: ['and', 'but', 'or', 'because'], correct: 2, type: 'multiple-choice' },
        { question: 'Which noun is a PERSON?', options: ['Park', 'Teacher', 'Apple', 'Desk'], correct: 1, type: 'multiple-choice' },
        { question: 'What is the action word in: "She sings a song"?', options: ['She', 'sings', 'a', 'song'], correct: 1, type: 'multiple-choice' },
        { question: 'Which word describes the noun in: "I have a red hat"?', options: ['I', 'have', 'red', 'hat'], correct: 2, type: 'multiple-choice' }
      ]
    }
  ]
};
