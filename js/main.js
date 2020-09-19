const app = new Vue({
    el:"#app",
    data: {
        player: {
            tab:"generator"
        }
    }
})
var gameloop = setInterval(loop,50)
var saveloop = setInterval(save,10000)

function loop() {

}
