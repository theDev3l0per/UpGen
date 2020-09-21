function buyup1() {
    app.player.upgrades.one.amt = new Decimal(app.player.upgrades.one.amt).add(1)
    app.player.points = app.player.points.sub(app.player.upgrades.one.cost)
    app.player.upgrades.one.cost = new Decimal(app.player.upgrades.one.cost).mul(2)
}

function canbuy1() {
    value = (new Decimal(app.player.points).lessThan(app.player.upgrades.one.cost))
    return value
}