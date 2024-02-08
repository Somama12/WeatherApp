const apiKey="07d00ee8db9f96377dfed1b9ff556fa2";


const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(city){
    var response = await fetch(apiUrl+city+`&appid=${apiKey}`)
    var data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=Math.round(data.main.temp)+`°C`;
    document.querySelector(".humidity").innerHTML=data.main.humidity+`%`;
    document.querySelector(".wind").innerHTML=data.wind.speed+` km/hr`;


    
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})

