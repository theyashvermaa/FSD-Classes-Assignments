const btn = document.getElementById("btn");
const spinner = document.getElementById("spinner");

btn.addEventListener("click", getWeather);

function getWeather() {

    spinner.classList.remove("hidden");

    const delhi = fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true"
    );

    const mumbai = fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&current_weather=true"
    );

    const bangalore = fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true"
    );

    Promise.all([delhi, mumbai, bangalore])

        .then(responses => Promise.all(responses.map(res => res.json())))

        .then(data => {

            spinner.classList.add("hidden");

            const [delhiData, mumbaiData, bangaloreData] = data;

            document.getElementById("delhi").innerHTML =
                `Delhi <br> 🌡 ${delhiData.current_weather.temperature}°C`;

            document.getElementById("mumbai").innerHTML =
                `Mumbai <br> 🌡 ${mumbaiData.current_weather.temperature}°C`;

            document.getElementById("bangalore").innerHTML =
                `Bangalore <br> 🌡 ${bangaloreData.current_weather.temperature}°C`;

        })

        .catch(err => {

            spinner.classList.add("hidden");

            console.log("Error:", err);

            document.querySelectorAll(".card").forEach(card => {
                card.innerHTML = "⚠️ Weather unavailable";
            });

        });
}