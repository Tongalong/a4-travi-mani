$(document).ready(function(){
	$("#items > li").find(".details").click(function(){
		var items = $(this).parent();
		var amount = $(this).parent().data("price")
		var price = $('<span class="price">Price $'+amount+'</span>');
	    $(this).parent().append(price);
	    $(this).remove();
	});
	$(".sorting ").find("li").click(function(){
		$("#items").find("li").css("border-color","black");
		var catalog = $(this).data("catalog");
		$("."+catalog).css("border-color","#f5b303");
	});
});