
$(document).ready(function(){
    // alert('papu')

    $('.select_cat[category="todo"]').addClass('activar');

    $('.select_cat').click(function(){
        let categ=$(this).attr('category');
        console.log(categ)

        $('.select_cat').removeClass('activar');
        $(this).addClass('activar');

        $('.producto').css('transform','scale(0)')
        function ocultar(){
        $('.producto').hide();

        }setTimeout(ocultar,400);

        function mostrar(){
            $('.producto[category="'+categ+'"]').show()
            $('.producto[category="'+categ+'"]').css('transform','scale(1)')

        }setTimeout(mostrar,400)

        $('.select_cat[category="todo"]').click(function(){
            function todo(){
                $('.producto').show();
                $('.producto').css('transform','scale(1)');
            }setTimeout(todo,400)
        })

    })
})