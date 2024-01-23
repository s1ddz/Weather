let searchBtn= document.querySelector(".searchBtn");
let cityName= document.querySelector(".cityName");
let inputcity = document.querySelector(".searchBar");
let cityTemp= document.querySelector(".cityTemp");
let cityWeather= document.querySelector(".cityWeather");
let searchSection= document.querySelector(".searchSection");
let weatherCard= document.querySelector(".weatherCard");
let cityHumdity= document.querySelector(".cityHumdity");
let weatherIcon= document.querySelector(".weathericon")


async function checkWeather(city) {
  const apikey="33bf369bc47bb49abcda4773205b3ff2";
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const weatherData= await fetch(`${url}`).then(response=>response.json());

  if(weatherData.cod===`400`){
    console.log("enter value");
    return;
  }

  searchSection.style.display="none";
  weatherCard.style.display="inline";
  cityName.innerHTML=city.toUpperCase();
  cityTemp.innerHTML=Math.floor(weatherData.main.temp-273)+"°";
  cityWeather.innerHTML=weatherData.weather[0].main;
  cityHumdity.innerHTML=weatherData.main.humidity+" % humidity";
  weatherIcon.src="./icons/"+weatherData.weather[0].icon+".png"
}


searchBtn.addEventListener("click",()=>{
    
    checkWeather(inputcity.value)
      
});

// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=33bf369bc47bb49abcda4773205b3ff2
