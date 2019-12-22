var eu_19_20_a = [];
var eu_19_20_b = [];
var eu_19_20_c = [];
var eu_19_20_d = [];

class Eu_19_20 {
    constructor(place, country, games,
                bw, b1, b2, b3, b4, w, d, l, score) {
        this.place = place;
        this.country = country;
        this.country_flag = Country.cf_map_m.get(country);
        this.games = games;
        this.bw = bw;
        this.b1 = b1;
        this.b2 = b2;
        this.b3 = b3;
        this.b4 = b4;
        this.w = w;
        this.d = d;
        this.l = l;
        this.score = score;
    }
}

$.get('results/eu_19_20_a.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let item = new Eu_19_20(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8],
                f[9], f[10], f[11]);
            eu_19_20_a.push(item);
        }
    );
});
$.get('results/eu_19_20_b.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let item = new Eu_19_20(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8],
                f[9], f[10], f[11]);
            eu_19_20_b.push(item);
        }
    );
});
$.get('results/eu_19_20_c.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let item = new Eu_19_20(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8],
                f[9], f[10], f[11]);
            eu_19_20_c.push(item);
        }
    );
});
$.get('results/eu_19_20_d.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let item = new Eu_19_20(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8],
                f[9], f[10], f[11]);
            eu_19_20_d.push(item);
        }
    );
});

var wagcs_res = [];

class WagcResultItem {
    constructor(number, year, country, city,
                _1_name, _1_country, _2_name, _2_country, _3_name, _3_country) {
        this.number = number;
        this.year = year;
        this.country = country;
        this.country_flag = Country.cf_map_m.get(country);
        this.city = city;
        this._1_name = _1_name;
        this._1_country = _1_country;
        this._1_country_flag = Country.cf_map_m.get(_1_country);
        this._2_name = _2_name;
        this._2_country = _2_country;
        this._2_country_flag = Country.cf_map_m.get(_2_country);
        this._3_name = _3_name;
        this._3_country = _3_country;
        this._3_country_flag = Country.cf_map_m.get($.trim(_3_country));
    }
}

$.get('results/wagcs_res.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let item = new WagcResultItem(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8],
                f[9]);
            wagcs_res.push(item);
        }
    );
});

var uep_res = [];

class EupResultItem {
    constructor(number, year, _1_country, _1_name, country, city) {
        this.number = number;
        this.year = year;
        this._1_country = _1_country;
        this._1_country_flag = Country.cf_map_m.get(_1_country);
        this._1_name = _1_name;
        this.country = country;
        this.country_flag = Country.cf_map_m.get(country);
        this.city = city;
    }
}

$.get('results/eu.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let item = new EupResultItem(
                f[0], f[1], f[2], f[3], f[4], f[5]);
            uep_res.push(item);
        }
    );
});

var uec_res = [];

class EucResultItem {
    constructor(number, year, country, city, _1_country, _2_country, _3_country) {
        this.number = number;
        this.year = year;
        this.country = country;
        this.country_flag = Country.cf_map_m.get(country);
        this.city = city;
        this._1_country = _1_country;
        this._1_country_flag = Country.cf_map_m.get(_1_country);
        this._2_country = _2_country;
        this._2_country_flag = Country.cf_map_m.get(_2_country);
        this._3_country = _3_country;
        this._3_country_flag = Country.cf_map_m.get($.trim(_3_country));
    }
}

$.get('results/euc.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let item = new EucResultItem(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6]);
            uec_res.push(item);
        }
    );
});

