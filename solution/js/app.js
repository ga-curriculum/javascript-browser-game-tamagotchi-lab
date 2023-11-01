/*-------------------------------- Constants --------------------------------*/

const state = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0
}



/*---------------------------- Variables (state) ----------------------------*/
let timer
let gameOver



/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.querySelector("#boredom-stat")
const hungerStatEl = document.querySelector("#hunger-stat")
const sleepStatEl = document.querySelector("#sleepiness-stat")

const playBtnEl = document.querySelector('#play');
const feedBtnEl = document.querySelector('#feed');
const sleepBtnEl = document.querySelector('#sleep');

const gameMessageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#restart');


console.log("")



/*-------------------------------- Functions --------------------------------*/

function init() {
  // resetBtnEl.classList.add("hidden");
  gameMessageEl.classList.add("hidden");
  state.boredom = 0;
  state.hunger = 0;
  state.sleepiness = 0;
  timer = setInterval(runGame, 2000);
  gameOver = false;
  render();
}

const runGame = () => {
  // console.log('the game is running!')
  updateStates()
  checkGameOver()
  render()
}

const getRandomInt = () => {
  return Math.floor(Math.random() * 4);
}

function updateStates() {
  state.boredom += getRandomInt();
  state.hunger += getRandomInt();
  state.sleepiness += getRandomInt();
}

const checkGameOver = () => {
  if (
    state.boredom > 9 ||
    state.hunger > 9 ||
    state.sleepiness > 9
  ) {
    gameOver = true;
  };
}

const render = () => {
  boredomStatEl.textContent = state.boredom;
  hungerStatEl.textContent = state.hunger;
  sleepStatEl.textContent = state.sleepiness;

  if(gameOver){
    resetBtnEl.classList.remove("hidden");
    gameMessageEl.classList.remove("hidden");
    clearInterval(timer);
  }
}


const playBtnClick = () => {
  state.boredom = 0;
  render();
}

const feedBtnClick = () => {
  state.hunger = 0;
  render();
}

const sleepBtnClick = () => {
  state.sleepiness = 0;
  render();
}



init()

/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click', playBtnClick);
feedBtnEl.addEventListener('click', feedBtnClick);
sleepBtnEl.addEventListener('click', sleepBtnClick);

resetBtnEl.addEventListener('click', init);