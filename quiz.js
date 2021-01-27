const QuizData = [
  {
    id: 0,
    question: ` What is the Capital Of Pakistan ?`,
    options: [`Islamabad`, `Multan`, `Karachi`, "Lahore"],
    ans: `ans1`,
  },
  {
    id: 1,
    question: `Who is the CEO of Tesla Motors?`,
    options: [`Bill Gates`, `Steve Jobs`, `Elon Musk`],
    ans: `ans4`,
  },
  {
    id: 3,
    question: `Name World's Richest Man?`,
    options: [`Jeff Bezo`, `Bill Gates`, `Mark Zuckerberg`],
    ans: `ans1`,
  },
  {
    id: 4,
    question: `World's Longest River?`,
    options: [`River Amazon`, `River Nile`, `River Godavari`],
    ans: `ans2`,
  },
];
console.log(QuizData.l)

var question = document.querySelector(".ques");
var option1 = document.querySelector(".option1");
var option2 = document.querySelector(".option2");
var option3 = document.querySelector(".option3");
var option4 = document.querySelector(".option4");
var submit = document.querySelector("#sub");
var answers = document.querySelectorAll(".answers");
var showscore = document.querySelector('#showscore')

let questioncount= 0;
let score  = 0;
const loaddata = () => {
  question.innerHTML = QuizData[questioncount].question;
  option1.innerHTML = QuizData[questioncount].options[0];
  option2.innerHTML = QuizData[questioncount].options[1];
  option3.innerHTML = QuizData[questioncount].options[2];
  // option4.innerHTML = QuizData[questioncount].options[3];
};

loaddata();
const getcheckans = () => {
  let jawab;
  answers.forEach((currentelement) => {
    if (currentelement.checked) {
      jawab = currentelement.id
    }
  });
  return jawab;
};

submit.addEventListener("click", () => {
  const getcheck = getcheckans();
  console.log(getcheck);
  if(getcheck === QuizData[questioncount].ans){
      score++
  }
  questioncount++;
  if(questioncount < QuizData.length  ){
      loaddata();
  }
  else{
      showscore.innerHTML = `
      <h2 class='res'>Your scored ${score}/${ QuizData.length} 😮
      <button class='tub' onclick='location.reload()'>Try Again</button>
      `;
      showscore.classList.remove('showarea')
  }
});