$('form').on('submit', function(e){
    e.preventDefault();

    const adicionarTarefa = $('input').val();

    $(`<li> ${adicionarTarefa} </li>`).appendTo('ul');
    $('input').val('');
})

i = 0

$('ul').on('click', 'li',function(){
    $(this).toggleClass('checked');
})