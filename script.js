$(document).ready(function(){
	$("#change-color").on("click", function() {
        // Frågar användaren efter en textfärg
		var color = prompt("Ange ny textfärg");
        // Ändrar textfärgen på alla element
		$("*").css("color", color);
	});

	$("img.big-image").on("click", function() {
        // Hämtar adressen till bilden som användaren klickade på
		var src = $(this).attr("src");
        // Lägger till en större version av bilden (dold)
		$("body").prepend("<img src='" + src + "' style='position: fixed; width: 50%; left: 25%; top: 10%; z-index: 6; border: 10px solid #fff; box-shadow: 0 0 20px #000; display: none;' id='image-modal'>")
        // Lägger till en svart bakgrund (dold)
		$("body").prepend("<div id='background-modal' style='top: 0; bottom: 0; left: 0; right: 0; position: fixed; background-color: rgba(0,0,0,0.5); display:none; z-index: 5;'></div>");
        // Visar bakgrunden genom en animation
		$("#background-modal").fadeIn(500);
        // Visar bilden genom en animation
		$("#image-modal").fadeIn(500);

        // När man klickar på den svarta bakgrunden tas bilden bort
		$("#background-modal").on("click", function() {
			$("#background-modal").fadeOut(500);
			$("#image-modal").fadeOut(500);
			setTimeout(function() {
				$("#background-modal").remove(500);
				$("#image-modal").remove(500);
			}, 500);
		})
	});
});
