const frm=document.querySelector("form");
const resp=document.querySelector("h3");
frm.addEventListener("reset", ()=>{
resp.innerText="";
});
frm.addEventListener("submit", (e)=>{
    let horaBrasil=Number(frm.horaBrasil.value);
    let horaFranca= 5 + horaBrasil;
    if(horaFranca > 24){
        horaFranca = horaFranca - 24;
    }
   resp.innerText=`Horário na França é : ${horaFranca.toFixed(2)}`; 
e.preventDefault();
});