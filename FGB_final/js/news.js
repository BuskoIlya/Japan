var current_slider_photos = [];

var news_2018 = [
    {
        'img': 'images/news18_2_minsk.jpg',
        'date': '23-24.03.2018',
        'title': 'Кубок Минска',
        'text': 'В последние дни марта в Минске прошел кубок города по го.',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2018_03_23_minsk_cup.html',
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
    },
    {
        'img': 'images/news18_2_blr.jpg',
        'date': '30.11,02.12.2018',
        'title': 'Чемпионат Беларуси',
        'text': 'В начале декабря в минском дворце детей и молодежи ' +
            'прошел чемпионат страны по го.',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2018_11_30_blr_chp.html',
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
        //'https://vk.com/wall-23841735_299',
    }
];
var news_2019 = [
    {
        'img': 'images/news1_spb-china-cup.jpg',
        'date': '16-17.02.2019',
        'title': 'Кубок консула Китая',
        'text': '16-го и 17-го февраля в Санкт-Петербурге прошел крупный турнир, ' +
            'посвященный китайскому новому году и организованный совместно ' +
            'федерацией го России и консульством Китая в Санкт-Петербурге.',
        'decoration_css': 'color_fill pink',
        'news_ref': 'html/news_archive/2019_02_16_spb_chine_cup.html',
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
    },
    {
        'img': 'images/news2_minsk-chp.jpg',
        'date': '29,31.03.2019',
        'title': 'Кубок Минска',
        'text': 'В последние дни марта в Минске прошел кубок города по го.',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2019_03_29_minsk_cup.html',
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
        //'https://vk.com/club23841735?w=wall-23841735_332',
    },
    {
        'img': 'images/news3_wagc-japan.jpg',
        'date': '30.05-07.06.2019',
        'title': 'Чемпионат мира 2019 г.',
        'text': 'C 30 мая по 7 июня в Японии в городе Мацуе, префектура Шиманэ, ' +
            'прошел 40-ой чемпионат мира по го среди любителей.',
        'decoration_css': 'color_fill blue',
        'news_ref': 'html/news_archive/2019_05_30_world_championship.html',
        'address': 'Япония, Префектура Шиманэ, г. Мацуэ, 島根県松江市殿町.',
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
    },
    {
        'img': 'images/news4_seul-4.jpg',
        'date': '31.08-06.09.2019',
        'title': 'Кубок премьер министра Южной Кореи',
        'text': 'В начале сентября в Сеуле прошел кубок премьер министра ' +
            'этой страны, который является вторым по значимости международным ' +
            'соревнованием по го среди любителей.',
        'decoration_css': 'color_fill blue',
        'news_ref': 'html/news_archive/2019_08_30_korea_cup.html',
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
    },
    /*{
        'img': '',
        'date': '25.10.2019',
        'title': 'Осенний лист',
        'text': '',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2019_10_25_autumn.html',
        'address': 'г. Минск, МДДМ, Старовиленский тракт 41.',
        'place_css': 'images/places/minsk.jpg',
        'www_ref': '',
        'city': '(Минск)',
        'author': 'Грунковский Юрий',
    },
    {
        'img': '',
        'date': '22-23.11.2019',
        'title': 'Чемпионат Беларуси',
        'text': '',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2019_11_22_blr_chp.html',
        'address': 'г. Минск, МДДМ, Старовиленский тракт 41.',
        'place_css': 'images/places/minsk.jpg',
        'www_ref': '',
        'city': '(Минск)',
        'author': 'Грунковский Юрий',
    },
    {
        'img': '',
        'date': '25.11-02.12.2019',
        'title': 'Чемпионат Беларуси по парному го',
        'text': '',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2019_11_25_blr_pair_chp.html',
        'address': 'г. Минск, МДДМ, Старовиленский тракт 41.',
        'place_css': 'images/places/minsk.jpg',
        'www_ref': '',
        'city': '(Минск)',
        'author': 'Грунковский Юрий',
    },
    {
        'img': '',
        'date': '20,22.12.2019',
        'title': '9-ый рождественский турнир',
        'text': '',
        'decoration_css': 'color_fill green',
        'news_ref': 'html/news_archive/2019_12_20_christmas.html',
        'address': 'г. Минск, МДДМ, Старовиленский тракт 41.',
        'place_css': 'images/places/minsk.jpg',
        'www_ref': '',
        'city': '(Минск)',
        'author': 'Грунковский Юрий',
    },*/
];

function load_news_data() {
    let news = [];
    news.push(news_2019);
    news.push(news_2018);
    let ul_item = $('ul.tabs_data');
    for (let i = 0; i < news.length; i++) {
        let li = $('<li/>');
        if (i == 0) {
            li.addClass('active');
        }
        let div = $('<div/>');
        let id = 'news-' + i;
        div.attr('id', id);
        for (let j = 0; j < news[i].length; j++) {
            $('#news_template').tmpl(news[i][j]).appendTo(div);
        }
        div.appendTo(li);
        li.appendTo(ul_item);
    }
}