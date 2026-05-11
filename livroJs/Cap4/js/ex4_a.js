const frm = document.querySelector("form");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const numero =Number(frm.numero.value );
    if(numero % 2==0){
 alert(`O ${numero} é par`);
    }else{
     alert(`O ${numero} é impar`);    
    }

});