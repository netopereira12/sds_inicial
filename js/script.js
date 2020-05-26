$(document).ready(function(){

	$('.botao-menu').click(function(){		/* quando clicar nomenu-mobile */

		$('li').slideToggle('');		/* mostrar o que tem no elemento ul */

	})


	$(window).resize(function(){    /* quando clicar nomenu-mobile */

    if ( $(window).width() > 486 ) {    /* colocar o conteudo da classe menu-mobile centralizado*/

       $('li').removeAttr('style');   /* colocar o conteudo da classe menu-mobile centralizado*/
    	}   


	});

});



