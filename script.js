let userScore = 0;
let compScore = 0;

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const drawgame = () => {
  msg.innerText = "Game was Draw";
};
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const showWinner = (userWin, userchoice, CompChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You Win! your ${userchoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `You lose! ${CompChoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  console.log("user choice=", userchoice);
  const CompChoice = genCompChoice();
  console.log("comp choice=", CompChoice);

  if (userchoice === CompChoice) {
    drawgame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      userWin = CompChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = CompChoice === "scissors" ? false : true;
    } else {
      userWin = CompChoice === "rock" ? false : true;
    }
    showWinner(userWin, userchoice, CompChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
