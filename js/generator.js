function buyGen() {
    if (app.player.points.greaterThanOrEqualTo(10)) {
        app.player.points = app.player.points.sub(10)
    }
    app.player.gens++
}

function addpoints() {
    value = new Decimal(1).div(20)
    app.player.points = app.player.points.add(value)
}