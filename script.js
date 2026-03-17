// ======= CONFIGURACIÓN RSVP (Google Sheets) =======
const RSVP_ENDPOINT = ""; // Ejemplo: https://script.google.com/macros/s/XXXX/exec

// ======= DATOS EDITABLES =======
// 2) Alojamientos 
const HOTELS = [
  {
    name: "Hotel Meliá Sevilla",
    stars: "****",
    address: "Calle Doctor Pedro de Castro 1, 41004 Sevilla",
    phone: "954 42 15 11",
    url: "https://www.melia.com/en/hotels/spain/seville/melia-sevilla",
  },
  {
    name: "AC Hotel Ciudad de Sevilla",
    stars: "****",
    address: "Avenida Manuel Siurot 25, 41013 Sevilla",
    note: "A 5 min andando de la Iglesia",
    phone: "954 23 05 05",
    url: "https://www.marriott.com/en-us/hotels/svqci-ac-hotel-ciudad-de-sevilla/overview/",
  },
  {
    name: "Hotel Soho Boutique Catedral",
    stars: "****",
    address: "Avenida de la Constitución 8, 41001 Sevilla",
    phone: "854 85 60 59",
    url: "https://sohohoteles.com/destinos/hotel-soho-boutique-catedral-4/",
    email: "info@sohohoteles.com",
    discount: "20% de descuento- enviar email a info@sohohoteles.com",
  },
  {
    name: "Hotel América",
    stars: "****",
    address: "Plaza del Duque de la Victoria 9, 41002 Sevilla",
    phone: "954 22 09 51",
    url: "https://hotelamericasevilla.com",
    discount: "10% de descuento- código BODAYOLANDAYALVARO",
  },
  {
    name: "Hotel Hesperia",
    stars: "****",
    address: "Avenida Eduardo Dato 49, 41018 Sevilla",
    phone: "954 54 83 00",
    url: "https://hesperia.com/hotel-hesperia-sevilla/",
    discount: "10% de descuento- código YOLANDAYALVARO",
  },
  {
    name: "Hotel Sevilla Center",
    stars: "****",
    address: "Avenida de la Buhaira 24, 41018 Sevilla",
    phone: "954 54 95 00",
    url: "https://www.hotelescenter.es/hotel-sevilla-center/",
  },
  {
    name: "Hotel Giralda Center",
    stars: "****",
    address: "Calle Juan de Mata Carriazo 7, 41018 Sevilla",
    phone: "954 56 14 14",
    url: "https://www.hotelescenter.es/hotel-giralda-center/",
  },
  {
    name: "Halo Boutique Hotel Sevilla",
    stars: "****",
    address: "Calle Gloria 3, 41004 Sevilla",
    phone: "954 56 33 56",
    url: "https://www.hotelhalodesevilla.com/",
  },
  {
    name: "H10 Casa de la Plata",
    stars: "****",
    address: "Calle Lagar 2, 41004 Sevilla",
    phone: "954 54 87 12",
    url: "https://www.h10hotels.com/en/seville-hotels/h10-casa-de-la-plata",
  },
  {
    name: "Hotel Tayko Sevilla",
    stars: "****",
    address: "Puerta de Jerez 3, 41004 Sevilla",
    phone: "955 83 00 47",
    url: "https://taykohotels.com/sevilla/",
  },
  {
    name: "Hotel Zenit Sevilla",
    stars: "****",
    address: "Calle Pagés del Corro 90B, 41010 Sevilla",
    phone: "954 34 74 34",
    url: "https://sevilla.zenithoteles.com/es/",
  },
];

// 3) Enlaces “Dónde comer” (pendientes)
const LINKS = {
  food: "#",
  party: "#"
};

// ======= Menú móvil =======
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
});

// ======= Footer año =======
document.getElementById("year").textContent = new Date().getFullYear();

// ======= Pintar paradas de bus =======
// Comentado para que no rompa el script si BUS_STOPS no existe
// const bus1 = document.getElementById("busStops1");
// const bus2 = document.getElementById("busStops2");
// const bus3 = document.getElementById("busStops3");
// if (bus1) bus1.textContent = BUS_STOPS.back_2130;
// if (bus2) bus2.textContent = BUS_STOPS.back_0000;
// if (bus3) bus3.textContent = BUS_STOPS.back_0230;

// ======= Pintar hoteles =======
function renderHotels(){
  const hotelsGrid = document.getElementById("hotelsGrid");
  if(!hotelsGrid) return;
  hotelsGrid.innerHTML = HOTELS.map(h => `
    <article class="card">
      <h3>${h.name} <span style="color:#5d6773;font-weight:600;font-family:Inter">${h.stars}</span></h3>
      <p class="muted">${h.address}</p>
      ${h.note ? `<p class="muted">${h.note}</p>` : ``}
      <p class="small">
        <a class="link" href="${h.url}" target="_blank" rel="noreferrer">Web →</a><br/>
        ${h.phone ? `<span class="muted">Tel: ${h.phone}</span><br/>` : ``}
        ${h.email ? `<span class="muted">Email: ${h.email}</span>` : ``}
      </p>
      ${h.discount ? `<p class="small"><strong>Descuento:</strong> ${h.discount}</p>` : ``}
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderHotels);

// ======= Enlaces “Dónde comer” =======
const foodLink = document.getElementById("foodLink");
const partyLink = document.getElementById("partyLink");
if(foodLink) foodLink.href = LINKS.food;
if(partyLink) partyLink.href = LINKS.party;

// ======= Copiar IBAN =======
document.getElementById("copyIban")?.addEventListener("click", async () => {
  const text = document.getElementById("iban").textContent.trim();
  try{
    await navigator.clipboard.writeText(text);
    alert("Cuenta copiada ✅");
  }catch(e){
    alert("No se pudo copiar. Selecciónalo manualmente.");
  }
});

// ======= Countdown =======
function startCountdown(){
  const el = document.querySelector(".countdown");
  if(!el) return;

  const targetStr = el.getAttribute("data-date");
  const target = new Date(targetStr).getTime();

  const d = document.getElementById("d");
  const h = document.getElementById("h");
  const m = document.getElementById("m");
  const s = document.getElementById("s");

  const tick = () => {
    const now = Date.now();
    let diff = Math.max(0, target - now);

    const days = Math.floor(diff / (1000*60*60*24));
    diff -= days * (1000*60*60*24);
    const hours = Math.floor(diff / (1000*60*60));
    diff -= hours * (1000*60*60);
    const mins = Math.floor(diff / (1000*60));
    diff -= mins * (1000*60);
    const secs = Math.floor(diff / 1000);

    d.textContent = String(days);
    h.textContent = String(hours).padStart(2, "0");
    m.textContent = String(mins).padStart(2, "0");
    s.textContent = String(secs).padStart(2, "0");
  };

  tick();
  setInterval(tick, 1000);
}
startCountdown();

// ======= RSVP (si no hay endpoint, muestra aviso) =======
const form = document.getElementById("rsvpForm");
const msg = document.getElementById("formMsg");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!RSVP_ENDPOINT) {
    msg.textContent = "Pendiente: conecta Google Sheets (pega la URL /exec en script.js)";
    return;
  }

  msg.textContent = "Enviando…";

  const fd = new FormData(form);
  const payload = {
    nombre: fd.get("nombre") || "",
    contacto: fd.get("contacto") || "",
    asistencia: fd.get("asistencia") || "",
    acompananteNombre: fd.get("acompananteNombre") || "",
    alergias: fd.get("alergias") || "",
    bus: fd.get("bus") || "",
    mensaje: fd.get("mensaje") || ""
  };

  try {
    const res = await fetch(RSVP_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      redirect: "follow",
      body: JSON.stringify(payload)
    });

    const data = await res.json().catch(() => ({}));

    if (data.ok) {
      msg.textContent = "¡Gracias! RSVP enviado ✅";
      form.reset();
    } else {
      msg.textContent = "No se pudo enviar. Inténtalo de nuevo.";
      console.error(data);
    }
  } catch (err) {
    msg.textContent = "Error de conexión. Inténtalo de nuevo.";
    console.error(err);
  }
});
