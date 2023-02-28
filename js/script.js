/* 
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini 
dinamicamente servendoci dell'array fornito e un semplice ciclo for 
che concatena un template literal (ad esempio).
Al termine di questa fase ci ritroveremo con lo stesso slider 
stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.


MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine 
attiva, che quindi verrà visualizzata al posto della precedente.

*/


/* 
-creo un'array con le immagini
-credo le variabili per gli elementi che mi servono
-creo una variabile indice
-genero thumbnail con un ciclo in base all'array lenght e le appendo
-> alla pressione della freccia in alto
-diminuisco il valore dell'indice di un'unità
? SE il valore dell'indice è minore di 0
    °il valore dell'indice ritorna a 4 e riprendo le operazioni
    °aggiungere la classe active alla posizione dell'indice  
    °mostrare l'immagine corrispondente al valore dell'indice
    °rimuovo la classe active dalla thumbnail precedente
 :ALTRIMENTI continua le operazioni     
-> alla pressione della freccia in basso 
-aumento il valore dell'indice di un'unità
? SE il valore dell'indice è uguale a 5
    °il valore dell'indice diventa 0 e continuo le operazioni
    °aggiungere la classe active alla posizione dell'indice
    °mostrare l'immagine corrispondente al valore dell'indice
    °rimuovo la classe active dalla thumbnail precedente
 : ALTRIMENTI continua le operazioni     
  


*/

//-creo un'array con le immagini
const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"]

//-credo le variabili per gli elementi che mi servono

const thumbnailContainerEl = document.getElementById("thumbnail-container");
const imgElementEl = document.getElementById("img-element");
const upArrow = document.getElementById("up-arrow");
const downArrow = document.getElementById("down-arrow");






// genero thumbnail con un ciclo in base all'array lenght e le appendo
for(let i = 0;i < images.length;i++){
    let thumbnail = document.createElement("img");
    thumbnail.classList.add("thumbnail");
    thumbnail.src = images[i];
    thumbnailContainerEl.append(thumbnail);
};

// -creo una variabile indice
let index = 2;
imgElementEl.src = images[index];
    
let thumbnailList = document.querySelectorAll(".thumbnail");
thumbnailList[index].classList.add("active");

//-> alla pressione della freccia in alto
upArrow.addEventListener("click", function(){

//°diminuisco il valore dell'indice di un'unità
index--
      
// ? SE il valore dell'indice è minore di 0
//    °il valore dell'indice ritorna a 4 e riprendo le operazioni
if(index < 0){
    index = 4;

 //aggiungo classe active alle thumbnail corrispondente al valore indice
    thumbnailList[index].classList.add("active");
 
//°mostrare l'immagine corrispondente al valore dell'indice    
    imgElementEl.src = images[index];

//rimuovo la classe active dalla thumbnail precedente    
    thumbnailList[0].classList.remove("active");



    // ALTRIMENTI continua le operazioni    
} else {
    thumbnailList[index].classList.add("active");
    imgElementEl.src = images[index];
    console.log(index);
    thumbnailList[index + 1].classList.remove("active");
}

  
});

downArrow.addEventListener("click", function(){

//aumento il valore dell'indice di un'unità
    index++

// SE il valore dell'indice è uguale a 5
//      °il valore dell'indice diventa 0 e continuo le operazioni    
    if(index == 5){
        index = 0;

//aggiungo classe active alle thumbnail corrispondente al valore indice        
        thumbnailList[index].classList.add("active");

//°mostrare l'immagine corrispondente al valore dell'indice        
        imgElementEl.src = images[index];
        
 //rimuovo la classe active dalla thumbnail precedente       
        thumbnailList[4].classList.remove("active");
        
// : ALTRIMENTI continuo le operazioni        
    } else {
        thumbnailList[index].classList.add("active");
        imgElementEl.src = images[index];
        console.log(index);
        thumbnailList[index - 1].classList.remove("active");
    };

});




