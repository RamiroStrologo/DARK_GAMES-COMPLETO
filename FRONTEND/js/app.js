window.onload = async () => {
  const jwtExist = checkJwtExist();
  if (!jwtExist) loadLogin();
  else {
    authJwt(jwtExist);
    loadTienda();
  }
};

//FUNCION QUE CAMBIA EL CONTENIDO MAIN DEL HTML(SPA)
function cambiarPage(newPage) {
  const containerMain = document.querySelector('#mainContainer');
  containerMain.innerHTML = ' ';
  containerMain.innerHTML = newPage;
}

//EVENTOS DEL HEADER Y FOOTER
const aTienda = document.querySelector('#aTienda');
aTienda.addEventListener('click', function () {
  loadTienda();
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
const aCart = document.querySelector('#aCart');
aCart.addEventListener('click', function () {
  loadCart();
});

//VERIFICA LA EXISTENCIA DE UN JWT
function authPages(pageToLoad) {
  const jwt = checkJwtExist();
  !jwt ? loadLogin() : pageToLoad();
}
