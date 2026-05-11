const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
const valor = Number(frm.valor.value );
if(valor < 1.00){
alert("Valor insulficiente!(No minimo 1.00)");
frm.valor.focus();
return;
}
let tempo=0;
let troco =0;
if(valor >= 3.00){
tempo =120;
troco= valor-3.00;
}else if(valor >= 1.75){
    tempo = 60;
    troco= valor - 1.75;
}else{
    valor >= 1.00
    tempo = 30;
    troco= valor - 1.00;
}
resp1.innerText=`Tempo: ${tempo}mintos`;
if(valor > 0){
resp2.innerText=`Troco :${troco.toFixed(2)}`;
}

});