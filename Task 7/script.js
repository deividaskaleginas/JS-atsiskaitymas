/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

showObjectKeys = (object) => {
  const keys = Object.keys(object);
  console.log(keys);
};

showObjectKeys(audi);
