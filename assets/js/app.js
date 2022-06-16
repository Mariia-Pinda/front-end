$(function() {
    /* Menu nav toggle */
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Collapse */
    $("#menu_1").on("click", function (event) {
        event.preventDefault();
        var blockId = $(this).data("collapse");
        $("#acc-item1").toggleClass("active")
        $(blockId).slideToggle();
    });
    $("#menu_2").on("click", function (event) {
        event.preventDefault();
        $("#acc-item2").toggleClass("active")
    });






});