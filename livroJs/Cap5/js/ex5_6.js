const frm = document.querySelector("form");
const resp= document.querySelector("h3");

frm.addEventListener("submit",(e)=>{
e.preventDefault();

const num = Number(frm.numero.value);
let numDivisores=0;//Declara e inicializa o contador
for(let i=1;i <= num;i++){
    if(num % i==0){
   numDivisores++ //Se é incrementa o contador
    }
}
if(numDivisores==2){//Se possui apenas dois divisores então é primo
resp.innerText=`${num} é primo ,Os divisores são ${numDivisores}`;
}else{
 resp.innerText=`${num} não é primo ,Os divisores são ${numDivisores}`;   
}
});