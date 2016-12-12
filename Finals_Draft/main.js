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
>>>>>>> 975818ea0762b1ebc2e789679bf9965e76f4b3ad

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
<<<<<<< HEAD
=======
		type: 'POST',
		url: 'http://rest.learncode.academy/api/johnbob/friends',
		data: order,
		success: function(newOrder) {
			addOrder(newOrder);	
>>>>>>> 975818ea0762b1ebc2e789679bf9965e76f4b3ad
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