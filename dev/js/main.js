$(function() {
	callback = ".callback";
	$(callback).on("click", function() {
		$(callback).addClass("hidden");
		$("[data-form]").attr('data-form', 'open');

	});

	
	// PHONE INPUT MASK
	$("#phone-input").mask("9-999-999-99-99");
	
});