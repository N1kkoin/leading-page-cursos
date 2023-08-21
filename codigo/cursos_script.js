/* Referencias
https://codepen.io/a7rarpress/pen/MWPgaMq
https://jsfiddle.net/4vm1sht5/3/
*/

function mostrarDescricao(elemento) {
  let descricao = elemento.nextElementSibling;

  if (descricao.style.display === 'block') {
    descricao.style.display = 'none';
    return;
  }

  let todasDescricoes = document.querySelectorAll('.descricao');
  for (let i = 0; i < todasDescricoes.length; i++) {
    todasDescricoes[i].style.display = 'none';
  }

  descricao.style.display = 'block';
}

let posicaoAnterior = 0;  // Armazena a posição anterior da rolagem

function expandirRecolher() {
  let lista = document.getElementById('lista');
  let btn = document.getElementById('btnExpandir');

  if (lista.style.height === 'auto') {
    lista.style.height = '200px';
    btn.innerHTML = 'Veja mais';

    // Esconde todas as descrições ao recolher
    let todasDescricoes = document.querySelectorAll('.descricao');
    for (let i = 0; i < todasDescricoes.length; i++) {
      todasDescricoes[i].style.display = 'none';
    }

    // Move a rolagem de volta para a posição anterior
    window.scrollTo(0, posicaoAnterior);

  } else {
    // Armazena a posição atual da rolagem
    posicaoAnterior = window.scrollY;

    lista.style.height = 'auto';
    btn.innerHTML = 'Recolher';
  }
}




var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var header = document.getElementById("sticky-header");
  var topHeader = document.getElementById("top-header");

  // Definir limite para quando o cabeçalho deve encolher
  var shrinkBoundary = topHeader.offsetHeight + 50;

  if (window.pageYOffset > topHeader.offsetHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("shrink");
  }

  if (window.pageYOffset > shrinkBoundary) {
    header.classList.add("shrink");
  }
}


$(window).on("scroll", function(){
  highlight();
});

function highlight(){
  var scroll = $(window).scrollTop();
  var height = $(window).height();

  $(".highlight").each(function(){
    var pos = $(this).offset().top;
    if (scroll+height >= pos) {
      $(this).addClass("active");
    } 
    console.log(pos);
    console.log(scroll);
  });
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Abre a primeira aba por padrão
document.addEventListener("DOMContentLoaded", function () {
  document.getElementsByClassName("tablinks")[0].click();
});

$(document).ready(function(){
  // Carregando o footer.html no elemento com ID "meuFooter"
  $("#meuFooter").load("/codigo/footer.html");
});

