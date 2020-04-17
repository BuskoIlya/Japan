var page_map = new Map();
page_map.set('main', 'html/main.html');
page_map.set('contacts', 'html/pages/contacts.html');
page_map.set('ranks', 'html/pages/ranks.html');
page_map.set('info-board', 'html/pages/info_board.html');
page_map.set('schools', 'html/pages/schools.html');
page_map.set('news', 'html/pages/news.html');

page_map.set('by-players', 'html/pages/by_players.html');
page_map.set('tournaments', 'html/pages/tournaments.html');
page_map.set('players-lib', 'html/pages/players_lib.html');

page_map.set('go-stories', 'html/pages/go_stories.html');
page_map.set('go-manual', 'html/pages/go_manual.html');
page_map.set('go-books', 'html/pages/go_books.html');

page_map.set('news-2018-03-23', 'html/news_archive/2018/2018_03_23_minsk_cup.html');
page_map.set('news-2018-11-30', 'html/news_archive/2018/2018_11_30_blr_chp.html');
page_map.set('news-2019-02-16', 'html/news_archive/2019/2019_02_16_spb_chine_cup.html');
page_map.set('news-2019-03-29', 'html/news_archive/2019/2019_03_29_minsk_cup.html');
page_map.set('news-2019-05-30', 'html/news_archive/2019/2019_05_30_world_championship.html');
page_map.set('news-2019-08-30', 'html/news_archive/2019/2019_08_30_korea_cup.html');
page_map.set('news-2019-09-20', 'html/news_archive/2019/2019_09_20_study.html');
page_map.set('news-2019-10-25', 'html/news_archive/2019/2019_10_25_autumn.html');
page_map.set('news-2019-11-23', 'html/news_archive/2019/2019_11_23_blr_chp.html');
page_map.set('news-2019-12-20', 'html/news_archive/2019/2019_12_20_christmas.html');

page_map.set('news-2020-01-24', 'html/news_archive/2020/2020_01_24.html');
page_map.set('news-2020-04-4', 'html/news_archive/2020/2020_02_15_chine.html');

page_map.set('match-belarus-cyprus-2019-10-08', 'html/matches/2019_10_08_by_cyprus.html');
page_map.set('match-belarus-iceland-2019-10-29', 'html/matches/2019_10_29_by_iceland.html');
page_map.set('match-bulgaria-belarus-2019-11-26', 'html/matches/2019_11_26_by_bulgaria.html');
page_map.set('match-spain-belarus-2019-12-17', 'html/matches/2019_12_17_by_spain.html');
page_map.set('match-belarus-morocco-2020-01-21', 'html/matches/2020_01_21_by_morocco.html');
page_map.set('match-belarus-portugal-2020-02-18', 'html/matches/2020_02_18_by_portugal.html');

page_map.set('tournament-2018-03-23', 'html/news_archive/2018/2018_03_23_minsk_cup.html');
page_map.set('tournament-2018-11-30', 'html/news_archive/2018/2018_11_30_blr_chp.html');
page_map.set('tournament-2019-02-16', 'html/news_archive/2019/2019_02_16_spb_chine_cup.html');
page_map.set('tournament-2019-03-29', 'html/news_archive/2019/2019_03_29_minsk_cup.html');
page_map.set('tournament-2019-05-30', 'html/news_archive/2019/2019_05_30_world_championship.html');
page_map.set('tournament-2019-08-30', 'html/news_archive/2019/2019_08_30_korea_cup.html');
page_map.set('tournament-2019-09-20', 'html/news_archive/2019/2019_09_20_study.html');
page_map.set('tournament-2019-10-25', 'html/news_archive/2019/2019_10_25_autumn.html');
page_map.set('tournament-2019-11-23', 'html/news_archive/2019/2019_11_23_blr_chp.html');
page_map.set('tournament-2019-12-20', 'html/news_archive/2019/2019_12_20_christmas.html');

page_map.set('tournament-2020-01-24', 'html/news_archive/2020/2020_01_24.html');
page_map.set('tournament-2020-04-4', 'html/news_archive/2020/2020_02_15_chine.html');

page_map.set('eu-19/20', 'html/world_archive/eu_19_20.html');
page_map.set('eus', 'html/world_archive/eus.html');
page_map.set('wagc', 'html/world_archive/wagc.html');

page_map.set('o-go-anechaev', 'html/stories/nechaev_o_go.html');
page_map.set('eef-2018', 'html/stories/eef_2018.html');
page_map.set('japan-60-70', 'html/stories/japan_60_70.html');
page_map.set('legend', 'html/stories/legend.html');
page_map.set('neiro', 'html/stories/neiro.html');

page_map.set('stone-dragon', 'html/schools/stone_dragon.html');
page_map.set('vit-go', 'html/schools/vitebsk.html');
page_map.set('malinovka', 'html/schools/malinovka.html');
page_map.set('brainforce', 'html/schools/brainforce.html');

function html_in_div(html_from, div_to) {
    $(div_to).load(html_from);
}

function clear_div(div) {
    $(div).empty();
}

function decorate_tournament(table, arr) {
    $(table).find('tr').each(function (i, el) {
        let $tds = $(this).find('td');
        for (let i = 0; i < arr.length; i++) {
            let val = $tds.eq(arr[i]).text();
            if (val.includes('+')) {
                $tds.eq(arr[i]).addClass('bg-success');
            } else if (val.includes('-')) {
                $tds.eq(arr[i]).addClass('bg-danger');
            }
        }
    });
}

function decorate_rus_tournament(table, arr, score) {
    $(table).find('tr').each(function (i, el) {
        let $tds = $(this).find('td');
        for (let i = 0; i < arr.length; i++) {
            let val = $tds.eq(arr[i]).text();
            if (val.includes('+')) {
                $tds.eq(arr[i]).addClass('text-success');
            } else if (val.includes('-')) {
                $tds.eq(arr[i]).addClass('text-danger');
            }
        }
        let val = $tds.eq(score).text();
        if (val.includes('+')) {
            $tds.eq(score).addClass('bg-success');
        } else if (val.includes('-')) {
            $tds.eq(score).addClass('bg-danger');
        }
    });
}

function select_blue_color_our_players(table, arr, number) {
    $(table).find('tr').each(function (i, el) {
        let $tds = $(this).find('td');
        let val = $tds.eq(number).text();
        let img_title = $(this).find('img').attr('title');
        if (val.includes('Беларусь') ||
            val.includes('Минск') || val.includes('Витебск')) {
            for (let i = 0; i < arr.length; i++) {
                $tds.eq(arr[i]).addClass('select_our_player');
            }
        }
        if (img_title != undefined && img_title.includes('Беларусь')) {
            for (let i = 0; i < arr.length; i++) {
                $tds.eq(arr[i]).addClass('select_our_player');
            }
        }
    });
}

function add_photos_to_slider(photos) {
    let slider_container = $("#slider_container_id");
    for (let i = 0; i < photos.length; i++) {
        let div = $('<div/>');
        let a_download = $('<a/>');
        a_download.attr('href', photos[i]);
        a_download.attr('download', '');
        a_download.attr('title', 'Скачать фотографию');
        let img1 = $('<img/>');
        img1.addClass('img-thumbnail');
        img1.attr('data-u', 'image');
        img1.attr('src', photos[i]);
        let img2 = $('<img/>');
        img2.attr('data-u', 'thumb');
        img2.attr('src', photos[i]);
        img1.appendTo(a_download);
        a_download.appendTo(div);
        img2.appendTo(div);
        div.appendTo(slider_container);
    }
}

function add_photos_to_school_carusel(photos) {
    let slider_container = $("#school_carusel_container_id");
    for (let i = 0; i < photos.length; i++) {
		let li  = $('<li/>');
		let a = $('<a/>');
		let img = $('<img/>');
		img.attr('src', photos[i].photo);
		img.attr('data-large', photos[i].photo);
		img.attr('data-description', photos[i].description);
		img.appendTo(a);
		a.appendTo(li);
        li.appendTo(slider_container);
    }
}

// --------------------------------------
// Система рангов
// --------------------------------------
var ranks = [];

class Rank {
    constructor(score, rank) {
        this.score = score;
        this.rank = rank;
    }
}

$.get('results/ranks.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let player = new Rank(f[0], f[1]);
            ranks.push(player);
        }
    );
});
