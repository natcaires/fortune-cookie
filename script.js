const screen1 = document.querySelector(".fortune-cookie__screen1");
const screen2 = document.querySelector(".fortune-cookie__screen2");
const openCookie = document.querySelector("#fortune-cookie__screen1-img");
const backToScreen1 = document.querySelector("#fortune-cookie__screen2-button")

const fortuneOfTheDay = [
  `"A maior de todas as torres começa no solo."`,

  `"Sorte é estar pronto quando a oportunidade vem."
    - Oprah Winfrey`,

  `"Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito."
  -Ralph Waldo Emerson`,

  `"Queixam-se muitos de pouco dinheiro, outros de pouca sorte, 
    alguns de pouca memória, nenhum de pouco juízo."
    - Marquês de Maricá`,
  
  `"A vida trará coisas boas se tiver paciência."`,

  `"Todas as coisas são difíceis antes de se tornarem fáceis."`,

  `"A maior barreira para o sucesso é o medo do fracasso."`,

  `"Você sempre será a sua melhor companhia!"`,

  `"Você é do tamanho do seu sonho."`,

  `"Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos."`
];


function getCookiePhrase() {
  toggleScreen();

  let num = Math.floor(Math.random() * fortuneOfTheDay.length);

  let fortune = document.querySelector(".fortune-cookie__screen2-paragraph");

  fortune.innerText = fortuneOfTheDay[num];
  
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

openCookie.addEventListener('click', getCookiePhrase);
backToScreen1.addEventListener('click', toggleScreen);

