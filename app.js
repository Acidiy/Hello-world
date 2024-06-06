let section = document.getElementsByClassName('card-display')[0];
let bulletpoint = document.createElement('li');



let addcard = document.getElementById('push-card');
let addmultiplecards = document.getElementById('mass-card-push');

let addlist = document.getElementsByClassName('')



let ncards = 0;
let idgiver = 1;
let listcounter = 1;




const cardcreator = () => {
    let headerofcard = document.createElement('div');
    let cardbuttonaddlist = document.createElement('button');
    let cardchangenamebutton = document.createElement('button');
    let card = document.createElement('div');

    headerofcard.classList.add('header-of-card');
    headerofcard.id = `headerid${idgiver}`;
    cardbuttonaddlist.className = 'card-control-panel-button-add-list';
    cardbuttonaddlist.id = `cardbutton-add-list-id${idgiver}`;
    cardchangenamebutton.className = 'card-control-panel-button-change-name';
    cardchangenamebutton.id = `card-change-name-button-id${idgiver}`;
    card.classList.add('card');

    cardbuttonaddlist.onclick = (event) => {
        let location = event.target.id;
        location = location[location.length-1];
        Listpusher(location);
    }
    cardchangenamebutton.onclick = () => console.log(event.target.id);

    headerofcard.appendChild(cardbuttonaddlist);
    headerofcard.appendChild(cardchangenamebutton);
    card.appendChild(headerofcard);
    card.id = `card${idgiver}`;

    idgiver++;
    delete headerofcard;
    delete cardbutton;

    return card;
}

const cardpusher = () => {
    section.appendChild(cardcreator());

    ncards++
    addcard.innerText = `${ncards}`;

    delete card;
}

addcard.addEventListener('click', function () {
    cardpusher()
});

addmultiplecards.addEventListener('click', function () {
    let amountofcards = prompt("how many cards?");
    for (let i = 0; i < amountofcards; i++) {
        cardpusher()
    }
});

const createList = (location) =>
    {
        let list = document.createElement('div');

        list.classList.add('list');
        list.id = `listlocation-${location}-${listcounter}`
        listcounter++;
        return list;
    }

const Listpusher = (location) =>
    {  
        let card = document.getElementById(`card${location}`);

        card.appendChild(createList(location));
    }

    // cardbuttonaddlist.onclick = () => console.log(event.target.id);