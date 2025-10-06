// DOM elements
const questionEl = document.getElementById("question");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const choiceButtons = document.querySelectorAll(".choice-btn");

let current = 0;

// Question Data
const questions = [
  {
    text: "HTML stands for __________",
    choices: [
      "HyperText Markup Language",
      "HyperText Machine Language",
      "HyperText Marking Language",
      "HighText Marking Language"
    ],
    correctIndex: 0
  },
  {
    text: "Which of the following tag is used for inserting the largest heading in HTML?",
    choices: ["<head>", "<h1>", "<h2>", "<header>"],
    correctIndex: 1
  },
  {
    text: "In which part of the HTML metadata is contained?",
    choices: ["body tag", "title tag", "html tag", "head tag"],
    correctIndex: 3
  },
  {
    text: "Which tag is used to insert an image in HTML?",
    choices: ["<img>", "<picture>", "<src>", "<image>"],
    correctIndex: 0
  }
];

// Start
showQuestion();

// Attach listeners once
choiceButtons.forEach(btn => btn.addEventListener("click", selectAnswer));
nextBtn.addEventListener("click", handleNext);

// Load question and choices
function showQuestion() {
  // If no more questions, end
  if (current >= questions.length) {
    questionEl.textContent = "Quiz complete!";
    feedbackEl.textContent = "";
    choiceButtons.forEach(btn => {
      btn.textContent = "-";
      btn.disabled = true;
      btn.classList.remove("correct", "wrong");
    });
    nextBtn.disabled = true;
    return;
  }

  const loadq = questions[current];
  questionEl.textContent = loadq.text;

  choiceButtons.forEach((btn, i) => {
    btn.textContent = loadq.choices[i];
    btn.disabled = false;
    btn.classList.remove("correct", "wrong");
  });

  feedbackEl.textContent = "";
  nextBtn.disabled = true;
}

// Handle answer click
function selectAnswer(event) {
  const clickedBtn = event.currentTarget;
  const selectedIndex = Number(clickedBtn.dataset.index);
  const correctIndex = questions[current].correctIndex;

  // Disable all choices after one pick
  choiceButtons.forEach(btn => (btn.disabled = true));

  if (selectedIndex === correctIndex) {
    clickedBtn.classList.add("correct");
    feedbackEl.textContent = "Correct!";
  } else {
    clickedBtn.classList.add("wrong");
    feedbackEl.textContent = "Incorrect!";
  }

  nextBtn.disabled = false;
}

// Next question
function handleNext() {
  current++;
  showQuestion();
}