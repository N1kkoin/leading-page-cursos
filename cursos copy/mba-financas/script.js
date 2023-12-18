const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vREDH7BTr9H2Um4BgNp45XYW1ybvS1qBIWACK2eElc7pmra17fwwcVBp3Um-GD6_wOF_N_FquXS1Rx9/pub?output=csv';

Papa.parse(url, {
  download: true,
  header: true,
  complete: function (results) {
    var data = results.data;

    var contentDivAdmin = document.createElement('div');
    contentDivAdmin.className = 'containercursos';

    data.filter(row => row['Cursos'] === 'Pós MBAFinanças').forEach(row => {
      var cardDiv = document.createElement('div');
      cardDiv.className = 'cursos';

      cardDiv.innerHTML = `<p>${row['Valor']}</p>`;
      contentDivAdmin.appendChild(cardDiv);
    });

    var meuLocalAdmin = document.getElementById('produtofinalcursos');
    meuLocalAdmin.appendChild(contentDivAdmin);
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
      if (row['Nome MBAFinanças'] && row['Foto MBAFinanças'] && row['Cargo MBAFinanças']) {
        var cardBox = document.createElement('div');
        cardBox.className = 'cardBox swiper-slide';

        var cardDetails = document.createElement('div');
        cardDetails.className = 'cardDetails';

        var cardDiv = document.createElement('div');
        cardDiv.className = 'teacherSection';
        cardDiv.innerHTML = `
                  <img class="teacherImg" src="${row['Foto MBAFinanças']}" alt="${row['Nome MBAFinanças']}">
                  <h3>${row['Nome MBAFinanças']}</h3>
                  <p>${row['Cargo MBAFinanças']}</p>
                  <div class="teacherCurriculum">
                      <a class="teacherCurriculumLinks" href="${row['Contato MBAFinanças']}" target="_blank"><i class="fa fa-envelope"></i></a>
                      <a class="teacherCurriculumLinks" href="${row['Currículo MBAFinanças']}" target="_blank"><i class="ai ai-lattes"></i>Currículo</a>
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
