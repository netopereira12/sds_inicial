/* função para mostrar as opcoes de menu para dispositivos moveis */

$(document).ready(function(){

  $('.menu').click(function(){    /* quando clicar nomenu-mobile */

    $('.menu ul').slideToggle();    /* mostrar o que tem no elemento ul */

  })






/* função para centralizar o menu para dispositivos moveis*/
  $('.menu-mobile').click(function(){   /* quando clicar nomenu-mobile */

    $('.menu-mobile ').css("text-align", "center");   /* colocar o conteudo da classe menu-mobile centralizado*/

  })



/* função para centralizar o menu para dispositivos moveis*/
  $(window).resize(function(){    /* quando clicar nomenu-mobile */

    if ( $(window).width() > 486 ) {    /* colocar o conteudo da classe menu-mobile centralizado*/

       $('.menu ul').removeAttr('style');   /* colocar o conteudo da classe menu-mobile centralizado*/
    }   

  })




  })
 

 