/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const output = document.querySelector("#output");

fetch("./cars.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const div = document.createElement("div");

      const h3 = document.createElement("h3");
      const h3Text = document.createTextNode(element.brand);
      const ul = document.createElement("ul");

      element.models.forEach((element) => {
        const li = document.createElement("li");
        li.append(element);
        ul.append(li);
      });

      h3.append(h3Text);

      div.append(h3, ul);
      output.append(div);
    });
  });

const ENDPOINT = "cars.json";
