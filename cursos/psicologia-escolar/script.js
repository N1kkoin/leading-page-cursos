const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vREDH7BTr9H2Um4BgNp45XYW1ybvS1qBIWACK2eElc7pmra17fwwcVBp3Um-GD6_wOF_N_FquXS1Rx9/pub?output=csv';

Papa.parse(url, {
  download: true,
  header: true,
  complete: function (results) {
    var data = results.data;

    // Container para Cursos
    var contentDivCursos = document.createElement('div');
    contentDivCursos.className = 'containercursos';

    // Container para Valor Total
    var contentDivValorTotal = document.createElement('div');
    contentDivValorTotal.className = 'containercursos';

    // Filtrando e processando dados para o curso especificado
    data.filter(row => row['Cursos'] === 'Pós PsicoEscolar').forEach(row => {
      // Processando para Cursos
      var cardDivCursos = document.createElement('div');
      cardDivCursos.className = 'cursos';
      cardDivCursos.innerHTML = `<p>${row['Valor']}</p>`;
      contentDivCursos.appendChild(cardDivCursos);

      // Processando para Valor Total
      var cardDivValorTotal = document.createElement('div');
      cardDivValorTotal.className = 'cursos';
      cardDivValorTotal.innerHTML = `<p>${row['Valor Total']}</p>`;
      contentDivValorTotal.appendChild(cardDivValorTotal);
    });

    // Adicionando a produtofinalcursos
    var locaisCursos = document.getElementsByClassName('produtofinalcursos');
    for (var i = 0; i < locaisCursos.length; i++) {
      locaisCursos[i].appendChild(contentDivCursos.cloneNode(true));
    }

    // Adicionando a produtofinalcursostotal
    var locaisValorTotal = document.getElementsByClassName('produtofinalcursostotal');
    for (var j = 0; j < locaisValorTotal.length; j++) {
      locaisValorTotal[j].appendChild(contentDivValorTotal.cloneNode(true));
    }
  }
});


const url3 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQFQpAPuz3qeeeaVPGRhbC76PJCmu__UDYg99qUuZMnYw6PrdOkZ3jtLCOf9SlcMh3ft7liKV5b0tk4/pub?output=csv';

Papa.parse(url3, {
  download: true,
  header: true,
  complete: function (results) {
    var data = results.data;
    var cardHolder = document.querySelector('.cardHolder');

    data.forEach(row => {
      if (row['Nome PsicoEscolar'] && row['Foto PsicoEscolar'] && row['Cargo PsicoEscolar']) {
        var cardBox = document.createElement('div');
        cardBox.className = 'cardBox swiper-slide';

        var cardDetails = document.createElement('div');
        cardDetails.className = 'cardDetails';

        var cardDiv = document.createElement('div');
        cardDiv.className = 'teacherSection';
        cardDiv.innerHTML = `
                  <img class="teacherImg" src="${row['Foto PsicoEscolar']}" alt="${row['Nome PsicoEscolar']}">
                  <h3>${row['Nome PsicoEscolar']}</h3>
                  <p>${row['Cargo PsicoEscolar']}</p>
                  <div class="teacherCurriculum">
                      <a class="teacherCurriculumLinks" href="${row['Contato PsicoEscolar']}" target="_blank"><i class="fa fa-envelope"></i></a>
                      <a class="teacherCurriculumLinks" href="${row['Currículo PsicoEscolar']}" target="_blank"><i class="ai ai-lattes"></i>Currículo</a>
                  </div>
              `;
        cardDetails.appendChild(cardDiv);
        cardBox.appendChild(cardDetails);
        cardHolder.appendChild(cardBox);
      }
    });

    var swiper = new Swiper(".slideContent", {
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
  }
});
