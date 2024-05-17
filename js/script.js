// Sample questions. DONT touch this data
const questions = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "What does CSS stand for?",
        options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
        correct: 0
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    },
    {
        text: "Javascript is a single threaded programming language",
        options: ["True", "False"],
        correct: 0
    },
    {
        text: "API calls in Javascript can be done using the following method",
        options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
        correct: 2
    },
];


var questionId = document.getElementById("question");
var questionToBeDisplayedIndex = 0;
var answerId = document.getElementById("answer-list");
var submitButton = document.getElementById("submit");
var nextButton = document.getElementById("next");
var score = 0;

function loadQuestion() {
    // Load the first question and load subsequent question from this function
    let question = questions[questionToBeDisplayedIndex];
    questionId.textContent = question.text;
    answerId.innerHTML = '';
    //var answerList = '';

    for (var i = 0; i < question.options.length; i++) {
        var choice = document.createElement('li');
        choice.innerHTML = `<input type="radio" name="answerList" value="${i}"> ${question.options[i]}`;
        answerId.appendChild(choice);
    }
    nextButton.hidden = true;
    submitButton.hidden = false;

}

submitButton.addEventListener("click", () => {
    // Implement the logic when the user clicks on submit button. The answer selected by the user should be validated here with the correct option
    let selectedOption = document.querySelector('input[name="answerList"]:checked');
    console.log(selectedOption)
    if (selectedOption == null) {
        alert("Please select an answer!");
        return;
    }
    let correctAnswerIndex = questions[questionToBeDisplayedIndex].correct;
    answerId.children[correctAnswerIndex].style.backgroundColor = "green";
    if (parseInt(selectedOption.value) === questions[questionToBeDisplayedIndex].correct) {
        score++;
    }
    else {
        let wrongAnswerIndex = selectedOption.value;
        answerId.children[wrongAnswerIndex].style.backgroundColor = "red";
    }
    nextButton.hidden = false;
    submitButton.hidden = true;
});

nextButton.addEventListener("click", () => {
    // Implement the logic for showing the next question in the questions array. Basic DOM manipulation methods are required here.
    // Also check for quiz completion here as well
    questionToBeDisplayedIndex++;
    if (questionToBeDisplayedIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz finished! Your total score is: ${score}/${questions.length}`);
        score = 0;
        questionToBeDisplayedIndex = 0;
        loadQuestion();
    }
});

// Load the first question on startup
loadQuestion();