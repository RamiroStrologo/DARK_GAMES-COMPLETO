window.onload = async () => {
  const jwtExist = checkJwtExist();
  if (!jwtExist) loadLogin();
};

function showGames(arrayGames, consolaInfo) {
  const gamesContainer = document.querySelector('#section_juegos_tienda');
  //LIMPIO EL CONTENEDOR PADRE
  gamesContainer.innerHTML = '';
  //CREO EL SEPARADOR, ASIGNO CLASES, INICIALIZO ATRIBUTOS Y RELACIONO LOS ELEMENTOS
  const separator = document.createElement('div');
  const imgSep1 = document.createElement('img');
  const imgSep2 = document.createElement('img');
  const textSep = document.createElement('h2');
  separator.classList.add(
    'mt-3',
    'mb-2',
    'h2_tienda',
    'd-flex',
    'justify-content-evenly'
  );
  separator.id = 'ps3_games';
  imgSep1.src = consolaInfo[0].imgSepSrc;
  imgSep1.alt = consolaInfo[0].altImgSep;
  imgSep2.src = consolaInfo[0].imgSepSrc;
  imgSep2.alt = consolaInfo[0].altImgSep;
  textSep.innerText = consolaInfo[0].txtSep;
  separator.appendChild(imgSep1);
  separator.appendChild(textSep);
  separator.appendChild(imgSep2);
  gamesContainer.appendChild(separator);
  //RECORRE EL ARREGLO DE JUEGOS
  const childGamesContainer = document.createElement('div');
  for (const key in arrayGames) {
    //CREA LOS ELEMENTOS
    const divGame = document.createElement('div');
    const imgGame = document.createElement('img');
    const parrafo = document.createElement('p');
    // ASIGNA LAS CLASES E INICIALIZA ATRIBUTOS
    childGamesContainer.classList.add(
      'd-flex',
      'flex-wrap',
      'justify-content-start',
      'contenedor_portadas_tienda'
    );
    divGame.classList.add(
      'd-flex',
      'flex-wrap',
      'flex-column',
      'mb-3',
      'div_img_tienda'
    );
    const game = arrayGames[key];
    imgGame.classList.add('img_portadas');
    imgGame.src = game.imagenSrc;
    imgGame.alt = game.titulo;
    parrafo.innerHTML = `Género: ${game.genero} <br />
    Precio: ${game.precio} <br />`;
    //EMPARENTA LOS ELEMENTOS
    divGame.appendChild(imgGame);
    divGame.appendChild(parrafo);
    childGamesContainer.appendChild(divGame);
    asignarEventClickDetalles(divGame, game, consolaInfo);
  }
  gamesContainer.appendChild(childGamesContainer);
}

async function identificarConsola(btnid) {
  let consolaInfo = {};
  const juegosPorConsolaR = await fetch('./json/videojuegos.json');
  const juegosPorConsola = await juegosPorConsolaR.json();
  //IDENTIFICA QUE BOTON FUE PRESIONADO
  switch (btnid) {
    case 'btnPS3':
      //ESPARCE LA PROPIEDAD EL OBJETO juegosPorConsola ADECUADA PARA LA SELECCION
      const arrayGamesPs3 = {
        ...juegosPorConsola.ps3,
      };
      ///CREA UN OBJETO CON LOS DATOS DE LA CONSOLA
      consolaInfo = {
        ...juegosPorConsola.logoPS3,
      };
      showGames(arrayGamesPs3, consolaInfo);
      break;
    case 'btnPS4':
      const arrayGamesPs4 = {
        ...juegosPorConsola.ps4,
      };
      consolaInfo = {
        ...juegosPorConsola.logoPS4,
      };
      showGames(arrayGamesPs4, consolaInfo);
      break;
    case 'btnXONE':
      const arrayGamesXONE = {
        ...juegosPorConsola.xone,
      };
      consolaInfo = {
        ...juegosPorConsola.logoXONE,
      };
      showGames(arrayGamesXONE, consolaInfo);
      break;
  }
}
function asignarEventClickDetalles(divGame, game, consolaInfo) {
  const gameData = game;
  divGame.addEventListener('click', function () {
    loadDetails(gameData, consolaInfo);
  });
}
//FUNCION QUE CAMBIA EL CONTENIDO MAIN DEL HTML(SPA)
function cambiarPage(newPage) {
  const containerMain = document.querySelector('#mainContainer');
  containerMain.innerHTML = ' ';
  containerMain.innerHTML = newPage;
}

//EVENTOS DEL INDEX
const aPS4 = document.querySelector('#aTiendaPS4');
aPS4.addEventListener('click', function () {
  loadTienda();
  identificarConsola('btnPS4');
});

const aXONE = document.querySelector('#aTiendaXONE');
aXONE.addEventListener('click', function () {
  loadTienda();
  identificarConsola('btnXONE');
});

//EVENTOS DEL HEADER Y FOOTER
const aIndex = document.querySelector('#aIndex');
aIndex.addEventListener('click', function () {
  authPages(loadIndex);
});
const aTienda = document.querySelector('#aTienda');
aTienda.addEventListener('click', function () {
  authPages(loadTienda);
  identificarConsola('btnPS4');
});
const aLogin = document.querySelector('#aLogin');
aLogin.addEventListener('click', function () {
  loadLogin();
});
const aLogup = document.querySelector('#aLogup');
aLogup.addEventListener('click', function () {
  loadLogup();
});
const aAboutUs = document.querySelectorAll('.aAboutUs');
aAboutUs.forEach((el) => {
  el.addEventListener('click', function () {
    loadAboutUs();
  });
});

function authPages(pageToLoad) {
  const jwt = checkJwtExist();
  !jwt ? loadLogin() : pageToLoad();
}
