class School{
    constructor(name, photo, city, address, manager, phone, time, page, vk) {
        this.name = name;
        this.photo = photo;
        this.city = city;
        this.address = address;
        this.manager = manager;
        this.phone = phone;
        this.time = time;
        this.page = page;
        this.vk = vk;
    }
}

var schools = [];

$.get('results/schools.txt', function (data) {
    let lines = data.split("\n");
    $.each(lines, function (n, elem) {
            let f = elem.split(",");
            let item = new School(
                f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8]);
            schools.push(item);
        }
    );
});