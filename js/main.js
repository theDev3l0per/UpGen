const app = new Vue({
    el:"#app",
    data: {
        player: {
            tab:"generator",
            points: new Decimal(10),
            gens:0,
            value: new Decimal(1)
        }
    }
})
var gameloop = setInterval(loop,50)
var saveloop = setInterval(save,10000)

function loop() {
    if (app.player.gens == 1) {
        app.player.points = app.player.points.add(app.player.value.div(20))
    }
}

function resetgame() {
    app.player = {
        tab:"generator",
        points: new Decimal(10),
        gens:0,
        value: new Decimal(1)
    }
    save()
}
