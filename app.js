/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Seinfeld is often described as a show about what?',
      answers: [
        "A Comedian's Life",
        'Friends living in New York',
        'Nothing',
        'Apartment Neighbors'
      ],
      imageQuestion: 'https://cdn.britannica.com/09/189409-050-01172C19/Cast-Jason-Alexander-Seinfeld-Michael-Richards.jpg',
      imageCorrect: 'https://pbs.twimg.com/media/CNhJCFTUsAAclmH.jpg',
      correctAnswer: 2
    },
    {
      question: 'What’s the name of “the coffee shop” where Jerry and his friends spend a lot of their time?',
      answers: [
        'Central Perk',
        "JJ's Diner",
        "Karen's Cafe",
        "Monk's Cafe"
      ],
      imageQuestion: 'https://pbs.twimg.com/media/ECWAx3iWsAE_8pW.jpg',
      imageCorrect: 'https://mapsaboutnothing.files.wordpress.com/2013/04/monks.png',
      correctAnswer: 3
    },
    {
      question: 'Which main cast member does not appear in the pilot episode?',
      answers: [
        'Elaine',
        'Jerry',
        'Kramer',
        'George'
      ],
      imageQuestion: 'https://i.cdn.tbs.com/assets/images/seinfeld-628x353.jpg',
      imageCorrect: 'https://thiswastv.files.wordpress.com/2012/08/seinfeld-2x13-the-deal-en.jpg',
      correctAnswer: 0
    },
    {
      question: 'Who is Silvio?',
      answers: [
        "Jerry's Uncle",
        "George's Father",
        "Elaine's Boss",
        "Kramer's Landlord"
      ],
      imageQuestion: 'https://external-preview.redd.it/gJb-kePI4UwDU2qxljTx3a57x6LO8NfB6kxgwRV7Ss0.png?auto=webp&s=470dfb8fc660998140111f005352ceed26a0af77',
      imageCorrect: 'https://pbs.twimg.com/media/BzQn1xYIcAAXKpy.png',
      correctAnswer: 3
    },
    {
      question: 'What super hero does Jerry have an action figure of in his apartment?',
      answers: [
        'Batman',
        'Superman',
        'Iron Man',
        'Captain America'
      ],
      imageQuestion: 'https://cdn.hswstatic.com/gif/superman-seinfeld-orig.jpg',
      imageCorrect: 'https://dvduring.files.wordpress.com/2016/08/vhs.jpg',
      correctAnswer: 1
    },
    {
      question: 'What is the scent of cologne that Kramer invents that Calvin Klein later steals.',
      answers: [
        'The Beach',
        'The Gym Locker Room',
        'The Hudson River',
        'The Central Park'
      ],
      imageQuestion: 'https://i.pinimg.com/originals/f1/dd/57/f1dd571ca1b9e60d5c70e736a0182497.png',
      imageCorrect: 'https://i.pinimg.com/originals/fe/57/53/fe57532e0c3187f01a39c409a4b15713.jpg',
      correctAnswer: 0
    },
    {
      question: 'What was a reason Jerry stopped dating someone?',
      answers: [
        'She cheated on him',
        'She was a loud talker',
        "She didn’t laugh at his jokes",
        'She had man hands'
      ],
      imageQuestion: 'https://i.ytimg.com/vi/vik-7MjKDa0/maxresdefault.jpg',
      imageCorrect: 'https://i.pinimg.com/originals/18/a7/37/18a7378f5a302751979fd15b1188fdae.jpg',
      correctAnswer: 3
    },
    {
      question: 'What TV show did Kramer guest star on?',
      answers: [
        'Cheers',
        'Murphy Brown',
        'Friends',
        'The Nanny'
      ],
      imageQuestion: 'https://mapsaboutnothing.files.wordpress.com/2013/03/california.png?w=640',
      imageCorrect: 'https://i.ytimg.com/vi/ni400X3vJMo/hqdefault.jpg',
      correctAnswer: 1
    },
    {
      question: 'How many seasons of Seinfeld were there?',
      answers: [
        '10',
        '9',
        '8',
        '15'
      ],
      imageQuestion: 'https://www.cheatsheet.com/wp-content/uploads/2019/07/Season-9-Seinfeld-cast-image.jpg',
      imageCorrect: 'https://i.pinimg.com/originals/87/e0/0d/87e00da2a0adfa1f65fb052f9b25a81e.jpg',
      correctAnswer: 1
    },
    {
      question: 'What was the last scene in the series finale?',
      answers: [
        "Jerry's Apartment",
        'Monks Cafe',
        'A Wedding',
        'A Jail Cell'
      ],
      imageQuestion: 'https://d32qys9a6wm9no.cloudfront.net/images/tvs/backdrop/d6/06129d9c0ce7223931c52d00918a6d52_706x397.jpg?t=1588746266',
      imageCorrect: 'https://uproxx.com/wp-content/uploads/2018/05/seinfeld-finale.jpg?w=650',
      correctAnswer: 3
    }
  ],
  quizStarted: false, // true or false (if quiz has not started it is false)
  questionNumber: 0, // 0 out of question length
  score: 0, // 0 out of question length
  feedback: false, // false or a string of text
  correct: false, // true of false
  imageFinal: 'https://ca-times.brightspotcdn.com/dims4/default/6b4abde/2147483647/strip/true/crop/1541x867+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F70%2F45%2Fb3f78976833ae4b54578ded8b8ed%2Fla-1562103281-ks9q4vns92-snap-image',
  imageStart: 'https://i1.wp.com/wausaupilotandreview.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-07-at-10.10.46-AM.png?'
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function renderStart () {
  // create a section class with a welcome and start quiz button
  $("main").html(`
    <section class="start">
      <img class="start-image" src="${STORE.imageStart}" width="400"/>
      <h2>Welcome to the Quiz about nothing...</h2>
      <h3>Yada Yada Yada...hit the button when you are ready to start</h3>
      <button id="start">Giddy Up</button>
    </section>`);
}

function renderSummary () {
  //create a section that after the quiz is done shows score 
  const currentQuestion = STORE.questions[STORE.questionNumber];
  $("main").html(`
        <section class="summary">
            <h2>Quiz Summary</h2>
            <img src="${STORE.imageFinal}" width="400"/>
            <p>You got ${STORE.score} out of ${STORE.questions.length} correct!</p>
            <p>Want another try?</p>
            <button id="restart">Try Again</button>
        </section>
    `);
}
function renderQuestion () {
  // create a variable and store current Question in it 
  const currentQuestion = STORE.questions[STORE.questionNumber];
  // render a html form of question
  $("main").html(`
  <form class="question">
      <p>Question ${STORE.questionNumber+1} out of ${STORE.questions.length}</p>
      <p>Your score is ${STORE.score} out of ${STORE.questions.length}</p>
      <h2>${currentQuestion.question}</h2>
      <img src="${currentQuestion.imageQuestion}" width="400"/>
      <ul>
          ${currentQuestion.answers
            .map((answer, i) => {
              return `<li>
                      <input type="radio" name="answer" value="${i}" required id="${i}"/>
                      <label for="${i}">${answer}</label>
                  </li>`;
            })
            .join("")}
      </ul>
      <button id="submit" type="submit">Submit Answer</button>
  </form>
`);
}

function renderFeedback () {
  const currentQuestion = STORE.questions[STORE.questionNumber];
  // render feedback for question
  $('main').html(`
  <section class="feedback">
      <h2>${STORE.correct ? "Correct!" : "Incorrect"}</h2>
      <p>${STORE.feedback}</p>
      <img src="${currentQuestion.imageCorrect}" width="400"/>
      <p>Ready for another?</p>
      <button id="next">Next Question</button>
  </section>
`);
}

/********** RENDER FUNCTION(S) **********/



// render function
function render() {
  // if quiz is not started, call render start
  if (!STORE.quizStarted) {
    renderStart();
  } else if (STORE.questionNumber >= STORE.questions.length) {
    // if quiz is done render summary
    renderSummary();
  } else if (STORE.feedback){
    // if there is feedback render 
    renderFeedback();
  } else {
    //if the quiz is going render the question
    renderQuestion();
  }
}


// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

function onStart() {
  // listen for start quiz button clicked 
  $('main').on('click', '#start', startedQuiz);
}

function onNext() {
  // listen for start next button clicked 
  $('main').on('click', '#next', nextQuestion);
}

function onRestart() {
  // listen for restart button clicked
  $('main').on('click', '#restart', restartQuiz);
}

function onAnswer() {
  // listen for submit button 
  $('main').on('click', '#submit', function(event){
    event.preventDefault();
    submitAnswer();
  });
}

// These functions handle events (submit, click, etc)
// start quiz
function startedQuiz() {
  //set STORE started to true
  STORE.quizStarted = true;
  render();
}
// restart quiz
function restartQuiz() {
  // set STORE started to false
  STORE.quizStarted = false;
  // set STORE question to 0
  STORE.questionNumber = 0;
  // set STORE score to 0
  STORE.score = 0;
  render();
}
// next question
function nextQuestion() {
  // click up store question number
  STORE.questionNumber++;
  // set feed back to false
  STORE.feedback = false;
  // set correct to false
  STORE.correct = false;
  render();
}
// submit answer
function submitAnswer() {
  // store currentQuestion variable
  const currentQuestion = STORE.questions[STORE.questionNumber];
  // store users answer in variable and get value of answer in string
  const userAnswer = parseInt($('input[type="radio"]:checked').val());
  // if answer matches the correct answer add to the score 1
  if (currentQuestion.correctAnswer === userAnswer) {
    // add 1 to the score
    STORE.score++;
    // change to correct 
    STORE.correct = true;
  }
  // store the correct answer 
  STORE.feedback = `The correct answer is ${
    currentQuestion.answers[currentQuestion.correctAnswer]
  }`;
  render();
}

function runQuiz() {
  onRestart();
  onNext();
  onAnswer();
  onStart();
  render();
}

$(runQuiz);

