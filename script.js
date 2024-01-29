
const dat = fetch("https://restcountries.com/v3.1/all").then(res => res.json()).then(data => {

  let dis = ""

  for (i = 0; i < data.length; i++) {


    dis += `<div class="card card-header card-body col-lg-3 col-sm-12 m-2 border-2 border-primary ">
    <h4 class="border border-2 rounded-3 bg-dark text-white p-1">${data[i].name.common}</h4>
    
    <img src="${data[i].flags.png}" alt="${data[i].name.common}">
    <h5> Capital : ${data[i].capital}</h5>
    <h5> Region : ${data[i].region}</h5>
    <h5> Country Code : ${data[i].car.signs}</h5>
    <button id="${i}" onclick="getweather(${data[i].latlng[0]},${data[i].latlng[1]},${i})" class="border border-primary rounded">click for weather</button>
    
</div>`
  }


  document.getElementById("insert").innerHTML = dis;
})


function getweather(lat, lng, Id) {
  //let key=952d9a28df82cee7a7515fab4d1bcdb7;


  let see = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=952d9a28df82cee7a7515fab4d1bcdb7
`).then(val1 => val1.json()).then(val2 => {


      document.getElementById(`${Id}`).innerHTML = `
  <h5>Name : ${val2.name}</h5>
 <h6> temprature : ${val2.main.temp} <sup>0</sup>F</h6>
 <h6> humidity : ${val2.main.humidity} %</h6>
 <h6> weather : ${val2.weather[0].main}</h6>
 <h6> wind-speed : ${val2.wind.speed} mph</h6>

  `
      document.getElementById(`${Id}`).addEventListener("mouseleave", () => { document.getElementById(`${Id}`).innerText = "click for weather" })



    })

}



