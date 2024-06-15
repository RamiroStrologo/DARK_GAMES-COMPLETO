async function getGames(filters = null) {
  const filtersToAdd = { ...filters };
  const response = await fetch(
    `http://localhost:8080/api/products?plataform=${filtersToAdd.plataform}`
  );
  if (!response.ok) {
    return false;
  }
  const data = await response.json();

  return data;
}

//MUESTRA LOS JUEGOS EN EL CONTENEDOR PRINCIPAL
function showGames(arrayGames) {
  const gamesContainer = document.querySelector('#section_juegos_tienda');

  gamesContainer.innerHTML = '';
  const childGamesContainer = document.createElement('div');
  for (const key in arrayGames.data.docs) {
    const divGame = document.createElement('div');
    const imgGame = document.createElement('img');
    const parrafo = document.createElement('p');

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
    const game = arrayGames.data.docs[key];
    imgGame.classList.add('img_portadas');
    imgGame.src = game.thumbnails;
    imgGame.alt = game.title;
    parrafo.innerHTML = `Género: ${game.genre} <br />
        Precio: ${game.price} <br />`;
    divGame.appendChild(imgGame);
    divGame.appendChild(parrafo);
    childGamesContainer.appendChild(divGame);
    divGame.addEventListener('click', function () {
      loadDetails(game);
    });
  }
  gamesContainer.appendChild(childGamesContainer);
}

//VER COMO SE PUEDE ADAPTAR
// function createSeparator(gamesContainer) {
//   //CREO EL SEPARADOR, ASIGNO CLASES, INICIALIZO ATRIBUTOS Y RELACIONO LOS ELEMENTOS(ADAPTAR)///////////////!!!!!!!!!!!
//   const separator = document.createElement('div');
//   const imgSep1 = document.createElement('img');
//   const imgSep2 = document.createElement('img');
//   const textSep = document.createElement('h2');
//   separator.classList.add(
//     'mt-3',
//     'mb-2',
//     'h2_tienda',
//     'd-flex',
//     'justify-content-evenly'
//   );
//   separator.id = 'ps3_games';
//   imgSep1.src = consolaInfo[0].imgSepSrc;
//   imgSep1.alt = consolaInfo[0].altImgSep;
//   imgSep2.src = consolaInfo[0].imgSepSrc;
//   imgSep2.alt = consolaInfo[0].altImgSep;
//   textSep.innerText = consolaInfo[0].txtSep;
//   separator.appendChild(imgSep1);
//   separator.appendChild(textSep);
//   separator.appendChild(imgSep2);
//   gamesContainer.appendChild(separator);
// }
