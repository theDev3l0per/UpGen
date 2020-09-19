function save() {
    localStorage.setItem("data",app.player)
}
function load() {
    data = localStorage.getItem("data")
    return data
}