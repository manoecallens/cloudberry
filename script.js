/* Cloudberry · landingspagina */
document.documentElement.classList.add('js');

/* 1. Buzz-kaarten: rijen "Cloudberry + woord" achter het product,
      net zoals de Figma Buzz-templates. Het woord staat in data-word. */
document.querySelectorAll('.buzz').forEach((card) => {
  const rows = card.querySelector('.buzz__rows');
  const word = card.dataset.word || '';
  if (!rows) return;
  const html = [];
  for (let i = 0; i < 14; i++) {
    html.push(`<span>Cloudberry <b>${word}</b></span>`);
  }
  rows.innerHTML = html.join('');
});

/* 1b. Rijen even breed als de kaart maken (zoals in Figma Buzz):
       de lettergrootte wordt berekend uit de breedte van één rij. */
function fitBuzzRows() {
  document.querySelectorAll('.buzz').forEach((card) => {
    const rows = card.querySelector('.buzz__rows');
    const row = rows && rows.querySelector('span');
    if (!row) return;
    rows.style.fontSize = '100px';
    const natural = row.getBoundingClientRect().width;
    const target = rows.clientWidth;
    if (natural > 0 && target > 0) {
      rows.style.fontSize = (100 * target / natural).toFixed(2) + 'px';
    }
  });
}
fitBuzzRows();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitBuzzRows);
if ('ResizeObserver' in window) {
  const ro = new ResizeObserver(() => fitBuzzRows());
  document.querySelectorAll('.buzz').forEach((card) => ro.observe(card));
} else {
  window.addEventListener('resize', fitBuzzRows);
}

/* 2. Secties zacht laten verschijnen bij het scrollen. */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* 3. Voorbeeldformulier (alleen zolang de MailerLite-embed nog niet geplakt is).
      Controleert de velden en toont het succesbericht uit MailerLite. Verstuurt niets. */
const form = document.getElementById('fallback-form');
if (form) {
  const error = form.querySelector('.form__error');
  const success = document.getElementById('form-success');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      error.hidden = false;
      const firstInvalid = form.querySelector(':invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    error.hidden = true;
    form.hidden = true;
    success.hidden = false;
    success.setAttribute('tabindex', '-1');
    success.focus();
  });
}

/* 4. FAQ: vragen vloeiend open- en dichtklappen (hoogte + vervagen),
      in plaats van meteen te verspringen. */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.faq details').forEach((details) => {
  const summary = details.querySelector('summary');
  const content = details.querySelector('summary ~ *');
  if (!summary || !content || reduceMotion || !details.animate) return;
  let anim = null;

  summary.addEventListener('click', (e) => {
    e.preventDefault();
    const opening = !details.open || details.classList.contains('is-closing');
    const start = details.offsetHeight;
    if (anim) anim.cancel();
    details.style.overflow = 'hidden';

    let end;
    if (opening) {
      details.classList.remove('is-closing');
      details.open = true;
      end = details.offsetHeight;
    } else {
      details.classList.add('is-closing');
      const border = details.offsetHeight - details.clientHeight;
      end = summary.offsetHeight + border;
    }

    anim = details.animate(
      { height: [start + 'px', end + 'px'] },
      { duration: 380, easing: 'cubic-bezier(.2,.8,.2,1)' }
    );
    content.animate(
      { opacity: opening ? [0, 1] : [1, 0] },
      { duration: opening ? 380 : 220, easing: 'ease', fill: 'none' }
    );
    anim.onfinish = () => {
      if (!opening) { details.open = false; details.classList.remove('is-closing'); }
      details.style.overflow = '';
      anim = null;
    };
  });
});
