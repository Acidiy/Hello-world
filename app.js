let section = document.getElementsByClassName('card-display')[0];
const bulletpoint = document.createElement('li');

let addcard = document.getElementById('push-card');
let addmultiplecards = document.getElementById('mass-card-push');

let ncards = 0;
let cardid = 1;


const cardcreator = () =>
    {
        let headerofcard = document.createElement('div');
        let card = document.createElement('div');
        
        headerofcard.classList.add('header-of-card');
        card.classList.add('card');

        card.appendChild(headerofcard);
        card.id = `card+" "${cardid}`;
        cardid++;

        delete headerofcard;

        return card;
    }

const cardpusher = () =>
    {
        section.appendChild(cardcreator());
    
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