// Datos de las provincias (obtenidos de la respuesta JSON)
const provincias = [
  {
    "CODPROV": "04",
    "NOMBRE_PROVINCIA": "Almería",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Andalucía",
    "CAPITAL_PROVINCIA": "Almería"
  },
  {
    "CODPROV": "11",
    "NOMBRE_PROVINCIA": "Cádiz",
    "CODAUTON": "01",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Andalucía",
    "CAPITAL_PROVINCIA": "Cádiz"
  },
  {
    "CODPROV": "14",
    "NOMBRE_PROVINCIA": "Córdoba",
    "CODAUTON": "01",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Andalucía",
    "CAPITAL_PROVINCIA": "Córdoba"
  },
  {
    "CODPROV": "18",
    "NOMBRE_PROVINCIA": "Granada",
    "CODAUTON": "01",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Andalucía",
    "CAPITAL_PROVINCIA": "Granada"
  },
  {
    "CODPROV": "21",
    "NOMBRE_PROVINCIA": "Huelva",
    "CODAUTON": "01",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Andalucía",
    "CAPITAL_PROVINCIA": "Huelva"
  },
  {
    "CODPROV": "23",
    "NOMBRE_PROVINCIA": "Jaén",
    "CODAUTON": "01",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Andalucía",
    "CAPITAL_PROVINCIA": "Jaén"
  },
  {
    "CODPROV": "29",
    "NOMBRE_PROVINCIA": "Málaga",
    "CODAUTON": "01",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Andalucía",
    "CAPITAL_PROVINCIA": "Málaga"
  },
  {
    "CODPROV": "41",
    "NOMBRE_PROVINCIA": "Sevilla",
    "CODAUTON": "01",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Andalucía",
    "CAPITAL_PROVINCIA": "Sevilla"
  },
  {
    "CODPROV": "22",
    "NOMBRE_PROVINCIA": "Huesca",
    "CODAUTON": "02",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Aragón",
    "CAPITAL_PROVINCIA": "Huesca"
  },
  {
    "CODPROV": "44",
    "NOMBRE_PROVINCIA": "Teruel",
    "CODAUTON": "02",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Aragón",
    "CAPITAL_PROVINCIA": "Teruel"
  },
  {
    "CODPROV": "50",
    "NOMBRE_PROVINCIA": "Zaragoza",
    "CODAUTON": "02",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Aragón",
    "CAPITAL_PROVINCIA": "Zaragoza"
  },
  {
    "CODPROV": "33",
    "NOMBRE_PROVINCIA": "Asturias",
    "CODAUTON": "03",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Principado de Asturias",
    "CAPITAL_PROVINCIA": "Oviedo"
  },
  {
    "CODPROV": "07",
    "NOMBRE_PROVINCIA": "Illes Balears",
    "CODAUTON": "04",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Illes Balears",
    "CAPITAL_PROVINCIA": "Palma de Mallorca"
  },
  {
    "CODPROV": "35",
    "NOMBRE_PROVINCIA": "Las Palmas",
    "CODAUTON": "05",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Canarias",
    "CAPITAL_PROVINCIA": "Las Palmas de Gran Canaria"
  },
  {
    "CODPROV": "38",
    "NOMBRE_PROVINCIA": "Santa Cruz de Tenerife",
    "CODAUTON": "05",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Canarias",
    "CAPITAL_PROVINCIA": "Santa Cruz de Tenerife"
  },
  {
    "CODPROV": "39",
    "NOMBRE_PROVINCIA": "Cantabria",
    "CODAUTON": "06",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Cantabria",
    "CAPITAL_PROVINCIA": "Santander"
  },
  {
    "CODPROV": "05",
    "NOMBRE_PROVINCIA": "Ávila",
    "CODAUTON": "07",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Castilla y León",
    "CAPITAL_PROVINCIA": "Ávila"
  },
  {
    "CODPROV": "09",
    "NOMBRE_PROVINCIA": "Burgos",
    "CODAUTON": "07",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Castilla y León",
    "CAPITAL_PROVINCIA": "Burgos"
  },
  {
    "CODPROV": "24",
    "NOMBRE_PROVINCIA": "León",
    "CODAUTON": "07",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Castilla y León",
    "CAPITAL_PROVINCIA": "León"
  },
  {
    "CODPROV": "34",
    "NOMBRE_PROVINCIA": "Palencia",
    "CODAUTON": "07",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Castilla y León",
    "CAPITAL_PROVINCIA": "Palencia"
  },
  {
    "CODPROV": "37",
    "NOMBRE_PROVINCIA": "Salamanca",
    "CODAUTON": "07",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Castilla y León",
    "CAPITAL_PROVINCIA": "Salamanca"
  },
  {
    "CODPROV": "40",
    "NOMBRE_PROVINCIA": "Segovia",
    "CODAUTON": "07",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Castilla y León",
    "CAPITAL_PROVINCIA": "Segovia"
  },
  {
    "CODPROV": "42",
    "NOMBRE_PROVINCIA": "Soria",
    "CODAUTON": "07",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Castilla y León",
    "CAPITAL_PROVINCIA": "Soria"
  },
  {
    "CODPROV": "47",
    "NOMBRE_PROVINCIA": "Valladolid",
    "CODAUTON": "07",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Castilla y León",
    "CAPITAL_PROVINCIA": "Valladolid"
  },
  {
    "CODPROV": "49",
    "NOMBRE_PROVINCIA": "Zamora",
    "CODAUTON": "07",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Castilla y León",
    "CAPITAL_PROVINCIA": "Zamora"
  },
  {
    "CODPROV": "02",
    "NOMBRE_PROVINCIA": "Albacete",
    "CODAUTON": "08",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Castilla-La Mancha",
    "CAPITAL_PROVINCIA": "Albacete"
  },
  {
    "CODPROV": "13",
    "NOMBRE_PROVINCIA": "Ciudad Real",
    "CODAUTON": "08",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Castilla-La Mancha",
    "CAPITAL_PROVINCIA": "Ciudad Real"
  },
  {
    "CODPROV": "16",
    "NOMBRE_PROVINCIA": "Cuenca",
    "CODAUTON": "08",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Castilla-La Mancha",
    "CAPITAL_PROVINCIA": "Cuenca"
  },
  {
    "CODPROV": "19",
    "NOMBRE_PROVINCIA": "Guadalajara",
    "CODAUTON": "08",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Castilla-La Mancha",
    "CAPITAL_PROVINCIA": "Guadalajara"
  },
  {
    "CODPROV": "45",
    "NOMBRE_PROVINCIA": "Toledo",
    "CODAUTON": "08",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Castilla-La Mancha",
    "CAPITAL_PROVINCIA": "Toledo"
  },
  {
    "CODPROV": "08",
    "NOMBRE_PROVINCIA": "Barcelona",
    "CODAUTON": "09",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Cataluña/Catalunya",
    "CAPITAL_PROVINCIA": "Barcelona"
  },
  {
    "CODPROV": "17",
    "NOMBRE_PROVINCIA": "Girona",
    "CODAUTON": "09",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Cataluña/Catalunya",
    "CAPITAL_PROVINCIA": "Girona"
  },
  {
    "CODPROV": "25",
    "NOMBRE_PROVINCIA": "Lleida",
    "CODAUTON": "09",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Cataluña/Catalunya",
    "CAPITAL_PROVINCIA": "Lleida"
  },
  {
    "CODPROV": "43",
    "NOMBRE_PROVINCIA": "Tarragona",
    "CODAUTON": "09",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Cataluña/Catalunya",
    "CAPITAL_PROVINCIA": "Tarragona"
  },
  {
    "CODPROV": "03",
    "NOMBRE_PROVINCIA": "Alacant/Alicante",
    "CODAUTON": "10",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Comunitat Valenciana",
    "CAPITAL_PROVINCIA": "Alicante/Alacant"
  },
  {
    "CODPROV": "12",
    "NOMBRE_PROVINCIA": "Castelló/Castellón",
    "CODAUTON": "10",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Comunitat Valenciana",
    "CAPITAL_PROVINCIA": "Castellón de la Plana/Castelló de la Plana"
  },
  {
    "CODPROV": "46",
    "NOMBRE_PROVINCIA": "València/Valencia",
    "CODAUTON": "10",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Comunitat Valenciana",
    "CAPITAL_PROVINCIA": "Valencia"
  },
  {
    "CODPROV": "06",
    "NOMBRE_PROVINCIA": "Badajoz",
    "CODAUTON": "11",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Extremadura",
    "CAPITAL_PROVINCIA": "Badajoz"
  },
  {
    "CODPROV": "10",
    "NOMBRE_PROVINCIA": "Cáceres",
    "CODAUTON": "11",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Extremadura",
    "CAPITAL_PROVINCIA": "Cáceres"
  },
  {
    "CODPROV": "15",
    "NOMBRE_PROVINCIA": "A Coruña",
    "CODAUTON": "12",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Galicia",
    "CAPITAL_PROVINCIA": "A Coruña"
  },
  {
    "CODPROV": "27",
    "NOMBRE_PROVINCIA": "Lugo",
    "CODAUTON": "12",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Galicia",
    "CAPITAL_PROVINCIA": "Lugo"
  },
  {
    "CODPROV": "32",
    "NOMBRE_PROVINCIA": "Ourense",
    "CODAUTON": "12",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Galicia",
    "CAPITAL_PROVINCIA": "Ourense"
  },
  {
    "CODPROV": "36",
    "NOMBRE_PROVINCIA": "Pontevedra",
    "CODAUTON": "12",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Galicia",
    "CAPITAL_PROVINCIA": "Pontevedra"
  },
  {
    "CODPROV": "28",
    "NOMBRE_PROVINCIA": "Madrid",
    "CODAUTON": "13",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Comunidad de Madrid",
    "CAPITAL_PROVINCIA": "Madrid"
  },
  {
    "CODPROV": "30",
    "NOMBRE_PROVINCIA": "Murcia",
    "CODAUTON": "14",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Región de Murcia",
    "CAPITAL_PROVINCIA": "Murcia"
  },
  {
    "CODPROV": "31",
    "NOMBRE_PROVINCIA": "Navarra",
    "CODAUTON": "15",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Comunidad Foral de Navarra",
    "CAPITAL_PROVINCIA": "Pamplona/Iruña"
  },
  {
    "CODPROV": "01",
    "NOMBRE_PROVINCIA": "Araba/Álava",
    "CODAUTON": "16",
    "COMUNIDAD_CIUDAD_AUTONOMA": "País Vasco/Euskadi",
    "CAPITAL_PROVINCIA": "Vitoria-Gasteiz"
  },
  {
    "CODPROV": "48",
    "NOMBRE_PROVINCIA": "Bizkaia",
    "CODAUTON": "16",
    "COMUNIDAD_CIUDAD_AUTONOMA": "País Vasco/Euskadi",
    "CAPITAL_PROVINCIA": "Bilbao"
  },
  {
    "CODPROV": "20",
    "NOMBRE_PROVINCIA": "Gipuzkoa",
    "CODAUTON": "16",
    "COMUNIDAD_CIUDAD_AUTONOMA": "País Vasco/Euskadi",
    "CAPITAL_PROVINCIA": "Donostia/San Sebastián"
  },
  {
    "CODPROV": "26",
    "NOMBRE_PROVINCIA": "La Rioja",
    "CODAUTON": "17",
    "COMUNIDAD_CIUDAD_AUTONOMA": "La Rioja",
    "CAPITAL_PROVINCIA": "Logroño"
  },
  {
    "CODPROV": "51",
    "NOMBRE_PROVINCIA": "Ceuta",
    "CODAUTON": "18",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Ciudad Autónoma de Ceuta",
    "CAPITAL_PROVINCIA": "Ceuta"
  },
  {
    "CODPROV": "52",
    "NOMBRE_PROVINCIA": "Melilla",
    "CODAUTON": "19",
    "COMUNIDAD_CIUDAD_AUTONOMA": "Ciudad Autónoma de Melilla",
    "CAPITAL_PROVINCIA": "Melilla"
  }
];

// Función para crear el HTML de una provincia
function crearProvinciaHTML(provincia) {
  const contenedorProvincia = document.createElement('div');
  contenedorProvincia.classList.add('provincia');

  const nombreProvincia = document.createElement('h3');
  nombreProvincia.classList.add('nombre-provincia');
  nombreProvincia.textContent = provincia.NOMBRE_PROVINCIA;

  const datosProvincia = document.createElement('ul');
  datosProvincia.classList.add('datos-provincia');

  const liComunidad = document.createElement('li');
  liComunidad.innerHTML = `<span class="label">Comunidad Autónoma:</span> ${provincia.COMUNIDAD_CIUDAD_AUTONOMA}`;
  datosProvincia.appendChild(liComunidad);

  const liCapital = document.createElement('li');
  liCapital.innerHTML = `<span class="label">Capital:</span> ${provincia.CAPITAL_PROVINCIA}`;
  datosProvincia.appendChild(liCapital);

  contenedorProvincia.appendChild(nombreProvincia);
  contenedorProvincia.appendChild(datosProvincia);

  return contenedorProvincia;
}

// Recorrer las provincias y crear el HTML
const contenedorProvincias = document.getElementById('provincias');
provincias.forEach(provincia => {
  const provinciaHTML = crearProvinciaHTML(provincia);
  contenedorProvincias.appendChild(provinciaHTML);
});

const seccion = document.getElementById("seccion");
const boton = document.getElementById("boton");
let indiceImagen = 1; // Índice de la imagen actual (1 por defecto)

const imagenes = [
    "img/nodespejado.jpg",
    "img/nuboso.jpg",
];

boton.addEventListener("click", () => {
    indiceImagen = (indiceImagen + 1) % imagenes.length;
    seccion.style.backgroundImage = `url(${imagenes[indiceImagen]})`;
});

