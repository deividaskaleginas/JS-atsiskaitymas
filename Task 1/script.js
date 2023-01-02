/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const answers = document.querySelector("#output");
const submitForm = document.querySelector("#submit");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  answers.innerHTML = "";

  const weightKg = e.target.elements.search.valueAsNumber;
  const weightLb = weightKg * 2.2046;
  const weightG = weightKg / 0.001;
  const weightOz = weightKg * 35.274;

  const answersToLbP = document.createElement("p");
  const answersToGP = document.createElement("p");
  const answersToOzP = document.createElement("p");

  const answerToLbText = document.createTextNode(`${weightLb} lb`);
  const answerToGText = document.createTextNode(`${weightG} g.`);
  const answerToOzText = document.createTextNode(`${weightOz} oz`);

  answersToLbP.append(answerToLbText);
  answersToGP.append(answerToGText);
  answersToOzP.append(answerToOzText);

  answers.append(answersToLbP, answersToGP, answersToOzP);
});
