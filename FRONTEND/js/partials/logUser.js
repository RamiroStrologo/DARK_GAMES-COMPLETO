//FUNCION QUE REGISTRA AL USUARIO
async function logUp(data) {
  const jsonData = JSON.stringify(data);
  const response = await fetch('http://localhost:8080/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonData,
  });
  return response.ok ? true : false;
}

async function logIn(data) {
  const jsonData = JSON.stringify(data);
  const response = await fetch('http://localhost:8080/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonData,
  });
  if (response.ok) {
    const jwt = await response.json();
    return jwt;
  }
  return false;
}
