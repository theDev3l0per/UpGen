function s() {
    localStorage.setItem("data",JSON.stringify(app.player))
}

function l() {
    data = JSON.parse(localStorage.getItem("data"))
    for (var key in data) {
        if (!data.hasOwnProperty(key)) continue;
        if (typeof data[key] == "object") {
            for (var key1 in data[key]) {
                if (!data[key].hasOwnProperty(key1)) continue;
                if (typeof data[key][key1] == "object") {
                    for (var key2 in data[key][key1]) {
                        if (!data[key][key1].hasOwnProperty(key2)) continue;
                        if (typeof data[key][key1][key2] == "object") {
                            for (var key3 in data[key][key1][key2]) {
                                if (!data[key][key1][key2].hasOwnProperty(key3)) continue;
                                if (typeof data[key][key1][key2][key3] == "object") {
                
                                }
                                else {
                                    app.player[key][key1][key2][key3] = data[key][key1][key2][key3]
                                }
                            }
                        }
                        else {
                            app.player[key][key1][key2] = data[key][key1][key2]
                        }
                    }
                }
                else {
                    app.player[key][key1] = data[key][key1]
                }
            }
        }
        else {
            app.player[key] = data[key]
        }
    }
}



