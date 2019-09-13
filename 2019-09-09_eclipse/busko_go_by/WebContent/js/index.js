function html_in_div(html_from, div_to) {
	$(div_to).load(html_from);
}

function clear_div(div) {
	$(div).empty();
}