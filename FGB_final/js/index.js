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
        let img_title = $(this).find('img').attr("title");
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
        let img1 = $('<img/>');
        img1.addClass('img-thumbnail');
        img1.attr('data-u', 'image');
        img1.attr('src', photos[i]);
        let img2 = $('<img/>');
        img2.attr('data-u', 'thumb');
        img2.attr('src', photos[i]);
        img1.appendTo(div);
        img2.appendTo(div);
        div.appendTo(slider_container);
    }
}