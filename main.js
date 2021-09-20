/*
	WEB 303
	Starting file for Assignment 1 
	{Rajvi Nilesh Modi}
*/


$(document).ready(function(){
	$("#salary").keyup(function(){
		myfun();
	});
	$("#percent").change(function(){
		myfun();
	});
});

function myfun(){
	var percent = $("#percent").val();
	var salary = $("#salary").val();
	var salaryspend = (salary * percent) / 100;
	var temp = salaryspend.toFixed( 2 );
	$("#spend").text('$'+ temp);
}