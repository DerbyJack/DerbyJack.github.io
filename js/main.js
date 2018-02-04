$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 800) {
            $('.navbar').addClass('compressed');
        } else {
            $('.navbar').removeClass('compressed');
        }
    });
	
	$(window).on('scroll', function () {
        if ($(window).scrollTop() >= 800) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
	
	$(".scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#b").offset().top -100 }, 2500);
	});
	
	$("#ski").click(function() {
    $('html, body').animate({
        scrollTop: $("#b").offset().top -100 }, 2500);
	});
	
	$("#por").click(function() {
    $('html, body').animate({
        scrollTop: $("#c").offset().top -100 }, 1750);
	});
	
	$("#abo").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top -100 }, 1750);
	});
	
	$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#d").offset().top -100 }, 1250);
	});

});       

