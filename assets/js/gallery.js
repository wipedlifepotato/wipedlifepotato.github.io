(function () {
  function init() {
    var root = document.querySelector('main, .content, #content') || document.body;
    var imgs = Array.prototype.slice.call(root.querySelectorAll('img')).filter(function (img) {
      if (img.closest('a')) return false;
      if (img.closest('.gallery-overlay')) return false;
      var src = (img.currentSrc || img.src || '').toLowerCase();
      if (!src) return false;
      return true;
    });
    if (!imgs.length) return;

    imgs.forEach(function (img) { img.classList.add('gallery-zoomable'); });

    var overlay = document.createElement('div');
    overlay.className = 'gallery-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML =
      '<button type="button" class="gallery-btn gallery-close" aria-label="Close">&times;</button>' +
      '<button type="button" class="gallery-btn gallery-prev" aria-label="Previous">&#8249;</button>' +
      '<img alt="">' +
      '<button type="button" class="gallery-btn gallery-next" aria-label="Next">&#8250;</button>' +
      '<div class="gallery-counter"></div>';
    document.body.appendChild(overlay);

    var overlayImg = overlay.querySelector('img');
    var btnPrev = overlay.querySelector('.gallery-prev');
    var btnNext = overlay.querySelector('.gallery-next');
    var btnClose = overlay.querySelector('.gallery-close');
    var counter = overlay.querySelector('.gallery-counter');
    var index = 0;

    function render() {
      var img = imgs[index];
      overlayImg.src = img.currentSrc || img.src;
      overlayImg.alt = img.alt || '';
      counter.textContent = (index + 1) + ' / ' + imgs.length;
      var multi = imgs.length > 1;
      btnPrev.style.display = multi ? '' : 'none';
      btnNext.style.display = multi ? '' : 'none';
      counter.style.display = multi ? '' : 'none';
    }
    function openAt(i) {
      index = i;
      render();
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      overlayImg.src = '';
    }
    function prev() { index = (index - 1 + imgs.length) % imgs.length; render(); }
    function next() { index = (index + 1) % imgs.length; render(); }

    imgs.forEach(function (img, i) {
      img.addEventListener('click', function () { openAt(i); });
    });
    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', function (e) { e.stopPropagation(); prev(); });
    btnNext.addEventListener('click', function (e) { e.stopPropagation(); next(); });
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    });

    var touchX = null;
    overlay.addEventListener('touchstart', function (e) {
      if (e.touches && e.touches.length === 1) touchX = e.touches[0].clientX;
    }, { passive: true });
    overlay.addEventListener('touchend', function (e) {
      if (touchX == null) return;
      var endX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : touchX;
      var dx = endX - touchX;
      if (Math.abs(dx) > 40) { if (dx > 0) prev(); else next(); }
      touchX = null;
    }, { passive: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();