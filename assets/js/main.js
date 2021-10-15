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
/* /array */
const num_element_slider = items.length;

const slider = document.getElementById('img_slider')

let selected = 0;
function succ() {
    selected++;
    if (selected > num_element_slider) {
        selected = 0
    }
    console.log(items[selected])
}


function prec() {
    selected--;
    if (selected == 0) {
        selected = num_element_slider
    }
    console.log(items[selected])

}

