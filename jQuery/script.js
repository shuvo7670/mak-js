$('#hide').click(function(){
    $('p').hide();
} );
$('#show').click(function(){
    $('p').show();
} );

setInterval(function(){
    $('#toggle').fadeToggle(1000);
}, 2000);