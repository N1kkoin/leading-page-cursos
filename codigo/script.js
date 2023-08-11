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
  } else {
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


highlight();

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

fetch('/codigo/footer.html')
.then(response => response.text())
.then(content => {
  document.getElementById('footerContainer').innerHTML = content;
});
