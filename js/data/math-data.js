window.AppData = window.AppData || {};
window.AppData.math = {
  id: 'math',
  name: 'Number Stadium',
  icon: '🔢',
  description: 'Counting, adding, subtracting, shapes, and money!',
  color: 'math',
  modules: [
    // ==================== MODULE 6: Counting & Number Sense to 120 ====================
    {
      id: 'module-6',
      number: 6,
      title: 'Counting & Number Sense to 120',
      subject: 'math',
      icon: '🔢',
      badgeId: 'number-master',
      badgeName: 'Number Master',
      badgeIcon: '🔢',
      description: 'Count up to 120, compare numbers, order them, and learn skip counting!',
      lessons: [
        {
          id: 'lesson-6-1',
          number: '6.1',
          title: 'Counting 1-20',
          learnContent: {
            title: 'Let\'s Count to 20!',
            paragraphs: [
              'Counting is like taking steps up a ladder. We start at 1 and go up one by one! 🔢',
              'Let\'s practice: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10! After 10, we have the "teen" numbers: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.',
              'When you count, you touch each object exactly once and say the numbers in order. The last number you say is how many objects there are!'
            ],
            keyPoint: 'Counting helps us find how many things are in a group by assigning numbers in order.',
            examples: [
              { visual: '⚽⚽⚽', text: 'Three soccer balls', label: '1, 2, 3' },
              { visual: '⭐', text: 'One star', label: '1' },
              { visual: '🍎🍎🍎🍎', text: 'Four apples', label: '1, 2, 3, 4' },
              { visual: '🔟', text: 'Ten', label: 'double digits!' }
            ],
            tip: 'Use your finger to point to each item so you do not count it twice!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these groups by whether they have 3 items or 5 items!',
            categories: [
              {
                name: 'Has 3 Items',
                items: [
                  { value: 'three-stars', text: 'Three Stars' },
                  { value: 'three-apples', text: 'Three Apples' }
                ]
              },
              {
                name: 'Has 5 Items',
                items: [
                  { value: 'five-balls', text: 'Five Balls' },
                  { value: 'five-bananas', text: 'Five Bananas' }
                ]
              }
            ],
            items: [
              { value: 'three-stars', text: 'Three Stars', icon: '⭐⭐⭐' },
              { value: 'five-balls', text: 'Five Balls', icon: '⚽⚽⚽⚽⚽' },
              { value: 'three-apples', text: 'Three Apples', icon: '🍎🍎🍎' },
              { value: 'five-bananas', text: 'Five Bananas', icon: '🍌🍌🍌🍌🍌' }
            ]
          },
          checkQuestions: [
            { question: 'What number comes directly after 14?', options: ['13', '15', '16', '20'], correct: 1 },
            { question: 'How many stars are in: ⭐⭐⭐⭐?', options: ['3', '4', '5', '6'], correct: 1 },
            { question: 'What is the correct way to count: 1, 2, 3, ____, 5?', options: ['6', '4', '8', '10'], correct: 1 }
          ]
        },
        {
          id: 'lesson-6-2',
          number: '6.2',
          title: 'Counting 21-50',
          learnContent: {
            title: 'Numbers Get Bigger: 21 to 50!',
            paragraphs: [
              'Once you can count to 20, you can count to 50! The numbers follow a regular pattern. 📈',
              'After 20, we count: 21, 22, 23... up to 30. Then 31, 32, 33... up to 40. And then 41, 42, 43... up to 50!',
              'Notice how the ending digits go: 1, 2, 3, 4, 5, 6, 7, 8, 9, and then the next ten starts!'
            ],
            keyPoint: 'Counting to 50 uses repeating patterns of 1 to 9 in the ones place.',
            examples: [
              { visual: '2️⃣1️⃣', text: 'Twenty-One', label: '2 tens + 1 one' },
              { visual: '3️⃣0️⃣', text: 'Thirty', label: '3 tens' },
              { visual: '4️⃣5️⃣', text: 'Forty-Five', label: '4 tens + 5 ones' },
              { visual: '5️⃣0️⃣', text: 'Fifty', label: '5 tens' }
            ],
            tip: 'Focus on the "tens" place name (twenty, thirty, forty) to guide you!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Find the missing numbers to complete the counting sequences!',
            cards: [
              { word: '35', text: '32, 33, 34, _ _ , 36', missing: '35', options: ['35', '30', '37'], icon: '🔢' },
              { word: '80', text: '77, 78, 79, _ _ , 81', missing: '80', options: ['80', '90', '70'], icon: '🔢' }
            ],
            explanation: 'Count forward by ones to find the missing numbers!'
          },
          checkQuestions: [
            { question: 'What number comes after 29?', options: ['20', '30', '40', '28'], correct: 1 },
            { question: 'Count forward: 41, 42, 43, what comes next?', options: ['44', '50', '40', '45'], correct: 0 },
            { question: 'How do you write the number forty-seven in digits?', options: ['407', '74', '47', '17'], correct: 2 }
          ]
        },
        {
          id: 'lesson-6-3',
          number: '6.3',
          title: 'Counting 51-100',
          learnContent: {
            title: 'Reaching 100!',
            paragraphs: [
              'Let\'s climb higher! We will count from 51 all the way to 100. 💯',
              'The families are: fifty (50s), sixty (60s), seventy (70s), eighty (80s), and ninety (90s).',
              'When you reach 99, the next number is 100! 100 is a very special number because it is the first three-digit number we learn.'
            ],
            keyPoint: 'Counting from 50 to 100 continues the pattern of ten-groups up to ten tens (100).',
            examples: [
              { visual: '6️⃣0️⃣', text: 'Sixty', label: '6 tens' },
              { visual: '7️⃣5️⃣', text: 'Seventy-Five', label: '7 tens + 5 ones' },
              { visual: '9️⃣9️⃣', text: 'Ninety-Nine', label: '9 tens + 9 ones' },
              { visual: '💯', text: 'One Hundred', label: '10 tens!' }
            ],
            tip: 'A hundred chart is a great map to see how all the numbers fit together!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match the number word to its digits!',
            pairs: [
              { id: 'pair1', left: 'Sixty-two', right: '62', leftIcon: '60+2', rightIcon: '62' },
              { id: 'pair2', left: 'Seventy-five', right: '75', leftIcon: '70+5', rightIcon: '75' },
              { id: 'pair3', left: 'Eighty-eight', right: '88', leftIcon: '80+8', rightIcon: '88' },
              { id: 'pair4', left: 'Ninety-nine', right: '99', leftIcon: '90+9', rightIcon: '99' }
            ]
          },
          checkQuestions: [
            { question: 'What number comes after 59?', options: ['50', '60', '70', '58'], correct: 1 },
            { question: 'Which number is eighty-three?', options: ['38', '83', '803', '18'], correct: 1 },
            { question: 'What is the last number in the sequence: 97, 98, 99, ___?', options: ['100', '90', '101', '96'], correct: 0 }
          ]
        },
        {
          id: 'lesson-6-4',
          number: '6.4',
          title: 'Counting 101-120',
          learnContent: {
            title: 'Beyond 100!',
            paragraphs: [
              'We don\'t stop at 100! 1st graders learn to count all the way to 120. 🚀',
              'The pattern starts over after 100: 101 (one hundred one), 102, 103, 104, 105, 106, 107, 108, 109, 110!',
              'Then we continue: 111, 112, 113, 114, 115, 116, 117, 118, 119, 120.'
            ],
            keyPoint: 'Numbers from 101 to 120 follow the same 1-20 pattern, just with "one hundred" in front.',
            examples: [
              { visual: '1️⃣0️⃣1️⃣', text: '101', label: 'One hundred one' },
              { visual: '1️⃣1️⃣0️⃣', text: '110', label: 'One hundred ten' },
              { visual: '1️⃣1️⃣5️⃣', text: '115', label: 'One hundred fifteen' },
              { visual: '1️⃣2️⃣0️⃣', text: '120', label: 'One hundred twenty' }
            ],
            tip: 'Do not say "and" in the middle. Say "one hundred one," not "one hundred and one"!'
          },
          activity: {
            type: 'sequence',
            instruction: 'Put these numbers in the correct counting order!',
            items: [
              { text: '108' },
              { text: '109' },
              { text: '110' },
              { text: '111' },
              { text: '112' }
            ]
          },
          checkQuestions: [
            { question: 'What number comes after 109?', options: ['100', '110', '120', '108'], correct: 1 },
            { question: 'How do you write "one hundred thirteen"?', options: ['103', '130', '113', '10013'], correct: 2 },
            { question: 'What number is missing: 117, 118, ___, 120?', options: ['116', '119', '115', '121'], correct: 1 }
          ]
        },
        {
          id: 'lesson-6-5',
          number: '6.5',
          title: 'Counting Forward from Any Number',
          learnContent: {
            title: 'Start Anywhere and Count!',
            paragraphs: [
              'You do not always have to start counting at 1. You can start at ANY number and count forward! 🎯',
              'For example, if we start at 55, we count: 55, 56, 57, 58, 59, 60...',
              'This is a super important skill for adding, because we can start at the bigger number and count on!'
            ],
            keyPoint: 'Counting forward can begin at any number instead of always starting at 1.',
            examples: [
              { visual: '2️⃣5️⃣', text: 'Start at 25', label: '25, 26, 27...' },
              { visual: '8️⃣2️⃣', text: 'Start at 82', label: '82, 83, 84...' },
              { visual: '1️⃣0️⃣5️⃣', text: 'Start at 105', label: '105, 106, 107...' },
              { visual: '➕', text: 'Count On', label: 'great for adding' }
            ],
            tip: 'To count forward, just think about what number is "one more" than the starting number!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Count forward from the start number and find the final number!',
            cards: [
              { word: '91', text: 'Start at 88: 89, 90, _ _', missing: '91', options: ['91', '90', '92'], icon: '🚀' },
              { word: '48', text: 'Start at 45: 46, 47, _ _', missing: '48', options: ['48', '49', '50'], icon: '🚀' }
            ],
            explanation: 'Counting forward three steps from 88 gives 89, 90, 91!'
          },
          checkQuestions: [
            { question: 'Count forward from 67: 67, 68, 69, ___?', options: ['66', '70', '80', '60'], correct: 1 },
            { question: 'If you start at 102 and count forward 4 numbers, what sequence do you get?', options: ['103, 104, 105, 106', '101, 100, 99, 98', '102, 103, 104, 105', '112, 122, 132, 142'], correct: 0 },
            { question: 'What number is one more than 99?', options: ['98', '100', '90', '101'], correct: 1 }
          ]
        },
        {
          id: 'lesson-6-6',
          number: '6.6',
          title: 'Skip Counting',
          learnContent: {
            title: 'Skip Counting by 2s, 5s, and 10s!',
            paragraphs: [
              'Skip counting is like taking giant jumps on the number line instead of small baby steps! It helps us count large groups of items super fast! 🦘',
              'By 10s: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100! (Fastest way to count to 100).',
              'By 5s: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50! (Great for counting fingers or coins).',
              'By 2s: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20! (Great for counting pairs of shoes).'
            ],
            keyPoint: 'Skip counting skips regular numbers to count by groups of 2, 5, or 10.',
            examples: [
              { visual: '🧦🧦', text: 'Shoes by 2s', label: '2, 4, 6, 8...' },
              { visual: '🖐️🖐️', text: 'Fingers by 5s', label: '5, 10, 15, 20...' },
              { visual: '🪙🪙', text: 'Dimes by 10s', label: '10, 20, 30, 40...' },
              { visual: '🦘', text: 'Giant jumps', label: 'faster counting!' }
            ],
            tip: 'Notice that skip counting by 10s always ends in a zero, and by 5s always ends in 5 or 0!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these numbers into skip counting by 5s or skip counting by 10s!',
            categories: [
              {
                name: 'Skip Counting by 10s',
                items: [
                  { value: 'ten', text: '30, 40, 50' },
                  { value: 'ten-two', text: '70, 80, 90' }
                ]
              },
              {
                name: 'Skip Counting by 5s',
                items: [
                  { value: 'five', text: '15, 20, 25' },
                  { value: 'five-two', text: '35, 40, 45' }
                ]
              }
            ],
            items: [
              { value: 'ten', text: '30, 40, 50', icon: '🔟' },
              { value: 'five', text: '15, 20, 25', icon: '🖐️' },
              { value: 'ten-two', text: '70, 80, 90', icon: '🔟' },
              { value: 'five-two', text: '35, 40, 45', icon: '🖐️' }
            ]
          },
          checkQuestions: [
            { question: 'What number is missing: 10, 20, 30, ____, 50?', options: ['35', '40', '60', '45'], correct: 1 },
            { question: 'Count by 5s: 5, 10, 15, 20, ____?', options: ['21', '30', '25', '22'], correct: 2 },
            { question: 'Count by 2s: 2, 4, 6, 8, ____?', options: ['9', '10', '12', '14'], correct: 1 }
          ]
        },
        {
          id: 'lesson-6-7',
          number: '6.7',
          title: 'Comparing Numbers',
          learnContent: {
            title: 'Which Number is Bigger?',
            paragraphs: [
              'Comparing numbers means finding out which one is greater (bigger) and which one is less (smaller). ⚖️',
              'We use three special math symbols: > (greater than), < (less than), and = (equal to).',
              'Think of the symbol like a hungry alligator mouth 🐊! The alligator is greedy and ALWAYS opens its mouth to eat the BIGGER number: 8 > 5 (eight is greater than five).'
            ],
            keyPoint: 'The alligator mouth opens toward the greater number. If they are the same, they are equal (=).',
            examples: [
              { visual: '🐊', text: 'Alligator mouth', label: 'eats the bigger number' },
              { visual: '8 > 5', text: '8 is greater than 5', label: 'mouth opens to 8' },
              { visual: '3 < 7', text: '3 is less than 7', label: 'mouth opens to 7' },
              { visual: '4 = 4', text: '4 is equal to 4', label: 'exactly the same' }
            ],
            tip: 'Always look at the tens digit first! If the tens are the same, look at the ones!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Choose the correct comparison symbol: > (greater than) or < (less than)!',
            cards: [
              { word: '>', text: '45  _  28', missing: '>', options: ['>', '<', '='], icon: '⚖️' },
              { word: '<', text: '17  _  39', missing: '<', options: ['>', '<', '='], icon: '⚖️' }
            ],
            explanation: '45 is greater than 28, and 17 is less than 39!'
          },
          checkQuestions: [
            { question: 'Which statement is correct?', options: ['12 > 15', '20 < 10', '35 > 25', '14 = 41'], correct: 2 },
            { question: 'What symbol goes in the circle: 9 🟢 9?', options: ['>', '<', '=', '+'], correct: 2 },
            { question: 'Which number is LESS than 15?', options: ['18', '12', '15', '20'], correct: 1 }
          ]
        },
        {
          id: 'lesson-6-8',
          number: '6.8',
          title: 'Ordering Numbers',
          learnContent: {
            title: 'Putting Numbers in Order!',
            paragraphs: [
              'Ordering numbers means putting a group of numbers in a line from smallest to greatest, or from greatest to smallest! 📏',
              'For example, if we have: 12, 5, and 19. The smallest is 5. The next is 12. The biggest is 19. So in order from smallest to greatest: 5, 12, 19.',
              'Ordering helps us compare many numbers at the same time.'
            ],
            keyPoint: 'Ordering arranges numbers by comparing their sizes, usually from least to greatest.',
            examples: [
              { visual: '📏', text: 'Number line order', label: 'least to greatest' },
              { visual: '5, 12, 19', text: 'In order', label: 'smallest to biggest' },
              { visual: '99, 50, 10', text: 'In order', label: 'biggest to smallest' },
              { visual: '🧱', text: 'Sizes', label: 'height order' }
            ],
            tip: 'Find the smallest number first, write it down, and cross it off your list!'
          },
          activity: {
            type: 'sequence',
            instruction: 'Arrange these numbers in order from SMALLEST to GREATEST!',
            items: [
              { text: '7' },
              { text: '15' },
              { text: '32' },
              { text: '54' }
            ]
          },
          checkQuestions: [
            { question: 'Which set of numbers is in order from smallest to greatest?', options: ['10, 5, 20', '5, 10, 20', '20, 10, 5', '5, 20, 10'], correct: 1 },
            { question: 'What is the correct order of 45, 12, 89 from smallest to greatest?', options: ['12, 89, 45', '89, 45, 12', '12, 45, 89', '45, 12, 89'], correct: 2 },
            { question: 'In the numbers: 22, 11, 44, 33, which is the GREATEST?', options: ['11', '22', '33', '44'], correct: 3 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'What number is missing: 15, 16, 17, ____, 19?', options: ['14', '18', '20', '15'], correct: 1, type: 'multiple-choice' },
        { question: 'Which number is forty-two?', options: ['24', '402', '42', '14'], correct: 2, type: 'multiple-choice' },
        { question: 'What number comes directly after 99?', options: ['98', '100', '101', '90'], correct: 1, type: 'multiple-choice' },
        { question: 'How do we count by 10s?', options: ['5, 10, 15, 20', '10, 20, 30, 40', '2, 4, 6, 8', '1, 2, 3, 4'], correct: 1, type: 'multiple-choice' },
        { question: 'Which comparison is correct?', options: ['15 > 25', '42 < 19', '38 > 32', '10 = 20'], correct: 2, type: 'multiple-choice' },
        { question: 'What number is one less than 110?', options: ['111', '109', '100', '108'], correct: 1, type: 'multiple-choice' },
        { question: 'What number is missing in the 5s pattern: 25, 30, 35, ____, 45?', options: ['36', '40', '50', '39'], correct: 1, type: 'multiple-choice' },
        { question: 'Which number is the smallest?', options: ['54', '45', '72', '39'], correct: 3, type: 'multiple-choice' },
        { question: 'What does the alligator mouth do in math comparing?', options: ['Eats the smaller number', 'Eats the bigger number', 'Ignores both', 'Closes completely'], correct: 1, type: 'multiple-choice' },
        { question: 'How many tens are in the number 75?', options: ['5', '7', '70', '75'], correct: 1, type: 'multiple-choice' }
      ]
    },

    // ==================== MODULE 7: Place Value (Tens & Ones) ====================
    {
      id: 'module-7',
      number: 7,
      title: 'Place Value (Tens & Ones)',
      subject: 'math',
      icon: '🧱',
      badgeId: 'block-builder',
      badgeName: 'Block Builder',
      badgeIcon: '🧱',
      description: 'Understand tens and ones, base-10 blocks, and comparing two-digit numbers.',
      lessons: [
        {
          id: 'lesson-7-1',
          number: '7.1',
          title: 'What is Place Value?',
          learnContent: {
            title: 'Tens and Ones!',
            paragraphs: [
              'Numbers are made of digits. The position of each digit tells us how much it is worth! This is called place value. 🧱',
              'A two-digit number (like 25) has a tens place and a ones place. The 2 is in the tens place, and the 5 is in the ones place.',
              'Think of a ten-stick: it is a block made of 10 small ones stuck together. Ten single ones make exactly one ten!'
            ],
            keyPoint: 'Place value tells us the value of a digit based on its position in a number.',
            examples: [
              { visual: '🧱', text: '1 ten-stick', label: 'value of 10' },
              { visual: '▫️', text: '1 single block', label: 'value of 1' },
              { visual: '1️⃣5️⃣', text: '15', label: '1 ten and 5 ones' },
              { visual: '2️⃣0️⃣', text: '20', label: '2 tens and 0 ones' }
            ],
            tip: 'Ten single ones bundle together to make one neat ten!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these blocks into the Tens column or the Ones column!',
            categories: [
              {
                name: 'Tens Blocks',
                items: [
                  { value: 'ten-stick-1', text: '1 Ten-Stick' },
                  { value: 'ten-stick-2', text: '2 Ten-Sticks' }
                ]
              },
              {
                name: 'Ones Blocks',
                items: [
                  { value: 'one-block-1', text: '3 Single Cubes' },
                  { value: 'one-block-2', text: '6 Single Cubes' }
                ]
              }
            ],
            items: [
              { value: 'ten-stick-1', text: '1 Ten-Stick', icon: '🧱' },
              { value: 'one-block-1', text: '3 Single Cubes', icon: '▫️▫️▫️' },
              { value: 'ten-stick-2', text: '2 Ten-Sticks', icon: '🧱🧱' },
              { value: 'one-block-2', text: '6 Single Cubes', icon: '▫️▫️▫️▫️▫️▫️' }
            ]
          },
          checkQuestions: [
            { question: 'In the number 34, what digit is in the tens place?', options: ['3', '4', '30', '1'], correct: 0 },
            { question: 'What is the value of 2 ten-sticks?', options: ['2', '20', '12', '22'], correct: 1 },
            { question: 'How many single ones make one ten?', options: ['1', '5', '10', '100'], correct: 2 }
          ]
        },
        {
          id: 'lesson-7-2',
          number: '7.2',
          title: 'Tens and Ones',
          learnContent: {
            title: 'Decomposing Numbers!',
            paragraphs: [
              'We can split any two-digit number into tens and ones. This helps us see what the number is made of! 🪓',
              'For example, 47 = 4 tens and 7 ones. 4 tens is 40, and 7 ones is 7. So, 40 + 7 = 47.',
              'Let\'s practice breaking down numbers into their tens and ones parts.'
            ],
            keyPoint: 'Every two-digit number can be broken into a tens part and a ones part.',
            examples: [
              { visual: '3️⃣4️⃣', text: '34', label: '3 tens + 4 ones (30+4)' },
              { visual: '5️⃣8️⃣', text: '58', label: '5 tens + 8 ones (50+8)' },
              { visual: '8️⃣2️⃣', text: '82', label: '8 tens + 2 ones (80+2)' },
              { visual: '9️⃣0️⃣', text: '90', label: '9 tens + 0 ones (90+0)' }
            ],
            tip: 'Say the number out loud. "Fifty-eight" literally tells you the parts: fifty (50) and eight (8)!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the items yellow if they represent TENS, and blue if they represent ONES!',
            categories: [
              { name: 'Tens', color: 'yellow', class: 'color-yellow' },
              { name: 'Ones', color: 'blue', class: 'color-blue' }
            ],
            items: [
              { text: '60 in 63', category: 'Tens' },
              { text: '3 in 63', category: 'Ones' },
              { text: '40 in 45', category: 'Tens' },
              { text: '5 in 45', category: 'Ones' }
            ],
            explanation: 'The first digit in a two-digit number shows tens, and the second digit shows ones!'
          },
          checkQuestions: [
            { question: 'What is 5 tens and 2 ones?', options: ['25', '52', '502', '7'], correct: 1 },
            { question: 'How many ones are in the number 89?', options: ['8', '9', '80', '90'], correct: 1 },
            { question: 'What number is made of 3 tens and 0 ones?', options: ['3', '13', '30', '33'], correct: 2 }
          ]
        },
        {
          id: 'lesson-7-3',
          number: '7.3',
          title: 'Representing Numbers',
          learnContent: {
            title: 'Drawing Numbers with Blocks!',
            paragraphs: [
              'We can draw or build numbers using base-10 blocks. 🧱',
              'To show 24, we draw 2 vertical lines (for ten-sticks) and 4 small dots or squares (for ones).',
              'Matching numbers to their block drawings is a fast way to check their size.'
            ],
            keyPoint: 'Drawings of sticks (tens) and dots (ones) visually represent the size of numbers.',
            examples: [
              { visual: '🧱▫️▫️', text: '1 ten + 2 ones', label: '12' },
              { visual: '🧱🧱▫️▫️▫️', text: '2 tens + 3 ones', label: '23' },
              { visual: '🧱🧱🧱', text: '3 tens + 0 ones', label: '30' },
              { visual: '▫️▫️▫️▫️', text: '0 tens + 4 ones', label: '4' }
            ],
            tip: 'Sticks stand tall (10) and dots are small (1)!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each number to its base-10 block drawing description!',
            pairs: [
              { id: 'pair1', left: '15', right: '1 ten-stick and 5 cubes', leftIcon: '15', rightIcon: '🧱▫️▫️▫️▫️▫️' },
              { id: 'pair2', left: '32', right: '3 ten-sticks and 2 cubes', leftIcon: '32', rightIcon: '🧱🧱🧱▫️▫️' },
              { id: 'pair3', left: '40', right: '4 ten-sticks and 0 cubes', leftIcon: '40', rightIcon: '🧱🧱🧱🧱' },
              { id: 'pair4', left: '26', right: '2 ten-sticks and 6 cubes', leftIcon: '26', rightIcon: '🧱🧱▫️▫️▫️▫️▫️▫️' }
            ]
          },
          checkQuestions: [
            { question: 'What number is shown by 3 ten-sticks and 5 cubes?', options: ['35', '53', '8', '305'], correct: 0 },
            { question: 'Which block drawing shows the number 21?', options: ['1 stick and 2 cubes', '2 sticks and 1 cube', '2 sticks and 0 cubes', '21 cubes'], correct: 1 },
            { question: 'How would you draw the number 50?', options: ['5 cubes', '5 sticks', '5 sticks and 5 cubes', '50 sticks'], correct: 1 }
          ]
        },
        {
          id: 'lesson-7-4',
          number: '7.4',
          title: '10 More / 10 Less',
          learnContent: {
            title: 'Mental Math: Jump by 10!',
            paragraphs: [
              'What is 10 more than 34? What is 10 less than 34? We can find out in our heads using place value! 🧠',
              'When you add or subtract 10, ONLY the tens place digit changes! The ones digit stays exactly the same.',
              '10 more than 34: increase the tens by 1 → 44. 10 less than 34: decrease the tens by 1 → 24.'
            ],
            keyPoint: 'Adding or subtracting 10 changes only the tens digit of a number, increasing or decreasing it by 1.',
            examples: [
              { visual: '3️⃣4️⃣ ➕ 🔟 ➡️ 4️⃣4️⃣', text: '10 More than 34', label: 'tens goes 3 → 4' },
              { visual: '3️⃣4️⃣ ➖ 🔟 ➡️ 2️⃣4️⃣', text: '10 Less than 34', label: 'tens goes 3 → 2' },
              { visual: '5️⃣0️⃣ ➡️ 6️⃣0️⃣', text: '10 More than 50', label: 'ones stays 0' },
              { visual: '8️⃣7️⃣ ➡️ 7️⃣7️⃣', text: '10 Less than 87', label: 'ones stays 7' }
            ],
            tip: 'Keep the ones digit locked! Just jump up or down on the hundred chart column!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these math problems by whether the answer is 35 or 55!',
            categories: [
              {
                name: 'Answer is 35',
                items: [
                  { value: 'ten-more-25', text: '10 More than 25' },
                  { value: 'ten-less-45', text: '10 Less than 45' }
                ]
              },
              {
                name: 'Answer is 55',
                items: [
                  { value: 'ten-more-45', text: '10 More than 45' },
                  { value: 'ten-less-65', text: '10 Less than 65' }
                ]
              }
            ],
            items: [
              { value: 'ten-more-25', text: '10 More than 25', icon: '➕' },
              { value: 'ten-less-45', text: '10 Less than 45', icon: '➖' },
              { value: 'ten-more-45', text: '10 More than 45', icon: '➕' },
              { value: 'ten-less-65', text: '10 Less than 65', icon: '➖' }
            ]
          },
          checkQuestions: [
            { question: 'What is 10 more than 52?', options: ['53', '62', '42', '51'], correct: 1 },
            { question: 'What is 10 less than 87?', options: ['86', '97', '77', '80'], correct: 2 },
            { question: 'Complete the sentence: "10 more than 19 is _______."', options: ['20', '29', '9', '18'], correct: 1 }
          ]
        },
        {
          id: 'lesson-7-5',
          number: '7.5',
          title: 'Comparing Two-Digit Numbers',
          learnContent: {
            title: 'Compare with Place Value!',
            paragraphs: [
              'We can use place value to compare two-digit numbers easily. ⚖️',
              'Rule 1: Look at the tens place first. The number with MORE tens is always bigger! For example, 41 (4 tens) > 29 (2 tens).',
              'Rule 2: If the tens are the same, look at the ones. The number with MORE ones is bigger! For example, 35 (5 ones) > 32 (2 ones).'
            ],
            keyPoint: 'Compare tens first, and then compare ones if the tens are equal.',
            examples: [
              { visual: '4️⃣1️⃣ > 2️⃣9️⃣', text: 'Look at tens', label: '4 tens is more than 2 tens' },
              { visual: '3️⃣5️⃣ > 3️⃣2️⃣', text: 'Tens are same', label: 'look at ones: 5 > 2' },
              { visual: '7️⃣8️⃣ < 8️⃣0️⃣', text: 'Look at tens', label: '7 tens is less than 8 tens' },
              { visual: '5️⃣6️⃣ = 5️⃣6️⃣', label: 'both places same' }
            ],
            tip: 'Write both numbers in a stack so the tens and ones line up above each other!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the TRUE math statements green and the FALSE statements red!',
            categories: [
              { name: 'True', color: 'green', class: 'color-green' },
              { name: 'False', color: 'red', class: 'color-red' }
            ],
            items: [
              { text: '62 < 67', category: 'True' },
              { text: '34 > 51', category: 'False' },
              { text: '45 = 54', category: 'False' },
              { text: '19 < 91', category: 'True' }
            ],
            explanation: 'Always compare the tens place first, then the ones place!'
          },
          checkQuestions: [
            { question: 'Which number is greater: 54 or 45?', options: ['54 because it has more tens', '45 because it has more ones', 'They are equal', 'Neither'], correct: 0 },
            { question: 'Compare 73 and 79. Which symbol goes in the blank: 73 ___ 79?', options: ['>', '<', '=', '+'], correct: 1 },
            { question: 'Which number is LESS than 30?', options: ['31', '40', '29', '30'], correct: 2 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'What is the value of the digit 4 in the number 42?', options: ['2', '4', '40', '42'], correct: 2, type: 'multiple-choice' },
        { question: 'How many tens and ones are in 78?', options: ['7 tens and 8 ones', '8 tens and 7 ones', '70 tens and 8 ones', '7 tens and 80 ones'], correct: 0, type: 'multiple-choice' },
        { question: 'What number is represented by 4 ten-sticks and 3 single cubes?', options: ['34', '43', '7', '403'], correct: 1, type: 'multiple-choice' },
        { question: 'What is 10 more than 65?', options: ['55', '66', '75', '64'], correct: 2, type: 'multiple-choice' },
        { question: 'What is 10 less than 32?', options: ['22', '42', '31', '30'], correct: 0, type: 'multiple-choice' },
        { question: 'Compare 82 and 59. Which symbol is correct?', options: ['82 < 59', '82 > 59', '82 = 59', 'None'], correct: 1, type: 'multiple-choice' },
        { question: 'Compare 45 and 48. Which symbol is correct?', options: ['45 > 48', '45 < 48', '45 = 48', 'None'], correct: 1, type: 'multiple-choice' },
        { question: 'How many single cubes do you need to add to 3 ten-sticks to make the number 37?', options: ['3', '7', '10', '37'], correct: 1, type: 'multiple-choice' },
        { question: 'What number is 10 less than 100?', options: ['99', '90', '80', '110'], correct: 1, type: 'multiple-choice' },
        { question: 'In the number 9, what is the value of the tens place?', options: ['9', '0', '90', '1'], correct: 1, type: 'multiple-choice' }
      ]
    },

    // ==================== MODULE 8: Addition Within 20 ====================
    {
      id: 'module-8',
      number: 8,
      title: 'Addition Within 20',
      subject: 'math',
      icon: '➕',
      badgeId: 'addition-ace',
      badgeName: 'Addition Ace',
      badgeIcon: '➕',
      description: 'Learn adding with pictures, counting on, making 10, doubles, and word problems!',
      lessons: [
        {
          id: 'lesson-8-1',
          number: '8.1',
          title: 'What is Addition?',
          learnContent: {
            title: 'Adding Things Together!',
            paragraphs: [
              'Addition means putting two or more groups of items together to make a bigger group. We call this the sum or the total! ➕',
              'We use the plus sign (+) to show we are adding, and the equal sign (=) to show the final answer.',
              'For example: 3 apples + 2 apples = 5 apples in all! 🍎🍎🍎 + 🍎🍎 = 🍎🍎🍎🍎🍎.'
            ],
            keyPoint: 'Addition combines groups of items to find out how many there are in all.',
            examples: [
              { visual: '➕', text: 'Plus sign', label: 'means add together' },
              { visual: '3 + 2 = 5', text: 'Three plus two is five', label: 'addition sentence' },
              { visual: '🍎🍎', text: '2 apples', label: 'first group' },
              { visual: '🍎', text: '1 apple', label: 'total: 2+1=3' }
            ],
            tip: 'Adding always makes your group bigger (unless you add zero)!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these addition equations by whether the sum (total) is 4 or 6!',
            categories: [
              {
                name: 'Sum is 4',
                items: [
                  { value: 'two-plus-two', text: '2 + 2' },
                  { value: 'three-plus-one', text: '3 + 1' }
                ]
              },
              {
                name: 'Sum is 6',
                items: [
                  { value: 'three-plus-three', text: '3 + 3' },
                  { value: 'five-plus-one', text: '5 + 1' }
                ]
              }
            ],
            items: [
              { value: 'two-plus-two', text: '2 + 2', icon: '➕' },
              { value: 'three-plus-three', text: '3 + 3', icon: '➕' },
              { value: 'three-plus-one', text: '3 + 1', icon: '➕' },
              { value: 'five-plus-one', text: '5 + 1', icon: '➕' }
            ]
          },
          checkQuestions: [
            { question: 'What does the plus sign (+) tell us to do in math?', options: ['Take away', 'Put groups together', 'Split into groups', 'Nothing'], correct: 1 },
            { question: 'What is 3 + 1?', options: ['2', '3', '4', '5'], correct: 2 },
            { question: 'If you have 2 cats and get 1 more cat, how many cats do you have now?', options: ['1', '2', '3', '4'], correct: 2 }
          ]
        },
        {
          id: 'lesson-8-2',
          number: '8.2',
          title: 'Adding with Pictures',
          learnContent: {
            title: 'Count the Pictures!',
            paragraphs: [
              'When you are starting to add, you can count pictures of items to find the answer. 🎨',
              'To solve: 4 + 3 = ?, draw 4 stars and 3 stars. Then count ALL the stars from start to finish: 1, 2, 3, 4, 5, 6, 7!',
              'So, 4 + 3 = 7. Pictures make math visual and easy to understand.'
            ],
            keyPoint: 'Counting all the items in picture groups gives the sum of the addition.',
            examples: [
              { visual: '⭐+⭐⭐', text: '1 star + 2 stars', label: 'count all: 3' },
              { visual: '⚽⚽+⚽⚽', text: '2 balls + 2 balls', label: 'count all: 4' },
              { visual: '🍎🍎🍎+🍎', text: '3 apples + 1 apple', label: 'count all: 4' },
              { visual: '🍪🍪+🍪', text: '2 cookies + 1 cookie', label: 'count all: 3' }
            ],
            tip: 'Cross out each picture as you count all of them together to stay organized!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Tap the correct sum to solve the equations!',
            cards: [
              { word: '5', text: '3 + 2 = _', missing: '5', options: ['4', '5', '6'], icon: '➕' },
              { word: '7', text: '4 + 3 = _', missing: '7', options: ['6', '7', '8'], icon: '➕' }
            ],
            explanation: 'Count all the objects in both groups to find the total sum!'
          },
          checkQuestions: [
            { question: 'Solve this picture addition: 🔵🔵 + 🔵🔵🔵 = ?', options: ['4', '5', '6', '7'], correct: 1 },
            { question: 'Solve: ⭐ + ⭐⭐⭐⭐ = ?', options: ['3', '4', '5', '6'], correct: 2 },
            { question: 'What equation is shown by: 🍎🍎 + 🍎 = 🍎🍎🍎?', options: ['2 + 2 = 4', '2 + 1 = 3', '3 + 1 = 4', '1 + 1 = 2'], correct: 1 }
          ]
        },
        {
          id: 'lesson-8-3',
          number: '8.3',
          title: 'Counting On',
          learnContent: {
            title: 'The Counting On Strategy!',
            paragraphs: [
              'Counting on is a super fast way to add. Instead of starting at 1, start at the bigger number and count forward! 🎯',
              'To solve: 7 + 3 = ?, do not count 1, 2, 3, 4, 5, 6, 7. Just start at 7! Keep 7 in your brain 🧠.',
              'Then count up 3 fingers: "7... 8, 9, 10!" You landed on 10. So, 7 + 3 = 10.'
            ],
            keyPoint: 'Put the bigger number in your head and count forward the smaller number.',
            examples: [
              { visual: '8 + 2 = ?', text: 'Start at 8', label: 'count up 2: 9, 10' },
              { visual: '6 + 3 = ?', text: 'Start at 6', label: 'count up 3: 7, 8, 9' },
              { visual: '12 + 4 = ?', text: 'Start at 12', label: 'count up 4: 13, 14, 15, 16' },
              { visual: '🧠', text: 'Lock in brain', label: 'start with bigger number' }
            ],
            tip: 'Always start with the LARGEST number, even if it is written second! For 2 + 9, start at 9 and count on 2!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Use the counting on strategy to find the sums!',
            cards: [
              { word: '13', text: '9 + 4 = _ _', missing: '13', options: ['12', '13', '14'], icon: '➕' },
              { word: '11', text: '8 + 3 = _ _', missing: '11', options: ['10', '11', '12'], icon: '➕' }
            ],
            explanation: 'Start at the larger number and count forward: 9... 10, 11, 12, 13!'
          },
          checkQuestions: [
            { question: 'What is 8 + 3 using counting on?', options: ['10', '11', '12', '9'], correct: 1 },
            { question: 'To solve 2 + 11 easily, what number should you start with?', options: ['2', '11', '1', '10'], correct: 1 },
            { question: 'Solve: 14 + 3 = ?', options: ['15', '16', '17', '18'], correct: 2 }
          ]
        },
        {
          id: 'lesson-8-4',
          number: '8.4',
          title: 'Making 10',
          learnContent: {
            title: 'Use 10 as a Bridge!',
            paragraphs: [
              '10 is a very friendly number in math! Making 10 is a strategy that helps us solve tricky addition problems. 🧱',
              'For example, to solve: 8 + 5 = ?, we think: "How many do we need to add to 8 to make 10?" We need 2!',
              'We take 2 from the 5, which leaves 3. 8 + 2 makes 10. Then we add the leftover 3: 10 + 3 = 13!'
            ],
            keyPoint: 'Making 10 groups numbers together to make addition faster and easier.',
            examples: [
              { visual: '8 + 5', text: '8 + 2 + 3', label: '10 + 3 = 13' },
              { visual: '9 + 4', text: '9 + 1 + 3', label: '10 + 3 = 13' },
              { visual: '7 + 5', text: '7 + 3 + 2', label: '10 + 2 = 12' },
              { visual: '🧮', text: 'Ten-frame', label: 'helps visualize 10' }
            ],
            tip: 'Memorize the partners that make 10: 9+1, 8+2, 7+3, 6+4, 5+5!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each number to its partner that makes 10!',
            pairs: [
              { id: 'pair1', left: '9', right: '1', leftIcon: '9', rightIcon: '1' },
              { id: 'pair2', left: '8', right: '2', leftIcon: '8', rightIcon: '2' },
              { id: 'pair3', left: '7', right: '3', leftIcon: '7', rightIcon: '3' },
              { id: 'pair4', left: '6', right: '4', leftIcon: '6', rightIcon: '4' }
            ]
          },
          checkQuestions: [
            { question: 'Which of these pairs makes exactly 10?', options: ['7 and 2', '8 and 2', '5 and 4', '6 and 3'], correct: 1 },
            { question: 'How can you split 4 to solve 9 + 4 using the making 10 strategy?', options: ['2 and 2', '1 and 3', '0 and 4', '1 and 2'], correct: 1 },
            { question: 'Solve: 7 + 5 = ? (Hint: 7 + 3 = 10, then add 2)', options: ['11', '12', '13', '14'], correct: 1 }
          ]
        },
        {
          id: 'lesson-8-5',
          number: '8.5',
          title: 'Doubles',
          learnContent: {
            title: 'Double the Fun!',
            paragraphs: [
              'A doubles fact is when we add the same number to itself! 👥',
              'Doubles are like twin numbers: 1+1=2, 2+2=4, 3+3=6, 4+4=8, 5+5=10!',
              'Learning your doubles facts will make you a math speed champion because they pop up all the time!'
            ],
            keyPoint: 'Doubles facts add a number to itself: 1+1, 2+2, 3+3, 4+4, 5+5.',
            examples: [
              { visual: '🍒', text: '1 + 1 = 2', label: 'double 1' },
              { visual: '🐾', text: '2 + 2 = 4', label: 'double 2' },
              { visual: '🐜', text: '3 + 3 = 6', label: 'double 3 (legs)' },
              { visual: '🕷️', text: '4 + 4 = 8', label: 'double 4 (legs)' }
            ],
            tip: 'Use real-world doubles like car tires (2 + 2 = 4) or fingers on both hands (5 + 5 = 10) to remember!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these equations into doubles facts or NOT doubles facts!',
            categories: [
              {
                name: 'Doubles Facts',
                items: [
                  { value: 'double-three', text: '3 + 3' },
                  { value: 'double-five', text: '5 + 5' }
                ]
              },
              {
                name: 'Not Doubles',
                items: [
                  { value: 'not-double-1', text: '3 + 4' },
                  { value: 'not-double-2', text: '5 + 2' }
                ]
              }
            ],
            items: [
              { value: 'double-three', text: '3 + 3', icon: '➕' },
              { value: 'not-double-1', text: '3 + 4', icon: '❌' },
              { value: 'double-five', text: '5 + 5', icon: '➕' },
              { value: 'not-double-2', text: '5 + 2', icon: '❌' }
            ]
          },
          checkQuestions: [
            { question: 'What is 4 + 4?', options: ['6', '8', '10', '12'], correct: 1 },
            { question: 'Which equation is a doubles fact?', options: ['3 + 2 = 5', '5 + 5 = 10', '4 + 5 = 9', '1 + 2 = 3'], correct: 1 },
            { question: 'What is double 3?', options: ['5', '6', '7', '8'], correct: 1 }
          ]
        },
        {
          id: 'lesson-8-6',
          number: '8.6',
          title: 'Doubles Plus 1',
          learnContent: {
            title: 'Use Doubles to Add Near-Doubles!',
            paragraphs: [
              'If you know your doubles, you can solve "near-doubles" by adding 1! This is the doubles plus 1 strategy. ➕1️⃣',
              'For example, to solve: 3 + 4 = ?, notice that 4 is just 1 more than 3. So, 3 + 4 is like 3 + 3 (doubles) plus 1 more!',
              'We know 3 + 3 = 6. Add 1 more: 6 + 1 = 7. So, 3 + 4 = 7!'
            ],
            keyPoint: 'Doubles plus 1 uses known doubles to solve equations like 4+5 or 3+4.',
            examples: [
              { visual: '3 + 4', text: '3 + 3 + 1', label: '6 + 1 = 7' },
              { visual: '4 + 5', text: '4 + 4 + 1', label: '8 + 1 = 9' },
              { visual: '5 + 6', text: '5 + 5 + 1', label: '10 + 1 = 11' },
              { visual: '➕1️⃣', text: 'Add one', label: 'to the double sum' }
            ],
            tip: 'Find the smaller number, double it, and add 1!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Solve these doubles plus 1 facts!',
            cards: [
              { word: '11', text: '5 + 6 = _ _', missing: '11', options: ['10', '11', '12'], icon: '➕' },
              { word: '9', text: '4 + 5 = _', missing: '9', options: ['8', '9', '10'], icon: '➕' }
            ],
            explanation: 'Double 5 is 10, so 5 + 6 is 10 + 1 = 11. Double 4 is 8, so 4 + 5 is 8 + 1 = 9!'
          },
          checkQuestions: [
            { question: 'To solve 4 + 5 using doubles plus 1, what double fact should you start with?', options: ['4 + 4 = 8', '5 + 5 = 10', '3 + 3 = 6', '4 + 5 = 9'], correct: 0 },
            { question: 'What is 2 + 3 using doubles plus 1?', options: ['4', '5', '6', '7'], correct: 1 },
            { question: 'Solve: 6 + 7 = ?', options: ['12', '13', '14', '15'], correct: 1 }
          ]
        },
        {
          id: 'lesson-8-7',
          number: '8.7',
          title: 'Facts to 10',
          learnContent: {
            title: 'Addition Speed Run to 10!',
            paragraphs: [
              'Let\'s practice adding combinations that equal numbers up to 10. 🏎️',
              'These are our basic addition facts: 1+2, 3+4, 5+2, etc.',
              'With practice, you will be able to answer these facts instantly, like a flash!'
            ],
            keyPoint: 'Mastering facts to 10 builds foundation for larger addition problems.',
            examples: [
              { visual: '2 + 3 = 5', text: 'Two plus three', label: 'equals five' },
              { visual: '4 + 3 = 7', text: 'Four plus three', label: 'equals seven' },
              { visual: '5 + 4 = 9', text: 'Five plus four', label: 'equals nine' },
              { visual: '6 + 2 = 8', text: 'Six plus two', label: 'equals eight' }
            ],
            tip: 'Flashcards and playing games are the best ways to get super fast at these!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the addition equations that equal 8 green, and those that equal 10 purple!',
            categories: [
              { name: 'Equals 8', color: 'green', class: 'color-green' },
              { name: 'Equals 10', color: 'purple', class: 'color-purple' }
            ],
            items: [
              { text: '5 + 3', category: 'Equals 8' },
              { text: '6 + 4', category: 'Equals 10' },
              { text: '4 + 4', category: 'Equals 8' },
              { text: '8 + 2', category: 'Equals 10' },
              { text: '7 + 1', category: 'Equals 8' },
              { text: '5 + 5', category: 'Equals 10' }
            ],
            explanation: 'Addition facts practice helps us add quickly and accurately!'
          },
          checkQuestions: [
            { question: 'Solve: 4 + 2 = ?', options: ['5', '6', '7', '8'], correct: 1 },
            { question: 'Solve: 7 + 2 = ?', options: ['8', '9', '10', '7'], correct: 1 },
            { question: 'Solve: 3 + 5 = ?', options: ['7', '8', '9', '6'], correct: 1 }
          ]
        },
        {
          id: 'lesson-8-8',
          number: '8.8',
          title: 'Facts to 20',
          learnContent: {
            title: 'Adding Up to 20!',
            paragraphs: [
              'Now let\'s expand our skills to larger numbers up to 20! 📈',
              'This includes equations like: 8+7, 9+6, 12+5, 15+4.',
              'We can use our favorite strategies: counting on from the bigger number, making 10, or using doubles!'
            ],
            keyPoint: 'Facts to 20 combine single-digit and double-digit addition using strategies.',
            examples: [
              { visual: '12 + 5 = 17', text: '12 plus 5', label: 'Start 12, count 5' },
              { visual: '9 + 7 = 16', text: '9 plus 7', label: 'Make 10: 10 + 6' },
              { visual: '8 + 8 = 16', text: 'Doubles fact', label: 'double 8' },
              { visual: '15 + 3 = 18', text: '15 plus 3', label: 'Start 15, count 3' }
            ],
            tip: 'For 12 + 5, add the ones place digits first: 2 + 5 = 7, then keep the ten → 17!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these equations by their sum: is it 12 or 15?',
            categories: [
              {
                name: 'Sum is 12',
                items: [
                  { value: 'nine-three', text: '9 + 3' },
                  { value: 'eight-four', text: '8 + 4' }
                ]
              },
              {
                name: 'Sum is 15',
                items: [
                  { value: 'nine-six', text: '9 + 6' },
                  { value: 'ten-five', text: '10 + 5' }
                ]
              }
            ],
            items: [
              { value: 'nine-three', text: '9 + 3', icon: '➕' },
              { value: 'nine-six', text: '9 + 6', icon: '➕' },
              { value: 'eight-four', text: '8 + 4', icon: '➕' },
              { value: 'ten-five', text: '10 + 5', icon: '➕' }
            ]
          },
          checkQuestions: [
            { question: 'Solve: 11 + 4 = ?', options: ['14', '15', '16', '17'], correct: 1 },
            { question: 'Solve: 9 + 8 = ?', options: ['16', '17', '18', '15'], correct: 1 },
            { question: 'Solve: 13 + 6 = ?', options: ['18', '19', '20', '17'], correct: 1 }
          ]
        },
        {
          id: 'lesson-8-9',
          number: '8.9',
          title: 'Addition Word Problems',
          learnContent: {
            title: 'Solve Story Problems!',
            paragraphs: [
              'Word problems are stories that ask us to solve a math mystery! 🔍',
              'For addition, look for key words like: in all, altogether, total, join, plus, more.',
              'Example: "Sam has 5 baseballs. Mia gives him 3 more. How many does Sam have in all?" Equation: 5 + 3 = 8.'
            ],
            keyPoint: 'Word problems use story context to set up and solve math equations.',
            examples: [
              { visual: '🍎🍎+🍎', text: 'Sam has 2, gets 1', label: 'How many in all?' },
              { visual: '💬 "in all"', text: 'Key word', label: 'means add' },
              { visual: '💬 "total"', text: 'Key word', label: 'means add' },
              { visual: '💬 "altogether"', text: 'Key word', label: 'means add' }
            ],
            tip: 'Draw a quick picture of the story items to see what is happening!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Choose the correct sum for the word problem!',
            cards: [
              { word: '10', text: '6 frogs + 4 frogs = _ _', missing: '10', options: ['9', '10', '11'], icon: '🐸' }
            ],
            explanation: 'Altogether means we add the groups together: 6 + 4 = 10!'
          },
          checkQuestions: [
            { question: 'Ben has 4 red cars and 3 blue cars. How many cars does he have in total?', options: ['6 cars', '7 cars', '8 cars', '5 cars'], correct: 1 },
            { question: 'Which word in a story problem usually tells you to ADD?', options: ['take away', 'leftover', 'in all', 'difference'], correct: 2 },
            { question: 'A tree has 8 birds. 5 more birds fly to the tree. How many birds are there now?', options: ['12 birds', '13 birds', '14 birds', '11 birds'], correct: 1 }
          ]
        },
        {
          id: 'lesson-8-10',
          number: '8.10',
          title: 'Adding Three Numbers',
          learnContent: {
            title: 'Add Three Numbers Together!',
            paragraphs: [
              'What do you do when you see: 3 + 2 + 5 = ? You can still add them easily! 🧮',
              'Strategy: Pick two numbers to add first, get the total, and then add the third number to it.',
              'For 3 + 2 + 5: 1. Add 3 + 2 = 5. 2. Add that answer (5) to the last number (5) → 5 + 5 = 10!'
            ],
            keyPoint: 'To add three numbers, combine two first, and then add the third to the sum.',
            examples: [
              { visual: '3 + 2 + 5', text: 'Add 3+2 first', label: '5 + 5 = 10' },
              { visual: '8 + 2 + 4', text: 'Look for 10 partner', label: '10 + 4 = 14' },
              { visual: '5 + 5 + 3', text: 'Look for double first', label: '10 + 3 = 13' },
              { visual: '🧮', text: 'Grouping', label: 'makes it simpler' }
            ],
            tip: 'Always look for doubles (like 5+5) or partners that make 10 (like 8+2) first to make it super easy!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Find the correct sum for these three-number additions!',
            cards: [
              { word: '13', text: '6 + 4 + 3 = _ _', missing: '13', options: ['12', '13', '14'], icon: '➕' },
              { word: '15', text: '5 + 5 + 5 = _ _', missing: '15', options: ['14', '15', '16'], icon: '➕' }
            ],
            explanation: 'Look for making 10 first: 6 + 4 = 10, then 10 + 3 = 13. Or 5 + 5 = 10, then 10 + 5 = 15!'
          },
          checkQuestions: [
            { question: 'Solve: 2 + 2 + 5 = ?', options: ['7', '8', '9', '10'], correct: 2 },
            { question: 'Solve: 8 + 2 + 7 = ?', options: ['15', '16', '17', '18'], correct: 2 },
            { question: 'What is the sum of 5 + 1 + 5?', options: ['10', '11', '12', '13'], correct: 1 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'What is the sum of 5 + 4?', options: ['8', '9', '10', '11'], correct: 1, type: 'multiple-choice' },
        { question: 'Which addition strategy starts at the bigger number and counts up?', options: ['Doubles', 'Making 10', 'Counting On', 'Subtracting'], correct: 2, type: 'multiple-choice' },
        { question: 'What is 5 + 5?', options: ['8', '9', '10', '11'], correct: 2, type: 'multiple-choice' },
        { question: 'What is 6 + 7 using the doubles plus 1 strategy?', options: ['12', '13', '14', '15'], correct: 1, type: 'multiple-choice' },
        { question: 'Which pair of numbers makes 10?', options: ['7 and 2', '8 and 2', '6 and 3', '5 and 4'], correct: 1, type: 'multiple-choice' },
        { question: 'Solve: 12 + 6 = ?', options: ['17', '18', '19', '20'], correct: 1, type: 'multiple-choice' },
        { question: 'Solve: 8 + 2 + 5 = ?', options: ['14', '15', '16', '17'], correct: 1, type: 'multiple-choice' },
        { question: 'Tina has 7 apples and gets 5 more. How many does she have altogether?', options: ['11', '12', '13', '14'], correct: 1, type: 'multiple-choice' },
        { question: 'What equation goes with: 🔵🔵🔵 + 🔵🔵🔵🔵 = 🔵🔵🔵🔵🔵🔵🔵?', options: ['3 + 3 = 6', '3 + 4 = 7', '4 + 4 = 8', '3 + 5 = 8'], correct: 1, type: 'multiple-choice' },
        { question: 'Solve: 9 + 5 = ?', options: ['13', '14', '15', '16'], correct: 1, type: 'multiple-choice' }
      ]
    },

    // ==================== MODULE 9: Subtraction Within 20 ====================
    {
      id: 'module-9',
      number: 9,
      title: 'Subtraction Within 20',
      subject: 'math',
      icon: '➖',
      badgeId: 'subtraction-star',
      badgeName: 'Subtraction Star',
      badgeIcon: '➖',
      description: 'Learn subtraction concepts, drawing, counting back, missing numbers, and word problems!',
      lessons: [
        {
          id: 'lesson-9-1',
          number: '9.1',
          title: 'What is Subtraction?',
          learnContent: {
            title: 'Taking Things Away!',
            paragraphs: [
              'Subtraction means taking items away from a group to find out how many are left. It is the opposite of addition! ➖',
              'We use the minus sign (-) to show subtraction, and the equal sign (=) to show the final answer.',
              'For example, if you have 5 cookies and eat 2, you have 3 cookies left! 🍪🍪🍪🍪🍪 ➡️ 🍪🍪🍪.'
            ],
            keyPoint: 'Subtraction is removing items from a group to find the difference.',
            examples: [
              { visual: '➖', text: 'Minus sign', label: 'means take away' },
              { visual: '5 - 2 = 3', text: 'Five minus two is three', label: 'subtraction sentence' },
              { visual: '🍪🍪🍪', text: '3 left', label: 'difference' },
              { visual: '❌', text: 'Remove', label: 'cross out items' }
            ],
            tip: 'Subtraction makes your group smaller!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these equations by whether the difference (result) is 2 or 4!',
            categories: [
              {
                name: 'Difference is 2',
                items: [
                  { value: 'four-minus-two', text: '4 - 2' },
                  { value: 'five-minus-three', text: '5 - 3' }
                ]
              },
              {
                name: 'Difference is 4',
                items: [
                  { value: 'five-minus-one', text: '5 - 1' },
                  { value: 'six-minus-two', text: '6 - 2' }
                ]
              }
            ],
            items: [
              { value: 'four-minus-two', text: '4 - 2', icon: '➖' },
              { value: 'five-minus-one', text: '5 - 1', icon: '➖' },
              { value: 'five-minus-three', text: '5 - 3', icon: '➖' },
              { value: 'six-minus-two', text: '6 - 2', icon: '➖' }
            ]
          },
          checkQuestions: [
            { question: 'What does the minus sign (-) mean in math?', options: ['Add together', 'Take away', 'Multiply', 'Make equal'], correct: 1 },
            { question: 'What is 4 - 1?', options: ['2', '3', '4', '5'], correct: 1 },
            { question: 'If you have 6 apples and give away 2, how many are left?', options: ['3', '4', '5', '8'], correct: 1 }
          ]
        },
        {
          id: 'lesson-9-2',
          number: '9.2',
          title: 'Subtracting with Pictures',
          learnContent: {
            title: 'Cross Out to Subtract!',
            paragraphs: [
              'You can use drawings to solve subtraction. Draw the starting group, cross out the ones you take away, and count what is left! 🎨',
              'To solve: 7 - 3 = ?, draw 7 stars. Cross out 3 of them. Count the stars that are NOT crossed out: 1, 2, 3, 4!',
              'So, 7 - 3 = 4. Crossing out is a visual way to see subtraction.'
            ],
            keyPoint: 'Cross out items in a drawing to represent taking them away.',
            examples: [
              { visual: '⭐⭐❌❌', text: '4 - 2 = 2', label: 'two crossed out, two left' },
              { visual: '🎈❌', text: '2 - 1 = 1', label: 'one crossed out, one left' },
              { visual: '🍎🍎🍎❌❌', text: '5 - 2 = 3', label: 'two crossed out, three left' },
              { visual: '⚽❌', text: '2 - 1 = 1', label: 'one left' }
            ],
            tip: 'Draw simple shapes like circles or tally marks so you can draw and cross them out fast!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Find the correct subtraction answers!',
            cards: [
              { word: '5', text: '7 - 2 = _', missing: '5', options: ['4', '5', '6'], icon: '🎈' },
              { word: '4', text: '6 - 2 = _', missing: '4', options: ['3', '4', '5'], icon: '🎈' }
            ],
            explanation: 'Subtracting is taking away. 7 circles take away 2 leaves 5!'
          },
          checkQuestions: [
            { question: 'Solve this crossed-out subtraction: ⭐⭐⭐❌ = ?', options: ['2', '3', '4', '1'], correct: 1 },
            { question: 'What equation is shown by: 🍎🍎🍎🍎❌❌ = 🍎🍎?', options: ['4 - 2 = 2', '6 - 2 = 4', '6 - 4 = 2', '2 + 4 = 6'], correct: 1 },
            { question: 'If you draw 8 dots and cross out 5, how many dots are left?', options: ['2', '3', '4', '5'], correct: 1 }
          ]
        },
        {
          id: 'lesson-9-3',
          number: '9.3',
          title: 'Counting Back',
          learnContent: {
            title: 'Count Backward to Subtract!',
            paragraphs: [
              'Just like we count forward to add, we can count backward on the number line to subtract! 🎯',
              'To solve: 8 - 3 = ?, start at 8. Put 8 in your head 🧠.',
              'Count backward 3 steps: "8... 7, 6, 5!" You landed on 5. So, 8 - 3 = 5.'
            ],
            keyPoint: 'Start at the first number and count backward to subtract.',
            examples: [
              { visual: '9 - 2 = ?', text: 'Start 9, count back 2', label: '8, 7' },
              { visual: '15 - 3 = ?', text: 'Start 15, count back 3', label: '14, 13, 12' },
              { visual: '7 - 4 = ?', text: 'Start 7, count back 4', label: '6, 5, 4, 3' },
              { visual: '🎯', text: 'Counting back', label: 'subtraction strategy' }
            ],
            tip: 'Use your fingers to keep track of how many steps backward you have taken!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Count back to find the correct difference!',
            cards: [
              { word: '8', text: '11 - 3 = _', missing: '8', options: ['7', '8', '9'], icon: '➖' },
              { word: '6', text: '9 - 3 = _', missing: '6', options: ['5', '6', '7'], icon: '➖' }
            ],
            explanation: 'Start at 11 and count back 3 steps: 10, 9, 8!'
          },
          checkQuestions: [
            { question: 'What is 9 - 3 using counting back?', options: ['5', '6', '7', '8'], correct: 1 },
            { question: 'Count back from 14: 14... 13, 12, ___?', options: ['11', '10', '9', '15'], correct: 0 },
            { question: 'Solve: 16 - 2 = ?', options: ['13', '14', '15', '12'], correct: 1 }
          ]
        },
        {
          id: 'lesson-9-4',
          number: '9.4',
          title: 'Using Addition to Subtract',
          learnContent: {
            title: 'Use Fact Families!',
            paragraphs: [
              'Addition and subtraction are inverse operations. They are part of the same fact family! 🏡',
              'If you know: 4 + 3 = 7, then you also know: 7 - 3 = 4 and 7 - 4 = 3.',
              'To solve: 12 - 8 = ?, think: "What number plus 8 equals 12?" We know 8 + 4 = 12, so 12 - 8 must be 4!'
            ],
            keyPoint: 'Use related addition facts to solve subtraction equations easily.',
            examples: [
              { visual: '🏡 Family', text: '3, 5, 8', label: '3+5=8, 8-5=3' },
              { visual: '10 - 7 = ?', text: 'Think: 7 + ? = 10', label: 'partner is 3' },
              { visual: '16 - 8 = ?', text: 'Think: 8 + ? = 16', label: 'doubles partner: 8' },
              { visual: '🔄', text: 'Think addition', label: 'to subtract fast' }
            ],
            tip: 'Ask yourself: "What number do I add to the second number to get the first?"'
          },
          activity: {
            type: 'matching',
            instruction: 'Match the subtraction equation to the addition fact that helps solve it!',
            pairs: [
              { id: 'pair1', left: '10 - 8 = ?', right: '8 + 2 = 10', leftIcon: '10-8', rightIcon: '8+2=10' },
              { id: 'pair2', left: '12 - 6 = ?', right: '6 + 6 = 12', leftIcon: '12-6', rightIcon: '6+6=12' },
              { id: 'pair3', left: '9 - 5 = ?', right: '5 + 4 = 9', leftIcon: '9-5', rightIcon: '5+4=9' },
              { id: 'pair4', left: '15 - 9 = ?', right: '9 + 6 = 15', leftIcon: '15-9', rightIcon: '9+6=15' }
            ]
          },
          checkQuestions: [
            { question: 'To solve 14 - 7, what doubles fact should you use?', options: ['6 + 6 = 12', '7 + 7 = 14', '8 + 8 = 16', '7 - 7 = 0'], correct: 1 },
            { question: 'If 8 + 5 = 13, what is 13 - 5?', options: ['5', '8', '13', '7'], correct: 1 },
            { question: 'What is the missing number in the fact family: 4 + ___ = 9, 9 - 4 = ___?', options: ['3', '4', '5', '6'], correct: 2 }
          ]
        },
        {
          id: 'lesson-9-5',
          number: '9.5',
          title: 'Subtraction Facts to 10',
          learnContent: {
            title: 'Speed Run Subtraction to 10!',
            paragraphs: [
              'Let\'s practice subtraction facts with answers and starting numbers up to 10. 🏎️',
              'These are facts like: 6-2, 8-5, 9-4, 10-3.',
              'Practicing these builds mental math speed, helping you solve equations quickly.'
            ],
            keyPoint: 'Developing speed with facts to 10 makes mental subtraction effortless.',
            examples: [
              { visual: '5 - 3 = 2', text: 'Five minus three', label: 'equals two' },
              { visual: '8 - 4 = 4', text: 'Eight minus four', label: 'equals four' },
              { visual: '10 - 5 = 5', text: 'Ten minus five', label: 'equals five' },
              { visual: '7 - 2 = 5', text: 'Seven minus two', label: 'equals five' }
            ],
            tip: 'Remember the 10-partners: 10 - 7 = 3, 10 - 8 = 2, 10 - 9 = 1!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color equations that equal 4 yellow, and those that equal 5 blue!',
            categories: [
              { name: 'Equals 4', color: 'yellow', class: 'color-yellow' },
              { name: 'Equals 5', color: 'blue', class: 'color-blue' }
            ],
            items: [
              { text: '9 - 5', category: 'Equals 4' },
              { text: '10 - 5', category: 'Equals 5' },
              { text: '8 - 4', category: 'Equals 4' },
              { text: '7 - 2', category: 'Equals 5' },
              { text: '6 - 2', category: 'Equals 4' },
              { text: '9 - 4', category: 'Equals 5' }
            ],
            explanation: 'Subtraction facts practice helps us subtract quickly!'
          },
          checkQuestions: [
            { question: 'Solve: 6 - 3 = ?', options: ['2', '3', '4', '5'], correct: 1 },
            { question: 'Solve: 8 - 2 = ?', options: ['5', '6', '7', '8'], correct: 1 },
            { question: 'Solve: 10 - 4 = ?', options: ['5', '6', '7', '8'], correct: 1 }
          ]
        },
        {
          id: 'lesson-9-6',
          number: '9.6',
          title: 'Subtraction Facts to 20',
          learnContent: {
            title: 'Subtracting from Teen Numbers!',
            paragraphs: [
              'Let\'s practice subtracting from teen numbers (11 to 20). 📈',
              'Examples: 15-4, 12-7, 18-9, 20-5.',
              'We can use counting back, using addition, or breaking down to 10 to solve these larger subtraction facts.'
            ],
            keyPoint: 'Subtracting from 11-20 uses base-10 knowledge and inverse operations.',
            examples: [
              { visual: '15 - 3 = 12', text: '15 minus 3', label: 'ones: 5-3=2, keep ten' },
              { visual: '16 - 8 = 8', text: 'Double fact check', label: '8 + 8 = 16' },
              { visual: '12 - 4 = 8', text: 'Break to 10', label: '12 - 2 = 10, 10 - 2 = 8' },
              { visual: '20 - 5 = 15', text: 'Count back 5 from 20', label: 'leaves 15' }
            ],
            tip: 'If you see 16 - 8, think "it\'s a double!" 8 + 8 = 16, so the answer is 8!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these equations by their difference: is it 9 or 12?',
            categories: [
              {
                name: 'Difference is 9',
                items: [
                  { value: 'eighteen-nine', text: '18 - 9' },
                  { value: 'fourteen-five', text: '14 - 5' }
                ]
              },
              {
                name: 'Difference is 12',
                items: [
                  { value: 'fifteen-three', text: '15 - 3' },
                  { value: 'sixteen-four', text: '16 - 4' }
                ]
              }
            ],
            items: [
              { value: 'eighteen-nine', text: '18 - 9', icon: '➖' },
              { value: 'fifteen-three', text: '15 - 3', icon: '➖' },
              { value: 'fourteen-five', text: '14 - 5', icon: '➖' },
              { value: 'sixteen-four', text: '16 - 4', icon: '➖' }
            ]
          },
          checkQuestions: [
            { question: 'Solve: 14 - 3 = ?', options: ['10', '11', '12', '13'], correct: 1 },
            { question: 'Solve: 17 - 9 = ? (Think: 9 + ? = 17)', options: ['7', '8', '9', '6'], correct: 1 },
            { question: 'Solve: 20 - 4 = ?', options: ['15', '16', '17', '14'], correct: 1 }
          ]
        },
        {
          id: 'lesson-9-7',
          number: '9.7',
          title: 'Subtraction Word Problems',
          learnContent: {
            title: 'Solve Subtraction Story Problems!',
            paragraphs: [
              'Story problems often tell us to subtract. We must find the key words! 🔍',
              'Key words for subtraction: left, take away, lose, eat, fewer, difference, how many more.',
              'Example: "Mia has 8 apples. She eats 3 of them. How many are left?" Equation: 8 - 3 = 5.'
            ],
            keyPoint: 'Word problems ask us to find the difference or remaining items in a story context.',
            examples: [
              { visual: '🍪🍪🍪❌', text: 'Had 3, ate 1', label: 'How many left?' },
              { visual: '💬 "left"', text: 'Key word', label: 'means subtract' },
              { visual: '💬 "fewer"', text: 'Key word', label: 'means subtract' },
              { visual: '💬 "take away"', text: 'Key word', label: 'means subtract' }
            ],
            tip: 'Read the story and imagine the items being taken away or disappearing!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Solve the subtraction word problem!',
            cards: [
              { word: '5', text: '9 cards - 4 cards = _', missing: '5', options: ['4', '5', '6'], icon: '📇' }
            ],
            explanation: 'Leo gives away cards, so we subtract: 9 - 4 = 5 cards left!'
          },
          checkQuestions: [
            { question: 'A bird feeder has 10 birds. 4 birds fly away. How many birds are left?', options: ['4 birds', '6 birds', '7 birds', '14 birds'], correct: 1 },
            { question: 'Which word in a story problem usually tells you to SUBTRACT?', options: ['altogether', 'how many left', 'sum', 'in all'], correct: 1 },
            { question: 'There are 15 cupcakes on a plate. The kids eat 5 cupcakes. How many cupcakes remain?', options: ['10 cupcakes', '11 cupcakes', '20 cupcakes', '5 cupcakes'], correct: 0 }
          ]
        },
        {
          id: 'lesson-9-8',
          number: '9.8',
          title: 'Missing Number Problems',
          learnContent: {
            title: 'Solve for the Mystery Number!',
            paragraphs: [
              'Sometimes the middle of the equation is missing! For example: 8 - ? = 5. 🔍',
              'To find the missing number, we can ask: "What did we take from 8 to get 5?"',
              'We can subtract the end number from the start number: 8 - 5 = 3. So, the missing number is 3 (8 - 3 = 5)!'
            ],
            keyPoint: 'To solve a missing number problem, use related subtraction or addition facts.',
            examples: [
              { visual: '8 - ❓ = 5', text: 'What is the mystery?', label: '8 - 5 = 3, so ❓ is 3' },
              { visual: '10 - ❓ = 6', text: '10 minus what is 6?', label: '10 - 6 = 4, so ❓ is 4' },
              { visual: '❓ + 3 = 8', text: 'What plus 3 is 8?', label: '8 - 3 = 5, so ❓ is 5' },
              { visual: '⚖️ Balance', text: 'Make both sides same', label: 'equations are balanced' }
            ],
            tip: 'For subtraction like "Start - ? = End," just solve "Start - End = ?" to get the answer!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Find the missing number to make the equations true!',
            cards: [
              { word: '4', text: '12 - _ = 8', missing: '4', options: ['3', '4', '5'], icon: '➖' },
              { word: '3', text: '10 - _ = 7', missing: '3', options: ['2', '3', '4'], icon: '➖' }
            ],
            explanation: '12 minus 4 is 8, and 10 minus 3 is 7!'
          },
          checkQuestions: [
            { question: 'Find the missing number: 7 - ___ = 4', options: ['2', '3', '4', '1'], correct: 1 },
            { question: 'Find the missing number: ___ + 2 = 10', options: ['8', '12', '7', '6'], correct: 0 },
            { question: 'Solve: 15 - ___ = 10', options: ['4', '5', '10', '6'], correct: 1 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'What is 8 - 3?', options: ['4', '5', '6', '7'], correct: 1, type: 'multiple-choice' },
        { question: 'Which strategy is used to count backward to subtract?', options: ['Counting On', 'Counting Back', 'Doubles', 'Making 10'], correct: 1, type: 'multiple-choice' },
        { question: 'If you have 10 blocks and take away 5, how many are left?', options: ['4', '5', '6', '7'], correct: 1, type: 'multiple-choice' },
        { question: 'What is the related subtraction fact for: 6 + 4 = 10?', options: ['10 - 4 = 6', '6 - 4 = 2', '10 + 6 = 16', '10 - 5 = 5'], correct: 0, type: 'multiple-choice' },
        { question: 'Solve: 16 - 8 = ?', options: ['7', '8', '9', '10'], correct: 1, type: 'multiple-choice' },
        { question: 'Ben has 12 balloons. 4 of them pop. How many balloons are left?', options: ['7', '8', '9', '10'], correct: 1, type: 'multiple-choice' },
        { question: 'Find the missing number: 9 - ___ = 6', options: ['2', '3', '4', '5'], correct: 1, type: 'multiple-choice' },
        { question: 'What is 15 - 5?', options: ['8', '9', '10', '11'], correct: 2, type: 'multiple-choice' },
        { question: 'Which word in a story problem indicates subtraction?', options: ['in all', 'altogether', 'how many left', 'total'], correct: 2, type: 'multiple-choice' },
        { question: 'Solve: 20 - 5 = ?', options: ['14', '15', '16', '17'], correct: 1, type: 'multiple-choice' }
      ]
    },

    // ==================== MODULE 10: Measurement & Data ====================
    {
      id: 'module-10',
      number: 10,
      title: 'Measurement & Data',
      subject: 'math',
      icon: '📏',
      badgeId: 'measurement-pro',
      badgeName: 'Measurement Pro',
      badgeIcon: '📏',
      description: 'Compare lengths, measure with non-standard units, tell time, and read graphs!',
      lessons: [
        {
          id: 'lesson-10-1',
          number: '10.1',
          title: 'Comparing Lengths',
          learnContent: {
            title: 'Longer vs. Shorter!',
            paragraphs: [
              'Everything around us has a length. Some things are long, and some are short! 📏',
              'We can compare two things by lining them up side-by-side at the bottom. The one that goes higher or further is longer. The other is shorter.',
              'We can also order three items from shortest to longest!'
            ],
            keyPoint: 'Compare lengths by lining up objects at the same start line.',
            examples: [
              { visual: '✏️', text: 'Long pencil', label: 'longer' },
              { visual: '🖍️', text: 'Short crayon', label: 'shorter' },
              { visual: '🦒', text: 'Giraffe', label: 'tall / long neck' },
              { visual: '🐢', text: 'Turtle', label: 'short / low' }
            ],
            tip: 'Always make sure the bottom edges match before comparing, or it will not be fair!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these objects into Longer than a pencil or Shorter than a pencil!',
            categories: [
              {
                name: 'Longer than Pencil',
                items: [
                  { value: 'broom', text: 'A long broom' },
                  { value: 'car', text: 'A real car' }
                ]
              },
              {
                name: 'Shorter than Pencil',
                items: [
                  { value: 'paperclip', text: 'A small paperclip' },
                  { value: 'eraser', text: 'A pink eraser' }
                ]
              }
            ],
            items: [
              { value: 'broom', text: 'A long broom', icon: '🧹' },
              { value: 'paperclip', text: 'A small paperclip', icon: '📎' },
              { value: 'car', text: 'A real car', icon: '🚗' },
              { value: 'eraser', text: 'A pink eraser', icon: '🧽' }
            ]
          },
          checkQuestions: [
            { question: 'What do we say when one object has more length than another?', options: ['It is shorter', 'It is longer', 'It is equal', 'It is blue'], correct: 1 },
            { question: 'If Pencil A is longer than Pencil B, and Pencil B is longer than Pencil C, which pencil is the longest?', options: ['Pencil A', 'Pencil B', 'Pencil C', 'They are same'], correct: 0 },
            { question: 'What is important when comparing lengths of two sticks?', options: ['That they are different colors', 'That their ends line up at the same start line', 'That they are made of wood', 'Nothing'], correct: 1 }
          ]
        },
        {
          id: 'lesson-10-2',
          number: '10.2',
          title: 'Measuring with Units',
          learnContent: {
            title: 'Measure with Paperclips!',
            paragraphs: [
              'Before we use rulers, we can measure how long things are using non-standard units, like paperclips or building blocks! 📎',
              'To measure, line up paperclips in a straight line from one end of the object to the other. Do not leave any gaps and do not overlap the paperclips.',
              'Then count the paperclips! "This pencil is 5 paperclips long!"'
            ],
            keyPoint: 'Measure length by placing identical units end-to-end without gaps or overlaps.',
            examples: [
              { visual: '📎📎📎', text: '3 paperclips long', label: 'length of eraser' },
              { visual: '🧱🧱🧱🧱🧱', text: '5 blocks long', label: 'length of crayon' },
              { visual: '❌ Gaps', text: 'Incorrect', label: 'leaving spaces' },
              { visual: '❌ Overlap', text: 'Incorrect', label: 'stacking units' }
            ],
            tip: 'Make sure your measuring units are all the same size!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Measure the objects and pick the correct block length!',
            cards: [
              { word: '6', text: 'Brush length: _ blocks', missing: '6', options: ['5', '6', '7'], icon: '🖌️' }
            ],
            explanation: 'The paint brush aligns with exactly 6 building blocks!'
          },
          checkQuestions: [
            { question: 'How should you place units when measuring?', options: ['With big gaps between them', 'Overlapping each other', 'End-to-end in a straight line', 'Scattered around'], correct: 2 },
            { question: 'Can you measure a book using pennies?', options: ['Yes, if the pennies are all the same size and laid in a line', 'No, you can only use rulers', 'Only on school days', 'Only if the book is red'], correct: 0 },
            { question: 'If a spoon is 8 paperclips long and a fork is 6 paperclips long, which is longer?', options: ['The spoon', 'The fork', 'They are same', 'The paperclips'], correct: 0 }
          ]
        },
        {
          id: 'lesson-10-3',
          number: '10.3',
          title: 'Telling Time Hours',
          learnContent: {
            title: 'Telling Time to the Hour!',
            paragraphs: [
              'Clocks tell us what time it is. An analog clock is round and has numbers 1 to 12. It also has two hands! 🕒',
              'The short hand is the hour hand. The long hand is the minute hand. 🕰️',
              'When the long minute hand points straight up at the 12, it is an "o\'clock" time! Look at the short hand to see what hour it is. If short points to 3 and long to 12, it is 3 o\'clock (3:00)!'
            ],
            keyPoint: 'Hour hand is short, minute hand is long. When minute hand is at 12, it is o\'clock.',
            examples: [
              { visual: '🕒', text: '3:00', label: 'Short at 3, long at 12' },
              { visual: '⏰', text: 'Alarm clock', label: 'wake up time!' },
              { visual: 'short hand', text: 'Hour hand', label: 'tells the hour' },
              { visual: 'long hand', text: 'Minute hand', label: 'tells minutes' }
            ],
            tip: 'Short hand = short word (Hour). Long hand = long word (Minute)!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match the clock description to the written time!',
            pairs: [
              { id: 'pair1', left: 'Short hand at 9, Long at 12', right: '9:00', leftIcon: '9 oclock', rightIcon: '9:00' },
              { id: 'pair2', left: 'Short hand at 1, Long at 12', right: '1:00', leftIcon: '1 oclock', rightIcon: '1:00' },
              { id: 'pair3', left: 'Short hand at 5, Long at 12', right: '5:00', leftIcon: '5 oclock', rightIcon: '5:00' },
              { id: 'pair4', left: 'Short hand at 12, Long at 12', right: '12:00', leftIcon: '12 oclock', rightIcon: '12:00' }
            ]
          },
          checkQuestions: [
            { question: 'What is the short hand on a clock called?', options: ['The minute hand', 'The hour hand', 'The second hand', 'The clock face'], correct: 1 },
            { question: 'If the short hand is pointing at 8 and the long hand is pointing at 12, what time is it?', options: ['12 o\'clock', '8 o\'clock', '8:30', '12:08'], correct: 1 },
            { question: 'Where does the minute hand point when it is 6:00?', options: ['At the 6', 'At the 12', 'At the 3', 'At the 9'], correct: 1 }
          ]
        },
        {
          id: 'lesson-10-4',
          number: '10.4',
          title: 'Telling Time Half-Hours',
          learnContent: {
            title: 'Half-Past the Hour!',
            paragraphs: [
              'What happens when the minute hand goes halfway around the clock? It points straight down at the 6! We call this half-past or thirty (:30). 🕒',
              'When the long hand is at the 6, the hour hand will be halfway between two numbers.',
              'For 4:30 (half-past 4), the short hand is halfway between 4 and 5, and the long hand points exactly at 6!'
            ],
            keyPoint: 'When the minute hand points to 6, it represents 30 minutes, or "half-past" the hour.',
            examples: [
              { visual: '🕞', text: '3:30', label: 'Short between 3 & 4, long at 6' },
              { visual: '🕧', text: '12:30', label: 'Short between 12 & 1, long at 6' },
              { visual: '30 min', text: 'Half hour', label: 'halfway around clock' },
              { visual: '🕕', text: '6:30', label: 'Short between 6 & 7, long at 6' }
            ],
            tip: 'Always look back to the smaller hour number if the short hand is between two numbers!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Read the description and pick the correct digital time!',
            cards: [
              { word: '7:30', text: 'Hand between 7 & 8, long hand at 6 = _ _ : _ _', missing: '7:30', options: ['7:30', '8:30', '7:00'], icon: '⏰' }
            ],
            explanation: 'When the short hand is between 7 and 8 and the long hand points to 6, it is 7:30!'
          },
          checkQuestions: [
            { question: 'Where is the minute hand pointing when it is 10:30?', options: ['At the 12', 'At the 6', 'At the 10', 'Between the 10 and 11'], correct: 1 },
            { question: 'What is another name for 2:30?', options: ['2 o\'clock', 'Half-past 2', 'Half-past 3', '3 o\'clock'], correct: 1 },
            { question: 'If the hour hand is between 11 and 12, and the minute hand is at 6, what time is it?', options: ['11:00', '12:30', '11:30', '12:00'], correct: 2 }
          ]
        },
        {
          id: 'lesson-10-5',
          number: '10.5',
          title: 'Tally Charts',
          learnContent: {
            title: 'Use Tally Marks!',
            paragraphs: [
              'Tally marks are a quick way to count things and record data. Each tally mark is a vertical line. | represents 1 item. 🧮',
              'When you reach 5, you draw a diagonal line across the first four: |||| with a slash makes a neat bundle of 5! This makes counting by 5s super easy.',
              'Let\'s practice reading tally charts to see what options kids like best!'
            ],
            keyPoint: 'Tally marks record counts in groups of five, with a diagonal slash representing the fifth mark.',
            examples: [
              { visual: '|', text: 'One', label: '1 tally' },
              { visual: '||||', text: 'Four', label: '4 tallies' },
              { visual: '🔠', text: 'Five (tally bundle)', label: '5 tallies' },
              { visual: '🔠||', text: 'Seven', label: '5 + 2 tallies' }
            ],
            tip: 'When you see a group with a slash, skip count by 5 right away!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Count the tally marks and pick the total!',
            cards: [
              { word: '13', text: 'Tally: (5) + (5) + ||| = _ _', missing: '13', options: ['12', '13', '14'], icon: '📊' }
            ],
            explanation: 'Each group with a slash represents 5 tallies. 5 + 5 + 3 = 13!'
          },
          checkQuestions: [
            { question: 'How many tally marks are represented by a group of four vertical lines and one diagonal line?', options: ['4', '5', '6', '10'], correct: 1 },
            { question: 'Count these tally marks: 🔠 |?', options: ['5', '6', '7', '10'], correct: 1 },
            { question: 'Which tally group represents 8?', options: ['||||||||', '🔠 |||', '🔠 🔠', '🔠 ||'], correct: 1 }
          ]
        },
        {
          id: 'lesson-10-6',
          number: '10-6',
          title: 'Picture Graphs',
          learnContent: {
            title: 'Graphs with Pictures!',
            paragraphs: [
              'A picture graph (or pictogram) uses images to show data. It makes reading numbers fun! 🍎',
              'Each image stands for a certain number of items. In 1st grade, each picture usually stands for 1 item.',
              'For example, if a graph about favorite fruits shows 4 picture apples, it means 4 kids chose apples!'
            ],
            keyPoint: 'Picture graphs use images to represent counts for different categories.',
            examples: [
              { visual: '🍎🍎🍎🍎', text: 'Apple row', label: '4 apple choices' },
              { visual: '🍌🍌', text: 'Banana row', label: '2 banana choices' },
              { visual: '📊 Graph key', text: '1 picture = 1 vote', label: 'graph rules' },
              { visual: '🍍🍍🍍', text: 'Pineapple row', label: '3 pineapple choices' }
            ],
            tip: 'Always check the "Key" at the bottom of the graph to know what each picture stands for!'
          },
          activity: {
            type: 'matching',
            instruction: 'Match the fruit category to the number of kids who voted for it!',
            pairs: [
              { id: 'pair1', left: 'Apple: 🍎🍎🍎🍎', right: '4 votes', leftIcon: 'Apple', rightIcon: '4' },
              { id: 'pair2', left: 'Banana: 🍌🍌', right: '2 votes', leftIcon: 'Banana', rightIcon: '2' },
              { id: 'pair3', left: 'Cherry: 🍒🍒🍒🍒🍒', right: '5 votes', leftIcon: 'Cherry', rightIcon: '5' },
              { id: 'pair4', left: 'Pear: 🍐', right: '1 vote', leftIcon: 'Pear', rightIcon: '1' }
            ]
          },
          checkQuestions: [
            { question: 'If a picture graph has 5 dog images in the "Dogs" row, how many people chose dogs?', options: ['1', '5', '10', '50'], correct: 1 },
            { question: 'How can you find which category has the most votes on a picture graph?', options: ['Look for the row with the longest line of pictures', 'Look for the smallest picture', 'Count the letters in the name', 'Guess'], correct: 0 },
            { question: 'In a graph where each 🍪 = 1 vote, a row has 🍪🍪🍪. How many votes does it have?', options: ['1', '2', '3', '4'], correct: 2 }
          ]
        },
        {
          id: 'lesson-10-7',
          number: '10.7',
          title: 'Bar Graphs',
          learnContent: {
            title: 'Compare with Bars!',
            paragraphs: [
              'A bar graph uses colored rectangles (bars) to show data. The height or length of the bar tells the count! 📊',
              'The side of the graph has numbers (the scale). Find the top of the bar, slide your finger to the side, and read the number to find the total.',
              'Bar graphs make it super easy to compare groups. The tallest bar is the most popular, and the shortest bar is the least popular!'
            ],
            keyPoint: 'Bar graphs use the height or length of colored bars to show and compare numbers.',
            examples: [
              { visual: '📊 Tall bar', text: 'Green bar (reaches 8)', label: 'value of 8' },
              { visual: '📊 Short bar', text: 'Red bar (reaches 2)', label: 'value of 2' },
              { visual: '📈 Grid lines', text: 'Help you line up', label: 'bar top to number' },
              { visual: '🥇 Most popular', text: 'Tallest bar', label: 'highest number' }
            ],
            tip: 'Use a ruler or your finger to draw a straight line from the top of the bar to the numbers on the side!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the MOST POPULAR pet yellow and LEAST POPULAR pet blue (Cats: 6, Dogs: 9, Birds: 3)!',
            categories: [
              { name: 'Most Popular', color: 'yellow', class: 'color-yellow' },
              { name: 'Least Popular', color: 'blue', class: 'color-blue' }
            ],
            items: [
              { text: 'Dogs (9 votes)', category: 'Most Popular' },
              { text: 'Birds (3 votes)', category: 'Least Popular' }
            ],
            explanation: 'Dogs has the most votes (9), and Birds has the fewest votes (3)!'
          },
          checkQuestions: [
            { question: 'How do you find the number of items a bar represents on a bar graph?', options: ['Read the color name', 'Look at the number that lines up with the top of the bar', 'Count all the bars', 'Guess a number'], correct: 1 },
            { question: 'Which bar on a bar graph shows the category with the LEAST votes?', options: ['The tallest bar', 'The shortest bar', 'The middle bar', 'The widest bar'], correct: 1 },
            { question: 'A bar graph has a bar for Apples that ends at 5, and a bar for Grapes that ends at 7. How many more votes did Grapes get?', options: ['1 more', '2 more', '7 more', '12 in total'], correct: 1 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'Which object is typically longer than a crayon?', options: ['A paperclip', 'An eraser', 'A broom', 'A dime'], correct: 2, type: 'multiple-choice' },
        { question: 'What is important when measuring with paperclips?', options: ['Leave big gaps between them', 'Overlap them slightly', 'Place them end-to-end in a straight line', 'Use different sizes'], correct: 2, type: 'multiple-choice' },
        { question: 'What time is shown when the short hand points to 4 and the long hand points to 12?', options: ['12:04', '4 o\'clock', '4:30', '12:00'], correct: 1, type: 'multiple-choice' },
        { question: 'What time is half-past 8?', options: ['8:00', '8:30', '9:30', '12:08'], correct: 1, type: 'multiple-choice' },
        { question: 'How many tally marks is: 🔠 ||?', options: ['5', '6', '7', '8'], correct: 2, type: 'multiple-choice' },
        { question: 'On a picture graph, if each 🍎 = 1 vote, and the apple row has 6 apples, how many votes did apples get?', options: ['1', '5', '6', '12'], correct: 2, type: 'multiple-choice' },
        { question: 'Which bar on a bar graph is the most popular category?', options: ['The shortest bar', 'The tallest bar', 'The blue bar', 'The first bar'], correct: 1, type: 'multiple-choice' },
        { question: 'Where does the minute hand point when a clock shows a time ending in :30?', options: ['At the 12', 'At the 3', 'At the 6', 'At the 9'], correct: 2, type: 'multiple-choice' },
        { question: 'If a string is 8 blocks long and a pencil is 5 blocks long, how many blocks longer is the string?', options: ['2 blocks', '3 blocks', '5 blocks', '13 blocks'], correct: 1, type: 'multiple-choice' },
        { question: 'How many marks make up a tally group with a diagonal line?', options: ['3', '4', '5', '6'], correct: 2, type: 'multiple-choice' }
      ]
    },

    // ==================== MODULE 11: Geometry & Shapes ====================
    {
      id: 'module-11',
      number: 11,
      title: 'Geometry & Shapes',
      subject: 'math',
      icon: '🔷',
      badgeId: 'shape-master',
      badgeName: 'Shape Master',
      badgeIcon: '🔷',
      description: 'Explore 2D and 3D shapes, composing shapes, halves, and fourths.',
      lessons: [
        {
          id: 'lesson-11-1',
          number: '11.1',
          title: '2D Shapes Basics',
          learnContent: {
            title: 'Flat 2D Shapes!',
            paragraphs: [
              '2D shapes are flat, like a drawing on a piece of paper. We define them by their sides and their corners (vertices)! ⬜',
              'Circle: Round and curved, with 0 straight sides and 0 corners.',
              'Triangle: Has 3 straight sides and 3 corners.',
              'Square: Has 4 equal straight sides and 4 square corners. Rectangle: Has 4 straight sides (opposite sides are equal) and 4 corners.'
            ],
            keyPoint: '2D shapes are flat and are defined by their number of sides and corners.',
            examples: [
              { visual: '⭕', text: 'Circle', label: '0 sides, 0 corners' },
              { visual: '🔺', text: 'Triangle', label: '3 sides, 3 corners' },
              { visual: '⬜', text: 'Square', label: '4 equal sides, 4 corners' },
              { visual: '🚪', text: 'Rectangle', label: '4 sides, 4 corners' }
            ],
            tip: 'Trace the edges of a shape to count its sides, and count the points to find the corners!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these shapes by whether they have 3 corners or 4 corners!',
            categories: [
              {
                name: 'Has 3 Corners',
                items: [
                  { value: 'triangle-red', text: 'Red Triangle' },
                  { value: 'triangle-blue', text: 'Blue Triangle' }
                ]
              },
              {
                name: 'Has 4 Corners',
                items: [
                  { value: 'square-yellow', text: 'Yellow Square' },
                  { value: 'rect-green', text: 'Green Rectangle' }
                ]
              }
            ],
            items: [
              { value: 'triangle-red', text: 'Red Triangle', icon: '🔺' },
              { value: 'square-yellow', text: 'Yellow Square', icon: '⬜' },
              { value: 'triangle-blue', text: 'Blue Triangle', icon: '📐' },
              { value: 'rect-green', text: 'Green Rectangle', icon: '💵' }
            ]
          },
          checkQuestions: [
            { question: 'How many sides does a triangle have?', options: ['3', '4', '0', '5'], correct: 0 },
            { question: 'Which flat shape is round and has no corners?', options: ['Square', 'Rectangle', 'Circle', 'Triangle'], correct: 2 },
            { question: 'What makes a square different from other rectangles?', options: ['It has 3 sides', 'All 4 of its sides are exactly equal', 'It has no corners', 'It is round'], correct: 1 }
          ]
        },
        {
          id: 'lesson-11-2',
          number: '11.2',
          title: 'Trapezoids & Hexagons',
          learnContent: {
            title: 'More Flat Shapes!',
            paragraphs: [
              'Let\'s meet two more shapes in our flat shape family! 🛑',
              'Trapezoid: Has 4 straight sides and 4 corners, but looks like a triangle with the top cut off. The top and bottom sides run parallel, but the other two tilt.',
              'Hexagon: A strong shape with exactly 6 straight sides and 6 corners! Honeybees build hexagons inside their hives.'
            ],
            keyPoint: 'A trapezoid is a four-sided shape, and a hexagon is a six-sided shape.',
            examples: [
              { visual: '🟨', text: 'Trapezoid', label: '4 sides, top cut-off look' },
              { visual: '🛑', text: 'Hexagon', label: '6 sides, 6 corners' },
              { visual: '🐝', text: 'Honeycomb', label: 'natural hexagons' },
              { visual: '🛑', text: 'Stop Sign', label: '8 sides (Octagon!)' }
            ],
            tip: 'Think of "Hex" which has an "X" sound, just like the number "SiX"!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Count the sides and corners to name the shape!',
            cards: [
              { word: 'Hexagon', text: '6 straight sides and 6 corners = _ _ _ _ _ _ _', missing: 'Hexagon', options: ['Hexagon', 'Rectangle', 'Trapezoid'], icon: '🛑' }
            ],
            explanation: 'A hexagon is a flat shape with exactly 6 sides and 6 corners!'
          },
          checkQuestions: [
            { question: 'How many corners does a hexagon have?', options: ['4', '5', '6', '8'], correct: 2 },
            { question: 'Which shape has 4 sides but is NOT a square or rectangle?', options: ['Circle', 'Hexagon', 'Trapezoid', 'Triangle'], correct: 2 },
            { question: 'How many sides does a trapezoid have?', options: ['3', '4', '5', '6'], correct: 1 }
          ]
        },
        {
          id: 'lesson-11-3',
          number: '11.3',
          title: '3D Shapes',
          learnContent: {
            title: 'Solid 3D Shapes!',
            paragraphs: [
              '3D shapes are solid. They are not flat — you can hold them in your hand! 📦',
              'Sphere: Round like a baseball ⚽. Cone: Pointy at the top with a round base like an ice cream cone 🍦.',
              'Cylinder: Round and long like a soda can 🥫. Cube: Box-shaped with 6 square flat sides (faces) like a playing die 🎲.'
            ],
            keyPoint: '3D shapes are solid objects with height, width, and depth.',
            examples: [
              { visual: '⚽', text: 'Sphere', label: 'round like a ball' },
              { visual: '🍦', text: 'Cone', label: 'pointy ice cream cone' },
              { visual: '🥫', text: 'Cylinder', label: 'can shape' },
              { visual: '🎲', text: 'Cube', label: 'box shape' }
            ],
            tip: '3D shapes have faces! Flat shapes make up the sides of solid shapes (like squares make a cube).'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each solid 3D shape to a real-world object!',
            pairs: [
              { id: 'pair1', left: 'Sphere', right: 'Soccer Ball', leftIcon: 'Sphere', rightIcon: '⚽' },
              { id: 'pair2', left: 'Cone', right: 'Ice Cream Cone', leftIcon: 'Cone', rightIcon: '🍦' },
              { id: 'pair3', left: 'Cylinder', right: 'Soda Can', leftIcon: 'Cylinder', rightIcon: '🥫' },
              { id: 'pair4', left: 'Cube', right: 'Playing Die', leftIcon: 'Cube', rightIcon: '🎲' }
            ]
          },
          checkQuestions: [
            { question: 'What 3D shape looks like a can of soup?', options: ['Sphere', 'Cylinder', 'Cone', 'Cube'], correct: 1 },
            { question: 'Which 3D shape is completely round with no flat faces or corners?', options: ['Cube', 'Cone', 'Sphere', 'Cylinder'], correct: 2 },
            { question: 'What 3D shape is a Rubik\'s puzzle?', options: ['Cylinder', 'Cone', 'Sphere', 'Cube'], correct: 3 }
          ]
        },
        {
          id: 'lesson-11-4',
          number: '11.4',
          title: 'Composing Shapes',
          learnContent: {
            title: 'Putting Shapes Together!',
            paragraphs: [
              'We can combine smaller shapes to make new, bigger shapes! This is called composing shapes. 🧩',
              'For example, if you put two triangles together side-by-side, they make a square! 🔺+🔺 = ⬜.',
              'If you put six green triangles together in a ring, they build a giant hexagon! Composing is like playing tangram puzzle games.'
            ],
            keyPoint: 'Smaller 2D shapes can combine to form new shapes.',
            examples: [
              { visual: '🔺+🔺=⬜', text: 'Two triangles make square', label: 'composing' },
              { visual: '⬜+⬜=🚪', text: 'Two squares make rectangle', label: 'composing' },
              { visual: '🧩 Tangram', text: 'Combine shapes', label: 'make pictures' },
              { visual: '🧱 Building blocks', text: 'Combine solids', label: 'compose 3D' }
            ],
            tip: 'Look closely at your toys. A toy castle is composed of cylinders and cones on top!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Put shapes together and pick the new shape!',
            cards: [
              { word: 'Rectangle', text: 'Two squares side-by-side make a _ _ _ _ _ _ _ _ _', missing: 'Rectangle', options: ['Rectangle', 'Triangle', 'Circle'], icon: '⬜⬜' }
            ],
            explanation: 'Putting two squares side-by-side makes a longer 4-sided shape called a rectangle!'
          },
          checkQuestions: [
            { question: 'How can you compose a square?', options: ['Using two circles', 'Using two identical triangles', 'Using three lines', 'Using one hexagon'], correct: 1 },
            { question: 'What shape do you get when you join two half-circles?', options: ['Square', 'Triangle', 'Circle', 'Rectangle'], correct: 2 },
            { question: 'Can you build a house drawing using a square and a triangle?', options: ['Yes, placing the triangle on top of the square', 'No, they do not mix', 'Only if the shapes are red', 'Only with 3D blocks'], correct: 0 }
          ]
        },
        {
          id: 'lesson-11-5',
          number: '11.5',
          title: 'Halves & Fourths',
          learnContent: {
            title: 'Splitting Shapes Equally!',
            paragraphs: [
              'When we partition (split) a shape into equal parts, we get fractions! 🍰',
              'Halves: Splitting a shape into exactly 2 equal parts. Each part is called a half. Sharing a pizza between 2 friends means cutting it into halves.',
              'Fourths (or Quarters): Splitting a shape into exactly 4 equal parts. Each part is a fourth.'
            ],
            keyPoint: 'Equal parts must be the same size. 2 parts make halves, 4 parts make fourths.',
            examples: [
              { visual: '🌓', text: 'Half circle', label: '1 of 2 equal parts' },
              { visual: '🍕', text: 'Pizza slices', label: 'equal shares' },
              { visual: '1/2', text: 'Halves', label: 'split into 2' },
              { visual: '1/4', text: 'Fourths', label: 'split into 4' }
            ],
            tip: 'Equal parts must be fair! If one slice is bigger than another, they are not halves or fourths!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these shapes by whether they are cut into Halves (2 parts) or Fourths (4 parts)!',
            categories: [
              {
                name: 'Split into Halves',
                items: [
                  { value: 'half-pizza', text: 'Pizza cut in 2' },
                  { value: 'half-sandwich', text: 'Sandwich cut in 2' }
                ]
              },
              {
                name: 'Split into Fourths',
                items: [
                  { value: 'four-waffle', text: 'Waffle cut in 4' },
                  { value: 'four-paper', text: 'Paper cut in 4' }
                ]
              }
            ],
            items: [
              { value: 'half-pizza', text: 'Pizza cut in 2', icon: '🌓' },
              { value: 'four-waffle', text: 'Waffle cut in 4', icon: '🧇' },
              { value: 'half-sandwich', text: 'Sandwich cut in 2', icon: '🥪' },
              { value: 'four-paper', text: 'Paper cut in 4', icon: '📄' }
            ]
          },
          checkQuestions: [
            { question: 'What are halves?', options: ['3 unequal parts', '2 equal parts', '4 equal parts', 'No parts'], correct: 1 },
            { question: 'If you split a circle into 4 equal shares, what is each share called?', options: ['A half', 'A third', 'A fourth', 'A whole'], correct: 2 },
            { question: 'What is important for parts to be called halves or fourths?', options: ['They must be different colors', 'The parts must be exactly equal in size', 'They must be round', 'Nothing'], correct: 1 }
          ]
        },
        {
          id: 'lesson-11-6',
          number: '11.6',
          title: 'Equal Shares',
          learnContent: {
            title: 'Share Fairly!',
            paragraphs: [
              'Sharing fairly means making sure everyone gets the exact same amount of food or toy space. In math, this is called equal shares! ⚖️',
              'If we split a square into 2 triangles that are the same size, they are equal shares.',
              'If we cut a circle so one side is tiny and the other is huge, those are unequal shares. That would not be fair to share!'
            ],
            keyPoint: 'Equal shares are parts of a whole that are identical in size.',
            examples: [
              { visual: '🥪', text: 'Cut diagonally', label: '2 equal sandwich shares' },
              { visual: '🌓', text: 'Equal shares', label: 'fair splitting' },
              { visual: '❌ Unequal', text: 'Not fair', label: 'different sizes' },
              { visual: '🍕', text: '8 slices', label: '8 equal shares' }
            ],
            tip: 'Imagine sharing with a friend. If both of you are happy with either piece, it is equal!'
          },
                    activity: {
            type: 'tap-color',
            instruction: 'Color the items that show HALVES yellow, and other shares blue!',
            categories: [
              { name: 'Halves', color: 'yellow', class: 'color-yellow' },
              { name: 'Not Halves', color: 'blue', class: 'color-blue' }
            ],
            items: [
              { text: 'Two equal pieces', category: 'Halves' },
              { text: 'One large and one small piece', category: 'Not Halves' },
              { text: 'Four equal pieces', category: 'Not Halves' }
            ],
            explanation: 'Halves must be exactly two equal-sized pieces of a whole!'
          },
          checkQuestions: [
            { question: 'Which picture shows equal shares?', options: ['A circle split down the middle into 2 same-size parts', 'A rectangle split with a tiny corner cut off', 'A square cut into 3 different size pieces', 'None'], correct: 0 },
            { question: 'If 4 kids want to share a sandwich equally, how should it be cut?', options: ['Into halves', 'Into fourths', 'Into thirds', 'It should not be cut'], correct: 1 },
            { question: 'What happens to the size of each share as you split a shape into more parts?', options: ['The shares get bigger', 'The shares get smaller', 'The shares stay the same size', 'They disappear'], correct: 1 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'How many sides does a rectangle have?', options: ['3', '4', '5', '6'], correct: 1, type: 'multiple-choice' },
        { question: 'Which shape has 6 sides?', options: ['Hexagon', 'Trapezoid', 'Triangle', 'Square'], correct: 0, type: 'multiple-choice' },
        { question: 'What 3D shape is round like a ball?', options: ['Cube', 'Cone', 'Cylinder', 'Sphere'], correct: 3, type: 'multiple-choice' },
        { question: 'What 3D shape is an ice cream cone?', options: ['Cylinder', 'Sphere', 'Cone', 'Cube'], correct: 2, type: 'multiple-choice' },
        { question: 'What shape is composed of two identical squares side-by-side?', options: ['Circle', 'Triangle', 'Rectangle', 'Hexagon'], correct: 2, type: 'multiple-choice' },
        { question: 'If you split a pizza into 2 equal parts, what is each part called?', options: ['A half', 'A third', 'A fourth', 'A whole'], correct: 0, type: 'multiple-choice' },
        { question: 'If a shape is split into 4 equal shares, what are they called?', options: ['Halves', 'Thirds', 'Fourths', 'Wholes'], correct: 2, type: 'multiple-choice' },
        { question: 'What is true about equal shares?', options: ['They can be different sizes', 'They must be the exact same size', 'They must be round', 'They are always green'], correct: 1, type: 'multiple-choice' },
        { question: 'How many corners does a circle have?', options: ['0', '1', '3', '4'], correct: 0, type: 'multiple-choice' },
        { question: 'What 3D shape looks like a soda can?', options: ['Cone', 'Cylinder', 'Sphere', 'Cube'], correct: 1, type: 'multiple-choice' }
      ]
    },

    // ==================== MODULE 12: Money Introductory ====================
    {
      id: 'module-12',
      number: 12,
      title: 'Money Introductory',
      subject: 'math',
      icon: '💰',
      badgeId: 'money-smart',
      badgeName: 'Money Smart',
      badgeIcon: '💰',
      description: 'Identify coins, learn coin values, count coins, and understand dollar bills.',
      lessons: [
        {
          id: 'lesson-12-1',
          number: '12.1',
          title: 'Identifying Coins',
          learnContent: {
            title: 'Meet the Coins!',
            paragraphs: [
              'Money is what we use to buy things. Coins are metal money. Let\'s learn the four main coins: 🪙',
              'Penny: Copper-brown color, with Abraham Lincoln on the front.',
              'Nickel: Silver color, medium-sized, with Thomas Jefferson on front.',
              'Dime: Silver color, the smallest coin, with Franklin D. Roosevelt on front. Quarter: Silver color, the largest coin, with George Washington on front.'
            ],
            keyPoint: 'We identify coins by their color, size, and the president on the front.',
            examples: [
              { visual: '🟤', text: 'Penny', label: 'brown, Abraham Lincoln' },
              { visual: '🪙', text: 'Dime', label: 'silver, small, rough edge' },
              { visual: '🪙', text: 'Nickel', label: 'silver, medium, smooth edge' },
              { visual: '🪙', text: 'Quarter', label: 'silver, large, rough edge' }
            ],
            tip: 'The penny is the only brown coin. If it is brown, it is always a penny!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these coins by their color: Brown (copper) or Silver!',
            categories: [
              {
                name: 'Brown Coins',
                items: [
                  { value: 'penny-1', text: 'Penny Front' },
                  { value: 'penny-2', text: 'Penny Back' }
                ]
              },
              {
                name: 'Silver Coins',
                items: [
                  { value: 'dime-1', text: 'Dime' },
                  { value: 'quarter-1', text: 'Quarter' }
                ]
              }
            ],
            items: [
              { value: 'penny-1', text: 'Penny Front', icon: '🟤' },
              { value: 'dime-1', text: 'Dime', icon: '🪙' },
              { value: 'penny-2', text: 'Penny Back', icon: '🟤' },
              { value: 'quarter-1', text: 'Quarter', icon: '🪙' }
            ]
          },
          checkQuestions: [
            { question: 'Which coin is copper-brown in color?', options: ['Nickel', 'Dime', 'Quarter', 'Penny'], correct: 3 },
            { question: 'Which is the smallest silver coin?', options: ['Penny', 'Nickel', 'Dime', 'Quarter'], correct: 2 },
            { question: 'Who is on the front of the brown penny coin?', options: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'A bald eagle'], correct: 1 }
          ]
        },
        {
          id: 'lesson-12-2',
          number: '12.2',
          title: 'Coin Values',
          learnContent: {
            title: 'How Much is It Worth?',
            paragraphs: [
              'Each coin is worth a different number of cents (¢). 💰',
              'Penny = 1 cent (1¢). Nickel = 5 cents (5¢).',
              'Dime = 10 cents (10¢). Quarter = 25 cents (25¢).',
              'A dime is smaller than a nickel, but it is worth MORE! Size does not always tell you value!'
            ],
            keyPoint: 'Each coin has a specific value in cents: Penny (1¢), Nickel (5¢), Dime (10¢), Quarter (25¢).',
            examples: [
              { visual: 'Penny', text: '1¢', label: 'one cent' },
              { visual: 'Nickel', text: '5¢', label: 'five cents' },
              { visual: 'Dime', text: '10¢', label: 'ten cents' },
              { visual: 'Quarter', text: '25¢', label: 'twenty-five cents' }
            ],
            tip: 'Say: "Penny is one, nickel is five, dime is ten, quarter twenty-five!"'
          },
          activity: {
            type: 'matching',
            instruction: 'Match each coin to its correct value in cents!',
            pairs: [
              { id: 'pair1', left: 'Penny', right: '1¢', leftIcon: '🟤', rightIcon: '1¢' },
              { id: 'pair2', left: 'Nickel', right: '5¢', leftIcon: '🪙', rightIcon: '5¢' },
              { id: 'pair3', left: 'Dime', right: '10¢', leftIcon: '🪙', rightIcon: '10¢' },
              { id: 'pair4', left: 'Quarter', right: '25¢', leftIcon: '🪙', rightIcon: '25¢' }
            ]
          },
          checkQuestions: [
            { question: 'How much is a dime worth?', options: ['1¢', '5¢', '10¢', '25¢'], correct: 2 },
            { question: 'Which coin is worth exactly 5 cents?', options: ['Penny', 'Nickel', 'Dime', 'Quarter'], correct: 1 },
            { question: 'Which coin has the highest value?', options: ['Penny', 'Nickel', 'Dime', 'Quarter'], correct: 3 }
          ]
        },
        {
          id: 'lesson-12-3',
          number: '12.3',
          title: 'Counting Coins',
          learnContent: {
            title: 'Let\'s Add Up Coins!',
            paragraphs: [
              'To find out how much money you have, you can add the values of the coins together. 🪙',
              'If you have pennies, count by 1s: 1¢, 2¢, 3¢... If you have nickels, count by 5s: 5¢, 10¢, 15¢... If you have dimes, count by 10s: 10¢, 20¢, 30¢...',
              'For a mix, start with the biggest value coins first! For example: 1 dime (10¢) + 2 pennies (1¢ + 1¢) = 12¢.'
            ],
            keyPoint: 'Count coin groups by skip counting by their values, starting with the largest coin.',
            examples: [
              { visual: '🟤🟤🟤', text: '3 Pennies', label: '1, 2, 3 = 3¢' },
              { visual: '🪙🪙', text: '2 Nickels', label: '5, 10 = 10¢' },
              { visual: '🪙🪙🪙', text: '3 Dimes', label: '10, 20, 30 = 30¢' },
              { visual: 'dime + nickel', text: '10¢ + 5¢', label: 'total: 15¢' }
            ],
            tip: 'Sort your coins into groups of the same kind before you start counting!'
          },
                    activity: {
            type: 'missing-letter',
            instruction: 'Count the coin values and pick the total cents!',
            cards: [
              { word: '25', text: '2 dimes (20c) + 1 nickel (5c) = _ _ cents', missing: '25', options: ['20', '25', '30'], icon: '🪙' }
            ],
            explanation: '2 dimes (10 + 10 = 20) plus 1 nickel (5) is 25 cents!'
          },
          checkQuestions: [
            { question: 'What is the total value of 4 pennies?', options: ['4¢', '20¢', '40¢', '1¢'], correct: 0 },
            { question: 'How much money is 3 nickels?', options: ['10¢', '15¢', '30¢', '5¢'], correct: 1 },
            { question: 'Solve: 1 dime + 1 nickel = ?', options: ['11¢', '15¢', '20¢', '12¢'], correct: 1 }
          ]
        },
        {
          id: 'lesson-12-4',
          number: '12.4',
          title: 'Dollar Bills',
          learnContent: {
            title: 'Paper Money — Dollars!',
            paragraphs: [
              'When we have large amounts of money, we use paper bills called dollars ($). 💵',
              'The smallest paper bill is the one-dollar bill ($1). It has George Washington on the front.',
              'We also have five-dollar bills ($5) and ten-dollar bills ($10). One dollar is worth exactly 100 cents! 💯'
            ],
            keyPoint: 'Paper bills represent larger currency values. $1 equals 100 cents.',
            examples: [
              { visual: '💵', text: '$1 bill', label: 'worth one dollar' },
              { visual: '💵', text: '$5 bill', label: 'worth five dollars' },
              { visual: 'George Washington', text: 'On $1 bill', label: 'first president' },
              { visual: '100¢', text: 'One Dollar', label: 'value of 100 cents' }
            ],
            tip: 'Look for the number in the corners of the bill to know how many dollars it is worth!'
          },
          activity: {
            type: 'sorting',
            instruction: 'Sort these items into Coins (metal) or Bills (paper)!',
            categories: [
              {
                name: 'Coins',
                items: [
                  { value: 'penny', text: 'Penny' },
                  { value: 'quarter', text: 'Quarter' }
                ]
              },
              {
                name: 'Bills',
                items: [
                  { value: 'one-dollar', text: 'One Dollar Bill' },
                  { value: 'five-dollar', text: 'Five Dollar Bill' }
                ]
              }
            ],
            items: [
              { value: 'penny', text: 'Penny', icon: '🟤' },
              { value: 'one-dollar', text: 'One Dollar Bill', icon: '💵' },
              { value: 'quarter', text: 'Quarter', icon: '🪙' },
              { value: 'five-dollar', text: 'Five Dollar Bill', icon: '💵' }
            ]
          },
          checkQuestions: [
            { question: 'What is paper money called?', options: ['Cents', 'Coins', 'Dollars or Bills', 'Tokens'], correct: 2 },
            { question: 'How many cents are in a one-dollar bill?', options: ['1¢', '10¢', '50¢', '100¢'], correct: 3 },
            { question: 'Who is on the front of the one-dollar bill ($1)?', options: ['Abraham Lincoln', 'Thomas Jefferson', 'George Washington', 'Alexander Hamilton'], correct: 2 }
          ]
        }
      ],
      quizQuestions: [
        { question: 'Which coin is brown?', options: ['Penny', 'Nickel', 'Dime', 'Quarter'], correct: 0, type: 'multiple-choice' },
        { question: 'What is the value of a nickel?', options: ['1¢', '5¢', '10¢', '25¢'], correct: 1, type: 'multiple-choice' },
        { question: 'What is the value of a dime?', options: ['1¢', '5¢', '10¢', '25¢'], correct: 2, type: 'multiple-choice' },
        { question: 'How much is a quarter worth?', options: ['5¢', '10¢', '25¢', '50¢'], correct: 2, type: 'multiple-choice' },
        { question: 'How much money is 3 dimes?', options: ['15¢', '20¢', '30¢', '3¢'], correct: 2, type: 'multiple-choice' },
        { question: 'Count the coins: 1 dime and 2 nickels. What is the total?', options: ['12¢', '20¢', '15¢', '25¢'], correct: 1, type: 'multiple-choice' },
        { question: 'What is paper money called?', options: ['Coins', 'Cents', 'Dollars', 'Pennies'], correct: 2, type: 'multiple-choice' },
        { question: 'How many cents make a dollar?', options: ['10', '50', '100', '25'], correct: 2, type: 'multiple-choice' },
        { question: 'Who is on the $1 bill?', options: ['Abraham Lincoln', 'George Washington', 'Benjamin Franklin', 'Thomas Jefferson'], correct: 1, type: 'multiple-choice' },
        { question: 'Which is the smallest silver coin?', options: ['Penny', 'Nickel', 'Dime', 'Quarter'], correct: 2, type: 'multiple-choice' }
      ]
    }
  ]
};
