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
        choices: ["HyperText Markup Language", "HyperText Machine Language", "HyperText Marking Language", "HighText Marking Language"],
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
]



// Show Questions
showQuestion();

//nextBtn.addEventListener("click", handleNext);


//Load Questions and answers
function showQuestion() {
    const loadq = questions[current];
    questionEl.textContent = loadq.text;
    choiceButtons.forEach((btn, i) => {
        btn.textContent = loadq.choices[i];
        btn.disabled = false;
        btn.classList.remove("correct", "wrong");
    });
    feedbackEl.textContent = "";
    nextBtn.disabled = true;

    addChoiceListener();
}

// Select Question
function addChoiceListener() {
    choiceButtons.forEach(btn => {
       // btn.setAttribute("data-index", i);
        btn.addEventListener("click", selectAnswers);
    })
}

function selectAnswers(event) {
    console.log("Button clicked");
    const selectedIndex = Number(clickedBtn.dataset.index);
    //const selectedIndex = parseInt(event.target.getAttribute("data-index")); 
    const correctIndex = questions[current].correctIndex;
    if (selectedIndex === correctIndex) {
        console.log("correct");
        event.target.classList.add("correct");
        feedbackEl.textContent = "Correct!";
    }
    else {
        event.target.classList.add("wrong");
        feedbackEl.textContent = "Incorrect!";
    }

    function handleNext() {
        current++;
        showQuestion();
    }
}