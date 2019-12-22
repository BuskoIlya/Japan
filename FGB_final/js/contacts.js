class Contact{
    constructor(name, photo, rank, position,
                phone, mail, vk, personal_page) {
        this.name = name;
        this.photo = photo;
        this.rank = rank;
        this.position = position;
        this.phone = phone;
        this.mail = mail;
        this.vk = vk;
        this.personal_page = personal_page;
    }
}

var contacts = [];

$.get('results/contacts.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let item = new Contact(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]);
            contacts.push(item);
        }
    );
});