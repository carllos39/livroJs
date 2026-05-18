const frm =document.querySelector("form");
const resp =document.querySelector("h3");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
const numero =Number(frm.numero.value);    
let temDivisor =0;
for(let i=2; i <= numero / 2;i++){
    if(numero % i==0){
        temDivisor =1;
        break;
    }
}
if(numero > 1 && !temDivisor){
    resp.innerText=`${numero} è primo`;
}else{
    resp.innerText=`${numero} não è primo`;  
}

});