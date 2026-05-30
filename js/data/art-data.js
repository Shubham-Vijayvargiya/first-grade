window.AppData = window.AppData || {};
window.AppData.art = {
  id: 'art',
  name: 'Creative Arcade',
  icon: '🎨',
  description: 'Colors, shapes, music, rhythm, and creativity!',
  color: 'art',
  modules: [
    // ==================== MODULE 21: Art Fundamentals ====================
    {
      id: 'module-21',
      number: 21,
      title: 'Art Fundamentals',
      subject: 'art',
      icon: '🎨',
      badgeId: 'young-artist',
      badgeName: 'Young Artist',
      badgeIcon: '🎨',
      description: 'Learn about colors, shapes, lines, and patterns!',
      lessons: [
        // ---------- Lesson 21.1: Primary Colors ----------
        {
          id: 'lesson-21-1',
          number: '21.1',
          title: 'Primary Colors',
          learnContent: {
            title: 'What Are Primary Colors?',
            paragraphs: [
              'There are three very special colors called primary colors. They are red 🔴, blue 🔵, and yellow 🟡! These colors are super special because you cannot make them by mixing other colors together.',
              'Primary colors are like magic building blocks! You can mix them together to make lots of other beautiful colors. Artists use primary colors all the time to paint amazing pictures! 🎨',
              'You can find primary colors everywhere! A red apple 🍎, a blue sky ☁️, and a yellow sun ☀️ are all examples of primary colors in the world around you.'
            ],
            keyPoint: 'The three primary colors are red, blue, and yellow — they cannot be made by mixing other colors!',
            examples: [
              { visual: '🔴', text: 'Red', label: 'primary color' },
              { visual: '🔵', text: 'Blue', label: 'primary color' },
              { visual: '🟡', text: 'Yellow', label: 'primary color' },
              { visual: '🍎', text: 'Apple', label: 'red in nature' }
            ],
            tip: 'Remember: Red, Blue, Yellow — they are the boss colors that make all other colors!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these items! Which ones are primary colors and which are NOT primary colors?',
            categories: [
              {
                name: 'Primary Colors',
                items: [
                  { value: 'red', text: 'Red' },
                  { value: 'blue', text: 'Blue' },
                  { value: 'yellow', text: 'Yellow' }
                ]
              },
              {
                name: 'Not Primary Colors',
                items: [
                  { value: 'green', text: 'Green' },
                  { value: 'orange', text: 'Orange' },
                  { value: 'purple', text: 'Purple' }
                ]
              }
            ],
            items: [
              { value: 'red', text: 'Red', icon: '🔴' },
              { value: 'blue', text: 'Blue', icon: '🔵' },
              { value: 'yellow', text: 'Yellow', icon: '🟡' },
              { value: 'green', text: 'Green', icon: '🟢' },
              { value: 'orange', text: 'Orange', icon: '🟠' },
              { value: 'purple', text: 'Purple', icon: '🟣' }
            ]
          },
          checkQuestions: [
            { question: 'Which of these is a primary color?', options: ['Green', 'Red', 'Orange', 'Purple'], correct: 1 },
            { question: 'How many primary colors are there?', options: ['2', '3', '4', '5'], correct: 1 },
            { question: 'Can you make a primary color by mixing other colors?', options: ['Yes, always', 'No, you cannot', 'Only sometimes', 'Only with paint'], correct: 1 }
          ]
        },
        // ---------- Lesson 21.2: Secondary Colors ----------
        {
          id: 'lesson-21-2',
          number: '21.2',
          title: 'Secondary Colors',
          learnContent: {
            title: 'Mixing Colors — Secondary Colors!',
            paragraphs: [
              'When you mix two primary colors together, you get a brand new color! These new colors are called secondary colors. It is like doing a color science experiment! 🧪',
              'Here is the magic recipe: Red 🔴 + Yellow 🟡 = Orange 🟠. Yellow 🟡 + Blue 🔵 = Green 🟢. Blue 🔵 + Red 🔴 = Purple 🟣. How cool is that?',
              'The three secondary colors are orange 🟠, green 🟢, and purple 🟣. You see secondary colors in nature too — like orange pumpkins 🎃, green trees 🌲, and purple grapes 🍇!'
            ],
            keyPoint: 'Secondary colors are made by mixing two primary colors: orange, green, and purple!',
            examples: [
              { visual: '🟠', text: 'Orange', label: 'red + yellow' },
              { visual: '🟢', text: 'Green', label: 'yellow + blue' },
              { visual: '🟣', text: 'Purple', label: 'blue + red' },
              { visual: '🎃', text: 'Pumpkin', label: 'orange in nature' }
            ],
            tip: 'Think of it like a recipe: mix two primary colors and you cook up a secondary color!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each color mix to the color it makes! Draw a line from the mix to the result.',
            pairs: [
              { id: 'pair1', left: 'Red + Yellow', right: 'Orange', leftIcon: '🔴+🟡', rightIcon: '🟠' },
              { id: 'pair2', left: 'Yellow + Blue', right: 'Green', leftIcon: '🟡+🔵', rightIcon: '🟢' },
              { id: 'pair3', left: 'Blue + Red', right: 'Purple', leftIcon: '🔵+🔴', rightIcon: '🟣' }
            ]
          },
          checkQuestions: [
            { question: 'What color do you get when you mix red and yellow?', options: ['Green', 'Purple', 'Orange', 'Blue'], correct: 2 },
            { question: 'Which of these is a secondary color?', options: ['Red', 'Yellow', 'Blue', 'Green'], correct: 3 },
            { question: 'What two colors make purple?', options: ['Red and Yellow', 'Blue and Yellow', 'Blue and Red', 'Red and Green'], correct: 2 }
          ]
        },
        // ---------- Lesson 21.3: Shapes in Art ----------
        {
          id: 'lesson-21-3',
          number: '21.3',
          title: 'Shapes in Art',
          learnContent: {
            title: 'Finding Shapes in Art!',
            paragraphs: [
              'Artists use shapes to draw and paint everything! A circle ⭕ is round like a ball. A square ⬜ has four equal sides. A triangle 🔺 has three sides and three pointy corners!',
              'Look around you — shapes are everywhere! A window is a rectangle. A pizza slice is a triangle 🍕. The sun looks like a circle ☀️. Even a star ⭐ is a shape!',
              'When artists draw pictures, they start with simple shapes. A house can be made from a square and a triangle on top! A snowman is three circles stacked up! ⛄ Shapes are the building blocks of art!'
            ],
            keyPoint: 'Shapes like circles, squares, triangles, and rectangles are the building blocks artists use to create pictures!',
            examples: [
              { visual: '⭕', text: 'Circle', label: 'round, no corners' },
              { visual: '⬜', text: 'Square', label: '4 equal sides' },
              { visual: '🔺', text: 'Triangle', label: '3 sides, 3 corners' },
              { visual: '⭐', text: 'Star', label: 'has many points' }
            ],
            tip: 'Look around the room right now — how many shapes can you spot? Shapes are hiding everywhere!'
          },
          activity: {
            type: 'drag-drop',
            instruction: 'Drag each object to the shape it looks like!',
            items: [
              { id: 'item1', text: 'Clock', icon: '🕐', target: 'circle' },
              { id: 'item2', text: 'Pizza Slice', icon: '🍕', target: 'triangle' },
              { id: 'item3', text: 'Window', icon: '🪟', target: 'square' },
              { id: 'item4', text: 'Ball', icon: '⚽', target: 'circle' },
              { id: 'item5', text: 'Tent', icon: '⛺', target: 'triangle' },
              { id: 'item6', text: 'Gift Box', icon: '🎁', target: 'square' }
            ],
            targets: [
              { id: 'circle', text: 'Circle', label: '⭕ Circle' },
              { id: 'triangle', text: 'Triangle', label: '🔺 Triangle' },
              { id: 'square', text: 'Square', label: '⬜ Square' }
            ]
          },
          checkQuestions: [
            { question: 'How many sides does a triangle have?', options: ['2', '3', '4', '5'], correct: 1 },
            { question: 'Which shape is round with no corners?', options: ['Square', 'Triangle', 'Circle', 'Rectangle'], correct: 2 },
            { question: 'What two shapes can you use to draw a simple house?', options: ['Two circles', 'A square and a triangle', 'Two triangles', 'A circle and a star'], correct: 1 }
          ]
        },
        // ---------- Lesson 21.4: Lines & Patterns ----------
        {
          id: 'lesson-21-4',
          number: '21.4',
          title: 'Lines & Patterns',
          learnContent: {
            title: 'Amazing Lines and Patterns!',
            paragraphs: [
              'Lines are one of the most important tools in art! A straight line goes in one direction like a ruler 📏. A curved line bends and flows like a river 🌊. A zigzag line goes up and down like mountains ⛰️!',
              'There are also wavy lines that look like ocean waves 🌊, dotted lines made of little dots ● ● ●, and spiral lines that go round and round like a snail shell 🐌!',
              'When you repeat a line or shape over and over, you make a pattern! Patterns are everywhere — on shirts 👕, on butterfly wings 🦋, and even on zebras 🦓! Artists love using patterns to make their art beautiful and interesting.'
            ],
            keyPoint: 'Lines can be straight, curved, zigzag, or wavy — and when you repeat them, you make patterns!',
            examples: [
              { visual: '📏', text: 'Straight Line', label: 'goes one direction' },
              { visual: '🌊', text: 'Wavy Line', label: 'flows up and down' },
              { visual: '⚡', text: 'Zigzag Line', label: 'sharp ups and downs' },
              { visual: '🐌', text: 'Spiral Line', label: 'goes round and round' }
            ],
            tip: 'Try drawing each type of line on paper — straight, curved, zigzag, wavy, and spiral. Practice makes perfect!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the ZIGZAG lines yellow, and CURVED lines blue!',
            categories: [
              { name: 'Zigzag Lines', color: 'yellow', class: 'color-yellow' },
              { name: 'Curved Lines', color: 'blue', class: 'color-blue' }
            ],
            items: [
              { text: 'Line with sharp pointy tops', category: 'Zigzag Lines' },
              { text: 'Line that loops like waves', category: 'Curved Lines' },
              { text: 'Mountain peaks outline', category: 'Zigzag Lines' },
              { text: 'Snail shell spiral outline', category: 'Curved Lines' }
            ],
            explanation: 'Zigzag lines have sharp points and changes in direction, while curved lines bend smoothly!'
          },
          checkQuestions: [
            { question: 'What is a pattern?', options: ['A single dot', 'Something that repeats over and over', 'A big circle', 'A blank page'], correct: 1 },
            { question: 'Which line bends and flows smoothly?', options: ['Straight line', 'Zigzag line', 'Curved line', 'Dotted line'], correct: 2 },
            { question: 'Where can you find patterns in nature?', options: ['On a butterfly wing', 'Inside a rock', 'In the wind', 'In a raindrop'], correct: 0 }
          ]
        },
        // ---------- Lesson 21.5: Free Draw ----------
        {
          id: 'lesson-21-5',
          number: '21.5',
          title: 'Free Draw',
          learnContent: {
            title: 'Express Yourself with Art!',
            paragraphs: [
              'Art is all about being creative and expressing how you feel! There is no wrong way to make art. You can draw anything you imagine — a dragon 🐉, a spaceship 🚀, or even a rainbow pizza 🍕🌈!',
              'When you draw freely, you get to be the boss of your art! Pick your favorite colors 🖍️, use any shapes you like, and add all the lines and patterns you want. Your art is special because YOU made it!',
              'Famous artists like to try new things. Some artists use big bold colors. Some use lots of tiny dots. Some draw real things, and some draw things from their imagination! What kind of artist are you? 🤔'
            ],
            keyPoint: 'Art is about expressing yourself — there is no wrong way to create! Be creative and have fun!',
            examples: [
              { visual: '🖍️', text: 'Crayons', label: 'tool for coloring' },
              { visual: '🖌️', text: 'Paintbrush', label: 'tool for painting' },
              { visual: '✏️', text: 'Pencil', label: 'tool for drawing' },
              { visual: '🌈', text: 'Rainbow', label: 'all the colors!' }
            ],
            tip: 'There are no mistakes in art — only happy little surprises! Just have fun and keep creating!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the statements about art TRUE green and FALSE red!',
            categories: [
              { name: 'True', color: 'green', class: 'color-green' },
              { name: 'False', color: 'red', class: 'color-red' }
            ],
            items: [
              { text: 'Every artist has their own style', category: 'True' },
              { text: 'There is only one correct way to draw', category: 'False' },
              { text: 'Art lets you express your feelings', category: 'True' },
              { text: 'You must copy others to make good art', category: 'False' }
            ],
            explanation: 'Art has no right or wrong way. Every artist is unique and special!'
          },
          checkQuestions: [
            { question: 'What is the most important thing about making art?', options: ['Being perfect', 'Copying someone else', 'Being creative and having fun', 'Using only one color'], correct: 2 },
            { question: 'Which of these is an art tool?', options: ['A fork', 'A paintbrush', 'A pillow', 'A shoe'], correct: 1 },
            { question: 'Is there a wrong way to make art?', options: ['Yes, there is only one right way', 'No, art is about expressing yourself', 'Only grown-ups can do art right', 'You must always draw real things'], correct: 1 }
          ]
        }
      ],
      // ========== Module 21 Quiz Questions ==========
      quizQuestions: [
        { question: 'Which of these is a primary color?', options: ['Green', 'Orange', 'Yellow', 'Purple'], correct: 2, type: 'multiple-choice' },
        { question: 'What color do you get when you mix blue and yellow?', options: ['Orange', 'Purple', 'Green', 'Red'], correct: 2, type: 'multiple-choice' },
        { question: 'How many sides does a square have?', options: ['3', '4', '5', '6'], correct: 1, type: 'multiple-choice' },
        { question: 'What type of line goes round and round like a snail shell?', options: ['Straight', 'Zigzag', 'Spiral', 'Dotted'], correct: 2, type: 'multiple-choice' },
        { question: 'What two colors make orange?', options: ['Blue and Yellow', 'Red and Blue', 'Red and Yellow', 'Yellow and Green'], correct: 2, type: 'multiple-choice' },
        { question: 'Which shape has no corners?', options: ['Square', 'Triangle', 'Rectangle', 'Circle'], correct: 3, type: 'multiple-choice' },
        { question: 'What is a pattern?', options: ['A single color', 'Something that repeats', 'A very big shape', 'A type of paint'], correct: 1, type: 'multiple-choice' },
        { question: 'Which is NOT a secondary color?', options: ['Orange', 'Green', 'Blue', 'Purple'], correct: 2, type: 'multiple-choice' },
        { question: 'What shape does a pizza slice look like?', options: ['Circle', 'Square', 'Triangle', 'Star'], correct: 2, type: 'multiple-choice' },
        { question: 'Is there a wrong way to make art?', options: ['Yes, always', 'No, art is about being creative', 'Only if you use crayons', 'Only on Mondays'], correct: 1, type: 'multiple-choice' }
      ]
    },

    // ==================== MODULE 22: Music Basics ====================
    {
      id: 'module-22',
      number: 22,
      title: 'Music Basics',
      subject: 'art',
      icon: '🎵',
      badgeId: 'music-maker',
      badgeName: 'Music Maker',
      badgeIcon: '🎵',
      description: 'Discover rhythm, tempo, instruments, and musical notes!',
      lessons: [
        // ---------- Lesson 22.1: Rhythm & Beat ----------
        {
          id: 'lesson-22-1',
          number: '22.1',
          title: 'Rhythm & Beat',
          learnContent: {
            title: 'Feel the Beat!',
            paragraphs: [
              'Music has a beat — just like your heart has a heartbeat! 💓 A beat is a steady sound that happens over and over, like a clock ticking: tick, tick, tick! ⏰',
              'Rhythm is the pattern of sounds in music. Some sounds are long and some are short. When you clap your hands 👏 to a song, you are following the rhythm! Try clapping along to your favorite song!',
              'You can find beats everywhere! When you walk 🚶, your feet make a beat — left, right, left, right. When it rains 🌧️, the drops make a beat on the roof. Music takes these beats and makes them fun!'
            ],
            keyPoint: 'A beat is a steady repeating sound, and rhythm is the pattern of long and short sounds in music!',
            examples: [
              { visual: '💓', text: 'Heartbeat', label: 'a steady beat' },
              { visual: '👏', text: 'Clapping', label: 'following rhythm' },
              { visual: '⏰', text: 'Clock Tick', label: 'steady beat' },
              { visual: '🥁', text: 'Drum', label: 'makes a beat' }
            ],
            tip: 'Try tapping your desk or clapping your hands to find the beat in your favorite song!'
          },
          activity: {
            type: 'sequence',
            instruction: 'Put these steps in the right order to clap a simple rhythm pattern!',
            items: [
              { text: '1. Listen to the music carefully 🎧' },
              { text: '2. Find the steady beat 💓' },
              { text: '3. Start tapping your foot to the beat 🦶' },
              { text: '4. Clap your hands along with the beat 👏' },
              { text: '5. Try adding a pattern — clap, clap, pause! 🎵' }
            ]
          },
          checkQuestions: [
            { question: 'What is a beat in music?', options: ['A loud noise', 'A steady repeating sound', 'A type of instrument', 'A music teacher'], correct: 1 },
            { question: 'What is rhythm?', options: ['The name of a song', 'How loud music is', 'A pattern of long and short sounds', 'A type of dance'], correct: 2 },
            { question: 'Which of these has a steady beat?', options: ['A clock ticking', 'A cloud floating', 'A book on a shelf', 'A crayon in a box'], correct: 0 }
          ]
        },
        // ---------- Lesson 22.2: Fast & Slow Tempo ----------
        {
          id: 'lesson-22-2',
          number: '22.2',
          title: 'Fast & Slow Tempo',
          learnContent: {
            title: 'Tempo — Fast and Slow Music!',
            paragraphs: [
              'Tempo is how fast or slow music goes! 🏃💨 Some songs are fast and make you want to dance and jump around. Other songs are slow and make you feel calm and sleepy. 😴',
              'Think about animals! A cheetah 🐆 runs super fast — that is like fast tempo music. A turtle 🐢 moves very slowly — that is like slow tempo music. A dog 🐕 walks at a medium speed — that is a medium tempo!',
              'Musicians can change the tempo to make their music feel different. A fast song might make you feel excited and happy! 🎉 A slow song might make you feel peaceful and relaxed. 🌙 Tempo is like the speed control for music!'
            ],
            keyPoint: 'Tempo means how fast or slow the music goes — fast tempo is quick, slow tempo is calm!',
            examples: [
              { visual: '🐆', text: 'Cheetah', label: 'fast tempo' },
              { visual: '🐢', text: 'Turtle', label: 'slow tempo' },
              { visual: '🐕', text: 'Dog Walking', label: 'medium tempo' },
              { visual: '🎉', text: 'Dance Party', label: 'fast and fun!' }
            ],
            tip: 'Try walking slowly, then walking fast — you just changed your walking tempo!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these things by whether they go with fast tempo or slow tempo music!',
            categories: [
              {
                name: 'Fast Tempo',
                items: [
                  { value: 'running', text: 'Running a race' },
                  { value: 'cheetah', text: 'Cheetah running' },
                  { value: 'dancing', text: 'Dance party' }
                ]
              },
              {
                name: 'Slow Tempo',
                items: [
                  { value: 'sleeping', text: 'Bedtime lullaby' },
                  { value: 'turtle', text: 'Turtle walking' },
                  { value: 'rocking', text: 'Rocking a baby' }
                ]
              }
            ],
            items: [
              { value: 'running', text: 'Running a race', icon: '🏃' },
              { value: 'sleeping', text: 'Bedtime lullaby', icon: '😴' },
              { value: 'cheetah', text: 'Cheetah running', icon: '🐆' },
              { value: 'turtle', text: 'Turtle walking', icon: '🐢' },
              { value: 'dancing', text: 'Dance party', icon: '💃' },
              { value: 'rocking', text: 'Rocking a baby', icon: '👶' }
            ]
          },
          checkQuestions: [
            { question: 'What does tempo mean in music?', options: ['How loud it is', 'How fast or slow it is', 'What instruments play', 'Who sings the song'], correct: 1 },
            { question: 'Which animal is like slow tempo?', options: ['Cheetah', 'Horse', 'Turtle', 'Rabbit'], correct: 2 },
            { question: 'A fast tempo song might make you want to...', options: ['Fall asleep', 'Dance and jump', 'Sit very still', 'Read a book'], correct: 1 }
          ]
        },
        // ---------- Lesson 22.3: Musical Instruments ----------
        {
          id: 'lesson-22-3',
          number: '22.3',
          title: 'Musical Instruments',
          learnContent: {
            title: 'Meet the Musical Instruments!',
            paragraphs: [
              'Musical instruments are tools that make music! There are many different kinds. Some you hit, some you blow into, and some you strum or pluck with your fingers! 🎶',
              'Drums 🥁 and tambourines are percussion instruments — you hit or shake them! Trumpets 🎺 and flutes are wind instruments — you blow air into them! Guitars 🎸 and violins 🎻 are string instruments — they have strings that vibrate to make sound!',
              'A piano 🎹 is a very special instrument. When you press a key, a little hammer inside hits a string! Pianos can play high sounds and low sounds. Some instruments are big like a tuba, and some are small like a triangle! Every instrument has its own special sound.'
            ],
            keyPoint: 'Instruments come in families: percussion (hit/shake), wind (blow), and string (strum/pluck)!',
            examples: [
              { visual: '🥁', text: 'Drum', label: 'percussion — hit it!' },
              { visual: '🎺', text: 'Trumpet', label: 'wind — blow into it!' },
              { visual: '🎸', text: 'Guitar', label: 'string — strum it!' },
              { visual: '🎹', text: 'Piano', label: 'press the keys!' }
            ],
            tip: 'Think about HOW you play an instrument — do you hit it, blow it, or strum it? That tells you its family!'
          },
          activity: {
            type: 'drag-drop',
            instruction: 'Drag each instrument to the correct family!',
            items: [
              { id: 'drum', text: 'Drum', icon: '🥁', target: 'percussion' },
              { id: 'trumpet', text: 'Trumpet', icon: '🎺', target: 'wind' },
              { id: 'guitar', text: 'Guitar', icon: '🎸', target: 'string' },
              { id: 'violin', text: 'Violin', icon: '🎻', target: 'string' },
              { id: 'tambourine', text: 'Tambourine', icon: '🎵', target: 'percussion' },
              { id: 'flute', text: 'Flute', icon: '🎶', target: 'wind' }
            ],
            targets: [
              { id: 'percussion', text: 'Percussion', label: '🥁 Hit or Shake' },
              { id: 'wind', text: 'Wind', label: '🎺 Blow Into' },
              { id: 'string', text: 'String', label: '🎸 Strum or Pluck' }
            ]
          },
          checkQuestions: [
            { question: 'How do you play a drum?', options: ['Blow into it', 'Hit or tap it', 'Strum it', 'Squeeze it'], correct: 1 },
            { question: 'Which instrument is a string instrument?', options: ['Trumpet', 'Drum', 'Guitar', 'Flute'], correct: 2 },
            { question: 'What kind of instrument is a trumpet?', options: ['Percussion', 'String', 'Wind', 'Keyboard'], correct: 2 }
          ]
        },
        // ---------- Lesson 22.4: High & Low Notes ----------
        {
          id: 'lesson-22-4',
          number: '22.4',
          title: 'High & Low Notes',
          learnContent: {
            title: 'High Notes and Low Notes!',
            paragraphs: [
              'Music has high sounds and low sounds! A high note sounds light and squeaky — like a little bird singing 🐦 or a whistle blowing! A low note sounds deep and rumbly — like a bear growling 🐻 or thunder booming! ⛈️',
              'On a piano 🎹, the keys on the right side play high notes, and the keys on the left side play low notes. When you sing, you can make your voice go high (like a mouse 🐭) or low (like a dinosaur 🦕)!',
              'The word for how high or low a sound is called pitch. High pitch means a high sound. Low pitch means a low sound. Musicians use both high and low notes to make beautiful melodies! 🎶'
            ],
            keyPoint: 'Pitch is how high or low a sound is — high notes sound light and squeaky, low notes sound deep and rumbly!',
            examples: [
              { visual: '🐦', text: 'Bird Song', label: 'high pitch' },
              { visual: '🐻', text: 'Bear Growl', label: 'low pitch' },
              { visual: '🐭', text: 'Mouse Squeak', label: 'high pitch' },
              { visual: '🦕', text: 'Dinosaur Roar', label: 'low pitch' }
            ],
            tip: 'Try humming — start with a low deep hum like a bear, then slide your voice up high like a bird!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each sound to whether it is a high note or a low note!',
            pairs: [
              { id: 'pair1', left: 'Bird singing', right: 'High Note', leftIcon: '🐦', rightIcon: '⬆️' },
              { id: 'pair2', left: 'Bear growling', right: 'Low Note', leftIcon: '🐻', rightIcon: '⬇️' },
              { id: 'pair3', left: 'Whistle blowing', right: 'High Note', leftIcon: '📯', rightIcon: '⬆️' },
              { id: 'pair4', left: 'Thunder rumbling', right: 'Low Note', leftIcon: '⛈️', rightIcon: '⬇️' }
            ]
          },
          checkQuestions: [
            { question: 'What is pitch?', options: ['How loud music is', 'How fast music goes', 'How high or low a sound is', 'The name of a song'], correct: 2 },
            { question: 'Which animal makes a HIGH sound?', options: ['Bear', 'Lion', 'Bird', 'Elephant'], correct: 2 },
            { question: 'On a piano, where are the low notes?', options: ['On the right side', 'On the left side', 'In the middle', 'On the top'], correct: 1 }
          ]
        }
      ],
      // ========== Module 22 Quiz Questions ==========
      quizQuestions: [
        { question: 'What is a beat in music?', options: ['A musical instrument', 'A steady repeating sound', 'A type of dance', 'A song name'], correct: 1, type: 'multiple-choice' },
        { question: 'What does tempo mean?', options: ['How loud music is', 'How high music is', 'How fast or slow music is', 'What instrument plays'], correct: 2, type: 'multiple-choice' },
        { question: 'Which instrument do you blow into?', options: ['Drum', 'Guitar', 'Trumpet', 'Violin'], correct: 2, type: 'multiple-choice' },
        { question: 'What is pitch?', options: ['How fast music goes', 'How high or low a sound is', 'A type of drum', 'How many instruments play'], correct: 1, type: 'multiple-choice' },
        { question: 'Which animal sounds like a LOW note?', options: ['Bird', 'Mouse', 'Cricket', 'Bear'], correct: 3, type: 'multiple-choice' },
        { question: 'A turtle walking is like what kind of tempo?', options: ['Fast tempo', 'Medium tempo', 'Slow tempo', 'No tempo'], correct: 2, type: 'multiple-choice' },
        { question: 'What kind of instrument is a drum?', options: ['Wind', 'String', 'Percussion', 'Keyboard'], correct: 2, type: 'multiple-choice' },
        { question: 'What is rhythm?', options: ['The name of a song', 'A pattern of long and short sounds', 'A type of guitar', 'How loud you play'], correct: 1, type: 'multiple-choice' },
        { question: 'Which instrument has strings?', options: ['Trumpet', 'Flute', 'Drum', 'Guitar'], correct: 3, type: 'multiple-choice' },
        { question: 'A bird singing makes what kind of pitch?', options: ['Low pitch', 'High pitch', 'No pitch', 'Medium pitch'], correct: 1, type: 'multiple-choice' }
      ]
    }
  ]
};
