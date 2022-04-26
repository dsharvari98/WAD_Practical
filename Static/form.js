$(document).ready(function() {
    $("form").submit(function(event) {
        var formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            // superheroAlias: $("#superheroAlias").val(),

        };
        localStorage.setitem("Name", formData.name);
        $.ajax({
            type: "POST",
            url: "/info/",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function(data) {
            console.log(data);
        });

        event.preventDefault();
    });
});