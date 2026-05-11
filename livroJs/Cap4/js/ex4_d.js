const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2= document.querySelector("#resp2");

frm.addEventListener("submit",(e)=>{
e.preventDefault();

const a =Number(frm.a.value);
const b =Number(frm.b.value);
const c =Number(frm.c.value);
if(a > b+c ||b > c+c ||c > b+a ){
    alert("Não pode ser um triângulo!");
    return;
}
let tipo;
resp1.innerText=`Os lados podem formar um triângulo`;
if(a ==b && b==c){
tipo= 'Equilátero';
}else if(a != b && b==c ){
  tipo= 'Isóceles';  
}else{
    tipo= 'Escaleno';   
}
resp2.innerText=`Triângulo Tipo : ${tipo}`;
});