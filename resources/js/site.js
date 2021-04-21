
$(function () {

    if( $('.section').length > 0) {
        slideAnchors.push("contact");
        $("#fullpage").fullpage({
            licenseKey: "7E32D915-39324E04-A334765F-3520E7C2",
            anchors: slideAnchors,
            //sectionsColor: ["#000000", "#000000", "#000000", "#000000"],
            navigation: false,
            navigationPosition: "left",
            navigationTooltips: [],
            slidesNavigation: true,
            slidesNavPosition: "bottom",
            controlArrows: true,
            loopHorizontal: true,
            lazyLoading: true,
            // onLeave(index, nextIndex, direction) {},
            // afterLoad: function (anchorLink, index) {},
            afterSlideLoad: function (section, origin, destination, direction) {
                //console.log(section.anchor)
                let headerActive = false;
                if ($("header").hasClass("active")) {
                    headerActive = true;
                }
                $("header")
                    .removeClass()
                    .addClass(
                        "slide-" + section.anchor + "-slide" + destination.index
                    );
                if (headerActive) $("header").addClass("active");

                let slideSectionAnchor = $("#slide-section-" + section.anchor);
                // slideSectionAnchor
                //   .find("h2")
                //   .removeClass('slide'+origin.index);
                slideSectionAnchor
                    .find(".fp-slidesNav ul li a span")
                    .removeClass("slide" + origin.index);
                slideSectionAnchor
                    .find(".fp-controlArrow.fp-prev")
                    .removeClass("slide" + origin.index);
                slideSectionAnchor
                    .find(".fp-controlArrow.fp-next")
                    .removeClass("slide" + origin.index);

                // slideSectionAnchor
                //   .find("h2")
                //   .addClass('slide'+destination.index);
                slideSectionAnchor
                    .find(".fp-slidesNav ul li a span")
                    .addClass("slide" + destination.index);
                slideSectionAnchor
                    .find(".fp-controlArrow.fp-prev")
                    .addClass("slide" + destination.index);
                slideSectionAnchor
                    .find(".fp-controlArrow.fp-next")
                    .addClass("slide" + destination.index);
            },
            afterRender: function () {
                $(".section").each(function (index) {
                    //$(this).find("h2").addClass("slide0");
                    $(this).find(".fp-slidesNav ul li a span").addClass("slide0");
                    $(this).find(".fp-controlArrow.fp-prev").addClass("slide0");
                    $(this).find(".fp-controlArrow.fp-next").addClass("slide0");
                    if (index == 0) {
                        $("header").addClass(
                            "slide-" + $(this).data("anchor") + "-slide0"
                        );
                    }
                    // console.log($(this))
                });
                // setInterval(function () {
                //     fullpage_api.moveSlideRight();
                // }, 5000);
                // console.log('render')
            },
        });
    }

    $('.nav-button').on('click', function(e) {
        e.preventDefault()
        $nav = $('.navigation')
        if($nav.is(':visible')){
        $nav.slideToggle(function () {
            $("header").toggleClass("active");
            $(".nav-button-bottomline").toggle();
        });
        } else {
        $("header").toggleClass("active");
        $(".nav-button-bottomline").toggle();
        $nav.slideToggle(function () {});
        }
    })

    $(".up-arrow").on("click", function (e) {
        e.preventDefault()
        if( $('.section').length > 0) {
            let sec = $(".section:eq(0)").data('anchor');
            const url = new URL(location.href); //(location.href);
            url.hash = sec;
            location.href = url;
        } else {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    });

});
