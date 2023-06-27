/*Fazendo a troca de imagens */

const button1 = document.querySelector("#button1");

let index = 1;
let image = [
"../IMAGES/trocaInsereImagem/img1.jpg",
"../IMAGES/trocaInsereImagem/img2.jpg",
"../IMAGES/trocaInsereImagem/img3.jpg",
"../IMAGES/trocaInsereImagem/img4.jpg",
"../IMAGES/trocaInsereImagem/img5.jpg",
]

function trocarImagem(){
  if(index == image.length){
    index = 0;
  }
  document.getElementById("imagem").src = image[index];
  index++;
}

button1.addEventListener("click", function clicar(ev){
  ev.preventDefault();
  trocarImagem();
})



/*Inserindo novas imagens */

const button2 = document.querySelector("#button2");
const minhaImagem = document.querySelector("#minhaImagem")
const minhaImagem2 = document.querySelector("#minhaImagem2")

let image2 = new Array();
image2[0] = "../IMAGES/trocaInsereImagem/img1.jpg";
image2[1] = "../IMAGES/trocaInsereImagem/img2.jpg";
image2[2] = "../IMAGES/trocaInsereImagem/img3.jpg";
image2[3] = "../IMAGES/trocaInsereImagem/img4.jpg";
image2[4] = "../IMAGES/trocaInsereImagem/img5.jpg";

function inserirImagem(){
  aleatorio = Math.floor(Math.random()*image2.length);
  newTag = document.createElement("img");
  newTag.src = image2[aleatorio];
  minhaImagem2.appendChild(newTag);
}

button2.addEventListener("click", function clicar(ev){
  ev.preventDefault();
  inserirImagem();
})