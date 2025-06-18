function initLazyLoad() {
  const lazyImages = [].slice.call(document.querySelectorAll('img.lazyload'));
  
  if ('IntersectionObserver' in window) {
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove('lazyload');
          lazyObserver.unobserve(lazyImage);
        }
      });
    });
    
    lazyImages.forEach(lazyImage => {
      lazyObserver.observe(lazyImage);
    });
  } else {
    lazyImages.forEach(lazyImage => {
      lazyImage.src = lazyImage.dataset.src;
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initLazyLoad();
});