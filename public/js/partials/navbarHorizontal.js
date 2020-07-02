$(document).ready(function () {
    $('nav.page-navbar_horizontal').css('opacity', 1);
    var page = window.location.href.split('/').slice(-1)[0];
    $("nav.page-navbar_horizontal li").removeClass("page-is-active");
    $("nav.page-navbar_horizontal li[name='" + page + "'").addClass("page-is-active");
});