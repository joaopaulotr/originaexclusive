function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  const scrollPosition = window.scrollY;

  if (scrollPosition < 525) {
    if (menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open");
      document.querySelector(".iconm").src = "assets/menu_white_36dp.svg";
    } else {
      menuMobile.classList.add("open");
      document.querySelector(".iconm").src = "assets/close_white_36dp.svg";
    }
  } else {
    if (menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open");
      document.querySelector(".iconm").src = "assets/menu_black_36dp.svg";
    } else {
      menuMobile.classList.add("open");
      document.querySelector(".iconm").src = "assets/close_black_36dp.svg";
    }
  }
A
}

//Completando informações dos campos automaticamente:
let tel = document.querySelector('#tel');
tel.addEventListener('keypress', () => {
  let inputLength = tel.value.length;
  let regex = /^[+][5][5]/;

  if (inputLength == 0) {
    tel.value = '+' + tel.value;
  }

  if (tel.value == '+55') {
    tel.value += ' (';
  }

  let espaco = tel.value.indexOf(' ');

  if (espaco > 0) {
    if (inputLength == espaco + 1 && regex.test(tel.value)) {
      tel.value += '(';
    }

    if (inputLength == espaco + 4 && regex.test(tel.value)) {
      tel.value += ') ';
    }

    if (inputLength == espaco + 10 && regex.test(tel.value)) {
      tel.value += '-';
    }

    if (inputLength == espaco + 15 && regex.test(tel.value)) {
      var str = tel.value.split('');
      var i   = tel.value.indexOf('-');
      var j   = tel.value.indexOf('-')+1;

      var aux   = str[i];    
      str[i]    = str[j];
      str[j]    = aux;    
      tel.value = str.join('');
    }

  }
    
})


let cpf = document.querySelector('#CPF');
cpf.addEventListener('keypress', () => {
  let inputLength = cpf.value.length;

  if (inputLength == 3 || inputLength == 7) {
    cpf.value += '.';
  }

  if (inputLength == 11) {
    cpf.value += '-';
  }

})

let cep = document.querySelector('#cep');
cep.addEventListener('keypress', () => {
  let inputLength = cep.value.length;

  if (inputLength == 5) {
    cep.value += '-';
  }

})

let cnpj = document.querySelector('#CNPJ');
cnpj.addEventListener('keypress', () => {
  let inputLength = cnpj.value.length;

  if (inputLength == 2 || inputLength == 6) {
    cnpj.value += '.';
  }

  if (inputLength == 10) {
    cnpj.value += '/';
  }

  if (inputLength == 15) {
    cnpj.value += '-';
  }

})

window.addEventListener("scroll", function () {
  let header = document.querySelector("#header");
  header.classList.toggle("rolagem", window.scrollY > 525);
});

function changeLogoOnScroll() {
  const headerLogo = document.querySelector(".origina img");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 525) {
    headerLogo.src = "assets/logo_extended_black.png";
  } else {
    headerLogo.src = "assets/logo_extended_white.png";
  }
}


function changeMenuOnScroll() {
  const headerLogo = document.querySelector(".iconm");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 525) {
    headerLogo.src = "assets/menu_black_36dp.svg";
  } else {
    headerLogo.src ="assets/menu_white_36dp.svg";
  }
}

function changeCloseOnScroll() {
  const headerLogo = document.querySelector(".iconm");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 525) {
    headerLogo.src = "assets/close_black_36dp.svg";
  } else {
    headerLogo.src ="assets/close_white_36dp.svg";
  }
}

let headerLogo = document.querySelector(".iconm");

window.addEventListener("scroll", changeLogoOnScroll);
window.addEventListener("scroll", changeMenuOnScroll);
headerLogo.addEventListener("click", changeCloseOnScroll);


window.addEventListener('scroll', function() {
  var footer = document.querySelector('footer');
  var floatButton = document.querySelector('#btn-whatsapp');



  // Obtém a posição do footer em relação à viewport
  var footerRect = footer.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  // Se o footer está visível na tela, reposiciona o botão
  if (footerRect.top <= windowHeight) {
    // Ajusta a posição do botão para não sobrepor o footer
    floatButton.style.bottom = (windowHeight - footerRect.top + 60) + 'px';
  } else {
    // Reseta o botão para a posição original quando o footer não está visível
    floatButton.style.bottom = '40px';
  }

});

document.querySelectorAll('.input-box').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const items = document.querySelectorAll('.item img');

  
  items.forEach(item => {
    item.addEventListener('touchstart', () => {
      
      item.classList.add('animate');
    });

    
    item.addEventListener('touchend', () => {
      setTimeout(() => {
        item.classList.remove('animate');
      }, 300); 
    });
  });

  document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('touchstart', () => {
      item.classList.add('touch-active');
    });

    
    item.addEventListener('touchend', () => {
      setTimeout(() => {
        item.classList.remove('touch-active');
      }, 300);
    });
  });