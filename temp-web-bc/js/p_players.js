class Player {
    constructor(full_name, birth_date, birth_city, score){
        [this.family, this.name, this.futher] = full_name.split(" ");
        this.full_name = full_name;
        this.birth_date = birth_date;
        this.birth_city = birth_city;
        this.score = score;
    }
}

const players = [
    new Player("Бусько Илья Владимирович", "21.08.1987",
        "Витебск", "2209"),
    new Player("Грунковский Юрий Отчество", "11.08.хххх",
        "Минск", "1743")
]

function create_player_table(table_id) {
    var tbody = $("<tbody></tbody>");
    $.each(players, function (i) {
        var c_number = $("<th></th>").text(i);
        var c_full_name = $("<th></th>").text(players[i].full_name);
        var c_city = $("<th></th>").text(players[i].birth_city);
        var c_score = $("<th></th>").text(players[i].score);
        var row = $("<tr></tr>");
        row.append(c_number);
        row.append(c_full_name);
        row.append(c_city);
        row.append(c_score);
        tbody.append(row);
    });
    $(table_id).append(tbody);
}