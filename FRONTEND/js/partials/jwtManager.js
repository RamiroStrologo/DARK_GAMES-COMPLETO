function checkJwtExist() {
  const jwt = localStorage.getItem('jwt');
  return jwt ? jwt : false;
}

function saveJwt(jwt) {
  const ok = localStorage.setItem('jwt', jwt);
  return ok;
}
