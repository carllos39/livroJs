const frm = document.querySelector("form");


frm.addEventListener("submit",(e)=>{
e.preventDefault();
do{
const ano=Number(frm.ano.value);

if(ano===0){
break;
}else if(ano==1942 || ano== 1946){
alert(`Não houve em ${ano}(Segunda Guerra Mundial)`);
}else if(ano >=1930 && ano % 4==2){
 alert(`Sim, ${ano},É ano de Copa do mundo`);   
}else{
    alert(`Não ${ano}, não é ano de Copa do Mundo!`);
}
}while(true)

});