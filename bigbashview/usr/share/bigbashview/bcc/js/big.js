$(document).ready(function() {
    $('.tooltipped').each(function(index, element) {
        var span = $('#' + $(element).attr('data-tooltip-id') + '>span:first-child');
        span.before($(element).attr('data-tooltip'));
        span.remove();
    });
});

  $(document).ready(function() {
    $('select').material_select();
  });

  
function _run(run) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/execute$ " + run);
    xhttp.send();
    };
