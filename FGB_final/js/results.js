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