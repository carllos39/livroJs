const frm=document.querySelector("form");
const resp=document.querySelector("h3");
frm.addEventListener("reset", ()=>{
resp.innerText="";
});
frm.addEventListener("submit", (e)=>{
    const numero=Number(frm.numero.value);
    const raiz= Math.sqrt(numero);
    if(Number.isInteger(raiz)){
    resp.innerText=`Raiz : ${raiz}`;   
    }else{
   resp.innerText=`Não há raiz exata  para  : ${numero}`; 
    }
e.preventDefault();
});
