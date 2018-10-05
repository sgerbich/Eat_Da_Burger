$(function () {
    $(".eating").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        
        
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            
        }).then(
            function () {
                console.log("changed devoured to", newEats);
                // Reload the page to get the updated list
                location.reload();
            }
        );
        location.reload();
    })

    $(".create-form").on("submit", function (event) {
        
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bu").val().trim(),
            devoured: false
        };

        
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
               
                location.reload();
            }
        );
    });
})