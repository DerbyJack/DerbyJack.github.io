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
	
	$(".scroll").hover(function(){
    	$(".scroll").animate({marginTop: "20"});
	$(".scroll").animate({marginTop: "0"});
	$(".scroll").animate({marginTop: "20"});
	$(".scroll").animate({marginTop: "0"});
	});
	
	
	$(".scroll").mouseleave(function(){
	$(".scroll").animate({marginTop: "0"});
	});
	
	$("#ski").click(function() {
	$('html, body').animate({
        scrollTop: $("#b").offset().top -100 }, 2000);
	});
	
	$("#por").click(function() {
    	$('html, body').animate({
        scrollTop: $("#c").offset().top -100 }, 2000);
	});
	
	$("#abo").click(function() {
    	$('html, body').animate({
        scrollTop: $("#about").offset().top -100 }, 2000);
	});
	
	$("#contact").click(function() {
   	$('html, body').animate({
        scrollTop: $("#d").offset().top -100 }, 2000);
	});
	
	$("#linked").hover(function(){
    	$("#linked").animate({marginBottom: "20"});
	});
	
	$("#linked").mouseleave(function(){
	$("#linked").animate({marginBottom: "10"});
	});
	
	$("#insta").hover(function(){
    	$("#insta").animate({marginTop: "20"});
	});
	
	$("#insta").mouseleave(function(){
	$("#insta").animate({marginTop: "10"}, 175);
	});
	
	$("#sel1").click(function(){
	$(this).animate({opacity: "1.0"}, 175);
	});
	
	$("#sel2").click(function(){
	$(this).animate({opacity: "1.0"}, 175);
	});
	
	$("#sel3").click(function(){
	$(this).animate({opacity: "1.0"}, 175);
	});
	
	$("#sel4").click(function(){
	$(this).animate({opacity: "1.0"}, 175);
	});
});       

