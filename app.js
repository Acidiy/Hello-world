let section = document.getElementsByClassName('card-display')[0];
let addcard = document.getElementById('push-card');
let addmultiplecards = document.getElementById('mass-card-push');
let ncards = 0;

const cardpusher = () =>
    {
        let card = document.createElement('div');
        card.classList.add('card');
        section.appendChild(card);
    
        ncards++
        addcard.innerText = `${ncards}`;
    
        delete card;
    }

addcard.addEventListener('click', function() {
    cardpusher()
});

 addmultiplecards.addEventListener('click', function() {
     let amountofcards = prompt("how many cards?");
     for (let i = 0; i<amountofcards; i++)
        {
            cardpusher()
        }
});