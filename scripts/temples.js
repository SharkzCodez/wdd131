document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = new Date();

const today = new Date();

//let lastModified = new Date(document.lastModified);
lastModified.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US",
    {
        dateStyle: "lastModified"

    }
).format(today)}`;

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }