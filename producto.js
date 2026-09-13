// ---------- Galería: cambiar imagen principal al clickear una miniatura ----------
const thumbs = document.querySelectorAll('.thumb');
const mainImg = document.getElementById('mainImg');

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    const thumbImgSrc = thumb.querySelector('img').getAttribute('src');
    // Si cargaste una imagen en la miniatura, se refleja en la imagen principal
    if (thumbImgSrc) {
      mainImg.setAttribute('src', thumbImgSrc);
    }
  });
});

// ---------- Selección de color ----------
const colorSwatches = document.querySelectorAll('.swatch');
const colorLabel = document.getElementById('colorLabel');

colorSwatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    colorSwatches.forEach(s => s.classList.remove('selected'));
    swatch.classList.add('selected');
    colorLabel.textContent = swatch.dataset.color;
  });
});
// Color inicial seleccionado
if (colorSwatches[0]) colorSwatches[0].classList.add('selected');

// ---------- Selección de talle ----------
const sizeButtons = document.querySelectorAll('.size-btn');
const sizeLabel = document.getElementById('sizeLabel');

sizeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    sizeButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    sizeLabel.textContent = btn.textContent;
  });
});

// ---------- Selector de cantidad ----------
const qtyValue = document.getElementById('qtyValue');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
let quantity = 1;
const maxStock = 7;

qtyMinus.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    qtyValue.textContent = quantity;
  }
});

qtyPlus.addEventListener('click', () => {
  if (quantity < maxStock) {
    quantity++;
    qtyValue.textContent = quantity;
  }
});

// ---------- Agregar al carrito / Comprar ahora ----------
const addCartBtn = document.getElementById('addCartBtn');
const buyNowBtn = document.getElementById('buyNowBtn');
const formFeedback = document.getElementById('formFeedback');

function validateSelection() {
  if (!sizeLabel.textContent || sizeLabel.textContent === 'Elegí un talle') {
    formFeedback.textContent = 'Por favor, elegí un talle antes de continuar.';
    return false;
  }
  formFeedback.textContent = '';
  return true;
}

addCartBtn.addEventListener('click', () => {
  if (!validateSelection()) return;
  formFeedback.style.color = '#1a9f4b';
  formFeedback.textContent = `Agregado al carrito: talle ${sizeLabel.textContent}, color ${colorLabel.textContent}, cantidad ${quantity}.`;
});

buyNowBtn.addEventListener('click', () => {
  if (!validateSelection()) return;
  formFeedback.style.color = '#1a9f4b';
  formFeedback.textContent = 'Redirigiendo al checkout... (simulado)';
});
