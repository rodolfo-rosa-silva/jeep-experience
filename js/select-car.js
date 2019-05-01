$(document).ready(function() {
  $(".select-car").on("click", function(event) {
    // para o evento do click
    event.preventDefault();
    // pega o valor do car_id no atributo do elemento HTML
    var car_id = $(this).attr("data-car-id");
    // seta o valor no input hidden
    $(".car_id").val(car_id);
    // remove selected dos botoes de selecione
    $(".select-car").removeClass("selected");
    // adiciona a classe de selecionado somente para o botao clicado
    $(this).addClass("selected");
  });
});
