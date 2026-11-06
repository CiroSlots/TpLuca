// ===== DATOS =====
const partidos = [
  { fecha: "02/11", local: "Newell's", visitante: "Rosario Central", resultado: "2 - 1", torneo: "Liga Profesional" },
  { fecha: "26/10", local: "Racing", visitante: "Newell's", resultado: "0 - 0", torneo: "Liga Profesional" },
  { fecha: "19/10", local: "Newell's", visitante: "Talleres", resultado: "1 - 0", torneo: "Liga Profesional" },
  { fecha: "09/11", local: "Boca", visitante: "Newell's", resultado: "21:00", torneo: "Próximo partido" }
];

const posiciones = [
  { equipo: "River", pj: 14, pts: 29 },
  { equipo: "Newell's", pj: 14, pts: 27 },
  { equipo: "Boca", pj: 14, pts: 25 },
  { equipo: "Racing", pj: 14, pts: 22 },
  { equipo: "Rosario Central", pj: 14, pts: 18 }
];

const noticias = [
  { titulo: "Ganó el clásico y es escolta", texto: "La Lepra se impuso en el Coloso y quedó a dos puntos de la punta.", fecha: "02/11" },
  { titulo: "Lista de convocados para visitar a Boca", texto: "El DT confirmó 22 jugadores para el partido del domingo.", fecha: "05/11" },
  { titulo: "Socios: venta de entradas", texto: "Desde el lunes se habilita la compra online para el próximo partido de local.", fecha: "06/11" }
];

// ===== FUNCIONES QUE ARMAN CADA SECCIÓN =====
function mostrarPartidos() {
  let html = '<div class="titulo">Partidos de Newell\'s</div>';
  partidos.forEach(p => {
    html += `
      <div class="partido">
        <span class="local">${p.local}</span>
        <span class="resultado">${p.resultado}</span>
        <span>${p.visitante}</span>
        <small>${p.fecha} - ${p.torneo}</small>
      </div>`;
  });
  return html;
}

function mostrarPosiciones() {
  let html = '<div class="titulo">Tabla de posiciones</div><table><tr><th>#</th><th>Equipo</th><th>PJ</th><th>Pts</th></tr>';
  posiciones.forEach((e, i) => {
    const clase = e.equipo === "Newell's" ? 'class="nob"' : "";
    html += `<tr ${clase}><td>${i + 1}</td><td>${e.equipo}</td><td>${e.pj}</td><td>${e.pts}</td></tr>`;
  });
  return html + "</table>";
}

function mostrarNoticias() {
  let html = '<div class="titulo">Últimas noticias</div>';
  noticias.forEach(n => {
    html += `
      <div class="noticia">
        <h3>${n.titulo}</h3>
        <p>${n.texto}</p>
        <span>${n.fecha}</span>
      </div>`;
  });
  return html;
}

// ===== NAVEGACIÓN ENTRE PESTAÑAS =====
const secciones = {
  partidos: mostrarPartidos,
  posiciones: mostrarPosiciones,
  noticias: mostrarNoticias
};

const contenido = document.getElementById("contenido");
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("activo"));
    tab.classList.add("activo");
    contenido.innerHTML = secciones[tab.dataset.seccion]();
  });
});

// Al cargar la página se muestran los partidos
contenido.innerHTML = mostrarPartidos();
