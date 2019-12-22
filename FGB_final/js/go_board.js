var current_game_path = '';

function load_match_2_board(game) {
    current_game_path = "test2.sgf";//game;
    html_in_div('html/go_board.html', '#main_id');
}

class Move {
    constructor(move_str) {
        this.color = move_str[0] == 'B' ? 'black' : 'white';
        this.coord = move_str.substr(2, 2);
    }
}

var types = "5444444444444444446" +
    "1000000000000000002" +
    "1000000000000000002" +
    "1009000000000009002" +
    "1000000000000000002" +
    "1000000000000000002" +
    "1000000000000000002" +
    "1000000000000000002" +
    "1000000000000000002" +
    "1009000000000009002" +
    "1000000000000000002" +
    "1000000000000000002" +
    "1000000000000000002" +
    "1000000000000000002" +
    "1000000000000000002" +
    "1009000000000009002" +
    "1000000000000000002" +
    "1000000000000000002" +
    "8333333333333333337";
var line = "abcdefghijklmnopqrs";
var start_pos = ";B[";
var last_index_of_symbol = ";";
var div_go_cell =
    '<div id="c$coord" class="go_cell" style="background-image: url($cell_url)">';

function abc_2_number(abc) {
    return line.indexOf(abc);
}

function number_2_abc(i) {
    return line[i];
}

function abc_coord_2_cell_number(abc_coord) {
    return line.indexOf(abc_coord[1]) * 19 + line.indexOf(abc_coord[0]);
}

function abc_coord_2_cell_type(abc_coord) {
    return types[abc_coord_2_cell_number(abc_coord)];
}

function x_y_2_cell_number(x, y) {
    return x * 19 + y;
}

// ------------------------------------------------------------
// Board cell: cell_type, life, cell_abc_coord, x, y, color
// ------------------------------------------------------------
class BoardCell {
    constructor(cell_abc_coord, color) {
        this.cell_type = abc_coord_2_cell_type(cell_abc_coord);
        this.life = add_life_according_to_type(this.cell_type);
        this.cell_abc_coord = cell_abc_coord;
        this.x = abc_2_number(cell_abc_coord[1]);
        this.y = abc_2_number(cell_abc_coord[0]);
        this.color = color;
    }
}


function addCells() {
    $('.go_board').html('');
    for (let i = 0; i < 361; i++) {
        $('.go_board').append(div_go_cell
            .replace('$coord', '' + line[i % 19] + '' + line[Math.floor(i / 19)])
            .replace('$cell_url',
                get_cell_type(types[i])));
    }

    init_board_cell();
    read_match(current_game_path);
}

function get_cell_type(type) {
    switch (type) {
        case '0':
            return 'images/go_board/go_cell_0.jpg';
        case '1':
            return 'images/go_board/go_cell_1.jpg';
        case '2':
            return 'images/go_board/go_cell_2.jpg';
        case '3':
            return 'images/go_board/go_cell_3.jpg';
        case '4':
            return 'images/go_board/go_cell_4.jpg';
        case '5':
            return 'images/go_board/go_cell_5.jpg';
        case '6':
            return 'images/go_board/go_cell_6.jpg';
        case '7':
            return 'images/go_board/go_cell_7.jpg';
        case '8':
            return 'images/go_board/go_cell_8.jpg';
        case '9':
            return 'images/go_board/go_cell_9.jpg';
        default:
            return '';
    }
}

var board_cells = [];

function init_board_cell() {
    board_cells.length = 0;
    for (let i = 0; i < 361; i++) {
        board_cells.push(new BoardCell('' + line[i % 19] + '' + line[Math.floor(i / 19)], ''));
    }
}

var game_moves = [];
var current_move = 0;
var current_cell;
var groups_black = [];
var groups_white = [];

class StoneGroup {
    constructor(first_stone) {
        this.color = first_stone.color;
        this.life = first_stone.life;
        this.stones = [];
        this.stones.push(first_stone);
    }

    add_stone(new_stone) {
        this.life = this.life + new_stone.life - 2;
        this.stones.push(new_stone);
        for (let i = 0; i < this.stones.length; i++) {
            this.stones[i].life = this.life;
        }
    }

    reduce_life() {
        this.life = this.life - 1;
        for (let i = 0; i < this.stones.length; i++) {
            this.stones[i].life = this.life;
        }
    }

    set_index(i) {
        this.index = i;
    }
}

function read_match(file_name) {
    $.get(file_name, function (data) {
        game_moves.length = 0;
        current_move = 0;

        var start_pos_index = data.indexOf(start_pos);
        var game_str = data.substr(start_pos_index);

        while (game_str.indexOf(";") > -1) {
            game_str = game_str.substr(game_str.indexOf(";") + 1);
            if (game_str.length < 5) {
                break;
            }
            let move = game_str.substr(0, 5);
            if ((move[0] != 'B' || move[0] != 'W')
                && move[1] != '[' && move[4] != ']') {
                break;
            }
            game_moves.push(new Move(move));
            game_str = game_str.substr(5);
        }
    }, 'text');
}

// -----------------------------------------------------------
// Do move
// -----------------------------------------------------------
function next_move() {
    if (current_move >= game_moves.length) {
        return;
    }
    let move = game_moves[current_move];

    console.log('move.coord = ' + move.coord);

    let move_board_number = abc_coord_2_cell_number(move.coord);

    console.log('move_board_number = ' + move_board_number);

    current_cell = board_cells[move_board_number];
    current_cell.color = move.color;

    calculate_lifes(current_cell);

    console.log('current_cell = ', current_cell);

    let coord = '#c' + move.coord;
    let cell = $(coord);
    let background = '';
    if (move.color == 'black') {
        background = 'images/go_board/black_cell_0.jpg';
    } else {
        background = 'images/go_board/white_cell_0.jpg';
    }
    cell.css('background-image', 'url(' + background + ')');


    check_board_lifes();

    current_move++;

    console.log(board_cells);
}

function calculate_lifes(cell) {
    let x = cell.x;
    let y = cell.y;
    let group_top, group_left, group_bottom, group_right;
    let opp_group_top, opp_group_left, opp_group_bottom, opp_group_right;

    // Камень поставили рядом с камнем противника.
    // У обоих камней отняли по дыханию.
    if (x > 0) {
        let top_cell = board_cells[x_y_2_cell_number(x - 1, y)];
        if (cell.color != top_cell.color && top_cell.color != "") {
            top_cell.life = top_cell.life - 1;
            if (top_cell.life > 0) {
                cell.life = cell.life - 1;
            }
            opp_group_top = get_stone_group(
                get_groups_by_color(top_cell.color),
                top_cell);
            if (opp_group_top != null) {
                opp_group_top.reduce_life();
            }
        } else if (cell.color == top_cell.color) { // рядом со своим камнем
            group_top = get_stone_group(
                get_groups_by_color(top_cell.color),
                top_cell);
            if (group_top == null) {
                group_top = new StoneGroup(top_cell);
                add_group_by_color(group_top.color, group_top);
            }
            group_top.add_stone(cell);
        }
    }
    if (y > 0) {
        let left_cell = board_cells[x_y_2_cell_number(x, y - 1)];
        if (cell.color != left_cell.color && left_cell.color != "") {
            left_cell.life = left_cell.life - 1;
            if (left_cell.life > 0) {
                cell.life = cell.life - 1;
            }
            opp_group_left = get_stone_group(
                get_groups_by_color(left_cell.color),
                left_cell);
            if (opp_group_left != null) {
                opp_group_left.reduce_life();
            }
        } else if (cell.color == left_cell.color) { // рядом со своим камнем
            group_left = get_stone_group(
                get_groups_by_color(left_cell.color),
                left_cell);
            if (group_left == null) {
                group_left = new StoneGroup(left_cell);
                add_group_by_color(group_left.color, group_left);
            }
            group_left.add_stone(cell);
        }
    }
    if (x < 18) {
        let bottom_cell = board_cells[x_y_2_cell_number(x + 1, y)];
        if (cell.color != bottom_cell.color && bottom_cell.color != "") {
            bottom_cell.life = bottom_cell.life - 1;
            if (bottom_cell.life > 0) {
                cell.life = cell.life - 1;
            }
            opp_group_bottom = get_stone_group(
                get_groups_by_color(bottom_cell.color),
                bottom_cell);
            if (opp_group_bottom != null) {
                opp_group_bottom.reduce_life();
            }
        } else if (cell.color == bottom_cell.color) { // рядом со своим камнем
            group_bottom = get_stone_group(
                get_groups_by_color(bottom_cell.color),
                bottom_cell);
            if (group_bottom == null) {
                group_bottom = new StoneGroup(bottom_cell);
                add_group_by_color(group_bottom.color, group_bottom);
            }
            group_bottom.add_stone(cell);
        }
    }
    if (y < 18) {
        let right_cell = board_cells[x_y_2_cell_number(x, y + 1)];
        if (cell.color != right_cell.color && right_cell.color != "") {
            right_cell.life = right_cell.life - 1;
            if (right_cell.life > 0) {
                cell.life = cell.life - 1;
            }
            opp_group_right = get_stone_group(
                get_groups_by_color(right_cell.color),
                right_cell);
            if (opp_group_right != null) {
                opp_group_right.reduce_life();
            }
        } else if (cell.color == right_cell.color) { // рядом со своим камнем
            group_right = get_stone_group(
                get_groups_by_color(right_cell.color),
                right_cell);
            if (group_right == null) {
                group_right = new StoneGroup(right_cell);
                add_group_by_color(group_right.color, group_right);
            }
            group_right.add_stone(cell);
        }
    }

}

function check_board_lifes() {
    let dead_group;
    for (let i = 0; i < 361; i++) {
        let cell = board_cells[i];
        if (cell.life == 0) {
            let group = get_stone_group(
                get_groups_by_color(cell.color),
                cell
            );
            if (group == null) {
                add_life_after_dead(cell, current_cell);
            } else {
                dead_group = group;
            }
            cell.color = '';
            cell.life = add_life_according_to_type(cell.cell_type);
            $('#c' + cell.cell_abc_coord).css(
                'background-image',
                'url(' + 'images/go_board/go_cell_' + cell.cell_type + '.jpg)');
        }
    }
    if (dead_group != null) {
        recalculate_all_lifes_after_dead_group(dead_group);
    }
}

function add_life_after_dead(cell, except) {
    let x = cell.x;
    let y = cell.y;

    // Один камень сняли с доски.
    // Соседним камням противника надо прибавить по жизни.
    // Жизнь прибавляется всем окружающим камням за исключением поставленного.
    if (x > 0) {
        let top_cell = board_cells[x_y_2_cell_number(x - 1, y)];
        if (cell.color != top_cell.color && top_cell.color != "") {
            if (top_cell.cell_abc_coord != except.cell_abc_coord) {
                top_cell.life = top_cell.life + 1;
            }
        }
    }
    if (y > 0) {
        let left_cell = board_cells[x_y_2_cell_number(x, y - 1)];
        if (cell.color != left_cell.color && left_cell.color != "") {
            if (left_cell.cell_abc_coord != except.cell_abc_coord) {
                left_cell.life = left_cell.life + 1;
            }
        }
    }
    if (x < 18) {
        let bottom_cell = board_cells[x_y_2_cell_number(x + 1, y)];
        if (cell.color != bottom_cell.color && bottom_cell.color != "") {
            if (bottom_cell.cell_abc_coord != except.cell_abc_coord) {
                bottom_cell.life = bottom_cell.life + 1;
            }
        }
    }
    if (y < 18) {
        let right_cell = board_cells[x_y_2_cell_number(x, y + 1)];
        if (cell.color != right_cell.color && right_cell.color != "") {
            if (right_cell.cell_abc_coord != except.cell_abc_coord) {
                right_cell.life = right_cell.life + 1;
            }
        }
    }
}

function add_life_according_to_type(type) {
    if (type == 0 || type == 9) {
        return 4;
    } else if (type == 1 || type == 2 ||
        type == 3 || type == 4) {
        return 3;
    } else if (type == 5 || type == 6 ||
        type == 7 || type == 8) {
        return 2;
    }
}

function get_stone_group(groups, stone) {
    for (let i = 0; i < groups.length; i++) {
        for (let j = 0; j < groups[i].stones.length; j++) {
            if (groups[i].stones[j].cell_abc_coord == stone.cell_abc_coord) {
                return groups[i];
            }
        }
    }
    return null;
}

function get_groups_by_color(color) {
    if (color == 'black') {
        return groups_black;
    } else {
        return groups_white;
    }
}

function add_group_by_color(color, new_group) {
    if (color == 'black') {
        new_group.set_index(groups_black.length);
        groups_black.push(new_group);
    } else {
        new_group.set_index(groups_white.length);
        groups_white.push(new_group);
    }
}

function delete_group_from_groups(group) {
    if (group.color == 'black') {
        groups_black.slice(group.index, 1);
    } else {
        groups_white.slice(group.index, 1);
    }
}

function recalculate_all_lifes_after_dead_group(group) {
    let dead_group = group;

    groups_black.length = 0;
    groups_white.length = 0;
    let completed_moves = current_move;
    current_move = 0;
    init_board_cell();
    for (let i = 0; i < completed_moves + 1; i++) {
        if (!is_contain(dead_group, game_moves[i])) {
            next_move();
        }
    }

    /*let completed_moves = game_moves;
    let indexes = [];
    for (let i = 0; i < current_move + 1; i++) {
        for (let j = 0; j < dead_group.length; j++) {
            if (dead_group[j].cell_abc_coord == completed_moves[i].cell_abc_coord) {
                indexes.push[i];
                break;
            }
        }
    }
    for (let i = 0; i < indexes.length; i++) {
        completed_moves.splice(indexes[i], 1);
    }
    delete_group_from_groups(dead_group);
    for(let i = 0; i < completed_moves.length; i++) {
        calculate_lifes(completed_moves[i]);
    }*/
}

function is_contain(array, cell) {
    for (let j = 0; j < array.length; j++) {
        if (cell.cell_abc_coord == array[i].cell_abc_coord) {
            return true;
        }
    }
    return false;
}
