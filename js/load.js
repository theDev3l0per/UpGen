function save() {
    localStorage.setItem("data",JSON.stringify(app.player))
}
function load() {
    data = JSON.parse(localStorage.getItem("data"))
    if (typeof data.tab !== 'undefined') {app.player.tab = data.tab}
}

