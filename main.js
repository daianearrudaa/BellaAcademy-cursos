

$(document).ready(function () {
    // Fecha o menu de navegação quando um item do menu é clicado
    $('.nav-item a').on('click', function () {
        $('#menu-navegacao').collapse('hide');
    });
});


$(document).ready(function () {
    var $navbarToggler = $('.navbar-toggler');
    var $menuNavegacao = $('#menu-navegacao');

    $menuNavegacao.on('hidden.bs.collapse', function () {
        // Aqui o menu de navegação foi recolhido
        // Você pode adicionar o código para substituir o ícone 'X' pelo botão de sanduíche aqui
        $navbarToggler.html('<span class="navbar-toggler-icon"></span>');
    });

    // Adicione um evento de clique no botão de toggler
    $navbarToggler.on('click', function () {
        if ($menuNavegacao.hasClass('show')) {
            // Se o menu estiver aberto, fecha-o
            $menuNavegacao.removeClass('show');
        } else {
            // Se o menu estiver fechado, abra-o
            $menuNavegacao.addClass('show');
            // Aqui você pode adicionar o código para substituir o botão de sanduíche pelo ícone 'X'
            $navbarToggler.html('<span class="navbar-toggler-icon"></span>');
        }
    });
});

$(document).ready(function(){

    $('.nav-item a').on('click', function(event){

        event.preventDefault(); 

        $('.nav-item').removeClass('active'); 

        $(this).parent().addClass('active'); 

    });

});




document.addEventListener("DOMContentLoaded", function () {
    // Selecione todos os links de navegação
    const navLinks = document.querySelectorAll(".nav-link");

    // Adicione um evento de clique a cada link de navegação
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita o comportamento padrão do link

            // Obtenha o ID do destino a partir do atributo href do link
            const targetId = this.getAttribute("href").substring(1);

            // Encontre o elemento de destino usando o ID
            const targetElement = document.getElementById(targetId);

            // Calcule a posição do elemento de destino
            const offsetTop = targetElement.offsetTop;

            // Role suavemente até a posição do elemento de destino
            window.scrollTo({
                top: offsetTop - (window.innerHeight - targetElement.clientHeight) / 2,
                behavior: "smooth",
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
        // Selecione todos os links de navegação
        const navLinks = document.querySelectorAll(".nav-link");

        // Adicione um evento de clique a cada link de navegação
        navLinks.forEach((link) => {
            link.addEventListener("click", function (e) {
                e.preventDefault(); // Evita o comportamento padrão do link

                // Obtenha o ID do destino a partir do atributo href do link
                const targetId = this.getAttribute("href").substring(1);

                // Encontre o elemento de destino usando o ID
                const targetElement = document.getElementById(targetId);

                // Calcule a posição do elemento de destino
                const offsetTop = targetElement.offsetTop;

                // Role suavemente até a posição do elemento de destino, levando em consideração a altura da barra de navegação
                const navbarHeight = document.querySelector("header").offsetHeight;
                window.scrollTo({
                    top: offsetTop - navbarHeight,
                    behavior: "smooth",
                });
            });
        });
    });

$(document).ready(function(){

    $('#tel').mask('(00)00000-0000');

    $('form').validate({
        rules:{
            tel:false
        },
        messages:{
            nome: '<span style="color: red; font-weight: bold;">Por favor, insira o seu nome</span>',
            email: '<span style="color: red; font-weight: bold;">Por favor, insira o seu email</span>'
        }
    });

   


    
})

