let qtLanche;
let qtPotato;
let qtRefri;
let qtDessert;
let totalPriece = `R$ 0,00`;

const snackPrice = 12.99;
const potatoPrice = 6.99;
const refriPrice = 7.99;
const dessertPrice = 11.99;

const txtBtnLight = "#FDFDFD";
const txtBtnDark = "#333e64";
const bgBtnLight = "#5c6e7a";
const bgBtnDark = "#F1F1F1";
const hoverColorDark = "#91a0aa";
const hoverColorLight = "#1d212e";

const html = document.querySelector("html");
const body = document.querySelector("body");
const btnNav = document.querySelector("#btn-nav");

const btnPedir = document.querySelector("#btn-pedir");
const btnLimpar = document.querySelector("#btn-limpar");

document.querySelector("#totalPrice").innerText = totalPriece;

function clearInput(){
  document.querySelector("#snack").value = "";
  document.querySelector("#potato").value = "";
  document.querySelector("#refri").value = "";
  document.querySelector("#dessert").value = "";
}

function showOrder(){
  document.querySelector("#viewSnack").innerText = qtLanche;
  document.querySelector("#viewPotato").innerText = qtPotato;
  document.querySelector("#viewRefri").innerText = qtRefri;
  document.querySelector("#viewDessert").innerText = qtDessert;
}

function calcPrice() {
    totalPriece = (snackPrice * qtLanche) + (potatoPrice * qtPotato) + (refriPrice * qtRefri) + (dessertPrice * qtDessert);
    document.querySelector("#totalPrice").innerText = totalPriece.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

function alterBtnTextMode(){
  if(btnNav.classList == ("light")) {
    btnNav.innerText = "Dark mode";
    btnNav.style.backgroundColor = bgBtnLight;
  } else {
    btnNav.innerText = "Light mode";
    btnNav.style.backgroundColor = bgBtnDark;
  }
}

btnPedir.addEventListener("click", function(ev){
  ev.preventDefault();
    qtLanche = parseInt(document.querySelector("#snack").value);
    qtPotato = parseInt(document.querySelector("#potato").value);
    qtRefri = parseInt(document.querySelector("#refri").value);
    qtDessert = parseInt(document.querySelector("#dessert").value);

  if(isNaN(qtLanche) || isNaN(qtPotato) || isNaN(qtRefri) || isNaN(qtDessert)){
    window.alert("Informe a quantidade desejada para cada item. Caso não queira incluir algum dos itens em seu pedido, digite a quantidade 0.");
  }else{
    clearInput();
    showOrder();
    calcPrice();
  }
});

btnLimpar.addEventListener("click", function(){
  document.querySelector("#viewSnack").innerText = "";
  document.querySelector("#viewPotato").innerText = "";
  document.querySelector("#viewRefri").innerText = "";
  document.querySelector("#viewDessert").innerText = "";
  document.querySelector("#totalPrice").innerText = `R$ 0,00`
});

btnNav.addEventListener('mouseenter', function(){
  if(btnNav.classList == ("light")) {
    btnNav.style.color = hoverColorLight;
  } else {
    btnNav.style.color = hoverColorDark;
  }
})

btnNav.addEventListener('mouseleave', function(){
  if(btnNav.classList == ("light")) {
    btnNav.style.color = txtBtnLight;
  } else {
    btnNav.style.color = txtBtnDark;
  }
})

btnNav.addEventListener('click', function(){
  html.classList.toggle("light-mode");
  btnNav.classList.toggle("light");
  alterBtnTextMode();
})