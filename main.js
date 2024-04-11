const apiKey = "930b4dd5588d4fa29e791355240904";
const apiURL = "https://api.weatherapi.com/v1/current.json";

const searchButton = document.getElementById("search-button");
const weather = document.getElementById("weather_icon");
console.log(searchButton);


searchButton.addEventListener("click", () => {
    const search = document.getElementById("input-box").value;
    weatherCheck(search)
        .then((data) => {
            // console.log(data);
           let n= document.getElementById("city").innerHTML = data.location.name;
            document.getElementById("temp").innerHTML = data.current.temp_c + "°C";
            document.getElementById("humidity").innerHTML = data.current.humidity + "%"; 
            document.getElementById("air").innerHTML = data.current.wind_kph + "Km/h"; 

            if(data.current.condition.text === "Mist"){
                weather.src = "../images/mist.png";
            }
            else if(data.current.condition.text === "Clear"){
                weather.src = "../images/clear.png";
            }
            else if(data.current.condition.text === "Clouds"){
                weather.src = "../images/clouds.png";
            }
            else if(data.current.condition.text === "Drizzle"){
                weather.src = "../images/drizzle.png";
            }
            else if(data.current.condition.text === "Haze"){
                weather.src = "../images/haze.png";
            }
            else if(data.current.condition.text === "Rainy"){
                weather.src = "../images/rainy.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        })
        .catch((error) => {
            console.log(error);
            document.querySelector(".error").style.display = "block";
               console.log(document.querySelector(".error").style.display);
            document.querySelector(".weather").style.display = "none";
        });
});

const weatherCheck = (search) => {
    return new Promise((resolve, reject) => {
        const url = `${apiURL}?key=${apiKey}&q=${search}`;
        fetch(url)
            .then(dataJSON => dataJSON.json())
            .then(data => resolve(data))
            .catch(error => reject(error));

    });
}
