var stories = [];

class Stories {
    constructor(number, title, author, photo, video, key_words, story_page, author_ref) {
        this.number = number;
        this.title = title;
        this.author = author;
        this.photo = photo;
        this.video = video;
        this.key_words = key_words;
        this.story_page = story_page;
        this.author_ref = author_ref;
    }
}

$.get('results/stories.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let item = new Stories(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]);
            stories.push(item);
        }
    );
});

function fill_key_words(tag_id, data) {
    let container = $(tag_id);
    let words = data.split("|");
    if (words.length == 1 && words[0].length == 0) {
        return;
    }
    for (let i = 0; i < words.length; i++) {
        let small = $('<small/>');
        let br = $('<br>');
        small.addClass('key_word_css');
        small.text(words[i]);
        small.appendTo(container);
        br.appendTo(container);

    };
}