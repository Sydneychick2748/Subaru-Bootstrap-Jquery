$(document).ready(function() {
    function updateCarouselCaptions() {
        const screenWidth = $(window).width();
        const activeIndex = $('#crosstrekCarousel .carousel-inner .item.active').index();

        $('.carousel-text').html('').hide();

        if (screenWidth <= 780) {
            $('.carousel-caption').hide();

            switch (activeIndex) {
                case 0:
                    $('#carousel-text-1').html($('#carousel-caption-1').html()).show();
                    break;
                case 1:
                    $('#carousel-text-2').html($('#carousel-caption-2').html()).show();
                    break;
                case 2:
                    $('#carousel-text-3').html($('#carousel-caption-3').html()).show();
                    break;
                case 3:
                    $('#carousel-text-4').html($('#carousel-caption-4').html()).show();
                    break;
            }
        } else {
            $('.carousel-caption').show();
            $('.carousel-text').html('').hide();
        }
    }

    $('#crosstrekCarousel').on('slid.bs.carousel', function() {
        updateCarouselCaptions();
    });

    updateCarouselCaptions();

    $(window).on('resize', function() {
        updateCarouselCaptions();
    });
});
