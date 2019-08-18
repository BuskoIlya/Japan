function insert_html_into_div(div_to, html_from, id) {
    var getImport = document.querySelector(html_from);
    var getContent = getImport.import.querySelector(id);
    document.getElementById(div_to).appendChild(document.importNode(getContent, true));
}

function create_club_icon(
    /* Required arguments */
    div_to, html_from, club_name, club_icon,
    /* Optional arguments */
    city_name, radius) {
    var getImport = document.querySelector(html_from);
    var getContent = getImport.import.querySelector("#t_club_icon_id");
    var text = club_name;
    if (city_name != undefined) {
        text += "</br>" + "(" + city_name + ")";
    }
    getContent.querySelector("#ci_name_id").innerHTML = text;
    var value = "" + radius + "px";
    getContent.querySelector("#ci_logo_id").style.borderRadius = value;
    getContent.querySelector("#ci_logo_id").style.width = value;
    getContent.querySelector("#ci_logo_id").style.height = value;
    getContent.querySelector("#ci_logo_id").classList.add(club_icon);
    document.getElementById(div_to).appendChild(document.importNode(getContent, true));
}

function create_club_description(
    div_to, html_from, club_name, club_icon, club_slogan,
    club_man, club_man_ref, club_phone, club_address
    ) {
    var getImport = document.querySelector(html_from);
    var getContent = getImport.import.querySelector("#t_club_description_id");
    getContent.querySelector("#cd_name_text_id").innerHTML = club_name;
    getContent.querySelector("#cd_name_slogan_id").innerHTML = club_slogan;

    getContent.querySelector("#cd_emblem_id").classList.add(club_icon);

    getContent.querySelector("#cd_info_man_id").innerHTML = club_man;
    getContent.querySelector("#cd_info_phone_id").innerHTML = club_phone;
    getContent.querySelector("#cd_info_address_id").innerHTML = club_address;

    document.getElementById(div_to).appendChild(document.importNode(getContent, true));
}