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
	
	$(window).on('scroll', function () {
        if ($(window).scrollTop() >= 400) {
            $('#a').addClass('redback');
        } else {
            $('#a').removeClass('redback');
        }
    });	
	
	$(window).on('scroll', function () {
		if ($(window).scrollTop() >= 1700) {   
			$('.navbar.compressed #contact').addClass('yellowcontact');
		} else {
			$('.navbar.compressed #contact').removeClass('yellowcontact');
			$('.navbar.compressed #contact').addClass('redcontact');
		}
	});
	
	$(window).on('scroll', function () {
        if ($(window).scrollTop() >= 400) {
            $('#css img').attr("src", "css1.png");
			$('#html img').attr("src", "html1.png");
			$('#javascript img').attr("src", "javascript1.png");
			$('#jquery img').attr("src", "jquery1.png");
			$('#bootstrap img').attr("src", "bootstrap1.png");
			$('#wordpress img').attr("src", "wordpress1.png");
			$('#linked img').attr("src", "linked1.png");
			$('#insta img').attr("src", "insta1.png");
        } else {
            $('#css img').attr("src", "css.png");
			$('#html img').attr("src", "html.png");
			$('#javascript img').attr("src", "javascript.png");
			$('#jquery img').attr("src", "jquery.png");
			$('#bootstrap img').attr("src", "bootstrap.png");
			$('#wordpress img').attr("src", "wordpress.png");
			$('#linked img').attr("src", "linked.png");
			$('#insta img').attr("src", "insta.png");
        }
    });	
	
		$(window).on('scroll', function () {
        if ($(window).scrollTop() >= 1700) {
			$('#linked img').attr("src", "linked2.png");
			$('#insta img').attr("src", "insta2.png");
        } else if ($(window).scrollTop() >= 400) {
			$('#linked img').attr("src", "linked1.png");
			$('#insta img').attr("src", "insta1.png");
        } else {
			$('#linked img').attr("src", "linked.png");
			$('#insta img').attr("src", "insta.png");
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
	
	$('.examples li').on('click', function(){
    $('.examples li').removeClass('current');
    $(this).addClass('current');
	});
	
	$(".examples li").click(function() {
    	$('html, body').animate({
        scrollTop: $("#c").offset().top -100 }, 2000);
	});
	
});       

