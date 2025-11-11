function alternarTema() {
    const linkCSS = document.getElementById("temaCSS");

    if (linkCSS.getAttribute("href") === "style.css") {
        linkCSS.setAttribute("href", "style-dark.css");
        localStorage.setItem("tema", "escuro");
    } else {
        linkCSS.setAttribute("href", "style.css");
        localStorage.setItem("tema", "claro");
    }}

document.addEventListener("DOMContentLoaded", function() {
    const temaSalvo = localStorage.getItem("tema");
    const linkCSS = document.getElementById("temaCSS");

    if (temaSalvo === "escuro") {
        linkCSS.setAttribute("href", "style-dark.css");
    } else {
        linkCSS.setAttribute("href", "style.css");
    }

    document.getElementById("btnTema").addEventListener("click", alternarTema);
});
