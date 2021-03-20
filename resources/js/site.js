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
$(function () {
  $("#fullpage").fullpage({
    anchors: slideAnchors,
    //sectionsColor: ["#000000", "#000000", "#000000", "#000000"],
    navigation: false,
    navigationPosition: "right",
    navigationTooltips: [],
    slidesNavigation: true,
    slidesNavPosition: "bottom",
    controlArrows: true,
    loopHorizontal: true,
    lazyLoading: true,
    onLeave(index, nextIndex, direction) {},
    afterLoad: function (anchorLink, index) {},
    afterSlideLoad: function (section, origin, destination, direction) {
      $("#slide-" + section.anchor)
        .find("h2")
        .removeClass(origin.anchor);
      $("#slide-" + section.anchor)
        .find(".fp-slidesNav ul li a span")
        .removeClass(origin.anchor);
      $("#slide-" + section.anchor)
        .find(".fp-controlArrow.fp-prev")
        .removeClass(origin.anchor);
      $("#slide-" + section.anchor)
        .find(".fp-controlArrow.fp-next")
        .removeClass(origin.anchor);

      $("#slide-" + section.anchor)
        .find("h2")
        .addClass(destination.anchor);
      $("#slide-" + section.anchor)
        .find(".fp-slidesNav ul li a span")
        .addClass(destination.anchor);
      $("#slide-" + section.anchor)
        .find(".fp-controlArrow.fp-prev")
        .addClass(destination.anchor);
      $("#slide-" + section.anchor)
        .find(".fp-controlArrow.fp-next")
        .addClass(destination.anchor);
      //console.log(section)
      //console.log(destination)
    },
    afterRender: function () {
      $(".section").each(function (index) {
        $(this).find("h2").addClass("slide0");
        $(this).find(".fp-slidesNav ul li a span").addClass("slide0");
        $(this).find(".fp-controlArrow.fp-prev").addClass("slide0");
        $(this).find(".fp-controlArrow.fp-next").addClass("slide0");
        // console.log($(this))
      });
      // console.log('render')
    },
  });
});
