var players = [];

class Player {
    constructor(place, name, city, rank, score) {
        this.place = place;
        this.name = name;
        this.city = city;
        this.rank = rank;
        this.score = score;
    }
}

$.get('results/players.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Player(
                f[0], f[1], f[2], f[3], f[4]);
            players.push(player);
        }
    );
});


