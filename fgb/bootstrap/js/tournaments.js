var tournaments_2018 = [
    {
        'date': 'Март 24, 25',
        'name': 'Кубок Минска',
        'city': '(Минск)',
        'description': 'Описание...',
        'decoration_css': 'color_fill green',
        'back_color': 'blr_color_back_css',
    },
    {
        'date': 'Ноя. 30, Дек. 2',
        'name': 'Чемпионат Беларуси',
        'city': '(Минск)',
        'description': 'Описание...',
        'decoration_css': 'color_fill green',
        'back_color': 'blr_color_back_css',
    }
];
var tournaments_2019 = [
    {
        'date': 'Февраль 16,17',
        'name': 'Кубок Китайского Консула',
        'city': '(Санкт-Петербург, Россия)',
        'description': 'Описание...',
        'decoration_css': 'color_fill pink',
        'back_color': 'rus_color_back_css',
    },
    {
        'date': 'Март 29,31',
        'name': 'Кубок Минска',
        'city': '(Минск)',
        'description': 'Описание...',
        'decoration_css': 'color_fill green',
        'back_color': 'blr_color_back_css',
    },
    {
        'date': 'Май 30 - Июнь 7',
        'name': 'Чемпионат Мира',
        'city': '(Мацуе, Япония)',
        'description': 'Описание...',
        'decoration_css': 'color_fill blue',
        'back_color': 'world_color_back_css',
    },
    {
        'date': 'Авг. 31 - Сен. 6',
        'name': 'Кубок Премьер Министра Кореи',
        'city': '(Сеул, Корея)',
        'description': 'Описание...',
        'decoration_css': 'color_fill blue',
        'back_color': 'world_color_back_css',
    },
    {
        'date': 'Октябрь 25',
        'name': 'Осенний лист',
        'city': '(Минск)',
        'description': 'Описание...',
        'decoration_css': 'color_fill green',
        'back_color': 'blr_color_back_css',
    },
    {
        'date': 'Ноябрь 25',
        'name': 'Cемейный турнир',
        'city': '(Минск)',
        'description': 'Описание...',
        'decoration_css': 'color_fill green',
        'back_color': 'blr_color_back_css',
    },
    {
        'date': 'Ноябрь 22,23',
        'name': 'Чемпионат Беларуси',
        'city': '(Минск)',
        'description': 'Описание...',
        'decoration_css': 'color_fill green',
        'back_color': 'blr_color_back_css',
    },
    {
        'date': 'Ноя. 25, Дек. 2',
        'name': 'ЧБ по Парному Го',
        'city': '(Минск)',
        'description': 'Описание...',
        'decoration_css': 'color_fill green',
        'back_color': 'blr_color_back_css',
    },
    {
        'date': 'Декабрь 20,22',
        'name': '9-ый Рождественский Фестиваль',
        'city': '(Минск)',
        'description': 'Описание...',
        'decoration_css': 'color_fill green',
        'back_color': 'blr_color_back_css',
    }
];

function load_tournaments_data() {
    let tournaments = [];
    tournaments.push(tournaments_2019);
    tournaments.push(tournaments_2018);
    let ul_item = $('ul.tabs_data');
    for (let i = 0; i < tournaments.length; i++) {
        let li = $('<li/>');
        if (i == 0) {
            li.addClass('active');
        }
        let div = $('<div/>');
        let id = 'tournament-' + i;
        div.attr('id', id);
        for (let j = 0; j < tournaments[i].length; j++) {
            $('#tournament_template').tmpl(tournaments[i][j]).appendTo(div);
        }
        div.appendTo(li);
        li.appendTo(ul_item);
    }
}

function show_tournaments_data() {
    let timelineBlocks = $('.chain_block'),
        offset = 0.8;

    hideBlocks(timelineBlocks, offset);

    $(window).on('scroll', function () {
        (!window.requestAnimationFrame)
            ? setTimeout(function () {
                showBlocks(timelineBlocks, offset);
            }, 100)
            : window.requestAnimationFrame(function () {
                showBlocks(timelineBlocks, offset);
            });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function () {
            ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.chain_icon, .chain_data').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function () {
            ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.chain_icon').hasClass('is-hidden')) && $(this).find('.chain_icon, .chain_data').removeClass('is-hidden').addClass('bounce-in');
        });
    }

    let listItemHeight = $(".tabs_panel ul")
        .find("li:eq(" + 0 + ")")
        .innerHeight();
    $(".tabs_panel ul").height(listItemHeight + "px");
}
