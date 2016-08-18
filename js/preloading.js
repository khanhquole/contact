/**
 * Created by crawler on 18/08/2016.
 */
$body = $("body");

$(document).on({
    ajaxStart: function() {
        $body.addClass("loading");
    },
    ajaxStop: function() {
        $body.removeClass("loading");
    }
});