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
        if ($(window).scrollTop() >= 800) {
            $('.layover').removeClass('nonvisible');
        } else {
            $('.layover').addClass('nonvisible');
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
		if ($(window).scrollTop() >= 400) {
			$('.navbar.compressed #contact').removeClass('bluecontact');
			$('.navbar.compressed #contact').addClass('redcontact');
		} else if ($(window).scrollTop() >= 200) {
			$('.navbar #contact').removeClass('redcontact');
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
		if ($(window).scrollTop() >= 400) {
			$('#linked img').attr("src", "linked1.png");
			$('#insta img').attr("src", "insta1.png");
        } else {
			$('#linked img').attr("src", "linked.png");
			$('#insta img').attr("src", "insta.png");
        }
    });
	
			$(window).on('scroll', function () {
			if ($(window).scrollTop() >= 3550) {
			$('#scrollup img').attr("src", "scrollup.png");
		} else if ($(window).scrollTop() >= 2800) {
			$('#scrollup img').attr("src", "scrollup1.png");
        } else {
			$('#scrollup img').attr("src", "scrollup.png");
        }
    });
	
	$(".scroll").click(function() {
    	$('html, body').animate({
        scrollTop: $("#b").offset().top -100 }, 2500);
	});
	
	$(".layover").click(function() {
    	$('html, body').animate({
        scrollTop: 0 }, 2500);
	});
	
	$(".scroll").hover(function(){
    $(".scroll").animate({marginTop: "20"});
	$(".scroll").animate({marginTop: "0"});
	$(".scroll").animate({marginTop: "20"});
	$(".scroll").animate({marginTop: "0"});
	});
	
	$(".layover").hover(function(){
    $(".layover").animate({marginTop: "-20"});
	$(".layover").animate({marginTop: "0"});
	$(".layover").animate({marginTop: "-20"});
	$(".layover").animate({marginTop: "0"});
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
	
	$('.examples li').on('click', function(){
    $('.examples li').removeClass('current');
    $(this).addClass('current');
	});
	
	$(".examples li").click(function() {
    	$('html, body').animate({
        scrollTop: $("#c").offset().top -100 }, 2000);
	});
	

	
});       

