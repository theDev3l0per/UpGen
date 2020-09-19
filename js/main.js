const app = new Vue({
    el:"#app",
    data: {
        player: {
            tab:"generator",
            points: new Decimal(10),
            gens:0
        }
    }
})
var gameloop = setInterval(loop,50)
var saveloop = setInterval(save,10000)

function loop() {

}

function resetgame() {
    app.player = {
        tab:"generator",
        points: new Decimal(10),
        gens:0
    }
    save()
}
