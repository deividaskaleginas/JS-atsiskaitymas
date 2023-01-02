/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
const button = document.querySelector("#btn");
const message = document.querySelector("#message");
const output = document.querySelector("#output");
button.addEventListener("click", (e) => {
  e.preventDefault();
  button.setAttribute("class", "none");
  message.setAttribute("class", "none");

  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        const div = document.createElement("div");
        const p = document.createElement("p");
        const img = document.createElement("img");
        const pText = document.createTextNode(element.login);

        p.append(pText);
        img.setAttribute("src", `${element.avatar_url}`);
        div.append(p, img);
        output.append(div);
      });
    });
});
