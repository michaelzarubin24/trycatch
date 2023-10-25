document.addEventListener("DOMContentLoaded", () => {
  const people = document.querySelector("#people");
  const starships = document.querySelector("#starships");
  const vehicles = document.querySelector("#vehicles");
  const planets = document.querySelector("#planets");
  const dataContainer = document.querySelector("#data-container");

  async function getData(end) {
    try {
      const response = await fetch(`https://swapi.dev/api/${end}`);
      const data = await response.json();

      if (data.results && Array.isArray(data.results)) {
        dataContainer.innerHTML = "";

        for (let i = 0; i < data.results.length; i++) {
          const item = document.createElement("div");
          item.textContent = JSON.stringify(data.results[i]);
          dataContainer.appendChild(item);
        }
        return data;
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  starships.addEventListener("click", () => {
    getData("starships");
  });

  vehicles.addEventListener("click", () => {
    getData("vehicles");
  });

  planets.addEventListener("click", () => {
    getData("planets");
  });

  people.addEventListener("click", () => {
    getData("people");
  });
});
