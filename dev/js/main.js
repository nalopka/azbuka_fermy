$(function() {
	callback = ".callback";
	$(callback).on("click", function() {
		$(callback).addClass("hidden");
		$("[data-form]").attr('data-form', 'open');

	});
});