let weather = {
    "apikey": "285c037e2c52620f47e56f724ed4e967",
    fetchw: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=285c037e2c52620f47e56f724ed4e967")
            .then((response) => response.json())
            .then((data) => this.displayw(data));
    },
    displayw: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);


        document.querySelector(".place").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".details").innerText = description;
        document.querySelector(".windspeed").innerText = " Wind Speed: " + speed + "Km/hr";
        document.querySelector(".humidity").innerText = " Humidity: " + humidity + "%";
        document.querySelector(".temp").innerText = (temp - 273.15).toFixed(2) + "° C";
    },
    search: function () {
        this.fetchw(document.querySelector(".sbar").value);
    }
};

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    weather.search();
});
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();

});
