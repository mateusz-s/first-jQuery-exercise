$(document).ready(function() {
    var span = $('span');
    span.each(function(index, elem) {
        if (index % 2 == 0) {
            $(elem).css('color', 'red');
        }
    });
    
    //$('span:even').css('color', 'red');
    
    var paragraphs = $('p');
    paragraphs.each(function(index, elem) {
        var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
        var br = '<br>';
        $(elem).append(br, button);
    });
    
    $('button').click(function() {
        alert($(this).attr('data-tmp'));
    });
});