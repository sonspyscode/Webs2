document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = document.querySelectorAll('img[data-src]');

  function lazyLoad() {
    lazyImages.forEach(function(img) {
      if (img.getBoundingClientRect().top < window.innerHeight && img.getBoundingClientRect().bottom >= 0) {
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        img.removeAttribute('loading');
      }
    });
  }

  lazyLoad();
  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});