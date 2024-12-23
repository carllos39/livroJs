const frm=document.querySelector("form")
const resp1=document.querySelector("h3")
const resp2=document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value; 
    const nota1 =Number( frm.inNota1.value); 
    const nota2 =Number( frm.inNota2.value); 
    const madia=(nota1 + nota2)/2
    resp1.innerHTML=`Média das notas : ${madia.toFixed(2)}`
    if(madia >=7){
        resp2.innerText=`Parabens ${nome}! Você foi aprovado (a)`
        resp2.style.color="blue"
    }else if(madia >=4){
        resp2.innerText=`Atenção  ${nome}! Você está de exame`
        resp2.style.color="green"  
   
    }else{
        resp2.innerText=`Ops  ${nome}! Você foi reprovado (a)`
        resp2.style.color="red"  
    }

    e.preventDefault()
})