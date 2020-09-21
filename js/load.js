function s() {
    localStorage.setItem("data",JSON.stringify(app.player))
}
function l() {
    data = JSON.parse(localStorage.getItem("data"))
    if (typeof data.tab != 'undefined') {app.player.tab = data.tab};
    if (typeof data.points != 'undefined') {app.player.points = new Decimal(data.points)};
    if (typeof data.gens != 'undefined') {app.player.gens = data.gens};
    if (typeof data.value != 'undefined') {app.player.value = new Decimal(data.value)};
    if (typeof data.upgrades != 'undefined') {app.player.upgrades = data.upgrades};
}

function save() {
    localStorage.data = [app.player]
}

function load() {
    return localStorage.data[0]
}

