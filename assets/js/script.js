// Slide elements in

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slideElement = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  slideElement.forEach((element) => {
    //halfway through element
    const slideInAt =
      window.scrollY + window.innerHeight - element.offsetHeight / 2;
    // bottom of the element
    const imageBottom = element.offsetTop + element.offsetHeight;
    // halfway in the element
    const isHalfShown = slideInAt > element.offsetTop;

    const isNoScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNoScrolledPast) {
      element.classList.add("slide-active");
    } else {
      element.classList.remove("slide-active");
    }
  });
}

const navbar = $("#navbar");
window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.addClass("bkg-pink");
  } else {
    navbar.removeClass("bkg-pink");
  }
};

$("#openDrawer").on('click', function() {
    $("#drawer").addClass("show")
})
$("#closeDrawer").on('click', function() {
    $("#drawer").removeClass("show")
})

window.addEventListener("scroll", debounce(checkSlide));