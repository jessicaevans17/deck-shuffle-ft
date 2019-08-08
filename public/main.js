const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King"
]
const deck = []

const firstPlayerDeck = []

const secondPlayerDeck = []

console.log(deck)
console.log(firstPlayerDeck)
console.log(secondPlayerDeck)

const createAndShuffleDeck = () => {
  // create the deck

  // go through each array
  for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
    for (let valuesIndex = 0; valuesIndex < values.length; valuesIndex++) {
      // store the current value of each index in a variable
      const newSuit = suits[suitsIndex]
      const newValue = values[valuesIndex]
      // combine these values and add them to the deck
      deck.push(`${newValue} ${"of"} ${newSuit}`)
    }
  }
  // shuffle the deck
  // take the deck you've created and then run fisher-yates algorithm

  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
}

const firstPlayerCard = () => {
  console.log("This button works!!")
  // take the first card of the deck and add to myCards
  if (deck.length === 0) {
    console.log("out of cards!")
    const newElement = document.createElement("h2")
    newElement.textContent = "Dealer is Out of Cards!!"
    document.querySelector(".first-player-card").appendChild(newElement)
    createAndShuffleDeck()
  } else {
    const newCard = deck.pop()
    document.querySelector(".first-player-card").textContent = newCard
    firstPlayerDeck.push(newCard)
  }
}

const secondPlayerCard = () => {
  console.log("This button works!!")
  // take the first card of the deck and add to myCards
  if (deck.length === 0) {
    console.log("out of cards!")
    const newElement = document.createElement("h2")
    newElement.textContent = "Dealer is Out of Cards!!"
    document.querySelector(".second-player-card").appendChild(newElement)
    createAndShuffleDeck()
  } else {
    const newCard = deck.pop()
    document.querySelector(".second-player-card").textContent = newCard
    secondPlayerDeck.push(newCard)
  }
}

document
  .querySelector(".first-player-button")
  .addEventListener("click", firstPlayerCard)

document
  .querySelector(".second-player-button")
  .addEventListener("click", secondPlayerCard)

document.addEventListener("DOMContentLoaded", createAndShuffleDeck)
