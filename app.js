let section = document.getElementsByClassName('section')[0];
let addcard = document.getElementById('pushcard');


addcard.addEventListener('click', function() {
    let card = document.createElement('div');
    card.classList.add('card');
    section.appendChild(card);
    delete card;
  });