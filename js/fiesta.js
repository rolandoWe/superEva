
$(document).ready(function(){
    $('.select_cat_f[category="todo"]').addClass('activar');

    $('.select_cat_f').click(function(){
        let categ=$(this).attr('category')
        $('.select_cat_f').removeClass('activar');
        $(this).addClass('activar');
        console.log(categ)

        $('.producto').css('transform','scale(0)')
        function ocultar(){
        $('.producto').hide()

        }setTimeout(ocultar,400);

        function mostrar(){
        $('.producto[category="'+categ+'"]').show()
        $('.producto').css('transform','scale(1)')
        }setTimeout(mostrar,400)

        $('.select_cat_f[category="todo"]').click(function(){
            function toda(){
                $('.producto').show()
                $('.producto').css('transform','scale(1)')
    
    
            }setTimeout(toda,400) 
    
        })

    })


})