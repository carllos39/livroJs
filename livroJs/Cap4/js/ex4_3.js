const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    let bairro =frm.bairro.value;
    let taxaEntrega = 0;
    switch (bairro) {
        case "Centro":
            taxaEntrega = 8.00;
            break;
        case "Fragatas":
        case "Três Vendas":
            taxaEntrega = 10.00;
            break;
        case "Laranjal":
        case "Limoeiro":
            taxaEntrega = 12.00;
            break;
        default:
            taxaEntrega = 9.00;
    }
    resp.innerText = `Valor da taxa  : ${taxaEntrega.toFixed(2)}`;

    e.preventDefault();
});