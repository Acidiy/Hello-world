let section = document.getElementsByClassName('section')[0];
let addcard = document.getElementById('pushcard');
let cardcounter = document.createElement ('p');
let ncards = 0;

addcard.addEventListener('click', function() {
    let card = document.createElement('div');
    card.classList.add('card');
    section.appendChild(card);

    ncards++
    addcard.innerText = `${ncards}`;

    delete card;
});