let navOpened = false;
let currentJobsNumber = 0;
let finalJobsNumber = 10650;


function increaseJobs()
{
    let currentJobsNumberText = currentJobsNumber.toString();

    if(currentJobsNumberText.length > 3)
    {
        let a = "";
        let b = "";
        for(var i=currentJobsNumberText.length-1;i>currentJobsNumberText.length-1-3;i--)
            a = currentJobsNumberText[i] + a;
            for(var i=currentJobsNumberText.length-1-3;i>=0;i--)
            b = currentJobsNumberText[i] + b;
        currentJobsNumberText = b + "," + a;
    }
    $("#jobsnumber").html(currentJobsNumberText);
    if(currentJobsNumber >= finalJobsNumber)
        return;
    if(currentJobsNumber+72 <= finalJobsNumber)
    {
        currentJobsNumber += 72;
        setTimeout(() => {
            increaseJobs();
        }, 30);
    }
    else
    {
        currentJobsNumber += 1;
        setTimeout(() => {
            increaseJobs();
        }, 20);
    }
}
increaseJobs();

document.getElementById("open_menu").onclick = () => {
    if(!navOpened)
    {
        $(".header .navbar").css("height", "448px");
        $(".header .nav-scroll").css("height", "420px");
    }
    else
    {
        $(".header .navbar").css("height", "75px");
        $(".header .nav-scroll").css("height", "75px");
    }
    navOpened = !navOpened;
};

$("#search-job-btn").click(() => {
    $("#search-job-btn").addClass("active");
    $("#search-candidate-btn").removeClass("active");

    $(".search-job-form").css("display", "flex");
    $(".search-candidate-form").css("display", "none");
});

$("#search-candidate-btn").click(() => {
    $("#search-candidate-btn").addClass("active");
    $("#search-job-btn").removeClass("active");

    $(".search-candidate-form").css("display", "flex");
    $(".search-job-form").css("display", "none");
});

$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if(scroll > 200) {
        $(".header .navbar").addClass("nav-scroll");
        $(".header .header-info").addClass("header-info-scroll");
        $(".header .fill-navbar-place").css("display", "block");
        
    }
    else {
        $(".header .navbar").removeClass("nav-scroll");
        $(".header .header-info").removeClass("header-info-scroll");
        $(".header .fill-navbar-place").css("display", "none");
    }
});


$('.categories .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay: true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        900:{
            items:4
        },
        1120:{
            items:6
        }
    }
});


$('.testimonial .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay: true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1120:{
            items:3
        }
    }
});

$('.candidates .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay: true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1120:{
            items:4
        }
    }
});