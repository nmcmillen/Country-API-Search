//https://restcountries.com/v3.1/all

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  let code = form.elements.value.value;
  event.preventDefault();
  getData(code);
});

function isUndefined(result) {
  if (result === undefined) {
    return '';
  }
  return result;
}

function getData(code) {
  fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
      let country = ``;
      for (let i = 0; i < data.length; i++) {
        //console.log(data.Countries[i].CountryCode)
        if (data[i].name.common === code) {
          country += `<div>
            <h2> Welcome to ${data[i].name.common}</h2>
            <img class="flag" src="${data[i].flags.png}">
            <table>
              <tr>
                <td>Capital:</td>
                <td>${isUndefined(data[i].capital)}
              </tr>
              <tr>
                <td>Population:</td>
                <td>${isUndefined(data[i].population)}</td>
              </tr>
              <tr>
                <td>Area:</td>
                <td>${isUndefined(data[i].area)} km&sup2</td>
              </tr>
              <tr>
                <td>Bordering Countries:</td>
                <td>${isUndefined(data[i].borders)}</td>
              </tr>
              <tr>
                <td>Subregion:</td> 
                <td>${isUndefined(data[i].subregion)}</td>
              </tr>
            </table>
          </div>`;
        }
      }
      document.getElementById("countryStats").innerHTML = country;
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1920x1080/?" + code + "')";
    });
}
