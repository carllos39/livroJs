const frm=document.querySelector("form");
const resp=document.querySelector("h3");
frm.addEventListener("reset", ()=>{
resp.innerText="";
});
frm.addEventListener("submit", (e)=>{
 let nome=(frm.nome.value);
 let masculino=(frm.masculino.checked);
 let altura=Number((frm.altura.value));

    e.preventDefault();
    // let peso=0;
    // if(masculino){
    //  peso= 22 * Math.pow(altura,2);
    // }else{
    //     peso= 21 * Math.pow(altura,2);
    // }
    const peso = masculino? 22 * Math.pow(altura,2) : 21 * Math.pow(altura,2);
    resp.innerText=`Seu peso ideal : ${peso.toFixed(3)}`;
});