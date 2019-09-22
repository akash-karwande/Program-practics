
var scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1200 / 60) };
var elementsToShow = document.querySelectorAll('.animate');

function loop() {

    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
    });

    scroll(loop);
}

loop();
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}
const callback = function (entries) {
    entries.forEach(entry => {
        entry.target.classList.toggle("animate");
    });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".animate");
targets.forEach(function (target) {
    observer.observe(target);
});
