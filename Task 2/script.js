/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let btnClicked = 0;
const btn__state = document.querySelector("#btn__state");

document.querySelector("#btn__element").addEventListener("click", (e) => {
  e.preventDefault();
  btn__state.innerHTML = "";
  btnClicked += 1;
  const buttonClicketText = document.createTextNode(`${btnClicked}`);
  btn__state.append(buttonClicketText);
});
