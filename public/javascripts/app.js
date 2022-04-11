const primus = Primus.connect("/", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
        , min: 500 // Number: The minimum delay before we try reconnect.
        , retries: 10 // Number: How many times we should try to reconnect.
    }
});

primus.on("data", data => {
    let team = "." + data.team;
    let points = data.points;
    //console.log(team, points)
    document.querySelector(team).innerHTML = points;
});

document.querySelector(".submit").addEventListener("click", () => {
    let team = document.querySelector(".select").value;
    let points = document.querySelector(".point").value;
    primus.write({ team: team, points: points });
})