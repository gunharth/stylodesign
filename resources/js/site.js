// Alpine.js handles the show/hide of the mobile nav
//import "alpinejs";


// needs to be build up in slider loop with slugs
// let slideAnchors = [
//   "section1",
//   "section2",
//   "section3",
//   "section4",
//   "section5",
//   "section6",
//   "section7",
//   "section8",
//   "section9",
//   "section10",
//   "footer",
// ];

// window.addEventListener(
//     "wheel",
//     (event) => {
//         event.preventDefault();
//     },
//     { passive: false }
// );

$(function () {
  slideAnchors.push("contact");
  $("#fullpage").fullpage({
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
      $("header")
          .removeClass()
          .addClass("slide-" + section.anchor + "-slide" + destination.index);

      let slideSectionAnchor = $("#slide-section-" + section.anchor);
      // slideSectionAnchor
      //   .find("h2")
      //   .removeClass('slide'+origin.index);
      slideSectionAnchor
        .find(".fp-slidesNav ul li a span")
        .removeClass('slide'+origin.index);
      slideSectionAnchor
        .find(".fp-controlArrow.fp-prev")
        .removeClass('slide'+origin.index);
      slideSectionAnchor
        .find(".fp-controlArrow.fp-next")
        .removeClass('slide'+origin.index);

      // slideSectionAnchor
      //   .find("h2")
      //   .addClass('slide'+destination.index);
      slideSectionAnchor
        .find(".fp-slidesNav ul li a span")
        .addClass('slide'+destination.index);
      slideSectionAnchor
        .find(".fp-controlArrow.fp-prev")
        .addClass('slide'+destination.index);
      slideSectionAnchor
        .find(".fp-controlArrow.fp-next")
        .addClass('slide'+destination.index);
    },
    afterRender: function () {
      $(".section").each(function (index) {
        //$(this).find("h2").addClass("slide0");
        $(this).find(".fp-slidesNav ul li a span").addClass("slide0");
        $(this).find(".fp-controlArrow.fp-prev").addClass("slide0");
        $(this).find(".fp-controlArrow.fp-next").addClass("slide0");
        // console.log($(this))
      });
      // setInterval(function () {
      //     fullpage_api.moveSlideRight();
      // }, 5000);
      // console.log('render')
    },
  });
});
