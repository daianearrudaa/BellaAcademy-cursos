
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
    })


    
})

