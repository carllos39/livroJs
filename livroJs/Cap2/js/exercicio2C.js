frm = document.querySelector("form");
resp1 = document.querySelector("#outPromocao");
resp2 = document.querySelector("#outPrecoTerceiro");

frm.addEventListener("submit", (e)=>{
    const produto=frm.produto.value;
    const preco=Number(frm.preco.value);

    const terceiro= preco / 2;
    const total= (preco * 2) + terceiro;
    resp1.innerText= `${produto} - Promoção leve 3 por R$ ${total.toFixed(2)}`;
    resp2.innerText= `O terceiro custa apenas R$ ${terceiro.toFixed(2)}`;
  

    e.preventDefault();
});