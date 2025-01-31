window.onload = function() {
    // Garante que a página comece no topo ao ser carregada
    window.scrollTo(0, 0);
};
// Faz a página rolar para o topo ao atualizar
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
