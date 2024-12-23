const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit",(e)=>{
    const tempo= Number(frm.tempo.value);
    const valor= Number(frm.valor.value);
    const pagar= Math.ceil(tempo / 15) * valor;
    resp.innerText= `Valor á pagar R$ : ${pagar.toFixed(2)}`;
    
    e.preventDefault();
});