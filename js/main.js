const app = new Vue({
    el:"#app",
    data: {
        player: {
            tab:"generator",
            points: new Decimal(10),
            gens:0,
            upgrades: {
                one: {
                    amt: 0,
                    cost: 10
                }
            }
        },
        canbuys: {
            canbuy1: function () {canbuy1()}
        }
    }
})
var gameloop = setInterval(loop,50)
var saveloop = setInterval(save,10000)

function loop() {
    if (app.player.gens > 0) {
        addpoints()
    }
}

function resetgame() {
    app.player = {
        tab:"generator",
        points: new Decimal(10),
        gens:0,
        upgrades: {
            one: {
                amt: new Decimal(0),
                cost: 10
            }
        }
    }
    save()
}
