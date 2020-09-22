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
                    cost: 10,
                }
            }
        },
        upgradefuncs: {
            one: {
                canbuy1: function () {return canbuy1()},
                currently: function () {
                    val = new Decimal(1.5)
                    return val.pow(app.player.upgrades.one.amt)
                }
            }
        },
        decimal: function(x) {return new Decimal(x)} 
    }
})
l()
var gameloop = setInterval(loop,50)
var saveloop = setInterval(s,10000)

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
                cost: 10,
            }
        }
    }
    s()
}
