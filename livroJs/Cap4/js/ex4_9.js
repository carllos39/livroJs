const frm = document.querySelector("form");
const resp= document.querySelector("h3");

frm.addEventListener("submit",(e)=>{
e.preventDefault();

const numero = Number(frm.numero.value );
if(numero< 100 || numero >=1000){
    alert("Erro...o número deve ser uma centena");
    return;
}
const num1= Math.floor(numero / 100);
const sobra = numero % 100;
const num2= Math.floor(sobra / 10);
const num3 = sobra % 10;
resp.innerText=`Número invertido: ${num3}${num2}${num1}`;
});