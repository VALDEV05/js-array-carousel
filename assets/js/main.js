/* Dati tre array contenenti:
    una lista ordinata di 5 immagini,
    una lista ordinata dei relativi 5 luoghi e
    una lista di 5 news,
Creare un carosello come nella foto allegata.
    Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e testo.Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.



Consigli del giorno:
costruiamo del carosello una versione statica contenente un'immagine grande con del testo ben posizionato e una miniatura. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
Al momento giusto(ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
 */

/* array */
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

/*     `<div class="item">
                    <img src="${items[i]}" alt="">
                    <div class ="text">
                         <h1>${title[i]}</h1>
                        <h3>${text[i]}</h3>
    
                    </div>
                </div>` */


//seleziono gli elementi della DOM dove stampare gli elementi
const placeToPrintImageBig = document.querySelector('.slider');
const placeToPrintImageSmall = document.querySelector('.thumbs');

//creo la variabile della foto grande
let item = '';
let thumb = '';
let active = 0;

for (let i = 0; i < items.length; i++) {
    item += `<div class="item">
                    <img src="${items[i]}" alt="">
                        <div class ="text">
                            <h1>${title[i]}</h1>
                        <h3>${text[i]}</h3>
                    </div>
                </div>`
    thumb += `<div class="thumb">
                        <img src="${items[i]}" alt="">
                    </div>`

}
placeToPrintImageBig.innerHTML = item;
document.getElementsByClassName('item')[active].classList.add('active');

placeToPrintImageSmall.innerHTML += thumb;
document.getElementsByClassName('thumb')[active].classList.add('active');


//devo impostare che la variabile active cambia con il click dei pulsanti
console.log(active);



const precBtn = document.getElementById('btn_prec');
precBtn.addEventListener('click', function () {
    //decremento il contatore
    --active;
    if (active < 0) {
        active = 5
    } else {
        console.log(active);
        //rimuovo la classe active al vecchio indice
        document.querySelector('.item.active').classList.remove('active')
        //aggiungo la classe active al nuovo indice
        document.getElementsByClassName('item')[active].classList.add('active');
        //rimuovo la classe active al vecchio indice
        document.querySelector('.thumb.active').classList.remove('active')
        //aggiungo la classe active al nuovo indice
        document.getElementsByClassName('thumb')[active].classList.add('active');
    }


})

const succBtn = document.querySelector('.succ');
succBtn.addEventListener('click', function () {
    //incremento il contatore

    ++active;
    if (active > 4) {
        active = -1
    } else {
        console.log(active);
        //rimuovo la classe active al vecchio indice
        document.querySelector('.item.active').classList.remove('active')
        //aggiungo la classe active al nuovo indice
        document.getElementsByClassName('item')[active].classList.add('active');
        //rimuovo la classe active al vecchio indice
        document.querySelector('.thumb.active').classList.remove('active')
        //aggiungo la classe active al nuovo indice
        document.getElementsByClassName('thumb')[active].classList.add('active');
    }
})