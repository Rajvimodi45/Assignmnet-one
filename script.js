/*
WEB 303
Starting (file for Assignment 1 
	{Rajvi Nilesh Modi}
*/

$(document).ready(function(){
	$("#salary").keyup(function(){
		myfun();
	});
	$("#percent").keyup(function(){
		myfun();
	});

});

function myfun(){
	var salary = $("#salary").val();
	var percent = $("#percent").val();
	var salaryspend = (salary * percent) / 100;
	var temp = salaryspend.toFixed( 2 );
	$("#spend").text('$'+ temp);
}