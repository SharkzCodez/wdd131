const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = "Last modified: " + document.lastModified;


const products = [
    {
      id: "fc-1888",
      name: "Flux capacitor",
      avgeragerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Warp equalizer",
      averagerating: 5.0
    }
  ];
  
  const productSelect = document.getElementById("product");
  
  for (const product of products) {
      option = new Option(product.name, product.id);
      productSelect.appendChild(option);
  }