// Get the necessary HTML elements using selectors
const gameOver = document.querySelector(".game-over"),
  scoreContainer = document.querySelector(".score-container"),
  questionNumber = document.querySelector(".question-number"),
  questionElement = document.querySelector(".question"),
  answerButtonsElement = document.querySelector(".answer-btn"),
  gameOverScore = document.querySelector(".scoreboard"),
  crossButton = document.querySelector(".cross"),
  fiftyButton = document.querySelector(".fiftyFifty"),
  audiencePollBtn = document.querySelector(".audiencepoll"),
  phoneFriendBtn = document.querySelector(".phonefriend"),
  timerCircle = document.querySelector(".timer-circle"),
  timerNumber = document.querySelector(".timer-number"),
  PhoneFriendContainer = document.querySelector(".phoneafriend"),
  PhoneFriendText = document.querySelector(".phoneafriend .contents .text"),
  PhoneFriendCross = document.querySelector(".phoneafriend .cross");

// Set the maximum number of questions to be shown at a time
const maxQuestions = 15;

// Initialize the quiz state
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

// Function to start the quiz
function startQuiz() {
  // Hide the game over screen
  gameOver.style.display = "none";
  PhoneFriendContainer.style.display = "none";
  
  // Reset the current question index
  currentQuestionIndex = 0;

  // Shuffle the questions using the Fisher-Yates algorithm
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  // Show the first question
  showQuestion(questions[currentQuestionIndex]);
}


// Function to show a question
function showQuestion(question) {
  var questionNum = currentQuestionIndex + 1;
  // Show the current question number out of maximum question
  questionNumber.innerText = `${currentQuestionIndex + 1}/${maxQuestions}`;
  questionElement.innerText = questionNum + ". " + question.question;
  answerButtonsElement.innerHTML = "";
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = `${answer.optionNumber}. ${answer.text}`;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });

 
}
// Functionality for 50/50 button
fiftyButton.addEventListener("click", () => {
  // Disable the lifeline button after it's been used
  fiftyButton.disabled = true;
  fiftyButton.style.color = "#D3D3D3";
  fiftyButton.style.cursor = "not-allowed";
  
  // Create an array to hold the indexes of incorrect answers
  const incorrectIndexes = [];

  // Get all the answer buttons
  const answerButtons = answerButtonsElement.querySelectorAll("button");

  // Loop through the answer buttons and find the incorrect ones
  answerButtons.forEach((button, index) => {
    if (button.getAttribute("data-correct") !== "true") {
      incorrectIndexes.push(index);
    }
  });

  // Check if there are at least two incorrect answers to remove
  if (incorrectIndexes.length >= 2) {
    // Shuffle the array to ensure random selection
    for (let i = incorrectIndexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [incorrectIndexes[i], incorrectIndexes[j]] = [incorrectIndexes[j], incorrectIndexes[i]];
    }
    
    // Remove two incorrect answers
    answerButtons[incorrectIndexes[0]].classList.add("eliminated");
    answerButtons[incorrectIndexes[1]].classList.add("eliminated");
  }
});


// Function to select an answer
function selectAnswer(e) {
  clearInterval(timerInterval);
  startTimer();
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (correct) {
    score += 1000;
    scoreContainer.innerText = score;
  }
  currentQuestionIndex++;
  setTimeout(() => {
    if (currentQuestionIndex < 15) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
      endQuiz();
    }
  }, 1000);
}

// Function to set the status class of an element
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("incorrect");
  }
}

// Function to clear the status class of an element
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}

// Function to end the quiz
function endQuiz() {
  gameOverScore.innerText = `Final score: ${score}`;
  gameOver.style.display = "block";
  questionNumber.innerText = "";
  questionElement.innerText = "";
  answerButtonsElement.innerHTML = "";
}

crossButton.addEventListener("click", function () {
  gameOver.style.display = "none";
  location.reload(); // reload the page
});

audiencePollBtn.addEventListener("click", audiencePoll);
function audiencePoll() {
  const answerButtons = Array.from(answerButtonsElement.children);
  const correctButton = answerButtons.find((button) => button.dataset.correct);

  // Determine which answer choices have been eliminated by the Fifty-Fifty lifeline
  let eliminatedAnswers = [];
  answerButtons.forEach((button) => {
    if (button.classList.contains("eliminated")) {
      eliminatedAnswers.push(button.innerText.substring(3)); // remove the option number from the text
    }
  });

  // Remove eliminated answer choices from the list of options for the audience poll
  const otherAnswers = answerButtons.filter(
    (button) =>
      !button.dataset.correct &&
      !eliminatedAnswers.includes(button.innerText.substring(3))
  );
  // Simulate audience poll with random distribution of votes
  const totalVotes = 100; // total number of votes
  let correctVotes;
  if (otherAnswers.length == 1) {
    correctVotes = Math.floor(Math.random() * 31) + 50; // 51-80% of total votes for correct answer
  } else {
    correctVotes = Math.floor(Math.random() * 60) + 20; // 20-80% of total votes for correct answer
  }
  const incorrectVotes = totalVotes - correctVotes; // remaining votes for incorrect answers

  // Calculate popularity of each incorrect answer option based on number of occurrences in questions
  const incorrectAnswers = questions[currentQuestionIndex].answers.filter(
    (answer) => !answer.correct && !eliminatedAnswers.includes(answer.text)
  );
  const incorrectAnswerPopularity = {};
  incorrectAnswers.forEach((answer) => {
    if (!incorrectAnswerPopularity.hasOwnProperty(answer.text)) {
      incorrectAnswerPopularity[answer.text] = 1;
    } else {
      incorrectAnswerPopularity[answer.text]++;
    }
  });

  // Calculate total popularity score for incorrect answers
  const incorrectPopularityScore = Object.values(
    incorrectAnswerPopularity
  ).reduce((total, count) => total + count, 0);

  // Calculate percentage of votes for each incorrect answer option based on popularity score
  const otherVotes = otherAnswers.map((button) => {
    const answerText = button.innerText.substring(3); // remove the option number from the text
    const popularityScore = incorrectAnswerPopularity[answerText] || 1; // default to 1 if answer not found in popularity map
    return Math.floor(
      (popularityScore / incorrectPopularityScore) * incorrectVotes
    );
  });

  // Display the poll results for each answer option
  correctButton.innerHTML += `<span class="poll-result">(${correctVotes}%)</span>`;
  otherAnswers.forEach((button, index) => {
    button.innerHTML += `<span class="poll-result">(${otherVotes[index]}%)</span>`;
  });

  // Disable the lifeline button after use
  audiencePollBtn.disabled = true;
  audiencePollBtn.style.color = "#D3D3D3";
  audiencePollBtn.style.cursor = "not-allowed";
}

phoneFriendBtn.addEventListener("click", phoneFriend);
function phoneFriend() {
  // Get the answer buttons
  const answerButtons = answerButtonsElement.querySelectorAll("button");

  // Get the correct answer button
  const correctAnswerButton = Array.from(answerButtons).find(
    (button) => button.dataset.correct
  );

  // Get the text of the correct answer button
  const correctAnswerText = correctAnswerButton.innerText.substring(3);

  // Generate a random confidence level for the friend's answer
  const confidenceLevel = Math.floor(Math.random() * 51) + 50; // 50-100%

  // Generate a random deviation from the correct answer
  const deviation = Math.floor(Math.random() * 21) - 10; // -10 to 10

  // Calculate the friend's answer
  const friendAnswer = Math.max(0, Math.min(100, confidenceLevel + deviation)); // 0-100%
  phoneFriendBtn.disabled = true;
  phoneFriendBtn.style.cursor = "not-allowed";
  phoneFriendBtn.style.color = "#D3D3D3";
  // Display the friend's answer in an alert

  PhoneFriendContainer.style.display = "block";
  PhoneFriendText.innerText = `Your friend thinks the answer is "${correctAnswerText}" with ${friendAnswer}% confidence.`;
}

PhoneFriendCross.addEventListener("click", () => {
  PhoneFriendContainer.style.display = "none";
});

function startTimer() {
  let timeLeft = 31;
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      currentQuestionIndex++;
      showQuestion(questions[currentQuestionIndex]);
      clearInterval(timerInterval);
      startTimer();
      return;
    }
    const dashoffset = 283 * (1 - timeLeft / 30);
    timerCircle.style.strokeDashoffset = dashoffset;
    timerNumber.textContent = timeLeft;
  }, 1000);
}

startTimer();
// Start the quiz
startQuiz();
