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
-> alla pressione della freccia in alto
    °aumento il valore dell'indice di un'unità
    °mostrare l'immagine corrispondente al valore dell'indice
    °aggiungere la classe active alla posizione dell'indice  
-> alla pressione della freccia in basso 
    °diminuisco il valore dell'indice di un'unità
    °mostrare l'immagine corrispondente al valore dell'indice
    °aggiungere la classe active alla posizione dell'indice  
  


*/

//-creo un'array con le immagini
const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"]

//-credo le variabili per gli elementi che mi servono
const thumbnailContainerEl = document.getElementById("thumbnail-container")
const imgElementEl = document.getElementById("img-element");
const upArrow = document.getElementById("up-arrow");
const downArrow = document.getElementById("down-arrow")




for(let i = 0;i <images.length;i++){
    let thumbnail = document.createElement("img")
    thumbnail.classList.add("thumbnail")
    thumbnail.src = images[i]
    thumbnailContainerEl.append(thumbnail)
}

// -creo una variabile indice
let index = 2;
imgElementEl.src = images[index];
    
let thumbnailList = document.querySelectorAll(".thumbnail")
thumbnailList[index].classList.add("active")


upArrow.addEventListener("click", function(){

//°aumento il valore dell'indice di un'unità
 index++

 //aggiungo classe active alle thumbnail corrispondente al valore indice
 thumbnailList[index].classList.add("active")
 

 //°mostrare l'immagine corrispondente al valore dell'indice
 imgElementEl.src = images[index] 
 console.log(index)

 //rimuovo la classe active dalla thumbnail precedente
  thumbnailList[index - 1].classList.remove("active")  
})

downArrow.addEventListener("click", function(){

//°diminuisco il valore dell'indice di un'unità
index--

//aggiungo classe active alle thumbnail corrispondente al valore indice
thumbnailList[index].classList.add("active")

//°mostrare l'immagine corrispondente al valore dell'indice
imgElementEl.src = images[index]


//rimuovo la classe active dalla thumbnail precedente
thumbnailList[index + 1].classList.remove("active") 
})




