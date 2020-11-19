$('#joey').mouseover(function () {
    $('#joey').animate({
        height: "200px",
        width: "250px",
        align: "center"
    })
    $('#ross').fadeToggle(1000);
    $('#chandler').fadeToggle(1000);
    $('#phoebe').fadeToggle(1000);
    $('#monica').fadeToggle(1000);
    $('#rachel').fadeToggle(1000);
    $('#random').fadeToggle(1000);
    $('#body').css({
        backgroundColor:"#635e70"
    });
    $('#titleStyle').text("Joey Tribbiani");
})

$('#joey').mouseleave(function () {
    $('#joey').animate({
        height: "300px",
        width: "350px"
    })
    $('#ross').show(1000);
    $('#chandler').show(1000);
    $('#phoebe').show(1000);
    $('#monica').show(1000);
    $('#rachel').show(1000);
    $('#random').show(1000);
    $('#body').css({
        backgroundColor:"black"
    })
    $('#titleStyle').text("Please choose any character");
})

$('#monica').mouseover(function () {
    $('#monica').animate({
        height: "200px",
        width: "250px"
    })
    $('#chandler').hide(1000);
    $('#phoebe').hide(1000);
    $('#joey').hide(1000);
    $('#ross').hide(1000);
    $('#rachel').hide(1000);
    $('#random').hide(1000);
    $('#body').css({
        backgroundColor:"#635e70"
    })
    $('#titleStyle').text("Monica Geller");
})

$('#monica').mouseleave(function () {
    $('#monica').animate({
        height: "300px",
        width: "350px"
    })
    $('#chandler').show(1000);
    $('#phoebe').show(1000);
    $('#joey').show(1000);
    $('#ross').show(1000);
    $('#rachel').show(1000);
    $('#random').show(1000);
    $('#body').css({
        backgroundColor:"black"
    })
    $('#titleStyle').text("Please choose any character");
})

$('#ross').mouseover(function () {
    $('#ross').animate({
        height: "200px",
        width: "250px"
    })
    $('#body').css({
        backgroundColor:"#635e70"
    })
    $('#titleStyle').text("Ross Geller")
})

$('#ross').mouseleave(function () {
    $('#ross').animate({
        height: "300px",
        width: "350px"
    })
    $('#titleStyle').text("Please choose any character");
    $('body').css({
        backgroundColor: "black"
    })
})

$('#phoebe').mouseover(function () {
    $('#phoebe').animate({
        height: "200px",
        width: "250px"
    })
    $('#body').css({
        backgroundColor:"#635e70"
    })
    $('#titleStyle').text("Phoebe Buffay")
})

$('#phoebe').mouseleave(function () {
    $('#phoebe').animate({
        height: "300px",
        width: "350px"
    })
    $('#body').css({
        backgroundColor:"black"
    })
    $('#titleStyle').text("Please choose any character")
})

$('#chandler').mouseover(function () {
    $('#chandler').animate({
        height: "200px",
        width: "250px"
    })
    $('#body').css({
        backgroundColor:"#635e70"
    })
    $('#titleStyle').text("Chandler Bing")
})

$('#chandler').mouseleave(function () {
    $('#chandler').animate({
        height: "300px",
        width: "350px"
    })
    $('#body').css({
        backgroundColor:"black"
    })
    $('#titleStyle').text("Please choose any character")
})

$('#rachel').mouseover(function () {
    $('#rachel').animate({
        height: "200px",
        width: "250px"
    })
    $('#body').css({
        backgroundColor:"#635e70"
    })
    $('#titleStyle').text("Rachel Green")
})

$('#rachel').mouseleave(function () {
    $('#rachel').animate({
        height: "300px",
        width: "350px"
    })
    $('#body').css({
        backgroundColor:"black"
    })
    $('#titleStyle').text("Please choose any character")
})

$('#random').mouseover(function () {
    $('#random').animate({
        height: "200px",
        width: "250px"
    })
    $('#body').css({
        backgroundColor:"#635e70"
    })
    $('#titleStyle').text("Random Quiz")
})

$('#random').mouseleave(function () {
    $('#random').animate({
        height: "300px",
        width: "350px"
    })
    $('#body').css({
        backgroundColor:"black"
    })
    $('#titleStyle').text("Please choose any character")
})