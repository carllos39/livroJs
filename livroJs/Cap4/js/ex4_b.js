const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const velocidadePermitida =Number(frm.velocidadePermitida.value );
      const velocidadeCondutor =Number(frm.velocidadeCondutor.value );
    if(velocidadeCondutor <= velocidadePermitida){
    resp.innerText=`Condutor dentro da velocidade permitida`;
    }else{
       const  maisVinte = velocidadePermitida * 1.2;
         if(velocidadeCondutor <= maisVinte){
    resp.innerText=`Condutor recebe multa leve`; 
         }else{
    resp.innerText=`Condutor recebe multa grave`;  
         }
    
    }
  
});