
// quando esse documento estiver pronto,carregado, vamos criar uma (funcao(){})
$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(e){
        $('form').slideUp();

    });

    $('form').on('submit',function(e) {
        console.log("submit");
        e.preventDefault();
    })
})