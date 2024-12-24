const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2= document.querySelector("#outResp2");
const resp3= document.querySelector("#outResp3");
frm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const valor=Number(frm.valor.value);
    if(valor % 10 !=0){
  alert("Valor inválido para notas disponível($ 10,50,100)");
  frm.valor.focus();
  return;
    }
    const notasCem=Math.floor(valor / 100);
    let resto = valor % 100;
    const notasCinquenta=Math.floor(resto / 50);
     resto = resto % 50;
     const notasDez=Math.floor(resto / 10);
     if(notasCem > 0){
      resp1.innerText=`Notas de R$ 100 :${notasCem}`;

     }
     if(notasCinquenta > 0){
      resp2.innerText=`Notas de R$ 50 :${notasCinquenta}`;

     }
     if(notasDez > 0){
      resp3.innerText=`Notas de R$ 10 :${notasDez}`;

     }

});



