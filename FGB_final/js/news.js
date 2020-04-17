var current_slider_photos = [];

var news_2018 = [
    {
        'img': 'images/news18_2_minsk.jpg',
        'date': '23-24.03.2018',
        'title': 'Кубок Минска',
        'text': 'В последние дни марта в Минске прошел кубок города по Го.',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2018/2018_03_23_minsk_cup.html',
        'address': 'г. Минск, МДДМ, Старовиленский тракт 41.',
        'place_css': 'images/places/minsk.jpg',
        'www_ref': '',
        'ref_name': 'фгб.бел',
        'city': '(Минск)',
        'author': 'Грунковский Юрий',
        'person_photo': 'images/persons/grun_ur.jpg',
        'photos': ['images/2018_03_23_minsk_cup/01.jpg', 'images/2018_03_23_minsk_cup/02.jpg',
            'images/2018_03_23_minsk_cup/03.jpg', 'images/2018_03_23_minsk_cup/04.jpg',
            'images/2018_03_23_minsk_cup/05.jpg'],
        'news_number': 'news-2018-03-23',
    },
    {
        'img': 'images/news18_2_blr.jpg',
        'date': '30.11,02.12.2018',
        'title': 'Чемпионат Беларуси',
        'text': 'В начале декабря в минском дворце детей и молодежи ' +
            'прошел чемпионат страны по Го.',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2018/2018_11_30_blr_chp.html',
        'address': 'г. Минск, МДДМ, Старовиленский тракт 41.',
        'place_css': 'images/places/minsk.jpg',
        'www_ref': '',
        'ref_name': 'фгб.бел',
        'city': '(Минск)',
        'author': 'Грунковский Юрий',
        'person_photo': 'images/persons/grun_ur.jpg',
        'photos': ['images/2018_11_30_blr_chp/01.jpg', 'images/2018_11_30_blr_chp/02.jpg',
            'images/2018_11_30_blr_chp/03.jpg', 'images/2018_11_30_blr_chp/04.jpg',
            'images/2018_11_30_blr_chp/05.jpg', 'images/2018_11_30_blr_chp/06.jpg',
            'images/2018_11_30_blr_chp/07.jpg', 'images/2018_11_30_blr_chp/08.jpg',
            'images/2018_11_30_blr_chp/09.jpg', 'images/2018_11_30_blr_chp/10.jpg',],
        'news_number': 'news-2018-11-30',
    }
];
var news_2019 = [
    {
        'img': 'images/news1_spb-china-cup.jpg',
        'date': '16-17.02.2019',
        'title': 'Кубок консула Китая',
        'text': '16-го и 17-го февраля в Санкт-Петербурге прошел крупный турнир, ' +
            'посвященный китайскому новому году и организованный совместно ' +
            'федерацией Го России и консульством Китая в Санкт-Петербурге.',
        'decoration_css': 'color_fill pink',
        'news_ref': 'html/news_archive/2019/2019_02_16_spb_chine_cup.html',
        'address': 'Россия, г. Санкт-Петербург, Лермонтовский пр., 43/1, отель Азимут, 18 этаж.',
        'place_css': 'images/places/spb.jpg',
        'www_ref': 'https://gofederation.ru/tournaments/278633125',
        'ref_name': 'gofederation.ru',
        'city': '(Санкт-Петербург, Россия)',
        'author': 'Бусько Илья',
        'person_photo': 'images/persons/bus_il.jpg',
        'photos': ['images/2019_02_16_spb_chine_cup/01.jpg', 'images/2019_02_16_spb_chine_cup/02.jpg',
            'images/2019_02_16_spb_chine_cup/03.jpg', 'images/2019_02_16_spb_chine_cup/04.jpg',
            'images/2019_02_16_spb_chine_cup/05.jpg', 'images/2019_02_16_spb_chine_cup/06.jpg',
            'images/2019_02_16_spb_chine_cup/07.jpg', 'images/2019_02_16_spb_chine_cup/08.jpg',
            'images/2019_02_16_spb_chine_cup/09.jpg', 'images/2019_02_16_spb_chine_cup/10.jpg',
            'images/2019_02_16_spb_chine_cup/11.jpg', 'images/2019_02_16_spb_chine_cup/12.jpg',
            'images/2019_02_16_spb_chine_cup/14.jpg', 'images/2019_02_16_spb_chine_cup/15.jpg',
            'images/2019_02_16_spb_chine_cup/16.jpg', 'images/2019_02_16_spb_chine_cup/17.jpg',
            'images/2019_02_16_spb_chine_cup/18.jpg', 'images/2019_02_16_spb_chine_cup/19.jpg',
            'images/2019_02_16_spb_chine_cup/20.jpg'],
        'news_number': 'news-2019-02-16',
    },
    {
        'img': 'images/news2_minsk-chp.jpg',
        'date': '29,31.03.2019',
        'title': 'Кубок Минска',
        'text': 'В последние дни марта в Минске прошел кубок города по Го.',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2019/2019_03_29_minsk_cup.html',
        'address': 'г. Минск, МДДМ, Старовиленский тракт 41.',
        'place_css': 'images/places/minsk.jpg',
        'www_ref': '',
        'ref_name': 'фгб.бел',
        'city': '(Минск)',
        'author': 'Грунковский Юрий',
        'person_photo': 'images/persons/grun_ur.jpg',
        'photos': ['images/2019_03_29_minsk_cup/02.jpg',
            'images/2019_03_29_minsk_cup/03.jpg', 'images/2019_03_29_minsk_cup/04.jpg',
            'images/2019_03_29_minsk_cup/05.jpg', 'images/2019_03_29_minsk_cup/06.jpg',
            'images/2019_03_29_minsk_cup/07.jpg', 'images/2019_03_29_minsk_cup/08.jpg'],
        'news_number': 'news-2019-03-29',
    },
    {
        'img': 'images/news3_wagc-japan.jpg',
        'date': '30.05-07.06.2019',
        'title': 'Чемпионат мира 2019 г.',
        'text': 'C 30 мая по 7 июня в Японии в городе Мацуэ, префектура Симанэ, ' +
            'прошел 40-ой чемпионат мира по Го среди любителей.',
        'decoration_css': 'color_fill blue',
        'news_ref': 'html/news_archive/2019/2019_05_30_world_championship.html',
        'address': 'Япония, Префектура Симанэ, г. Мацуэ, 島根県松江市殿町.',
        'place_css': 'images/places/tokio.jpg',
        'www_ref': 'https://www.nihonkiin.or.jp/event/amakisen/worldama/40/result.html',
        'ref_name': 'nihonkiin.or.jp',
        'city': '(Мацуэ, Япония)',
        'author': 'Бусько Илья',
        'person_photo': 'images/persons/bus_il.jpg',
        'photos': ['images/2019_05_30_world_championship/01.jpg', 'images/2019_05_30_world_championship/02.jpg',
            'images/2019_05_30_world_championship/03.jpg', 'images/2019_05_30_world_championship/04.jpg',
            'images/2019_05_30_world_championship/05.jpg', 'images/2019_05_30_world_championship/06.jpg',
            'images/2019_05_30_world_championship/07.jpg', 'images/2019_05_30_world_championship/08.jpg',
            'images/2019_05_30_world_championship/09.jpg', 'images/2019_05_30_world_championship/10.jpg',
            'images/2019_05_30_world_championship/11.jpg', 'images/2019_05_30_world_championship/12.jpg',
            'images/2019_05_30_world_championship/14.jpg', 'images/2019_05_30_world_championship/15.jpg',
            'images/2019_05_30_world_championship/16.jpg', 'images/2019_05_30_world_championship/17.jpg',
            'images/2019_05_30_world_championship/18.jpg', 'images/2019_05_30_world_championship/19.jpg',
            'images/2019_05_30_world_championship/20.jpg', 'images/2019_05_30_world_championship/21.jpg',
            'images/2019_05_30_world_championship/22.jpg', 'images/2019_05_30_world_championship/23.jpg',
            'images/2019_05_30_world_championship/24.jpg'],
        'news_number': 'news-2019-05-30',
    },
    {
        'img': 'images/news4_seul-4.jpg',
        'date': '31.08-06.09.2019',
        'title': 'Кубок премьер министра Южной Кореи',
        'text': 'В начале сентября в Сеуле прошел кубок премьер министра ' +
            'этой страны, который является вторым по значимости международным ' +
            'соревнованием по Го среди любителей.',
        'decoration_css': 'color_fill blue',
        'news_ref': 'html/news_archive/2019/2019_08_30_korea_cup.html',
        'address': 'Южная Корея, г. Сеул, 영월스포츠파크 실내체육관.',
        'place_css': 'images/places/seul.jpg',
        'www_ref': 'http://kpmc.kbaduk.or.kr/eng/result/gameTable.asp',
        'ref_name': 'kpmc.kbaduk.or.kr',
        'city': '(Сеул, Южная Корея)',
        'author': 'Герасютин Никита',
        'person_photo': 'images/persons/ger_nik.jpg',
        'photos': ['images/2019_08_30_korea_cup/01.jpg', 'images/2019_08_30_korea_cup/02.jpg',
            'images/2019_08_30_korea_cup/03.jpg', 'images/2019_08_30_korea_cup/04.jpg',
            'images/2019_08_30_korea_cup/05.jpg', 'images/2019_08_30_korea_cup/06.jpg',
            'images/2019_08_30_korea_cup/07.jpg', 'images/2019_08_30_korea_cup/08.jpg',
            'images/2019_08_30_korea_cup/09.jpg', 'images/2019_08_30_korea_cup/10.jpg'],
        'news_number': 'news-2019-08-30',
    },
    {
        'img': 'images/2019_09_20_study/01.jpg',
        'date': '20,27.09.2019',
        'title': 'Belarus Study Open',
        'text': 'Приглашаются все игроки Беларуси, твердо усвоившие правила игры. ' +
            'Фотограф: Марианна Капустик. Организатор: Юрий Грунковский.',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2019/2019_09_20_study.html',
        'address': 'г. Минск, МДДМ, Старовиленский тракт 41.',
        'place_css': 'images/places/minsk.jpg',
        'www_ref': '',
        'ref_name': 'фгб.бел',
        'city': '(Минск)',
        'author': 'Грунковский Юрий',
        'person_photo': 'images/persons/grun_ur.jpg',
        'photos': ['images/2019_09_20_study/01.jpg', 'images/2019_09_20_study/02.jpg',
            'images/2019_09_20_study/03.jpg', 'images/2019_09_20_study/04.jpg',
            'images/2019_09_20_study/05.jpg', 'images/2019_09_20_study/06.jpg',
            'images/2019_09_20_study/07.jpg', 'images/2019_09_20_study/08.jpg',
            'images/2019_09_20_study/09.jpg', 'images/2019_09_20_study/10.jpg'],
        'news_number': 'news-2019-09-20',
    },
    {
        'img': 'images/2019_10_25_autumn/14.jpg',
        'date': '25.10.2019',
        'title': 'Осенний лист',
        'text': 'Фото и результаты юношеского турнира Осенний лист 25 октября. ' +
            'В каждой лиге было по 3-4 приза - почти 20 призов на турнир, ' +
            'присутствовал 31 игрок, такого большого шанса выиграть-получить ' +
            'приз еще не было в наших турнирах, да и с погодой Осень не подвела! ' +
            'Вот такой красочный турнир у ребят получился.',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2019/2019_10_25_autumn.html',
        'address': 'г. Минск, МДДМ, Старовиленский тракт 41.',
        'place_css': 'images/places/minsk.jpg',
        'www_ref': '',
        'ref_name': 'фгб.бел',
        'city': '(Минск)',
        'author': 'Грунковский Юрий',
        'person_photo': 'images/persons/grun_ur.jpg',
        'photos': ['images/2019_10_25_autumn/01.jpg', 'images/2019_10_25_autumn/02.jpg',
            'images/2019_10_25_autumn/04.jpg',
            'images/2019_10_25_autumn/05.jpg', 'images/2019_10_25_autumn/06.jpg',
            'images/2019_10_25_autumn/07.jpg', 'images/2019_10_25_autumn/08.jpg',
            'images/2019_10_25_autumn/09.jpg', 'images/2019_10_25_autumn/10.jpg',
            'images/2019_10_25_autumn/11.jpg', 'images/2019_10_25_autumn/12.jpg',
            'images/2019_10_25_autumn/13.jpg', 'images/2019_10_25_autumn/14.jpg',
            'images/2019_10_25_autumn/15.jpg'],
        'news_number': 'news-2019-10-25',
    },
    {
        'img': 'images/2019_11_23_blr_cp/6.jpg',
        'date': '23-24.11.2019',
        'title': 'Чемпионат Беларуси',
        'text': 'В прошедшие выходные определился чемпион страны по Го. ' +
            'Им впервые стал Герасютин Никита, обыгравший в борьбе за первое место ' +
            'двух вторых данов.',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2019/2019_11_23_blr_chp.html',
        'address': 'г. Минск, ул. Стариновская 37, клуб сёги Гинкаммури.',
        'place_css': 'images/places/minsk.jpg',
        'www_ref': '',
        'ref_name': 'фгб.бел',
        'city': '(Минск)',
        'author': 'Грунковский Юрий',
        'person_photo': 'images/persons/grun_ur.jpg',
        'photos': ['images/2019_11_23_blr_cp/1.jpg', 'images/2019_11_23_blr_cp/2.jpg',
        'images/2019_11_23_blr_cp/3.jpg', 'images/2019_11_23_blr_cp/4.jpg',
        'images/2019_11_23_blr_cp/5.jpg', 'images/2019_11_23_blr_cp/6.jpg',
        'images/2019_11_23_blr_cp/7.jpg', 'images/2019_11_23_blr_cp/8.jpg',
        'images/2019_11_23_blr_cp/9.jpg', 'images/2019_11_23_blr_cp/10.jpg',
        'images/2019_11_23_blr_cp/11.jpg', 'images/2019_11_23_blr_cp/12.jpg',
        'images/2019_11_23_blr_cp/13.jpg', 'images/2019_11_23_blr_cp/14.jpg',
            'images/2019_11_23_blr_cp/15.jpg', 'images/2019_11_23_blr_cp/16.jpg',
        ],
        'news_number': 'news-2019-11-23',
    },
    {
        'img': 'images/2019_12_20_christmas/001.jpg',
        'date': '20,22.12.2019',
        'title': '9-ый рождественский турнир',
        'text': 'На днях прошел IX Рождественский Фестиваль Го 2019/2020,\n' +
            'который собрал около 30 участников в сумме детского и взрослого ' +
            'форовых турниров, играли до темноты, много эмоций, много призов.\n' +
            'Победителями обоих турниров стала семья Зиновенковых: Антон выйграл ' +
            'кубок юниоров, отбившись на форе от более сильных соперников, его папа ' +
            'Евгений - первое место взрослого турнира, возможно благодаря необычному ' +
            'фусэки в пункты 6-6.\n' +
            'Поздравляем!',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2019/2019_12_20_christmas.html',
        'address': 'г. Минск, МДДМ, Старовиленский тракт 41.',
        'place_css': 'images/places/minsk.jpg',
        'www_ref': '',
        'city': '(Минск)',
        'author': 'Грунковский Юрий',
        'person_photo': 'images/persons/grun_ur.jpg',
        'photos': ['images/2019_12_20_christmas/002.jpg', 'images/2019_12_20_christmas/003.jpg',
        'images/2019_12_20_christmas/004.jpg', 'images/2019_12_20_christmas/005.jpg',
        'images/2019_12_20_christmas/006.jpg', 'images/2019_12_20_christmas/007.jpg',
        'images/2019_12_20_christmas/008.jpg', 'images/2019_12_20_christmas/009.jpg',
        'images/2019_12_20_christmas/010.jpg', 'images/2019_12_20_christmas/011.jpg',
        'images/2019_12_20_christmas/012.jpg', 'images/2019_12_20_christmas/014.jpg',
        'images/2019_12_20_christmas/015.jpg', 'images/2019_12_20_christmas/016.jpg',
            'images/2019_12_20_christmas/017.jpg', 'images/2019_12_20_christmas/018.jpg',
        ],
        'news_number': 'news-2019-12-20',
    },
];

var news_2020 = [
    {
        'img': 'images/2020_01_24/01.jpg',
        'date': '24.01.2020',
        'title': 'Открытый турнир на досках 13х13',
        'text': 'Провели небольшой турнирчик. Посидели за досками ' +
            'и хорошо провели время.',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2020/2020_01_24.html',
        'address': 'г. Минск, МДДМ, Старовиленский тракт 41.',
        'place_css': 'images/places/minsk.jpg',
        'www_ref': '',
        'city': '(Минск)',
        'author': 'Грунковский Юрий',
        'person_photo': 'images/persons/grun_ur.jpg',
        'photos': ['images/2020_01_24/01.jpg', 'images/2020_01_24/02.jpg',
        'images/2020_01_24/03.jpg'],
        'pc': '23',
        'news_number': 'news-2020-01-24',
    },
    {
        'img': '',
        'date': '4-5.04.2020',
        'title': 'Кубок Вейчи',
        'text': '',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2020/2020_02_15_chine.html',
        'address': 'г. Минск, Китайский культурный центр, Клары Цеткин 51а',
        'place_css': 'images/places/minsk.jpg',
        'www_ref': '',
        'city': '(Минск)',
        'author': 'Грунковский Юрий',
        'person_photo': 'images/persons/grun_ur.jpg',
        'photos': [
        ],
        'news_number': 'news-2020-04-4',
    },

];

function load_news_data() {
    let matches = [];
    matches.push(matches_2020);
    matches.push(matches_2019);
    matches.push(matches_2018);
    let news = [];
    news.push(news_2020);
    news.push(news_2019);
    news.push(news_2018);
    let ul_item = $('ul.tabs_data');

    for (let i = 0; i < 1; i++) {
        let li = $('<li/>');
        if (i == 0) {
            li.addClass('active');
        }
        let div = $('<div/>');
        let id = 'news-' + i;
        div.attr('id', id);

        $('#news_template').tmpl(news[0][0]).appendTo(div);
        $('#match_template').tmpl(matches[0][0]).appendTo(div);
        $('#match_template').tmpl(matches[0][1]).appendTo(div);

        div.appendTo(li);
        li.appendTo(ul_item);
    }


    for (let i = 1; i < news.length; i++) {
        let li = $('<li/>');
        if (i == 0) {
            li.addClass('active');
        }
        let div = $('<div/>');
        let id = 'news-' + i;
        div.attr('id', id);
        if (news[i].length > 4) {
            for (let j = 0; j < news[i].length - 4; j++) {
                $('#news_template').tmpl(news[i][j]).appendTo(div);
            }
        }
        if (matches[i].length > 0) {
            $('#match_template').tmpl(matches[i][0]).appendTo(div);
        }
        if (news[i].length > 2) {
            $('#news_template').tmpl(news[i][news[i].length - 3]).appendTo(div);
        }
        if (matches[i].length > 1) {
            $('#match_template').tmpl(matches[i][1]).appendTo(div);
        }
        if (news[i].length > 1) {
            $('#news_template').tmpl(news[i][news[i].length - 2]).appendTo(div);
        }
        if (matches[i].length > 2) {
            $('#match_template').tmpl(matches[i][2]).appendTo(div);
        }
        if (matches[i].length > 3) {
            $('#match_template').tmpl(matches[i][3]).appendTo(div);
        }
        if (news[i].length > 0) {
            $('#news_template').tmpl(news[i][news[i].length - 1]).appendTo(div);
        }
        div.appendTo(li);
        li.appendTo(ul_item);
    }
}