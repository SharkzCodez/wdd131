let currentyear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentyear;

let lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastModified

//var temp = 22;
//var wSpeed = 3;
//var windchill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

//var windchill=Math.round(windchill);
//document.getElementById("windchill").innerHTML=windchill;

const windSpeed = 3;
const temperature = 22;
const windchill = document.querySelector("#windchill");

const windchillOperation = function(temperature, windSpeed){
    if(temperature <=10 && windSpeed > 4.8)
        {
            let windchill = 13.12 + (0.6215*temperature) - (11.37*(windSpeed**0.16)) + (0.3965*temperature*(windSpeed**0.16));
            return windchill.toFixed(2);
        }
    else
    {
        return "N/A";
    }
}
windchill.innerHTML = `<span class="highlight">${windchillOperation(temperature, windSpeed)}</span>`;