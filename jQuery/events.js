// Double click event
$('#eventButton').dblclick(function(){
     $('#eventToggle').fadeToggle(1000);
});

// Mouse enter and leave
$('#eventButton').mouseenter(function(){
    $('#eventToggle').hide();
});
$('#eventButton').mouseleave(function(){
    $('#eventToggle').show();
});

$('#keyPress').keypress(function(event){
    const value = $(this).val();
    $('#keyPressValue').text(value + event.key);
});

$('#keyUpDown').keydown(function(event){
    const value = $(this).val();
    console.log(value);
    
    $('#keyUpDownValue').text(value + event.key);
});



$("#form").submit(function(event){
    event.preventDefault();
    alert("Form submitted");
});

$('#gender').change(function(){
    const value = $(this).val();
    alert(value);
});

$(window).resize(function(){
   console.log('Resized');
});
$(window).scroll(function(){
   console.log('Scrolled');
});