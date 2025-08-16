$('#clickToAnimate').click( function(){
    $("#animateMe").animate({ left: '50%'}, 2000, function(){
        $("#animateMe").animate( { top: '200px' }, 2000, function(){
            $("#animateMe").animate( { left: '0px' }, 2000, function(){
                $("#animateMe").animate( { top: '0px' }, 2000);
            });
        });
    });
});
$("#stopBtn").click( function(){
    $("#animateMe").stop();
});



$('#slideToggleBtn').click(function(){
    $("#panel").slideDown(1000).slideUp(2000).css({ color: 'red' });
});