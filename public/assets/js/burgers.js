$(function () {
    $(".eating").on("click", function (event) {
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

     


    })

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bu").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})