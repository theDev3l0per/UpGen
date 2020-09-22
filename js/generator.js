function buyGen() {
    if (app.player.points.greaterThanOrEqualTo(10)) {
        app.player.points = app.player.points.sub(10)
    }
    app.player.gens++
}

function addpoints() {
    up1 = new Decimal(1.5).pow(app.player.upgrades.one.amt)
    value = new Decimal(1).div(20).mul(up1)
    app.player.points = new Decimal(app.player.points).add(value)
}