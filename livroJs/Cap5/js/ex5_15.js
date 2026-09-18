const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
 let estrelas="";
    const fruta= frm.fruta.value;
    const num =Number(frm.num.value);

    for(let i=1;i <= num;i++){
     
        if(i % 2==1){
 estrelas = estrelas + fruta + "*";
    }
    }

    resp.innerText= `${estrelas}`;
});