const cards = document.querySelectorAll('div');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

const btnEasy = document.querySelector('.easy');
const btnMedium = document.querySelector('.medium');
const btnHard = document.querySelector('.hard');
const mainSection = document.querySelector('.memory-game');

// CARDS

const divsEasy = document.querySelectorAll('.card-l1');
const divsMedium = document.querySelectorAll('.card-l2');
const divsHard = document.querySelectorAll('.card-l3');

btnEasy.addEventListener('click', function () {
    divsEasy.forEach((div) => {
        div.classList.add('show');
    });
    divsMedium.forEach((div) => {
        div.classList.remove('show');
    });
    divsHard.forEach((div) => {
        div.classList.remove('show');
    });
    mainSection.style.width = `650px`;
})

btnMedium.addEventListener('click', function () {
    divsEasy.forEach((div) => {
        div.classList.add('show');
    });
    divsMedium.forEach((div) => {
        div.classList.add('show');
    });
    divsHard.forEach((div) => {
        div.classList.remove('show');
    });
    mainSection.style.width = `960px`;
})

btnHard.addEventListener('click', function () {
    divsEasy.forEach((div) => {
        div.classList.add('show');
    });
    divsMedium.forEach((div) => {
        div.classList.add('show');
    });
    divsHard.forEach((div) => {
        div.classList.add('show');
    });
    mainSection.style.width = `95%`;
})