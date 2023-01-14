const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6466d06679msh0ce67051fcb2209p1c1464jsn73570a9aece2',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
// alert(document.getElementById("temp_info").innerHTML);
// console.log(document.getElementById("wind_speed_info").innerHTML);
const getWeather = (city)=>{
    document.getElementById("cityName").innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        // document.getElementById("feel_like").innerHTML = response.feels_like;
        // document.getElementById("humidity").innerHTML = response.humidity;
        // document.getElementById("max_temp").innerHTML = response.max_temp
        // document.getElementById("min_temp").innerHTML = response.min_temp
        // document.getElementById("sunrise").innerHTML = response.sunrise
        // document.getElementById("sunset").innerHTML = response.sunset
        // document.getElementById("temp").innerHTML = response.temp
        // document.getElementById("wind_degrees").innerHTML = response.wind_degrees
        // document.getElementById("wind_speed").innerHTML = response.wind_speed

        // document.getElementById("temp_info").innerHTML = response.temp;
        
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        max_temp.innerHTML = response.max_temp;
        min_temp.innerHTML = response.min_temp;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
        temp.innerHTML = response.temp;
        document.getElementById("temp_info").innerHTML = response.temp;
        //document.getElementById("wind_speed_info").innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        wind_speed.innerHTML = response.wind_speed;
    })
    .catch(err => console.error(err));
}
document.getElementById("searchbtn").addEventListener("click", function (e) {
    e.preventDefault();
    let target = document.getElementById("search_filed").value;
    //alert(target)
    getWeather(target);
});
getWeather("Delhi");
