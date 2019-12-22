class Person{
    constructor(name, photo, rank, description, vk,
                personal_page, color_css, flag, country, city) {
        this.name = name;
        this.photo = photo;
        this.rank = rank;
        this.description = description;
        this.vk = vk;
        this.personal_page = personal_page;
        this.color_css = color_css;
        this.flag = flag;
        this.country = country;
        this.city = city;
    }
}

var persons = [];

$.get('results/persons.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let item = new Person(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9]);
            persons.push(item);
        }
    );
});