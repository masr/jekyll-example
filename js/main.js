$(function () {
    $.fn.tagcloud.defaults = {
        size: {start: 1, end: 2, unit: 'em'},
        color: {start: '#777777', end: '#12BEBD'}
    };
    $('#tag_cloud a').tagcloud();
});
