let player = {
  name: "per",
  chips: 145,
};

let cards = [];
let blackJack = false;
let isAlive = false;
let message = "";
let sum = 0;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : $" + player.chips;

function getRandomCard() {
  let randomNumer = Math.floor(Math.random() * 13) + 1;
  if (randomNumer > 10) {
    return 10;
  } else if (randomNumer === 1) {
    return 11;
  } else {
    return randomNumer;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw  a new card";
  } else if (sum === 21) {
    message = "Winner";
    blackJack = true;
  } else {
    message = "you are out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;

  // CASH OUT:
  console.log(message);
}
function newCard() {
  if (isAlive === true && blackJack == false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);

    renderGame();
  }
  // console.log("Drawing a new card from the deck");
}
