  // ---------- Datos de ejemplo de productos ----------
  const products = [
    {emoji:"👗", name:"Vestido midi floral", price:12.99,  stock:"Últimas 3 unidades", tag:"-48%"},
    {emoji:"👖", name:"Jean mom fit tiro alto", price:18.50, stock:"Se está agotando", tag:"-42%"},
    {emoji:"👟", name:"Zapatillas urban knit", price:22.00, stock:null, tag:"NUEVO"},
    {emoji:"🧥", name:"Campera oversize", price:29.99, stock:"Últimas 5 unidades", tag:"-45%"},
    {emoji:"👜", name:"Bolso mini shoulder", price:14.25, stock:null, tag:"-32%"},
    {emoji:"🩳", name:"Short cargo denim", price:16.00, stock:"Últimas 2 unidades", tag:"-40%"},
    {emoji:"🕶️", name:"Lentes de sol retro", price:8.99, stock:null, tag:"-44%"},
    {emoji:"👚", name:"Top canalé básico", price:7.50, stock:"Se está agotando", tag:"-42%"},
    {emoji:"👢", name:"Botas chelsea", price:33.00, stock:null, tag:"-43%"},
    {emoji:"🧢", name:"Gorra bordada", price:6.99, stock:null, tag:"-42%"},
  ];

  const grid = document.getElementById('productGrid');
  grid.innerHTML = products.map(p => `
    <div class="card">
      <div class="imgwrap">
        <span class="tag">${p.tag}</span>
        <button class="wish" aria-label="Agregar a favoritos">♡</button>
        ${p.emoji}
        ${p.stock ? `<div class="stock">${p.stock}</div>` : ""}
      </div>
      <div class="info">
        <div class="price">$${p.price.toFixed(2)} <span class="old">$${p.old.toFixed(2)}</span></div>
        <div class="name">${p.name}</div>
        <div class="rating">★★★★☆ (${Math.floor(Math.random()*400)+20})</div>
      </div>
    </div>
  `).join('');

  // ---------- Contador de urgencia (barra superior) ----------
  function startAnnounceTimer(){
    let total = 3*3600 + 12*60 + 5; // arranca en un valor fijo, cae con el tiempo
    const el = document.getElementById('announceTimer');
    setInterval(()=>{
      if(total <= 0) total = 3*3600;
      total--;
      const h = String(Math.floor(total/3600)).padStart(2,'0');
      const m = String(Math.floor((total%3600)/60)).padStart(2,'0');
      const s = String(total%60).padStart(2,'0');
      el.textContent = `${h}:${m}:${s}`;
    },1000);
  }
  startAnnounceTimer();

  // ---------- Contador oferta flash ----------
  function startFlashTimer(){
    let total = 2*3600 + 45*60 + 30;
    const h = document.getElementById('fh');
    const m = document.getElementById('fm');
    const s = document.getElementById('fs');
    setInterval(()=>{
      if(total <= 0) total = 2*3600 + 45*60 + 30;
      total--;
      h.textContent = String(Math.floor(total/3600)).padStart(2,'0');
      m.textContent = String(Math.floor((total%3600)/60)).padStart(2,'0');
      s.textContent = String(total%60).padStart(2,'0');
    },1000);
  }
  startFlashTimer();

  // ---------- Popup de prueba social periódico ----------
  const names = ["Julieta","Valentina","Lucía","Camila","Agustina","Martina"];
  const cities = ["Neuquén","Mar del Plata","Córdoba","Rosario","Salta","Bariloche"];
  const items = ["el Vestido Ibiza","la Campera oversize","el Jean mom fit","las Zapatillas urban knit","el Top canalé"];

  function showLivePopup(){
    const popup = document.getElementById('livePopup');
    document.getElementById('popupName').textContent = names[Math.floor(Math.random()*names.length)];
    document.getElementById('popupItem').textContent = items[Math.floor(Math.random()*items.length)];
    document.getElementById('popupTime').textContent = Math.floor(Math.random()*10)+1;
    popup.classList.add('show');
    setTimeout(()=> popup.classList.remove('show'), 4500);
  }
  setTimeout(showLivePopup, 3000);
  setInterval(showLivePopup, 14000);