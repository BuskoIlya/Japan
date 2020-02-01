// ----------------------
// Кубок Минска 2018
// ----------------------
class Player_2018_03_23 {
    constructor(place, player, city, score,
                game1, game2, game3, game4,
                total, mms, sos, sdos, sosos) {
        this.place = place;
        this.player = player
        this.city = city;
        this.score = score;
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.game4 = game4;
        this.total = total;
        this.mms = mms;
        this.sos = sos;
        this.sdos = sdos;
        this.sosos = sosos;
    }
}

var results_2018_03_23 = [];

$.get('results/2018_03_23.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2018_03_23(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12]);
            results_2018_03_23.push(player);
        }
    );
});
// ------------------------
// Чемпионат Беларуси 2018
// ------------------------
class Player_2018_11_30 {
    constructor(place, player, city, score,
                game1, game2, game3, game4,
                total, sos, sdos) {
        this.place = place;
        this.player = player
        this.city = city;
        this.score = score;
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.game4 = game4;
        this.total = total;
        this.sos = sos;
        this.sdos = sdos;
    }
}

var results_2018_11_30 = [];

$.get('results/2018_11_30.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2018_11_30(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10]);
            results_2018_11_30.push(player);
        }
    );
});
// ------------------------------
// Кубок консула Китая 2019, СПб
// ------------------------------
class Player_2019_02_16 {
    constructor(place, player, city, score,
                game1, game2, game3, game4, game5, game6,
                total, buhg, berg) {
        this.place = place;
        this.player = player
        this.city = city;
        this.score = score;
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.game4 = game4;
        this.game5 = game5;
        this.game6 = game6;
        this.total = total;
        this.buhg = buhg;
        this.berg = berg;
    }
}

var results_2019_02_16 = [];

$.get('results/2019_02_16.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2019_02_16(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12]);
            results_2019_02_16.push(player);
        }
    );
});
// ----------------------
// Кубок Минска 2019
// ----------------------
class Player_2019_03_29 {
    constructor(place, player, city, score,
                game1, game2, game3, game4,
                total, sos, sdos, sosos) {
        this.place = place;
        this.player = player
        this.city = city;
        this.score = score;
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.game4 = game4;
        this.total = total;
        this.sos = sos;
        this.sdos = sdos;
        this.sosos = sosos;
    }
}

var results_2019_03_29 = [];

$.get('results/2019_03_29.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2019_03_29(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11]);
            results_2019_03_29.push(player);
        }
    );
});
// ----------------------
// Чемпионат мира 2019
// ----------------------
class Player_2019_05_30 {
    constructor(place, number, player, country,
                game1, game2, game3, game4,
                game5, game6, game7, game8,
                total, sos, sosos) {
        this.place = place;
        this.number = number;
        this.player = player
        this.country = country;
        this.country_flag = Country.cf_map_m.get(country);
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.game4 = game4;
        this.game5 = game5;
        this.game6 = game6;
        this.game7 = game7;
        this.game8 = game8;
        this.total = total;
        this.sos = sos;
        this.sosos = sosos;
    }
}

var results_2019_05_30 = [];

$.get('results/2019_05_30.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2019_05_30(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10],
                f[11], f[12], f[13], f[14]);
            results_2019_05_30.push(player);
        }
    );
});
// ----------------------------------
// Кубок Премьер Министра Кореи 2019
// ----------------------------------
class Player_2019_08_30 {
    constructor(place, number, country, player,
                game1, game2, game3, game4,
                game5, game6,
                total, sos, sosos) {
        this.place = place;
        this.number = number;
        this.player = player
        this.country = country;
        this.country_flag = Country.cf_map_m.get(country);
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.game4 = game4;
        this.game5 = game5;
        this.game6 = game6;
        this.total = total;
        this.sos = sos;
        this.sosos = sosos;
    }
}

var results_2019_08_30 = [];

$.get('results/2019_08_30.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2019_08_30(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10],
                f[11], f[12]);
            results_2019_08_30.push(player);
        }
    );
});

// ----------------------
// Belarus Study Open 2019
// ----------------------
class Player_2019_09_20 {
    constructor(place, player, city, rank,
                game1, game2, game3, total) {
        this.place = place;
        this.player = player
        this.city = city;
        this.rank = rank;
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.total = total;
    }
}

var results_2019_09_20 = [];

$.get('results/2019_09_20.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2019_09_20(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]);
            results_2019_09_20.push(player);
        }
    );
});

// ----------------------
// Осенний лист 2019
// ----------------------
class Player_2019_10_25_1 {
    constructor(place, player, city, rank, score,
                game1, game2, game3, game4, total, sos, sdos, sosos) {
        this.place = place;
        this.player = player
        this.city = city;
        this.rank = rank;
        this.score = score;
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.game4 = game4;
        this.total = total;
        this.sos = sos;
        this.sdos = sdos;
        this.sosos = sosos;
    }
}

class Player_2019_10_25_2 {
    constructor(place, player, city, rank, score,
                game1, game2, game3, total, sos, sdos, sosos) {
        this.place = place;
        this.player = player
        this.city = city;
        this.rank = rank;
        this.score = score;
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.total = total;
        this.sos = sos;
        this.sdos = sdos;
        this.sosos = sosos;
    }
}

var results_2019_10_25_1 = [];

$.get('results/2019_10_25_1.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2019_10_25_1(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7],
                f[8], f[9], f[10], f[11], f[12]);
            results_2019_10_25_1.push(player);
        }
    );
});

var results_2019_10_25_2 = [];

$.get('results/2019_10_25_2.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2019_10_25_2(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7],
                f[8], f[9], f[10], f[11]);
            results_2019_10_25_2.push(player);
        }
    );
});

var results_2019_10_25_3 = [];

$.get('results/2019_10_25_3.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2019_10_25_2(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7],
                f[8], f[9], f[10], f[11]);
            results_2019_10_25_3.push(player);
        }
    );
});

var results_2019_10_25_4 = [];

$.get('results/2019_10_25_4.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2019_10_25_2(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7],
                f[8], f[9], f[10], f[11]);
            results_2019_10_25_4.push(player);
        }
    );
});

// ------------------------
// Чемпионат Беларуси 2019
// ------------------------
class Player_2019_11_23 {
    constructor(place, player, city, score,
                game1, game2, game3, game4, game5,
                total, sos, sdos) {
        this.place = place;
        this.player = player
        this.city = city;
        this.score = score;
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.game4 = game4;
        this.game5 = game5;
        this.total = total;
        this.sos = sos;
        this.sdos = sdos;
    }
}

var results_2019_11_23 = [];

$.get('results/2019_11_23.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2019_11_23(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10],
                f[11]);
            results_2019_11_23.push(player);
        }
    );
});

// ----------------------
// 9-ый рождественский турнир
// ----------------------
class Player_2019_12_20_1 {
    constructor(place, player, city, rank,
                game1, game2, game3, game4, game5, total, mms, sos, sdos) {
        this.place = place;
        this.player = player
        this.city = city;
        this.rank = rank;
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.game4 = game4;
        this.game5 = game5;
        this.total = total;
        this.mms = mms;
        this.sos = sos;
        this.sdos = sdos;
    }
}

var results_2019_12_20_1 = [];

$.get('results/2019_12_20_1.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2019_12_20_1(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7],
                f[8], f[9], f[10], f[11], f[12]);
            results_2019_12_20_1.push(player);
        }
    );
});

class Player_2019_12_20_2 {
    constructor(place, player, city, rank,
                game1, game2, game3, game4, total, mms, sos, sdos) {
        this.place = place;
        this.player = player
        this.city = city;
        this.rank = rank;
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.game4 = game4;
        this.total = total;
        this.mms = mms;
        this.sos = sos;
        this.sdos = sdos;
    }
}

var results_2019_12_20_2 = [];

$.get('results/2019_12_20_2.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2019_12_20_2(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7],
                f[8], f[9], f[10], f[11]);
            results_2019_12_20_2.push(player);
        }
    );
});

// ----------------------
// 2020-01-24
// ----------------------
class Player_2020_01_24_1 {
    constructor(place, player, city, rank,
                game1, game2, game3, total, mms, sos, sdos) {
        this.place = place;
        this.player = player
        this.city = city;
        this.rank = rank;
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.total = total;
        this.mms = mms;
        this.sos = sos;
        this.sdos = sdos;
    }
}

var results_2020_01_24_1 = [];

$.get('results/2020_01_24_1.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player_2020_01_24_1(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7],
                f[8], f[9], f[10]);
            results_2020_01_24_1.push(player);
        }
    );
});