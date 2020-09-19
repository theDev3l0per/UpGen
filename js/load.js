function save() {
    localStorage.setItem("data",JSON.stringify(app.player))
}
function load() {
    data = JSON.parse(localStorage.getItem("data"))
    
}