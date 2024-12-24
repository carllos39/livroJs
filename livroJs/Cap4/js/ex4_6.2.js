const frm=document.querySelector("form");
const resp1=document.querySelector("#outResp1");
const resp2=document.querySelector("#outResp2");
const resp3=document.querySelector("#outResp3");
const resp4=document.querySelector("#outResp4");
const resp5=document.querySelector("#outResp5");
frm.addEventListener("submit" , (e)=>{
e.preventDefault();
const saque=Number(frm.saque.value);
if(saque % 5 !=0){
alert("Valor indisponível notas (R$ 5,10, 20,50,100)");
frm.saque.focus();
return;
}
const notasCem=Math.floor(saque / 100);
 resto= saque % 100;
const notasCenquenta=Math.floor(resto / 50);
 resto= resto % 50;
const notasVinte=Math.floor(resto / 20);
 resto= resto % 20;
 const notasDez=Math.floor(resto / 10);
 resto= resto % 10;
 const notasCinco=Math.floor(resto / 5);
 resto= resto % 5;
 if(notasCem > 0){
    resp1.innerText=`Notas de R$ 100 : ${notasCem}`;
 }
 if(notasCenquenta > 0){
    resp2.innerText=`Notas de R$ 50 : ${notasCenquenta}`;
 }
 if(notasVinte > 0){
    resp3.innerText=`Notas de R$ 20 : ${notasVinte}`;
 }
 if(notasDez > 0){
    resp4.innerText=`Notas de R$ 10: ${notasDez}`;
 }
 if(notasCinco > 0){
    resp5.innerText=`Notas de R$ 5: ${notasCinco}`;
 }
});
