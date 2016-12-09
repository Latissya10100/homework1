$(function (){

	var orders = $('#orders');
	var name = $('#name');
	var drink = $('#drink');
<<<<<<< HEAD

=======


function addOrder(order) {
	orders.append('<li>name: '+ order.name +', drink: '+ order.drink + '</li>');

}
$.ajax({
	type: 'GET',
	url: 'http://rest.learncode.academy/api/johnbob/friends',
	success: function(orders) {
		$.each(orders, function(i, order) {
			addOrder(order);	
		});
	},
	error: function() {
		alert('error loading orders');
	}
});
$('#add-order').on('click', function() {

	console.log('asdf');

	var order = {
		name: name.val(),
		drink: drink.val(),
	};
>>>>>>> a3f126db6e2117053c6bdd3a67aa788e8a812be9

	function addOrder(order) {
		orders.append('<li>name: '+ order.name +', drink: '+ order.drink + '</li>');

	}
	$.ajax({
<<<<<<< HEAD
		type: 'GET',
		url: 'http://rest.learncode.academy/api/johnbob/friends',
		success: function(orders) {
			$.each(orders, function(i, order) {
				addOrder(order);	
			});
=======
		type: 'POST',
		url: 'http://rest.learncode.academy/api/johnbob/friends',
		data: order,
		success: function(newOrder) {
			addOrder(newOrder);	
>>>>>>> a3f126db6e2117053c6bdd3a67aa788e8a812be9
		},
		error: function() {
			alert('error loading orders');
		}
	});
	$('#add-order').on('click', function() {

		console.log('asdf');

		var order = {
			name: name.val(),
			drink: drink.val(),
		};

		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/johnbob/friends',
			data: order,
			success: function(newOrder) {
				addOrder(newOrder);	
			},
			error: function() {
				alert('error saving order');
			}
		});

	});

})

})
