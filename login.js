// Insert your code here

//Création d'un compte utilisateur
document.querySelector("#register").addEventListener("click", () => {
  const userName = document.querySelector("#registerName").value;
  const userEmail = document.querySelector("#registerEmail").value;
  const userPassword = document.querySelector("#registerPassword").value;

  fetch("http://localhost:3000/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userName, //: userName,
      userEmail, //: userEmail,
      userPassword, //: userPassword,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.result === true) {
        window.location.assign("http://127.0.0.1:5500/frontend/index.html");
        return true;
      } else {
        console.log(data.error);
        return false;
      }
    });
});

//Connection de l'utilisateur
document.querySelector("#connection").addEventListener("click", () => {
  const userEmail = document.querySelector("#registerEmail").value;
  const userPassword = document.querySelector("#registerPassword").value;

  fetch("http://localhost:3000/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userEmail, //: userEmail,
      userPassword, //: userPassword,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      if (data.result === true) {
        window.location.assign("http://127.0.0.1:5500/frontend/index.html");
        return true;
      } else {
        console.log(data.error);
        return false;
      }
    });
});