
$(function () {

    const $nav = $(".navigation");

    setTimeout(() => {
        $('#loader').removeClass("is-active");
    }, 500);

    $(document).mousedown(function (e) {
        let clicked = $(e.target);
        if (
            clicked.is(".navigation") ||
            clicked.parents().is(".navigation") ||
            clicked.parents().is(".nav-button") ||
            clicked.is(".fp-controlArrow") ||
            clicked.is(".fp-controlArrow span") ||
            clicked.parents().is(".fp-slidesNav") ||
            clicked.is(".up-arrow")
        ) {
            return;
        }
        closeNav();
    });

    if ($(".section").length > 0) {
        slideAnchors.push("contact");
        $("#fullpage").fullpage({
            licenseKey: "7E32D915-39324E04-A334765F-3520E7C2",
            anchors: slideAnchors,
            navigation: false,
            navigationPosition: "left",
            navigationTooltips: [],
            slidesNavigation: true,
            slidesNavPosition: "bottom",
            controlArrows: true,
            loopHorizontal: true,
            lazyLoading: true,
            onLeave(index, nextIndex, direction) {
                closeNav();
            },
            onSlideLeave(index, nextIndex, direction) {
                closeNav();
            },
            afterSlideLoad: function (section, origin, destination, direction) {
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
                slideSectionAnchor
                    .find(".fp-slidesNav ul li a span")
                    .removeClass("slide" + origin.index);
                slideSectionAnchor
                    .find(".fp-controlArrow.fp-prev")
                    .removeClass("slide" + origin.index);
                slideSectionAnchor
                    .find(".fp-controlArrow.fp-next")
                    .removeClass("slide" + origin.index);
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
                    $(this)
                        .find(".fp-slidesNav ul li a span")
                        .addClass("slide0");
                    $(this).find(".fp-controlArrow.fp-prev").addClass("slide0");
                    $(this).find(".fp-controlArrow.fp-next").addClass("slide0");
                    if (index == 0) {
                        $("header").addClass(
                            "slide-" + $(this).data("anchor") + "-slide0"
                        );
                    }
                });
            },
        });

        // additional span for arrows
        $(".fp-prev").append("<span></span>");
        $(".fp-next").append("<span></span>");

        // click event delegation
        $(".fp-prev").on("click", function () {
            fullpage_api.moveSlideLeft();
        });
        $(".fp-next").on("click", function () {
            fullpage_api.moveSlideRight();
        });
    }

    $(".nav-button").on("click", function (e) {
        e.preventDefault();
        if ($nav.is(":visible")) {
            $nav.slideToggle(function () {
                $("header").toggleClass("active");
                $(".nav-button-bottomline").toggle();
            });
        } else {
            $("header").toggleClass("active");
            $(".nav-button-bottomline").toggle();
            $nav.slideToggle(function () {});
        }
    });

    $(".up-arrow").on("click", function (e) {
        e.preventDefault();
        if ($(".section").length > 0) {
            let sec = $(".section:eq(0)").data("anchor");
            const url = new URL(location.href); //(location.href);
            url.hash = sec;
            location.href = url;
        } else {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    });

        function closeNav() {
            if ($nav.is(":visible")) {
                $nav.slideToggle(function () {
                    $("header").toggleClass("active");
                    $(".nav-button-bottomline").toggle();
                });
            }
        }

});
