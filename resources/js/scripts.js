$(document).ready(
    function () {

        //sticky nav
        $('.about-section').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('nav').addClass("stciky");
                } else {
                    $('nav').removeClass("sticky");
                }
            }, {
                offset: '600px'
            }
        )
        //scroll smooth 
        $('a').click(function (event) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 5000);
            event.preventDefault();
        });
    }
)