window.AppData = window.AppData || {};
window.AppData.science = {
  id: 'science',
  name: 'Discovery Lab',
  icon: '🔬',
  description: 'Explore light, sound, plants, animals, and the earth!',
  color: 'science',
  modules: [
    // ==================== MODULE 13: Light & Sound (Physical Science) ====================
    {
      id: 'module-13',
      number: 13,
      title: 'Light & Sound',
      subject: 'science',
      icon: '🔊',
      badgeId: 'sound-scientist',
      badgeName: 'Sound Scientist',
      badgeIcon: '🔊',
      description: 'Explore what sound and light are, shadows, reflections, and communication!',
      lessons: [
        {
          id: 'lesson-13-1',
          number: '13.1',
          title: 'What is Sound?',
          learnContent: {
            title: 'Sound is Vibration!',
            paragraphs: [
              'Sound is all around us. We hear sounds with our ears, but how are they made? Sound is made by vibrations! 🔊',
              'A vibration is when something wiggles or moves back and forth super-fast. When you pluck a guitar string, it vibrates and makes a sound. When you talk, your vocal cords in your throat vibrate too!',
              'You can feel vibrations! Gently touch your throat and hum a tune — do you feel the buzz? That is vibration!'
            ],
            keyPoint: 'Sound is created by vibrations, which are rapid back-and-forth movements.',
            examples: [
              { visual: '🎸', text: 'Strumming guitar strings', label: 'strings vibrate' },
              { visual: '🥁', text: 'Hitting a drum skin', label: 'skin vibrates' },
              { visual: '🐝', text: 'Bee wings buzzing', label: 'wings vibrate fast' },
              { visual: '🗣️', text: 'Vocal cords humming', label: 'throat vibrates' }
            ],
            tip: 'If you want to stop a sound, just touch the vibrating object to stop it from wiggling!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the VIBRATING objects yellow, and STILL objects blue!',
            categories: [
              { name: 'Vibrating (Makes Sound)', color: 'yellow', class: 'color-yellow' },
              { name: 'Still (No Sound)', color: 'blue', class: 'color-blue' }
            ],
            items: [
              { text: 'Plucked guitar string', category: 'Vibrating (Makes Sound)' },
              { text: 'Book resting on table', category: 'Still (No Sound)' },
              { text: 'Ringing school bell', category: 'Vibrating (Makes Sound)' },
              { text: 'Pencil inside box', category: 'Still (No Sound)' }
            ],
            explanation: 'Sound is made when objects vibrate (move back and forth) quickly!'
          },
          checkQuestions: [
            { question: 'What is a vibration?', options: ['A loud yell', 'A rapid back-and-forth movement', 'A type of musical instrument', 'A color of sound'], correct: 1 },
            { question: 'How do you hear vibrations in the air?', options: ['With your eyes', 'With your ears', 'With your nose', 'With your hands'], correct: 1 },
            { question: 'Gently touching your throat while humming reveals what?', options: ['Vibration', 'Light', 'Heat', 'Nothing'], correct: 0 }
          ]
        },
        {
          id: 'lesson-13-2',
          number: '13.2',
          title: 'Loud vs. Soft Sounds',
          learnContent: {
            title: 'Understanding Volume!',
            paragraphs: [
              'Volume is how loud or soft a sound is. Some sounds are loud and use lots of energy, and some are soft and use very little energy! 🔊',
              'Loud sounds: A jet engine flying overhead ✈️, a drum kit, or a siren 🚨. These sounds vibrate the air strongly.',
              'Soft sounds: A whisper, a cat purring 🐱, or dry leaves rustling in the wind. These sounds vibrate the air gently.'
            ],
            keyPoint: 'Volume tells how loud or soft a sound is. Loud sounds have more energy than soft sounds.',
            examples: [
              { visual: '✈️', text: 'Jet Engine', label: 'loud sound' },
              { visual: '🚨', text: 'Siren', label: 'loud sound' },
              { visual: '🐱', text: 'Cat purring', label: 'soft sound' },
              { visual: '🤫', text: 'Whisper', label: 'soft sound' }
            ],
            tip: 'Very loud sounds can hurt your ears! Protect them by wearing headphones or covering them.'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these sounds by their volume: Loud or Soft!',
            categories: [
              {
                name: 'Loud Sounds',
                items: [
                  { value: 'thunder', text: 'Thunder Boom' },
                  { value: 'siren', text: 'Fire Siren' }
                ]
              },
              {
                name: 'Soft Sounds',
                items: [
                  { value: 'whisper', text: 'Secret Whisper' },
                  { value: 'purr', text: 'Kitten Purring' }
                ]
              }
            ],
            items: [
              { value: 'thunder', text: 'Thunder Boom', icon: '⛈️' },
              { value: 'whisper', text: 'Secret Whisper', icon: '🤫' },
              { value: 'siren', text: 'Fire Siren', icon: '🚨' },
              { value: 'purr', text: 'Kitten Purring', icon: '🐱' }
            ]
          },
          checkQuestions: [
            { question: 'What is volume in science?', options: ['How high a sound is', 'How loud or soft a sound is', 'How fast sound travels', 'What makes sound'], correct: 1 },
            { question: 'Which sound is typically LOUD?', options: ['A whisper', 'A cat purring', 'A thunderclap', 'Leaves blowing'], correct: 2 },
            { question: 'Do loud sounds use more or less energy than soft sounds?', options: ['More energy', 'Less energy', 'The same energy', 'No energy'], correct: 0 }
          ]
        },
        {
          id: 'lesson-13-3',
          number: '13.3',
          title: 'High vs. Low Pitch',
          learnContent: {
            title: 'What is Pitch?',
            paragraphs: [
              'Pitch is how high or low a sound is. It is different from volume (loudness)! 🐦',
              'High pitch sounds: A whistle blowing, a bird tweeting, or a small bell. They are made by things vibrating very fast!',
              'Low pitch sounds: A cow mooing 🐄, thunder rumbling, or a bass drum. They are made by things vibrating slower!'
            ],
            keyPoint: 'Pitch is how high or low a sound is, determined by how fast the source vibrates.',
            examples: [
              { visual: '🐦', text: 'Tweet tweet', label: 'high pitch (fast vibration)' },
              { visual: '🐄', text: 'Moo ooo', label: 'low pitch (slow vibration)' },
              { visual: ' whistle', text: 'Whistle', label: 'high pitch' },
              { visual: '🥁', text: 'Bass Drum', label: 'low pitch' }
            ],
            tip: 'Thick, heavy things vibrate slowly and make low pitch sounds. Thin, light things make high pitch sounds!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each sound to its pitch type!',
            pairs: [
              { id: 'pair1', left: 'Bird singing', right: 'High Pitch', leftIcon: '🐦', rightIcon: '⬆️' },
              { id: 'pair2', left: 'Cow mooing', right: 'Low Pitch', leftIcon: '🐄', rightIcon: '⬇️' },
              { id: 'pair3', left: 'Whistle blowing', right: 'High Pitch', leftIcon: '📯', rightIcon: '⬆️' },
              { id: 'pair4', left: 'Thunder rumbling', right: 'Low Pitch', leftIcon: '⛈️', rightIcon: '⬇️' }
            ]
          },
          checkQuestions: [
            { question: 'What is pitch?', options: ['How loud a sound is', 'How high or low a sound is', 'The shape of ears', 'How light bends'], correct: 1 },
            { question: 'What makes a high pitch sound?', options: ['Slow vibrations', 'Fast vibrations', 'No vibrations', 'Water'], correct: 1 },
            { question: 'Which animal makes a deep, LOW pitch sound?', options: ['A bird', 'A mouse', 'A lion growling', 'A cricket'], correct: 2 }
          ]
        },
        {
          id: 'lesson-13-4',
          number: '13.4',
          title: 'What is Light?',
          learnContent: {
            title: 'Light Sources!',
            paragraphs: [
              'Light is a form of energy that helps us see the world around us. Without light, everything would be completely pitch black! ☀️',
              'Things that make their own light are called light sources. The Sun ☀️ is our main natural light source. Lamps 💡, flashlights 🔦, and fire 🔥 are man-made light sources.',
              'The Moon looks bright, but it is not a light source! It only bounces (reflects) light from the Sun like a mirror.'
            ],
            keyPoint: 'Light allows us to see, and comes from natural or man-made light sources.',
            examples: [
              { visual: '☀️', text: 'The Sun', label: 'natural light source' },
              { visual: '💡', text: 'Lightbulb', label: 'man-made light source' },
              { visual: '🔥', text: 'Campfire', label: 'natural/combustion light' },
              { visual: '🔦', text: 'Flashlight', label: 'battery-powered light' }
            ],
            tip: 'If you want to know if something is a light source, ask: "Does it glow in the dark on its own?"'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these items into Light Sources or NOT Light Sources!',
            categories: [
              {
                name: 'Light Sources',
                items: [
                  { value: 'sun', text: 'The Sun' },
                  { value: 'candle', text: 'Burning Candle' }
                ]
              },
              {
                name: 'Not Light Sources',
                items: [
                  { value: 'book', text: 'A Book' },
                  { value: 'mirror', text: 'A Mirror' }
                ]
              }
            ],
            items: [
              { value: 'sun', text: 'The Sun', icon: '☀️' },
              { value: 'book', text: 'A Book', icon: '📖' },
              { value: 'candle', text: 'Burning Candle', icon: '🕯️' },
              { value: 'mirror', text: 'A Mirror', icon: '🪞' }
            ]
          },
          checkQuestions: [
            { question: 'Why do we need light?', options: ['To hear sounds', 'To see objects and colors', 'To smell flowers', 'To taste food'], correct: 1 },
            { question: 'Which of these is a natural source of light?', options: ['A flashlight', 'The Sun', 'A lamp', 'A mirror'], correct: 1 },
            { question: 'Is the Moon a source of light?', options: ['Yes, it makes its own light', 'No, it only reflects the Sun\'s light', 'Only in the summer', 'Only on cloudy nights'], correct: 1 }
          ]
        },
        {
          id: 'lesson-13-5',
          number: '13.5',
          title: 'Shadows',
          learnContent: {
            title: 'Making Shadows!',
            paragraphs: [
              'Light travels in straight lines. If light hits an object it cannot pass through, it gets blocked! The dark area behind that object is called a shadow. 👥',
              'To make a shadow, you need three things: 1. A Light source; 2. An Object (like your hand); 3. A Surface (like a wall or the ground) for the shadow to land on.',
              'The size and shape of a shadow can change depending on how close the light is to the object!'
            ],
            keyPoint: 'Shadows are formed when an object blocks light from passing through.',
            examples: [
              { visual: '🔦✋🧱', text: 'Flashlight + hand + wall', label: 'makes hand shadow' },
              { visual: '☀️🚶‍♂️🛣️', text: 'Sun + person + road', label: 'makes walking shadow' },
              { visual: '🌴', text: 'Tree shade', label: 'large tree shadow' },
              { visual: '🕶️', text: 'Shadow shape', label: 'matches the object shape' }
            ],
            tip: 'Move your flashlight closer to your hand to make the shadow on the wall look huge!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the items that make SHADOWS yellow, and CLEAR items blue!',
            categories: [
              { name: 'Makes Shadow (Opaque)', color: 'yellow', class: 'color-yellow' },
              { name: 'No Shadow (Transparent)', color: 'blue', class: 'color-blue' }
            ],
            items: [
              { text: 'Cardboard box', category: 'Makes Shadow (Opaque)' },
              { text: 'Clear window glass', category: 'No Shadow (Transparent)' },
              { text: 'Your body', category: 'Makes Shadow (Opaque)' },
              { text: 'Plastic wrap', category: 'No Shadow (Transparent)' }
            ],
            explanation: 'Shadows form when light is blocked by solid, opaque objects!'
          },
          checkQuestions: [
            { question: 'What blocks light to make a shadow?', options: ['A transparent glass window', 'An object that light cannot pass through', 'Air', 'A shadow puppet'], correct: 1 },
            { question: 'What shape is a shadow?', options: ['Always a circle', 'Matches the shape of the object blocking the light', 'Always a square', 'No shape'], correct: 1 },
            { question: 'Which of these is NOT needed to make a shadow?', options: ['A light source', 'An object', 'A wall or surface', 'A sound vibration'], correct: 3 }
          ]
        },
        {
          id: 'lesson-13-6',
          number: '13.6',
          title: 'Transparent, Translucent, Opaque',
          learnContent: {
            title: 'Does Light Pass Through?',
            paragraphs: [
              'Materials react to light in different ways. We group them into three categories: 🔍',
              '1. Transparent: Lets ALL light pass through easily. You can see through it clearly, like a glass window 🪟.',
              '2. Translucent: Lets SOME light pass, but blurs it. You can see shapes but not details, like tissue paper.',
              '3. Opaque: Blocks ALL light. You cannot see through it at all, and it makes a shadow, like a wooden door 🚪.'
            ],
            keyPoint: 'Materials can be transparent (clear), translucent (blurry), or opaque (blocks light).',
            examples: [
              { visual: '🪟', text: 'Glass window', label: 'transparent (lets all light through)' },
              { visual: '📄', text: 'Wax paper', label: 'translucent (lets some light through)' },
              { visual: '🚪', text: 'Wooden door', label: 'opaque (blocks all light)' },
              { visual: '🧱', text: 'Brick wall', label: 'opaque (makes shadow)' }
            ],
            tip: 'Hold a material up to a flashlight to see if it lets light through or makes a dark shadow!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these items into Transparent (clear) or Opaque (blocks light)!',
            categories: [
              {
                name: 'Transparent (Clear)',
                items: [
                  { value: 'glass-cup', text: 'Glass cup' },
                  { value: 'plastic-wrap', text: 'Clear plastic wrap' }
                ]
              },
              {
                name: 'Opaque (Blocks Light)',
                items: [
                  { value: 'metal-spoon', text: 'Metal spoon' },
                  { value: 'cardboard-box', text: 'Cardboard box' }
                ]
              }
            ],
            items: [
              { value: 'glass-cup', text: 'Glass cup', icon: '🥛' },
              { value: 'metal-spoon', text: 'Metal spoon', icon: '🥄' },
              { value: 'plastic-wrap', text: 'Clear plastic wrap', icon: '📄' },
              { value: 'cardboard-box', text: 'Cardboard box', icon: '📦' }
            ]
          },
          checkQuestions: [
            { question: 'What do we call a material that lets ALL light pass through clearly?', options: ['Opaque', 'Translucent', 'Transparent', 'Shadowy'], correct: 2 },
            { question: 'Why does a brick wall make a dark shadow?', options: ['Because it is transparent', 'Because it is opaque and blocks light', 'Because it is green', 'Because it vibrates'], correct: 1 },
            { question: 'Which material is translucent (lets some blurry light through)?', options: ['A wooden block', 'Clear eyeglasses', 'Frosted glass or tissue paper', 'A steel shield'], correct: 2 }
          ]
        },
        {
          id: 'lesson-13-7',
          number: '13.7',
          title: 'How We See Things',
          learnContent: {
            title: 'Light and Sight!',
            paragraphs: [
              'How do we see things? We need light to bounce off objects and enter our eyes! 👁️',
              'When light from a source (like the Sun) hits a book, the book reflects (bounces) the light. The bounced light enters our eyes, and our brain reads the message!',
              'If there is no light source, there is no light to bounce off objects, which is why we cannot see anything in a dark closet.'
            ],
            keyPoint: 'We see objects when light bounces off them and enters our eyes.',
            examples: [
              { visual: '💡➡️📘➡️👁️', text: 'Light path', label: 'Source to book to eye' },
              { visual: '🪞', text: 'Reflection', label: 'light bounces cleanly' },
              { visual: '🕶️ Dark', label: 'no light, no sight' },
              { visual: '👁️ Eye', label: 'receives bounced light' }
            ],
            tip: 'Shining a flashlight directly at your book helps reflect more light into your eyes!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the LIGHT SOURCES yellow, and REFLECTIVE/NON-LIGHT items blue!',
            categories: [
              { name: 'Light Source', color: 'yellow', class: 'color-yellow' },
              { name: 'Not a Light Source', color: 'blue', class: 'color-blue' }
            ],
            items: [
              { text: 'The Sun', category: 'Light Source' },
              { text: 'A red ball', category: 'Not a Light Source' },
              { text: 'A shining flashlight', category: 'Light Source' },
              { text: 'A metal mirror', category: 'Not a Light Source' }
            ],
            explanation: 'Light sources produce their own light. Other items are visible because light bounces off them!'
          },
          checkQuestions: [
            { question: 'What happens to light when it hits a non-clear object?', options: ['It disappears forever', 'It bounces (reflects) off it', 'It gets louder', 'It turns green'], correct: 1 },
            { question: 'Why can you not see a toy in a pitch-black box?', options: ['The toy ran away', 'There is no light to bounce off the toy into your eyes', 'Your eyes are closed', 'The toy turned transparent'], correct: 1 },
            { question: 'What organ in your body receives light to help you see?', options: ['Your ears', 'Your nose', 'Your eyes', 'Your hands'], correct: 2 }
          ]
        },
        {
          id: 'lesson-13-8',
          number: '13.8',
          title: 'Using Light & Sound to Communicate',
          learnContent: {
            title: 'Signals and Messages!',
            paragraphs: [
              'People and animals use light and sound to send messages over long distances! This is called communication. 📡',
              'Sound signals: Sirens 🚨 tell cars to pull over. School bells 🔔 tell kids recess is starting. Lighthouses and ship horns warn sailors.',
              'Light signals: Traffic lights 🚦 tell cars when to stop (red) or go (green). A flashlight beam can send emergency codes. Fireflies flash lights to talk to each other!'
            ],
            keyPoint: 'Light and sound signals can communicate warnings, directions, and messages.',
            examples: [
              { visual: '🚨', text: 'Siren', label: 'warning sound' },
              { visual: '🚦', text: 'Traffic light', label: 'safety light direction' },
              { visual: '🔔', text: 'School bell', label: 'schedule sound signal' },
              { visual: '💡', text: 'Lighthouse', label: 'ship navigation light' }
            ],
            tip: 'Look around on your ride home! How many light signals do you spot on the streets?'
          },
          activity: {
            type: 'matching',
            instruction: 'Match the signal to the message it communicates!',
            pairs: [
              { id: 'pair1', left: 'Red traffic light', right: 'Stop driving', leftIcon: '🔴🚦', rightIcon: '🛑🚗' },
              { id: 'pair2', left: 'Ambulance siren', right: 'Move out of the way', leftIcon: '🚨🚑', rightIcon: '👉🚗' },
              { id: 'pair3', left: 'School bell ringing', right: 'Time for class', leftIcon: '🔔🏫', rightIcon: '📚👦' },
              { id: 'pair4', left: 'Lighthouse beam', right: 'Warning: rocks ahead', leftIcon: '💡🗼', rightIcon: '🚢🪨' }
            ]
          },
          checkQuestions: [
            { question: 'What message does a red traffic light communicate?', options: ['Go fast', 'Turn around', 'Stop', 'Slow down'], correct: 2 },
            { question: 'Which is a SOUND signal used to communicate?', options: ['A lighthouse beam', 'A police car siren', 'A green traffic light', 'A stop sign'], correct: 1 },
            { question: 'How do fireflies communicate in the dark?', options: ['By chirping loudly', 'By flashing lights on their bodies', 'By tapping their feet', 'By waving leaves'], correct: 1 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'How is sound created?', options: ['By light reflections', 'By vibrations', 'By shadows', 'By water'], correct: 1, type: 'multiple-choice' },
        { question: 'What is volume?', options: ['How high or low a sound is', 'How loud or soft a sound is', 'The speed of light', 'The length of shadow'], correct: 1, type: 'multiple-choice' },
        { question: 'What type of vibration makes a high-pitch sound?', options: ['Slow vibration', 'Fast vibration', 'No vibration', 'Heavy vibration'], correct: 1, type: 'multiple-choice' },
        { question: 'Which of these is a source of light?', options: ['The Moon', 'A mirror', 'The Sun', 'A book'], correct: 2, type: 'multiple-choice' },
        { question: 'What forms when an object blocks light?', options: ['A reflection', 'A shadow', 'A sound wave', 'A rainbow'], correct: 1, type: 'multiple-choice' },
        { question: 'What material lets all light pass through clearly?', options: ['Opaque', 'Translucent', 'Transparent', 'Reflective'], correct: 2, type: 'multiple-choice' },
        { question: 'What happens to light to let us see a book?', options: ['It passes through it', 'It bounces off it into our eyes', 'It makes a sound', 'It turns dark'], correct: 1, type: 'multiple-choice' },
        { question: 'Which is a light signal used for traffic control?', options: ['A siren', 'A traffic light', 'A school bell', 'A horn'], correct: 1, type: 'multiple-choice' },
        { question: 'What material blocks all light (like wood)?', options: ['Transparent', 'Translucent', 'Opaque', 'Glass'], correct: 2, type: 'multiple-choice' },
        { question: 'Which animal uses light flashes to communicate?', options: ['Cricket', 'Bird', 'Firefly', 'Bat'], correct: 2, type: 'multiple-choice' }
      ]
    },

    // ==================== MODULE 14: Plants & Animals (Life Science) ====================
    {
      id: 'module-14',
      number: 14,
      title: 'Plants & Animals',
      subject: 'science',
      icon: '🌿',
      badgeId: 'nature-explorer',
      badgeName: 'Nature Explorer',
      badgeIcon: '🌱',
      description: 'Learn parts of plants and animals, survival needs, cycles, and inherited traits.',
      lessons: [
        {
          id: 'lesson-14-1',
          number: '14.1',
          title: 'Parts of a Plant',
          learnContent: {
            title: 'The Plant Body!',
            paragraphs: [
              'Plants are living things. They have different body parts that work together to help them live and grow! 🌱',
              'Roots: Grow underground. They hold the plant in place and drink water from the soil.',
              'Stem: Acts like a straw to carry water up to the leaves, and holds the plant tall.',
              'Leaves: Soak up sunlight to make food for the plant. Flowers: Make seeds to grow new plants!'
            ],
            keyPoint: 'Plants have roots (drink water), stem (support), leaves (make food), and flowers (reproduce).',
            examples: [
              { visual: 'Roots', text: 'Drink water', label: 'underground' },
              { visual: 'Stem', text: 'Carry water', label: 'plant straw' },
              { visual: '🍃', text: 'Leaves', label: 'sunlight catchers' },
              { visual: '🌸', text: 'Flower', label: 'make seeds' }
            ],
            tip: 'The next time you eat celery, you are eating a plant stem! 🥬'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these plant parts by where they belong: Underground or Aboveground!',
            categories: [
              {
                name: 'Underground',
                items: [
                  { value: 'roots', text: 'Roots' }
                ]
              },
              {
                name: 'Aboveground',
                items: [
                  { value: 'leaves', text: 'Green Leaves' },
                  { value: 'flower', text: 'Bright Flower' }
                ]
              }
            ],
            items: [
              { value: 'roots', text: 'Roots', icon: '🌱' },
              { value: 'leaves', text: 'Green Leaves', icon: '🍃' },
              { value: 'flower', text: 'Bright Flower', icon: '🌸' }
            ]
          },
          checkQuestions: [
            { question: 'Which part of a plant drinks water from the soil?', options: ['Leaves', 'Flower', 'Roots', 'Stem'], correct: 2 },
            { question: 'What does the stem do?', options: ['Makes seeds', 'Holds the plant up and carries water', 'Catches sunlight', 'Digs in dirt'], correct: 1 },
            { question: 'What plant part soaks up sunlight to make food?', options: ['Roots', 'Leaves', 'Bark', 'Flower'], correct: 1 }
          ]
        },
        {
          id: 'lesson-14-2',
          number: '14.2',
          title: 'What Plants Need to Grow',
          learnContent: {
            title: 'Plants Survival Needs!',
            paragraphs: [
              'Plants cannot buy food at the grocery store. They must make their own food! To do this and survive, they need four basic things: ☀️',
              '1. Sunlight: Gives them energy. 2. Water: Keeps them hydrated. 3. Air: Gives them carbon dioxide. 4. Space / Soil: Gives them roots room to grow and minerals.',
              'If a plant does not get water or sunlight, it will wilt, turn brown, and stop growing!'
            ],
            keyPoint: 'Plants need sunlight, water, air, and soil/space to survive and make food.',
            examples: [
              { visual: '☀️', text: 'Sunlight', label: 'energy source' },
              { visual: '💧', text: 'Water', label: 'hydration' },
              { visual: '🌬️', text: 'Air', label: 'breathing' },
              { visual: '🪵', text: 'Soil', label: 'nutrients & support' }
            ],
            tip: 'Houseplants bend toward the window because they are searching for sunlight!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the items that a plant NEEDS to grow green, and items it does NOT need red!',
            categories: [
              { name: 'Needs to Grow', color: 'green', class: 'color-green' },
              { name: 'Does Not Need', color: 'red', class: 'color-red' }
            ],
            items: [
              { text: 'Sunlight', category: 'Needs to Grow' },
              { text: 'Soda pop', category: 'Does Not Need' },
              { text: 'Water', category: 'Needs to Grow' },
              { text: 'Ice cream', category: 'Does Not Need' }
            ],
            explanation: 'Plants need water, sunlight, soil, and air to grow healthy and strong!'
          },
          checkQuestions: [
            { question: 'Which of these is NOT a survival need for a plant?', options: ['Water', 'Sunlight', 'Soda or Juice', 'Air'], correct: 2 },
            { question: 'What do leaves use to make food for the plant?', options: ['Sunlight, water, and air', 'Dirt only', 'Fruit juice', 'Wind only'], correct: 0 },
            { question: 'Why do plants need soil?', options: ['To hide from animals', 'To get water and minerals through their roots', 'To stay warm', 'For no reason'], correct: 1 }
          ]
        },
        {
          id: 'lesson-14-3',
          number: '14.3',
          title: 'Plant Life Cycle',
          learnContent: {
            title: 'From Seed to Plant!',
            paragraphs: [
              'A plant grows and changes throughout its life. This repeating pattern is called the plant life cycle! 🔄',
              'Step 1: Seed. Placed in soil. Step 2: Sprout (Germination). Small green shoots push out. 芽',
              'Step 3: Seedling. Grows small leaves. Step 4: Adult Plant. Grows flowers and produces new seeds that can start the cycle over!'
            ],
            keyPoint: 'The plant life cycle goes from seed to sprout, seedling, adult plant, and back to seed.',
            examples: [
              { visual: '🟤', text: 'Seed', label: 'start of cycle' },
              { visual: '🌱', text: 'Sprout', label: 'baby shoot pushes out' },
              { visual: '🌿', text: 'Seedling', label: 'growing plant' },
              { visual: '🌻', text: 'Adult sunflower', label: 'makes new seeds' }
            ],
            tip: 'The seed contains a tiny baby plant inside along with food to help it sprout!'
          },
          activity: {
            type: 'sequence',
            instruction: 'Put the stages of the plant life cycle in the correct order!',
            items: [
              { text: '1. Seed in the soil 🟤' },
              { text: '2. Sprout pushes out (Germination) 🌱' },
              { text: '3. Growing Seedling with small leaves 🌿' },
              { text: '4. Adult Plant with flowers and seeds 🌻' }
            ]
          },
          checkQuestions: [
            { question: 'What is the very first stage of a plant\'s life cycle?', options: ['Flower', 'Seedling', 'Seed', 'Sprout'], correct: 2 },
            { question: 'What is a sprout doing?', options: ['Making fruit', 'Pushing its first shoot out of the seed', 'Drying out', 'Felling down'], correct: 1 },
            { question: 'How does an adult plant make sure the cycle starts again?', options: ['It grows taller', 'It makes new seeds', 'It drops its leaves', 'It drinks water'], correct: 1 }
          ]
        },
        {
          id: 'lesson-14-4',
          number: '14.4',
          title: 'Parts of an Animal',
          learnContent: {
            title: 'Animal Body Parts!',
            paragraphs: [
              'Animals have special body parts that help them survive in their environments. 🦁',
              'Fish have gills to breathe underwater, and fins to swim 🐟. Birds have wings to fly, and feathers to stay warm 🦅.',
              'Lions have sharp claws and teeth to catch food 🦁. Elephants have trunks to grab branches and drink water 🐘.'
            ],
            keyPoint: 'Animal body parts are adapted to help them move, breathe, eat, and stay safe.',
            examples: [
              { visual: '🐟', text: 'Gills and Fins', label: 'swimming & breathing water' },
              { visual: '🦅', text: 'Wings and Feathers', label: 'flying & warmth' },
              { visual: '🦁', text: 'Sharp Claws', label: 'hunting & protection' },
              { visual: '🐘', text: 'Trunk', label: 'grabbing & drinking' }
            ],
            tip: 'Think about where an animal lives! Its body parts are perfect for that specific place!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match the animal body part to its survival function!',
            pairs: [
              { id: 'pair1', left: 'Fish Gills', right: 'Breathe underwater', leftIcon: '🐟', rightIcon: '💨' },
              { id: 'pair2', left: 'Bird Wings', right: 'Fly in the sky', leftIcon: '🦅', rightIcon: '☁️' },
              { id: 'pair3', left: 'Lion Claws', right: 'Catch food and climb', leftIcon: '🦁', rightIcon: '🧗' },
              { id: 'pair4', left: 'Elephant Trunk', right: 'Grab food and drink', leftIcon: '🐘', rightIcon: '💧' }
            ]
          },
          checkQuestions: [
            { question: 'What body part does a fish use to breathe underwater?', options: ['Lungs', 'Gills', 'Fins', 'Tail'], correct: 1 },
            { question: 'Why do birds have feathers?', options: ['To swim faster', 'To stay warm and help fly', 'To hear sounds', 'To grow seeds'], correct: 1 },
            { question: 'What does a lion use its claws for?', options: ['Making music', 'Catching food and climbing', 'Flying', 'Breathing'], correct: 1 }
          ]
        },
        {
          id: 'lesson-14-5',
          number: '14.5',
          title: 'Animal Survival Needs',
          learnContent: {
            title: 'What Animals Need to Live!',
            paragraphs: [
              'Unlike plants, animals cannot make their own food. They must search for it! Animals have four basic survival needs: 🦁',
              '1. Food: Gives them energy. 2. Water: Keeps their bodies working. 3. Air: Gives them oxygen. 4. Shelter: A safe home to hide from weather and predators.',
              'If an animal cannot find food or water in its habitat, it must move to a new place or it will not survive!'
            ],
            keyPoint: 'Animals need food, water, air, and shelter to live and stay safe.',
            examples: [
              { visual: '🥩', text: 'Food', label: 'energy source' },
              { visual: '💧', text: 'Water', label: 'hydration' },
              { visual: '🌬️', text: 'Air', label: 'breathing' },
              { visual: '🏠', text: 'Shelter', label: 'protection / home' }
            ],
            tip: 'Shelters can be nests 🪹, dens, caves, burrows, or even shells on turtles\' backs!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these items into Animal Needs or NOT Animal Needs!',
            categories: [
              {
                name: 'Animal Survival Needs',
                items: [
                  { value: 'clean-water', text: 'Clean Water' },
                  { value: 'safe-cave', text: 'Safe Cave (Shelter)' }
                ]
              },
              {
                name: 'Not Animal Needs',
                items: [
                  { value: 'video-game', text: 'Video Games' },
                  { value: 'toy-car', text: 'Toy Car' }
                ]
              }
            ],
            items: [
              { value: 'clean-water', text: 'Clean Water', icon: '💧' },
              { value: 'video-game', text: 'Video Games', icon: '🎮' },
              { value: 'safe-cave', text: 'Safe Cave (Shelter)', icon: '⛰️' },
              { value: 'toy-car', text: 'Toy Car', icon: '🚗' }
            ]
          },
          checkQuestions: [
            { question: 'Which of these is a basic survival need for all animals?', options: ['Toys', 'Shelter (safe home)', 'Warm clothes', 'Television'], correct: 1 },
            { question: 'How do animals get energy?', options: ['By basking in sun only', 'By eating food', 'By drinking juice', 'By sleeping'], correct: 1 },
            { question: 'Why is a shelter important for a baby rabbit?', options: ['To hide from predators and bad weather', 'To play games', 'To store toys', 'For no reason'], correct: 0 }
          ]
        },
        {
          id: 'lesson-14-6',
          number: '14.6',
          title: 'Animal Habitats',
          learnContent: {
            title: 'Where Do Animals Live?',
            paragraphs: [
              'A habitat is the place where an animal lives. It has all the food, water, air, and shelter the animal needs to survive! 🌍',
              'Forest: High trees, homes for bears, squirrels, and birds 🌲.',
              'Ocean: Saltwater, homes for fish, whales, and sharks 🦈. Desert: Hot and dry, homes for camels, snakes, and lizards 🏜️.',
              'Arctic: Cold and snowy, homes for polar bears and penguins ❄️.'
            ],
            keyPoint: 'Habitats are animal homes that supply all their survival needs.',
            examples: [
              { visual: '🌲', text: 'Forest', label: 'bear & squirrel habitat' },
              { visual: '🌊', text: 'Ocean', label: 'fish & whale habitat' },
              { visual: '🏜️', text: 'Desert', label: 'camel & snake habitat' },
              { visual: '❄️', text: 'Arctic', label: 'polar bear habitat' }
            ],
            tip: 'Polar bears have thick white fur that helps them blend in and stay warm in their freezing arctic habitat!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these animals into Ocean Habitat or Desert Habitat!',
            categories: [
              {
                name: 'Ocean Habitat',
                items: [
                  { value: 'dolphin', text: 'Dolphin' },
                  { value: 'shark', text: 'Shark' }
                ]
              },
              {
                name: 'Desert Habitat',
                items: [
                  { value: 'camel', text: 'Camel' },
                  { value: 'scorpion', text: 'Scorpion' }
                ]
              }
            ],
            items: [
              { value: 'dolphin', text: 'Dolphin', icon: '🐬' },
              { value: 'camel', text: 'Camel', icon: '🐫' },
              { value: 'shark', text: 'Shark', icon: '🦈' },
              { value: 'scorpion', text: 'Scorpion', icon: '🦂' }
            ]
          },
          checkQuestions: [
            { question: 'What is a habitat?', options: ['A type of food', 'An animal\'s home that meets its needs', 'A science tool', 'A season'], correct: 1 },
            { question: 'Where would you find a polar bear living naturally?', options: ['In the hot desert', 'In the cold arctic', 'In a tropical rainforest', 'In the deep ocean'], correct: 1 },
            { question: 'Why does a fish live in the ocean habitat instead of the forest?', options: ['It likes salt better', 'It needs water to breathe through its gills', 'It likes to climb trees', 'It is afraid of birds'], correct: 1 }
          ]
        },
        {
          id: 'lesson-14-7',
          number: '14.7',
          title: 'Parents & Offspring',
          learnContent: {
            title: 'Baby Animals and Parents!',
            paragraphs: [
              'Baby animals are called offspring. Offspring look a lot like their parents, but they are smaller and grow up over time! 👪',
              'For example, a baby dog is a puppy 🐶. A baby cat is a kitten 🐱. A baby bear is a cub 🐻. A baby bird is a chick 🐥.',
              'Parent animals take care of their babies, feeding them, keeping them safe, and teaching them how to survive in their habitats.'
            ],
            keyPoint: 'Baby animals (offspring) resemble their parent animals but start out smaller.',
            examples: [
              { visual: '🐶', text: 'Puppy', label: 'dog offspring' },
              { visual: '🐱', text: 'Kitten', label: 'cat offspring' },
              { visual: '🐥', text: 'Chick', label: 'bird offspring' },
              { visual: '🐻', text: 'Cub', label: 'bear offspring' }
            ],
            tip: 'Look at baby animal ears and feet — they are often too big for their bodies, but they grow into them!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each parent animal to its baby offspring name!',
            pairs: [
              { id: 'pair1', left: 'Dog', right: 'Puppy', leftIcon: '🐕', rightIcon: '🐶' },
              { id: 'pair2', left: 'Cat', right: 'Kitten', leftIcon: '🐈', rightIcon: '🐱' },
              { id: 'pair3', left: 'Hen', right: 'Chick', leftIcon: '🐔', rightIcon: '🐥' },
              { id: 'pair4', left: 'Bear', right: 'Cub', leftIcon: '🐻', rightIcon: '🧸' }
            ]
          },
          checkQuestions: [
            { question: 'What is a baby animal called in science?', options: ['A parent', 'An offspring', 'A habitat', 'A seedling'], correct: 1 },
            { question: 'What is the offspring of a cat called?', options: ['Puppy', 'Cub', 'Kitten', 'Chick'], correct: 2 },
            { question: 'Do baby animals look completely different from their parents?', options: ['Yes, always', 'No, they resemble their parents but are smaller', 'Only at night', 'Only in the ocean'], correct: 1 }
          ]
        },
        {
          id: 'lesson-14-8',
          number: '14.8',
          title: 'Inherited Traits',
          learnContent: {
            title: 'Like Parent, Like Baby!',
            paragraphs: [
              'Why do baby animals look like their parents? It is because of inherited traits! 🧬',
              'Inherited traits are characteristics passed down from parents to babies. This includes fur color, body shape, tail length, and patterns.',
              'For example, a baby zebra inherits black and white stripes 🦓 from its parent zebras. A baby giraffe inherits a long neck and spotted patterns!'
            ],
            keyPoint: 'Inherited traits are characteristics passed from parents to offspring, making them look similar.',
            examples: [
              { visual: '🦓', text: 'Stripes', label: 'inherited zebra trait' },
              { visual: '🦒', text: 'Long neck', label: 'inherited giraffe trait' },
              { visual: '🐅', text: 'Tiger stripes', label: 'inherited trait' },
              { visual: '🟤', text: 'Brown fur', label: 'inherited bear trait' }
            ],
            tip: 'Think about yourself! Did you inherit your eye color or hair color from your parents?'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the INHERITED traits yellow, and LEARNED traits blue!',
            categories: [
              { name: 'Inherited', color: 'yellow', class: 'color-yellow' },
              { name: 'Learned', color: 'blue', class: 'color-blue' }
            ],
            items: [
              { text: 'Orange fur with stripes', category: 'Inherited' },
              { text: 'Knowing how to climb tree', category: 'Learned' },
              { text: 'Eye color', category: 'Inherited' },
              { text: 'Playing with a ball', category: 'Learned' }
            ],
            explanation: 'Physical features are inherited from parents, while behaviors are learned as they grow!'
          },
          checkQuestions: [
            { question: 'What are inherited traits?', options: ['Toys given by parents', 'Characteristics passed from parents to babies', 'Animal homes', 'Types of food'], correct: 1 },
            { question: 'Why does a baby elephant have a long trunk?', options: ['It stretched it', 'It inherited the trait from its elephant parents', 'For fun', 'It bought it'], correct: 1 },
            { question: 'Which is an inherited trait of a bird?', options: ['Having feathers and a beak', 'Knowing where to fly', 'Having a name', 'Living in a wooden cage'], correct: 0 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'Which part of a plant grows underground and drinks water?', options: ['Stem', 'Roots', 'Leaves', 'Flower'], correct: 1, type: 'multiple-choice' },
        { question: 'What do plants need to make food?', options: ['Soda, soil, and shade', 'Sunlight, water, and air', 'Brooms and seeds', 'Wind and dark closets'], correct: 1, type: 'multiple-choice' },
        { question: 'What is the correct order of the plant life cycle?', options: ['Sprout → Seed → Seedling', 'Seed → Sprout → Seedling → Adult', 'Adult → Seedling → Seed', 'Seedling → Sprout → Adult'], correct: 1, type: 'multiple-choice' },
        { question: 'Why do fish have gills?', options: ['To fly', 'To swim faster', 'To breathe underwater', 'To catch bugs'], correct: 2, type: 'multiple-choice' },
        { question: 'Which is a basic survival need for all animals?', options: ['Toys', 'Shelter', 'Clothes', 'Television'], correct: 1, type: 'multiple-choice' },
        { question: 'What do we call the place where an animal lives?', options: ['A den', 'A habitat', 'An offspring', 'A trait'], correct: 1, type: 'multiple-choice' },
        { question: 'What is the offspring of a dog called?', options: ['Kitten', 'Cub', 'Puppy', 'Chick'], correct: 2, type: 'multiple-choice' },
        { question: 'Why do baby zebras have stripes?', options: ['They painted them', 'They inherited the trait from their parents', 'To keep warm', 'For fun'], correct: 1, type: 'multiple-choice' },
        { question: 'What plant part supports the plant and carries water to leaves?', options: ['Roots', 'Stem', 'Flower', 'Fruit'], correct: 1, type: 'multiple-choice' },
        { question: 'Which animal habitat is very hot and dry?', options: ['Forest', 'Ocean', 'Desert', 'Arctic'], correct: 2, type: 'multiple-choice' }
      ]
    },

    // ==================== MODULE 15: Earth & Space ====================
    {
      id: 'module-15',
      number: 15,
      title: 'Earth & Space',
      subject: 'science',
      icon: '🌍',
      badgeId: 'earth-explorer',
      badgeName: 'Earth Explorer',
      badgeIcon: '🌍',
      description: 'Explore the Sun, day and night, the Moon and stars, seasons, and weather.',
      lessons: [
        {
          id: 'lesson-15-1',
          number: '15.1',
          title: 'The Sun',
          learnContent: {
            title: 'Our Special Star — The Sun!',
            paragraphs: [
              'The Sun is a giant, glowing ball of hot gas in space. It is actually a star, and it is the closest star to planet Earth! ☀️',
              'The Sun is very important. It gives Earth two main things: 1. Light (so we can see during the day); 2. Heat (so our planet does not freeze).',
              'Without the Sun, Earth would be a dark, freezing ball of ice with no plants or animals!'
            ],
            keyPoint: 'The Sun is a star that provides Earth with essential light and heat.',
            examples: [
              { visual: '☀️', text: 'The Sun', label: 'closest star' },
              { visual: '💡', text: 'Light', label: 'shines during day' },
              { visual: '🔥', text: 'Heat', label: 'keeps us warm' },
              { visual: '🌻', text: 'Plant growth', label: 'sun gives energy' }
            ],
            tip: 'Never look directly at the Sun! It is so bright it can hurt your eyes.'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the facts about the SUN yellow, and facts about the EARTH blue!',
            categories: [
              { name: 'The Sun', color: 'yellow', class: 'color-yellow' },
              { name: 'The Earth', color: 'blue', class: 'color-blue' }
            ],
            items: [
              { text: 'A giant star made of hot gas', category: 'The Sun' },
              { text: 'A rocky planet with life', category: 'The Earth' },
              { text: 'Has continents and oceans', category: 'The Earth' },
              { text: 'Gives us daylight and warmth', category: 'The Sun' }
            ],
            explanation: 'The Sun is a star that gives us light and heat, while the Earth is the planet we live on!'
          },
          checkQuestions: [
            { question: 'What is the Sun?', options: ['A solid planet', 'A giant star', 'A moon', 'A cloud'], correct: 1 },
            { question: 'What two things does the Sun send to Earth?', options: ['Water and air', 'Light and heat', 'Rocks and dust', 'Wind and rain'], correct: 1 },
            { question: 'What would Earth be like without the Sun?', options: ['Just as it is now', 'Dark and freezing cold', 'Very hot and dry', 'Full of trees'], correct: 1 }
          ]
        },
        {
          id: 'lesson-15-2',
          number: '15.2',
          title: 'Day and Night',
          learnContent: {
            title: 'The Spinning Earth!',
            paragraphs: [
              'Why does the Sun rise in the morning and set at night? It is because planet Earth is spinning like a top! 🌍',
              'As Earth spins, the side facing the Sun gets light — that is Day ☀️. The side facing away from the Sun is dark — that is Night 🌙.',
              'It takes Earth exactly 24 hours (one whole day) to spin all the way around once!'
            ],
            keyPoint: 'Day and night are caused by the spinning (rotation) of the Earth.',
            examples: [
              { visual: '🌍☀️', text: 'Facing Sun', label: 'Daytime' },
              { visual: '🌍🌑', text: 'Facing Away', label: 'Nighttime' },
              { visual: '🔄', text: 'Spinning', label: 'takes 24 hours' },
              { visual: '🌅', text: 'Sunrise', label: 'spinning into light' }
            ],
            tip: 'Think of a flashlight shining on a globe. As you spin the globe, different countries go from light to dark!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these activities into Day or Night activities!',
            categories: [
              {
                name: 'Day Activities',
                items: [
                  { value: 'school', text: 'Going to School' },
                  { value: 'play-park', text: 'Playing at the Park' }
                ]
              },
              {
                name: 'Night Activities',
                items: [
                  { value: 'sleep-bed', text: 'Sleeping in Bed' },
                  { value: 'stars-view', text: 'Looking at Stars' }
                ]
              }
            ],
            items: [
              { value: 'school', text: 'Going to School', icon: '🏫' },
              { value: 'sleep-bed', text: 'Sleeping in Bed', icon: '😴' },
              { value: 'play-park', text: 'Playing at the Park', icon: '🌳' },
              { value: 'stars-view', text: 'Looking at Stars', icon: '🌟' }
            ]
          },
          checkQuestions: [
            { question: 'What causes day and night on Earth?', options: ['The Sun turning off at night', 'The Earth spinning like a top', 'Clouds blocking the light', 'The Moon moving in front of the Sun'], correct: 1 },
            { question: 'What is happening when it is nighttime where you live?', options: ['Your side of Earth is facing away from the Sun', 'The Sun is sleeping', 'The Earth stopped spinning', 'It is winter'], correct: 0 },
            { question: 'How long does it take Earth to spin around once?', options: ['1 hour', '12 hours', '24 hours (1 day)', '365 days'], correct: 2 }
          ]
        },
        {
          id: 'lesson-15-3',
          number: '15.3',
          title: 'The Moon & Its Phases',
          learnContent: {
            title: 'The Changing Moon!',
            paragraphs: [
              'The Moon is a rocky ball that travels in a circle around the Earth. 🌙',
              'The Moon does not make its own light. It reflects sunlight. As the Moon travels around Earth, we see different amounts of its lit side. These shapes are called moon phases!',
              'Phases: Full Moon (round circle 🌕), Crescent Moon (banana shape 🌙), Half Moon (🌓), and New Moon (dark circle 🌑).'
            ],
            keyPoint: 'The Moon travels around Earth, showing different shapes (phases) based on reflected sunlight.',
            examples: [
              { visual: '🌕', text: 'Full Moon', label: 'fully lit circle' },
              { visual: '🌓', text: 'Half Moon', label: 'halfway lit' },
              { visual: '🌙', text: 'Crescent Moon', label: 'banana shape' },
              { visual: '🌑', text: 'New Moon', label: 'completely dark' }
            ],
            tip: 'The Moon takes about 29 days (one month) to go through all its shapes and start over!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match the moon phase name to its emoji shape!',
            pairs: [
              { id: 'pair1', left: 'Full Moon', right: '🌕', leftIcon: 'Full', rightIcon: '🌕' },
              { id: 'pair2', left: 'Crescent Moon', right: '🌙', leftIcon: 'Crescent', rightIcon: '🌙' },
              { id: 'pair3', left: 'Half Moon', right: '🌓', leftIcon: 'Half', rightIcon: '🌓' },
              { id: 'pair4', left: 'New Moon', right: '🌑', leftIcon: 'New', rightIcon: '🌑' }
            ]
          },
          checkQuestions: [
            { question: 'Does the Moon make its own light?', options: ['Yes, it glows', 'No, it reflects sunlight', 'Only in winter', 'Only when full'], correct: 1 },
            { question: 'What do we call the different shapes the Moon looks like from Earth?', options: ['Moon stars', 'Moon phases', 'Moon cycles', 'Space shapes'], correct: 1 },
            { question: 'How long does it take the Moon to go through all its phases?', options: ['1 day', '7 days', 'About 29 days (1 month)', '1 year'], correct: 2 }
          ]
        },
        {
          id: 'lesson-15-4',
          number: '15.4',
          title: 'Stars & Patterns in the Sky',
          learnContent: {
            title: 'Connect the Dots with Stars!',
            paragraphs: [
              'Stars are giant glowing balls of gas, just like our Sun, but they are very far away! This is why they look like tiny twinkling dots of light. ✨',
              'A constellation is a group of stars that form a picture or pattern in the night sky! 🌌',
              'People long ago looked at the stars and connected them like dots to draw heroes, animals, and objects. Example: The Big Dipper (looks like a giant spoon 🥄).'
            ],
            keyPoint: 'Constellations are patterns of stars that form imaginary pictures in the night sky.',
            examples: [
              { visual: '✨', text: 'Twinkling stars', label: 'far away suns' },
              { visual: '🥄', text: 'Big Dipper', label: 'spoon shape constellation' },
              { visual: '🦁', text: 'Leo constellation', label: 'lion shape' },
              { visual: '🌌', text: 'Night Sky', label: 'star map' }
            ],
            tip: 'The North Star is special because it stays in the exact same spot in the sky all night long!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the CONSTELLATIONS green, and single PLANETS yellow!',
            categories: [
              { name: 'Constellations', color: 'green', class: 'color-green' },
              { name: 'Planets', color: 'yellow', class: 'color-yellow' }
            ],
            items: [
              { text: 'The Big Dipper star group', category: 'Constellations' },
              { text: 'Mars', category: 'Planets' },
              { text: 'Orion the Hunter star group', category: 'Constellations' },
              { text: 'Jupiter', category: 'Planets' }
            ],
            explanation: 'Constellations are groups of stars that make imaginary pictures in the night sky!'
          },
          checkQuestions: [
            { question: 'Why do stars look so small to us?', options: ['They are tiny dots', 'They are very, very far away', 'They are cold', 'They are sleeping'], correct: 1 },
            { question: 'What does the Big Dipper constellation look like?', options: ['A giant spoon or ladle', 'A box', 'A fish', 'A dog'], correct: 0 },
            { question: 'Which star is the closest star to Earth?', options: ['The North Star', 'The Sun', 'Leo', 'Sirius'], correct: 1 }
          ]
        },
        {
          id: 'lesson-15-5',
          number: '15.5',
          title: 'Seasons & Daylight',
          learnContent: {
            title: 'The Four Seasons!',
            paragraphs: [
              'Earth has four seasons: Spring, Summer, Fall, and Winter. Each season has different weather and different amounts of daylight! ☀️🍂',
              'Summer: Earth is tilted toward the Sun. Days are long and hot, and we get lots of daylight ☀️.',
              'Winter: Earth is tilted away from the Sun. Days are short and cold, and the Sun sets early ❄️.',
              'Spring 🌸 is when plants start to bloom, and Fall 🍂 is when leaves change color and drop.'
            ],
            keyPoint: 'The seasons change because Earth tilts as it travels around the Sun, changing daylight and weather.',
            examples: [
              { visual: '☀️🕶️', text: 'Summer', label: 'hot, long daylight hours' },
              { visual: '❄️⛄', text: 'Winter', label: 'cold, short daylight hours' },
              { visual: '🌸🌱', text: 'Spring', label: 'blooming flowers' },
              { visual: '🍂🍁', text: 'Fall', label: 'colored falling leaves' }
            ],
            tip: 'Pay attention to bedtime! In summer, it might still be light outside when you go to bed!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these seasonal items into Summer or Winter!',
            categories: [
              {
                name: 'Summer Items',
                items: [
                  { value: 'swimsuit', text: 'Swimsuit' },
                  { value: 'sunglasses', text: 'Sunglasses' }
                ]
              },
              {
                name: 'Winter Items',
                items: [
                  { value: 'snow-boots', text: 'Snow Boots' },
                  { value: 'winter-coat', text: 'Thick Winter Coat' }
                ]
              }
            ],
            items: [
              { value: 'swimsuit', text: 'Swimsuit', icon: '🩳' },
              { value: 'snow-boots', text: 'Snow Boots', icon: '🥾' },
              { value: 'sunglasses', text: 'Sunglasses', icon: '🕶️' },
              { value: 'winter-coat', text: 'Thick Winter Coat', icon: '🧥' }
            ]
          },
          checkQuestions: [
            { question: 'Which season has the warmest weather and longest daylight hours?', options: ['Winter', 'Fall', 'Summer', 'Spring'], correct: 2 },
            { question: 'Why does the amount of daylight change throughout the year?', options: ['The Sun moves closer and further', 'The Earth tilts as it goes around the Sun', 'The clouds block the sky', 'The Sun turns off early'], correct: 1 },
            { question: 'What happens to trees in the Fall season?', options: ['They grow flowers', 'Their leaves change color and fall off', 'They freeze into ice', 'Nothing'], correct: 1 }
          ]
        },
        {
          id: 'lesson-15-6',
          number: '15.6',
          title: 'Weather Patterns',
          learnContent: {
            title: 'Types of Weather!',
            paragraphs: [
              'Weather is what the air outside is like right now! It can change from day to day, but it follows patterns. 🌧️',
              'Sunny: High light, warm temperature. Rainy: Clouds drop liquid water 🌧️.',
              'Windy: Air moves fast. Snowy: Freezing air turns water into ice crystals ❄️.',
              'Meteorologists are scientists who study weather patterns to predict if you need a coat or an umbrella tomorrow!'
            ],
            keyPoint: 'Weather is the state of the atmosphere and follows seasonal patterns.',
            examples: [
              { visual: '☀️', text: 'Sunny', label: 'clear skies' },
              { visual: '🌧️', text: 'Rainy', label: 'water droplets falling' },
              { visual: '💨', text: 'Windy', label: 'moving air' },
              { visual: '❄️', text: 'Snowy', label: 'frozen snowflakes' }
            ],
            tip: 'Keep a daily weather chart for a week to spot patterns where you live!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match the weather condition to the correct item you would use!',
            pairs: [
              { id: 'pair1', left: 'Rainy weather', right: 'Umbrella', leftIcon: '🌧️', rightIcon: '☔' },
              { id: 'pair2', left: 'Sunny weather', right: 'Sunglasses', leftIcon: '☀️', rightIcon: '🕶️' },
              { id: 'pair3', left: 'Snowy weather', right: 'Mittens', leftIcon: '❄️', rightIcon: '🧤' },
              { id: 'pair4', left: 'Windy weather', right: 'Kite', leftIcon: '💨', rightIcon: '🪁' }
            ]
          },
          checkQuestions: [
            { question: 'What is weather?', options: ['What space is like', 'What the air outside is like right now', 'A type of plant', 'The spinning Earth'], correct: 1 },
            { question: 'What does a scientist who studies weather do?', options: ['Digs up dinosaur bones', 'Predicts and reports the weather', 'Builds computers', 'Teaches art'], correct: 1 },
            { question: 'Which weather happens when the air is freezing cold?', options: ['Sunny', 'Rainy', 'Snowy', 'Windy'], correct: 2 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'What is the Sun?', options: ['A planet', 'A star', 'A moon', 'A cloud'], correct: 1, type: 'multiple-choice' },
        { question: 'What causes day and night on Earth?', options: ['The Sun spinning', 'The Earth spinning', 'The Moon blocking light', 'Clouds'], correct: 1, type: 'multiple-choice' },
        { question: 'Does the Moon make its own light?', options: ['Yes', 'No, it reflects the Sun\'s light', 'Only sometimes', 'Only at day'], correct: 1, type: 'multiple-choice' },
        { question: 'What is a pattern of stars in the night sky called?', options: ['A galaxy', 'A constellation', 'A solar system', 'A comet'], correct: 1, type: 'multiple-choice' },
        { question: 'Which season has the shortest daylight hours and coldest weather?', options: ['Spring', 'Summer', 'Fall', 'Winter'], correct: 3, type: 'multiple-choice' },
        { question: 'Why is the Sun important to Earth?', options: ['It gives water', 'It provides light and heat', 'It keeps us dry', 'It makes rocks'], correct: 1, type: 'multiple-choice' },
        { question: 'How long does it take Earth to spin once around?', options: ['12 hours', '24 hours', '7 days', '30 days'], correct: 1, type: 'multiple-choice' },
        { question: 'What shape is a crescent moon?', options: ['Round like a ball', 'Half circle', 'Curved like a banana', 'Square'], correct: 2, type: 'multiple-choice' },
        { question: 'What happens to daylight in the summer?', options: ['Days get shorter', 'Days get longer and warmer', 'It stays dark', 'Nothing'], correct: 1, type: 'multiple-choice' },
        { question: 'What weather occurs when air is freezing and crystal snowflakes fall?', options: ['Rainy', 'Windy', 'Snowy', 'Sunny'], correct: 2, type: 'multiple-choice' }
      ]
    },

    // ==================== MODULE 16: Engineering & Design Thinking ====================
    {
      id: 'module-16',
      number: 16,
      title: 'Engineering & Design Thinking',
      subject: 'science',
      icon: '🔧',
      badgeId: 'young-engineer',
      badgeName: 'Young Engineer',
      badgeIcon: '🔧',
      description: 'Learn how to identify problems, design solutions, build, test, and improve!',
      lessons: [
        {
          id: 'lesson-16-1',
          number: '16.1',
          title: 'What is a Problem?',
          learnContent: {
            title: 'Spotting Problems!',
            paragraphs: [
              'Engineers are problem solvers! But first, what is a problem? A problem is something that is difficult, broken, or makes life hard. 🔧',
              'For example, if your toys are messy and you keep tripping over them — that is a problem! If a river is in the way and you cannot cross it — that is a problem!',
              'Finding and describing a problem clearly is the very first step to fixing it.'
            ],
            keyPoint: 'A problem is something that needs a solution to make things better or safer.',
            examples: [
              { visual: '🧸', text: 'Messy room', label: 'problem' },
              { visual: '🏞️', text: 'River in the way', label: 'problem' },
              { visual: '🌧️', text: 'Getting wet in rain', label: 'problem' },
              { visual: '🔧', text: 'Engineer', label: 'problem solver' }
            ],
            tip: 'Look around you today. Is there anything that is broken or could be made easier? You found a problem!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these situations: is it a Problem or NOT a problem?',
            categories: [
              {
                name: 'It is a Problem',
                items: [
                  { value: 'lost-key', text: 'Losing your house keys' },
                  { value: 'broken-toy', text: 'A toy wheel falling off' }
                ]
              },
              {
                name: 'Not a Problem',
                items: [
                  { value: 'sunny-day', text: 'Sun shining at the park' },
                  { value: 'eating-snack', text: 'Eating a yummy apple' }
                ]
              }
            ],
            items: [
              { value: 'lost-key', text: 'Losing your house keys', icon: '🔑' },
              { value: 'sunny-day', text: 'Sun shining at the park', icon: '☀️' },
              { value: 'broken-toy', text: 'A toy wheel falling off', icon: '🧸' },
              { value: 'eating-snack', text: 'Eating a yummy apple', icon: '🍎' }
            ]
          },
          checkQuestions: [
            { question: 'What is a problem in engineering?', options: ['A fun game', 'Something that is broken or needs fixing', 'A science textbook', 'A type of tool'], correct: 1 },
            { question: 'Who is a person who solves problems by design?', options: ['A singer', 'An engineer', 'A dancer', 'A chef'], correct: 1 },
            { question: 'Which of these is a problem?', options: ['Having a fun recess', 'A bridge falling down', 'Eating cupcakes', 'Sleeping soundly'], correct: 1 }
          ]
        },
        {
          id: 'lesson-16-2',
          number: '16.2',
          title: 'Think of Solutions',
          learnContent: {
            title: 'Brainstorming Ideas!',
            paragraphs: [
              'Once you find a problem, it is time to brainstorm! Brainstorming means thinking of lots of different ways to solve the problem. 💡',
              'There is never just one solution. If your room is messy, you could use boxes, shelves, or a toy chest. All of these are solutions!',
              'Engineers draw their ideas on paper (blueprints) so they can plan how to build them.'
            ],
            keyPoint: 'Brainstorming is thinking of many creative ways to solve a single problem.',
            examples: [
              { visual: '💡', text: 'New idea', label: 'solution choice' },
              { visual: '📝', text: 'Drawing plans', label: 'planning step' },
              { visual: '📦', text: 'Storage box', label: 'solution for mess' },
              { visual: '🌉', text: 'Bridge design', label: 'solution for river' }
            ],
            tip: 'When brainstorming, no idea is too silly! Sometimes the craziest ideas lead to the best solutions!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the GOOD engineering solutions green, and BAD solutions red!',
            categories: [
              { name: 'Good Solution', color: 'green', class: 'color-green' },
              { name: 'Bad Solution', color: 'red', class: 'color-red' }
            ],
            items: [
              { text: 'Heavy rock on blowing papers', category: 'Good Solution' },
              { text: 'Shouting at the blowing wind', category: 'Bad Solution' },
              { text: 'Close the window fully', category: 'Good Solution' },
              { text: 'Throw papers out of window', category: 'Bad Solution' }
            ],
            explanation: 'Good engineering solves problems in a helpful and safe way!'
          },
          checkQuestions: [
            { question: 'What does "brainstorming" mean?', options: ['Watching a thunderstorm', 'Thinking of many ideas to solve a problem', 'Drawing circles', 'Sleeping'], correct: 1 },
            { question: 'What do engineers use to draw and plan their ideas?', options: ['Paint only', 'Blueprints or drawings on paper', 'Calculators only', 'Balloons'], correct: 1 },
            { question: 'If you want to solve the problem of getting wet in the rain, what is a solution?', options: ['An umbrella', 'Sunglasses', 'Snow boots', 'A fan'], correct: 0 }
          ]
        },
        {
          id: 'lesson-16-3',
          number: '16.3',
          title: 'Build & Test',
          learnContent: {
            title: 'Build and Try It Out!',
            paragraphs: [
              'Now the fun part: Building! Engineers take their plans and build a model. This first model is called a prototype. 🛠️',
              'Once it is built, you must test it to see if it works. Does the bridge hold weight? Does the toy chest fit all your toys?',
              'Testing tells us if our design solved the problem or if it broke.'
            ],
            keyPoint: 'A prototype is a model built to test if a design solution actually works.',
            examples: [
              { visual: '🛠️', text: 'Building tools', label: 'making prototypes' },
              { visual: '🧱', text: 'Blocks model', label: 'simple prototype' },
              { visual: '⚖️', text: 'Testing weight', label: 'checking strength' },
              { visual: '✅', text: 'It works!', label: 'successful test' }
            ],
            tip: 'If your prototype breaks during testing, do not be sad! It is actually good because now you know what to fix!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the statements about testing designs TRUE green and FALSE red!',
            categories: [
              { name: 'True', color: 'green', class: 'color-green' },
              { name: 'False', color: 'red', class: 'color-red' }
            ],
            items: [
              { text: 'Testing makes sure designs are safe', category: 'True' },
              { text: 'Engineers never test their ideas', category: 'False' },
              { text: 'Testing shows what needs fixing', category: 'True' },
              { text: 'Everything works perfectly first try', category: 'False' }
            ],
            explanation: 'Engineers test and improve their designs many times to make them work perfectly!'
          },
          checkQuestions: [
            { question: 'What is a prototype?', options: ['A science book', 'The first model built to test an idea', 'A type of hammer', 'A final product'], correct: 1 },
            { question: 'Why do we test prototypes?', options: ['To destroy them', 'To see if they solve the problem and work safely', 'To sell them', 'For no reason'], correct: 1 },
            { question: 'What should you do if your model bridge breaks during a weight test?', options: ['Cry and stop', 'Learn why it broke and think about how to fix it', 'Hide the broken pieces', 'Say it is finished'], correct: 1 }
          ]
        },
        {
          id: 'lesson-16-4',
          number: '16.4',
          title: 'Improve Your Design',
          learnContent: {
            title: 'Make It Better!',
            paragraphs: [
              'Even if a prototype works, it can always be made better! Engineers look for ways to improve their designs. 📈',
              'If the bridge held 3 books but broke on the 4th, how can we make it stronger? We could add more columns, use thicker paper, or change the shape.',
              'Improving is called iterating. We build, test, find problems, change the design, and build again. This is how the best things are made!'
            ],
            keyPoint: 'Iterating is the cycle of building, testing, finding problems, and improving the design.',
            examples: [
              { visual: '🔄', text: 'Loop', label: 'Build → Test → Improve' },
              { visual: '📈 Better', text: 'Stronger bridge', label: 'improved prototype' },
              { visual: '💪 Strength', text: 'Thicker materials', label: 'improvement change' },
              { visual: '🚀 Success', text: 'Perfect design', label: 'ready to use!' }
            ],
            tip: 'Every great invention — like airplanes ✈️ or computers 💻 — started as a simple model and was improved thousands of times!'
          },
          activity: {
            type: 'sequence',
            instruction: 'Put the engineering steps in the correct order from start to finish!',
            items: [
              { text: '1. Find a Problem that needs fixing 🔧' },
              { text: '2. Brainstorm Solutions and draw plans 💡' },
              { text: '3. Build a Prototype model 🛠️' },
              { text: '4. Test the model to see if it works ⚖' },
              { text: '5. Improve the design based on test results 📈' }
            ]
          },
          checkQuestions: [
            { question: 'What does "improving a design" mean?', options: ['Throwing it away', 'Making it stronger, safer, or easier to use', 'Painting it blue only', 'Making it smaller only'], correct: 1 },
            { question: 'If your paper airplane does not fly straight, what should you do?', options: ['Stop playing', 'Change the fold folds to improve its flight', 'Blame the paper', 'Buy a real plane'], correct: 1 },
            { question: 'What is the engineering loop?', options: ['A shape you draw', 'A continuous cycle of designing, testing, and improving', 'A track for toy cars', 'A type of knot'], correct: 1 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'What is a problem?', options: ['A fun game', 'Something that is broken or makes life difficult', 'A type of hammer', 'A solved puzzle'], correct: 1, type: 'multiple-choice' },
        { question: 'What is the first step an engineer takes?', options: ['Building a prototype', 'Finding and describing a problem', 'Selling a product', 'Testing weight'], correct: 1, type: 'multiple-choice' },
        { question: 'What does "brainstorming" mean?', options: ['Watching rain', 'Thinking of many ideas for solutions', 'Drawing shapes', 'Nothing'], correct: 1, type: 'multiple-choice' },
        { question: 'What is a blueprint?', options: ['A blue crayon', 'A drawing or plan of a design on paper', 'A type of block', 'A solid shape'], correct: 1, type: 'multiple-choice' },
        { question: 'What is a prototype?', options: ['A tool', 'The first model built to test an idea', 'A finished product', 'A scientist'], correct: 1, type: 'multiple-choice' },
        { question: 'Why do engineers test their prototypes?', options: ['To have fun breaking things', 'To check if they work safely and solve the problem', 'To throw them away', 'To paint them'], correct: 1, type: 'multiple-choice' },
        { question: 'What should you do if your prototype fails a test?', options: ['Give up', 'Learn from the failure and improve the design', 'Hide the failure', 'Say it is perfect'], correct: 1, type: 'multiple-choice' },
        { question: 'What is the repeating cycle of design, test, and improve called?', options: ['Tallying', 'Fractions', 'The engineering loop (iterating)', 'Counting on'], correct: 2, type: 'multiple-choice' },
        { question: 'Which is a solution to the problem of a messy room?', options: ['Tripping over toys', 'Using boxes and shelves to organize', 'Leaving toys on the floor', 'Throwing toys away'], correct: 1, type: 'multiple-choice' },
        { question: 'What makes a bridge stronger during improvements?', options: ['Adding supports or using stronger materials', 'Painting it yellow', 'Naming it', 'Leaving it broken'], correct: 0, type: 'multiple-choice' }
      ]
    }
  ]
};
