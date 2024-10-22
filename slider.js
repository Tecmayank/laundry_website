$(document).ready(function () {
    $('.service-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});


// This code also works but does not look that good.

// for(let i = 1;i<=4;i++){
//     $('#w_btn'+ i).click(function(){

//         //When any button is clicked, hide all the divs (since we don't know which div is currently visible), then show only the div associated with the clicked button.

//         // Code without using callback function --> initiates or starts the another effect before the first effect is fully finised.
//         for(let j = 1; j<=4;j++){
//             $('#w_slide' + j).fadeOut("slow");
//         }

//         console.log("Button " + i + " pressed.");
//         $('#w_slide' + i).fadeIn("slow");





//     });
// }



function activeBtnFunction(btnClicked) {
    // Which ever btn is clicked we want to add active class till that btn from the starting btn.

    // Adds active class to the clicked btn 
   // console.log("value of btn clicked " + btnClicked);

    for (let i = 1; i <= btnClicked; i++) {
       // console.log("active loop " + i);
        $("#w_btn" + i).addClass("btn_active");
    }


    // Removes active class after the clicked btn
    for (let j = 4; j > btnClicked; j--) {
        $("#w_btn" + j).removeClass("btn_active");
       // console.log("remove loop " + j);
    }

    //but we also have to add the font-color to blue only to the active btn

    // so remove font_blue from all classes
    for (let i = 0; i <= 4; i++) {
        $("#w_btn" + i).removeClass("font_blue");
    }

    // then add only the the btn clicked
    $("#w_btn" + btnClicked).addClass("font_blue");

}



// change slide automatically loop.
function showFourSlidesWithInterval() {
    let i = 1;

    function transitionSlides() {
        // Remove active class from all slides

        activeBtnFunction(i);

        for (let j = 1; j <= 4; j++) {
            $("#w_slide" + j).removeClass("active_work_slide");
        }

        // Add active class to current slide
        $("#w_slide" + i).addClass("active_work_slide");



        // -Debugging
        // console.log("Slide " + i + " is visible.");

        // Move to the next slide index
        i++;
        if (i > 4) {
            i = 1; // Reset to the first slide if it exceeds 4
        }

        // console.log("Next Slide is  " + i + ".");



        // Call setTimeout again after 3000ms (3 seconds)
        setTimeout(transitionSlides, 3000);
    }

    // Initial call to start the transition loop
    transitionSlides();
}




$(document).ready(function () {

    // What we have to do
    /*

    1. Start with the first slide make it visible.
    2. wait some time show second slide do this infinite time.
    */
    showFourSlidesWithInterval();

});






// Change slide on btn click
$(document).ready(function () {

    for (let i = 1; i <= 4; i++) {
        $("#w_btn" + i).click(function () {

            activeBtnFunction(i);

            for (let j = 1; j <= 4; j++) {
                if (j == i) {
                    continue;
                }
                $("#w_slide" + j).removeClass("active_work_slide");
            }

            $("#w_slide" + i).addClass("active_work_slide");

            // console.log("Slide " + i + " is visible.");

        });
    }


});



// Toggle Nav pills Important Info Section

$(document).ready(function () {

    for (let i = 1; i <= 4; i++) {
        $("#tab" + i).click(function () {
            for (let j = 1; j <= 4; j++) {
                $("#tab" + j).removeClass("active");
            }

            $("#tab" + i).addClass("active");
        });
    }


});




// Pricing Slider Owl-carousel initialization 

$(document).ready(function () {
    $('.pricing_slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});







// Up_fixed button
document.addEventListener("DOMContentLoaded", function () {
    var btn_up = document.getElementById("btn_up");
    var threshold = 300; // Adjust this value as needed

    function toggleVisibility() {
        if (window.scrollY > threshold) {
            btn_up.classList.add("visible");
        } else {
            btn_up.classList.remove("visible");
        }
    }

    toggleVisibility(); // Initial check

    document.addEventListener("scroll", toggleVisibility);
});

// Implementing the scroll up functionality 

$(document).ready(function () {

    $("#btn_up").click(function () {

       
        scrollToTop(500); // Adjust the duration (in milliseconds) as needed
        
    
        // Function to smoothly scroll to the top of the document
        function scrollToTop(scrollDuration) {
            var scrollStep = -window.scrollY / (scrollDuration / 15),
                scrollInterval = setInterval(function(){
                if ( window.scrollY != 0 ) {
                    window.scrollBy( 0, scrollStep );
                }
                else clearInterval(scrollInterval); 
            },15);
        }

    });

});










/* to remove the placeholder text of contant page form when hover*/

$(document).ready(function(){
    $('.contact_form input').focus(function() {
        $(this).removeAttr('placeholder'); // Remove placeholder attribute
        //console.log("working");
    });

    $('.contact_form input').blur(function(){
        if(!$(this).val()){
            if($(this).attr("id") == "name"){
                $(this).attr('placeholder', 'Your name');
            }

            if($(this).attr("id") == "email"){
                $(this).attr('placeholder', 'E-mail');
            }

            if($(this).attr("id") == "phone"){
                $(this).attr('placeholder', 'Phone  ');
            }

            if($(this).attr("id") == "name"){
                $(this).attr('placeholder', 'Your name');
            }
        }
    });
});







/* CONTACT FORM TICK BUTTON */

$(document).ready(function(){

    $(".main_checkbox").click(function(){
        $(".check_box img").toggleClass("img_visible");
    });

});
