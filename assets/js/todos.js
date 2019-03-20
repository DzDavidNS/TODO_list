$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        var todoText = $(this).val();
        if (todoText.length > 0) {
            $("ul").append("<li>" + " <span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
            todoText = $(this).val("");
        } else {
            alert("you must enter at least one character");
        }  
    }
});

$(".fa-plus-square").click(function(){
    $("input[type='text']").fadeToggle();
});