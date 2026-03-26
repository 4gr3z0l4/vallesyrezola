// src/data/obras.ts
import type { ImageMetadata } from 'astro';

// Importar TODAS las imágenes principales (una por obra)
import bbvaImg from '~/assets/images/obras/nuevasedebbvalastablas/1.jpg';
import palosImg from '~/assets/images/obras/palosdelafrontera/1.jpg';
import rioCarrionImg from '~/assets/images/obras/hospitalriocarrionpalenciaacciona/1.jpg';
import azcaImg from '~/assets/images/obras/oficinasazca/1.jpg';
import pradilloImg from '~/assets/images/obras/oficinascallepradillo/1.jpg';
import vaguadaImg from '~/assets/images/obras/centrocomerciallavaguada/1.webp';
import atochaImg from '~/assets/images/obras/edificiobosquedeatocha/1.jpg';
import togoImg from '~/assets/images/obras/estructurapuertodelome-togo/1.jpg';
import cubosImg from '~/assets/images/obras/rehabilitacionedifloscubosm30/1.jpg';
import santanderImg from '~/assets/images/obras/ciudadfinancierabancosantanderbsch/1.jpg';
import aparcamientoImg from '~/assets/images/obras/aparcamientoamazoncarbonellyfigueras/1.webp';
import majadahondaImg from '~/assets/images/obras/viviendasexclusivasmajadahondaafar4/1.webp';
import getafeImg from '~/assets/images/obras/318viviendasuniversidadcarlosiiigetafe-acciona/1.jpg';
import castellanaImg from '~/assets/images/obras/edificiopaseocastellana77-grupogmp/1.jpg';
import cosladaImg from '~/assets/images/obras/bibliotecamunicipalcoslada-fcc/1.jpg';
import iberdrolaImg from '~/assets/images/obras/campusiberdrola-acciona/1.jpg';
import vallecasImg from '~/assets/images/obras/48chaletscrucedelartevallecas/1.webp';
import sanchinarroImg from '~/assets/images/obras/123viviendassanchinarro/1.jpg';
import matuteImg from '~/assets/images/obras/bibliotecamunicipalanamariamatute/1.jpg';
import humanesImg from '~/assets/images/obras/60viviendashumanesalza/1.jpg';
import almansaImg from '~/assets/images/obras/95viviendassanjose-callealmansa/1.webp';
import molinosImg from '~/assets/images/obras/196viviendaslosmolinosgetafe-acciona/1.jpg';
import majuelosImg from '~/assets/images/obras/desvíoarroyodelosmajuelosbsch/1.jpg';
import eigoImg from '~/assets/images/obras/eigo-centrologisticopinto/1.webp';
import ginerImg from '~/assets/images/obras/fundacionfranciscoginerdelosrios/1.jpg';
import inditexImg from '~/assets/images/obras/naveinditexmontepino-acciona/1.jpg';
import nuiconImg from '~/assets/images/obras/48viviendasunifamiliares-nuicon/1.jpg';
import butarqueImg from '~/assets/images/obras/174viviendasbutarque-acciona/1.jpg';
import alcobendasImg from '~/assets/images/obras/polideportivoalcobendas/1.jpg';

export type Obra = {
  slug: string;
  imagen: ImageMetadata;
  titulo: string;
  descripcion: string;
  contenido?: string;
  anio?: number;
  cliente?: string;
  localizacion?: string;
  fotos: string[];
};

export const obras: Obra[] = [
  {
    slug: 'nuevasedebbvalastablas',
    imagen: bbvaImg,
    titulo: 'Sede BBVA',
    descripcion: 'Sede BBVA Las Tablas',
    contenido: 'Ejecución de estructura del complejo corporativo de BBVA en Las Tablas (Madrid).',
    anio: 2015,
    cliente: 'Acciona',
    localizacion: 'Madrid',
    fotos: [
      'nuevasedebbvalastablas/1.jpg',
      'nuevasedebbvalastablas/2.jpg',
      'nuevasedebbvalastablas/3.jpg',
      'nuevasedebbvalastablas/4.jpg',
      'nuevasedebbvalastablas/5.jpg',
      'nuevasedebbvalastablas/6.jpg',
      'nuevasedebbvalastablas/7.jpg',
      'nuevasedebbvalastablas/8.jpg',
      'nuevasedebbvalastablas/9.jpg',
      'nuevasedebbvalastablas/10.jpg',
      'nuevasedebbvalastablas/11.jpg',
      'nuevasedebbvalastablas/12.jpg',
      'nuevasedebbvalastablas/13.jpg',
    ],
  },
  {
    slug: 'palosdelafrontera',
    imagen: palosImg,
    titulo: 'Línea 11 de metro - Palos de la Frontera',
    descripcion: 'Ampliación de línea 11 de Metro de Madrid',
    contenido:
      'Ejecución de losas, muros y vertidos de hormigón en la ampliación de la línea 11 de Metro de Madrid, estación de Palos de la Frontera.',
    anio: 2025,
    cliente: 'UTE Acciona - Dragados',
    localizacion: 'Madrid',
    fotos: [
      'palosdelafrontera/1.jpg',
      'palosdelafrontera/2.jpg',
      'palosdelafrontera/3.jpg',
      'palosdelafrontera/4.jpg',
      'palosdelafrontera/5.jpg',
      'palosdelafrontera/6.jpg',
      'palosdelafrontera/7.jpg',
      'palosdelafrontera/8.jpg',
      'palosdelafrontera/9.jpg',
      'palosdelafrontera/10.jpg',
      'palosdelafrontera/11.jpg',
      'palosdelafrontera/12.jpg',
      'palosdelafrontera/13.jpg',
      'palosdelafrontera/14.jpg',
      'palosdelafrontera/15.jpg',
    ],
  },
  {
    slug: 'hospitalriocarrionpalenciaacciona',
    imagen: rioCarrionImg,
    titulo: 'Hospital General Río Carrión',
    descripcion: 'Hospital General Río Carrión - Palencia - Acciona',
    contenido: 'Ejecución de estructura de hormigón del nuevo hospital Río Carrión, Palencia.',
    anio: 2024,
    cliente: 'Acciona',
    localizacion: 'Palencia',
    fotos: [
      'hospitalriocarrionpalenciaacciona/1.jpg',
      'hospitalriocarrionpalenciaacciona/2.webp',
      'hospitalriocarrionpalenciaacciona/3.webp',
      'hospitalriocarrionpalenciaacciona/4.webp',
      'hospitalriocarrionpalenciaacciona/5.webp',
      'hospitalriocarrionpalenciaacciona/6.webp',
      'hospitalriocarrionpalenciaacciona/7.webp',
    ],
  },
  {
    slug: 'oficinasazca',
    imagen: azcaImg,
    titulo: 'Edificio de oficinas',
    descripcion: 'Edificio de oficinas - AZCA - Acciona',
    contenido: 'Edificio de oficinas en el distrito financiero y de negocios AZCA (Madrid).',
    anio: 2025,
    cliente: 'Acciona',
    localizacion: 'Madrid',
    fotos: [
      'oficinasazca/1.jpg',
      'oficinasazca/2.jpg',
      'oficinasazca/3.jpg',
      'oficinasazca/4.jpg',
      'oficinasazca/5.jpg',
      'oficinasazca/6.jpg',
      'oficinasazca/7.jpg',
      'oficinasazca/8.jpg',
      'oficinasazca/9.jpg',
      'oficinasazca/10.jpg',
      'oficinasazca/11.jpg',
      'oficinasazca/12.jpg',
      'oficinasazca/13.jpg',
      'oficinasazca/14.jpg',
      'oficinasazca/15.jpg',
      'oficinasazca/16.jpg',
      'oficinasazca/17.jpg',
      'oficinasazca/18.jpg',
    ],
  },
  {
    slug: 'oficinascallepradillo',
    imagen: pradilloImg,
    titulo: 'Edificio de oficinas',
    descripcion: 'Edificio de oficinas - Calle Pradillo - Acciona',
    contenido:
      'Edificio de oficinas en la calle Pradillo (Madrid), con losas postesadas y núcleos de hormigón armado para maximizar luces y flexibilidad de uso.',
    anio: 2025,
    cliente: 'Acciona',
    localizacion: 'Madrid',
    fotos: ['oficinascallepradillo/1.jpg'],
  },
  {
    slug: 'centrocomerciallavaguada',
    imagen: vaguadaImg,
    titulo: 'Centro Comercial La Vaguada',
    descripcion: 'Reforma de unidades estructurales de cubierta',
    contenido:
      'Ejecución en horario nocturno de la reforma estructural de la cubierta del Centro Comercial La Vaguada.',
    anio: 2024,
    cliente: 'Oria',
    localizacion: 'Madrid',
    fotos: [
      'centrocomerciallavaguada/1.webp',
      'centrocomerciallavaguada/2.webp',
      'centrocomerciallavaguada/3.webp',
      'centrocomerciallavaguada/4.webp',
      'centrocomerciallavaguada/5.webp',
    ],
  },
  {
    slug: 'edificiobosquedeatocha',
    imagen: atochaImg,
    titulo: 'Edificio residencial - Atocha',
    descripcion: 'Edificio Bosque de Atocha',
    contenido:
      'Ejecución de espectacular edificio de viviendas, piscina y garajes en zona Méndez Alvaro. Menos de cinco meses para la ejecución de los aproximadamente 19.000 m2 de estructura de hormigón en 13 plantas, gracias a la máxima colaboración del equipo de obra, de la DF y Acciona Inmobiliaria. En enero 2022 obtiene el prestigioso galardón internacional otorgado por Outstanding Property, de Mejor Edificio del Mundo 2021, lo que es un orgullo para todos los que colaboramos en la ejecución de la dificultosa y especial estructura y fachada de hormigón.',
    anio: 2021,
    cliente: 'Acciona',
    localizacion: 'Madrid',
    fotos: [
      'edificiobosquedeatocha/1.jpg',
      'edificiobosquedeatocha/2.jpg',
      'edificiobosquedeatocha/3.jpg',
      'edificiobosquedeatocha/4.jpg',
      'edificiobosquedeatocha/5.jpg',
      'edificiobosquedeatocha/6.jpg',
      'edificiobosquedeatocha/7.jpg',
      'edificiobosquedeatocha/8.jpg',
      'edificiobosquedeatocha/9.jpg',
      'edificiobosquedeatocha/10.jpg',
      'edificiobosquedeatocha/11.jpg',
      'edificiobosquedeatocha/12.jpg',
      'edificiobosquedeatocha/13.jpg',
    ],
  },
  {
    slug: 'estructurapuertodelome-togo',
    imagen: togoImg,
    titulo: 'Estructura en Lome - Togo',
    descripcion: 'Estructura Puerto de Lome - Togo',
    contenido:
      'Ejecución de edificio de control de puerto de Lomé (Togo) con pilares in situ de hasta 18 m. de altura.',
    anio: 2019,
    cliente: 'Hill International',
    localizacion: 'Lomé, Togo',
    fotos: [
      'estructurapuertodelome-togo/1.jpg',
      'estructurapuertodelome-togo/2.jpg',
      'estructurapuertodelome-togo/3.jpg',
      'estructurapuertodelome-togo/4.jpg',
    ],
  },
  {
    slug: 'rehabilitacionedifloscubosm30',
    imagen: cubosImg,
    titulo: 'Rehabilitación Edificio Los Cubos',
    descripcion: 'Rehabilitación Edificio Los Cubos - M30',
    contenido:
      'Rehabilitación estructural y ejecución de nuevas losas de hormigón en singular edificio en la M30 madrileña.',
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
    fotos: [
      'rehabilitacionedifloscubosm30/1.jpg',
      'rehabilitacionedifloscubosm30/2.jpg',
      'rehabilitacionedifloscubosm30/3.jpg',
      'rehabilitacionedifloscubosm30/4.jpg',
      'rehabilitacionedifloscubosm30/5.jpg',
      'rehabilitacionedifloscubosm30/6.jpg',
      'rehabilitacionedifloscubosm30/7.jpg',
      'rehabilitacionedifloscubosm30/8.jpg',
      'rehabilitacionedifloscubosm30/9.jpg',
      'rehabilitacionedifloscubosm30/10.jpg',
      'rehabilitacionedifloscubosm30/11.jpg',
      'rehabilitacionedifloscubosm30/12.jpg',
      'rehabilitacionedifloscubosm30/13.jpg',
      'rehabilitacionedifloscubosm30/14.jpg',
      'rehabilitacionedifloscubosm30/15.jpg',
    ],
  },
  {
    slug: 'ciudadfinancierabancosantanderbsch',
    imagen: santanderImg,
    titulo: 'Ciudad Financiera Banco Santander',
    descripcion: 'Lago con muro curvo',
    contenido:
      'Obra realizada para el Banco Santander Central Hispano por un importe total de 780.000€ y consistente en la realización de los muros curvos de los lagos, así como todas las estructuras de servicio anexas a dichos lagos incluyendo medios auxiliares, ferralla y hormigón. Esta obra se realizó con una disminución de 1,5 meses del plazo de ejecución inicialmente estimado por la Dirección de Obra',
    anio: 2018,
    cliente: ' UTE Ciudad financiera',
    localizacion: 'Boadilla del Monte, Madrid',
    fotos: ['ciudadfinancierabancosantanderbsch/1.jpg', 'ciudadfinancierabancosantanderbsch/2.jpg'],
  },
  {
    slug: 'aparcamientoamazoncarbonellyfigueras',
    imagen: aparcamientoImg,
    titulo: 'Aparcamiento Carbonell y Figueras',
    descripcion: 'Aparcamiento Amazon Carbonell y Figueras',
    contenido:
      'Muros de cerramiento y cimentaciones de aparcamiento Amazon en Leganés. Gran despliegue de medios por parte de Carbonell y Figueras para ejecución exitosa de la obra y cumplimiento de plazos.',
    anio: 2019,
    cliente: 'Carbonell y Figueras',
    localizacion: 'Leganés, Madrid',
    fotos: [
      'aparcamientoamazoncarbonellyfigueras/1.webp',
      'aparcamientoamazoncarbonellyfigueras/2.webp',
      'aparcamientoamazoncarbonellyfigueras/3.webp',
      'aparcamientoamazoncarbonellyfigueras/4.webp',
      'aparcamientoamazoncarbonellyfigueras/5.webp',
      'aparcamientoamazoncarbonellyfigueras/6.webp',
      'aparcamientoamazoncarbonellyfigueras/7.webp',
      'aparcamientoamazoncarbonellyfigueras/8.webp',
    ],
  },
  {
    slug: 'viviendasexclusivasmajadahondaafar4',
    imagen: majadahondaImg,
    titulo: 'Viviendas exclusivas',
    descripcion: 'Viviendas exclusivas Majadahonda',
    contenido:
      'Ejecución de estructura de hormigón y muros vistos de urbanización de 19+24+24 viviendas unifamiliares exclusivas en Los Satélites, Majadahonda.',
    anio: 2019,
    cliente: 'Afar4',
    localizacion: 'Majadahonda, Madrid',
    fotos: [
      'viviendasexclusivasmajadahondaafar4/1.webp',
      'viviendasexclusivasmajadahondaafar4/2.webp',
      'viviendasexclusivasmajadahondaafar4/3.webp',
      'viviendasexclusivasmajadahondaafar4/4.webp',
    ],
  },
  {
    slug: '318viviendasuniversidadcarlosiiigetafe-acciona',
    imagen: getafeImg,
    titulo: '318 viviendas - Getafe',
    descripcion: '318 viviendas Universidad Carlos III Getafe',
    contenido:
      'Ejecución de edificio de 318 apartamentos residenciales para estudiantes, en universidad Carlos III Getafe.',
    anio: 2018,
    cliente: 'Acciona',
    localizacion: 'Getafe, Madrid',
    fotos: [
      '318viviendasuniversidadcarlosiiigetafe-acciona/1.jpg',
      '318viviendasuniversidadcarlosiiigetafe-acciona/2.jpg',
      '318viviendasuniversidadcarlosiiigetafe-acciona/3.jpg',
      '318viviendasuniversidadcarlosiiigetafe-acciona/4.jpg',
      '318viviendasuniversidadcarlosiiigetafe-acciona/5.jpg',
    ],
  },
  {
    slug: 'edificiopaseocastellana77-grupogmp',
    imagen: castellanaImg,
    titulo: 'Edificio Paseo Castellana 77',
    descripcion: 'Edificio Paseo Castellana 77 - Grupo GMP',
    contenido:
      'Rehabilitación del edificio Paseo de la Castellana 77, en Azca, de 16.200 m2 de oficinas. Grupo GMP. Ejecución del refuerzo de estructura del núcleo central del edificio, de la nueva estructura de hormigón de plantas y nuevas escaleras del mismo, demolición del interior y desmontaje de fachada del edificio. Ejecución de los trabajos de demolición  simultaneando la actividad el Centro Comercial El Corte Ingles de Nuevos Ministerios, situado en la parte inferior de edificio, lo que supuso trabajos nocturnos y en festivos en la ejecución de la obra. Edifico de vanguardia y máxima eficiencia energética, en el corazón financiero de la Capital.',
    anio: 2018,
    cliente: 'Acciona',
    localizacion: 'Madrid',
    fotos: [
      'edificiopaseocastellana77-grupogmp/1.jpg',
      'edificiopaseocastellana77-grupogmp/2.jpg',
      'edificiopaseocastellana77-grupogmp/3.jpg',
      'edificiopaseocastellana77-grupogmp/4.jpg',
    ],
  },
  {
    slug: 'bibliotecamunicipalcoslada-fcc',
    imagen: cosladaImg,
    titulo: 'Biblioteca Municipal',
    descripcion: 'Biblioteca Municipal Coslada',
    contenido:
      'Ejecución de la Biblioteca municipal de Coslada para la empresa FCC. Obra de Hormigón visto en losas, todas forradas de fenólico de un solo uso, con replanteo especifico en cada planta. Muros forrados de melamina de un solo uso, con berenjenos verticales cada 45 cm, que guardan linea en forjados y con el recubrimiento de madera definitivo. Muros de urbanización forrados de madera cepillada de ancho fijo, con el nombre de la biblioteca en fenólico, inscrito en el muro.',
    anio: 2015,
    cliente: 'FCC',
    localizacion: 'Coslada, Madrid',
    fotos: [
      'bibliotecamunicipalcoslada-fcc/1.jpg',
      'bibliotecamunicipalcoslada-fcc/2.jpg',
      'bibliotecamunicipalcoslada-fcc/3.jpg',
    ],
  },
  {
    slug: 'campusiberdrola-acciona',
    imagen: iberdrolaImg,
    titulo: 'Campus Iberdrola',
    descripcion: 'Campus Iberdrola - Acciona',
    contenido:
      'Espectacular proyecto de Campus Iberdrola, con ejecución de singular estructura de hormigón. Máximas exigencias en calidad, seguridad y plazo, en proyecto actualmente líder de construcción en Europa.',
    anio: 2015,
    cliente: 'Acciona',
    localizacion: 'Madrid',
    fotos: [
      'campusiberdrola-acciona/1.jpg',
      'campusiberdrola-acciona/2.jpg',
      'campusiberdrola-acciona/3.jpg',
      'campusiberdrola-acciona/4.jpg',
      'campusiberdrola-acciona/5.jpg',
    ],
  },
  {
    slug: '48chaletscrucedelartevallecas',
    imagen: vallecasImg,
    titulo: '48 Chalets Vallecas',
    descripcion: '48 Chalets Cruce Del Arte Vallecas',
    contenido:
      'Ejecución de 48 viviendas unifamiliares de muros y forjados prefabricados de hormigón. Urbanización muros vistos hormigón in situ.',
    anio: 2021,
    cliente: 'Aliaria',
    localizacion: 'Madrid',
    fotos: [
      '48chaletscrucedelartevallecas/1.webp',
      '48chaletscrucedelartevallecas/2.webp',
      '48chaletscrucedelartevallecas/3.webp',
      '48chaletscrucedelartevallecas/4.webp',
      '48chaletscrucedelartevallecas/5.webp',
      '48chaletscrucedelartevallecas/6.webp',
      '48chaletscrucedelartevallecas/7.webp',
      '48chaletscrucedelartevallecas/8.webp',
      '48chaletscrucedelartevallecas/9.webp',
      '48chaletscrucedelartevallecas/10.webp',
      '48chaletscrucedelartevallecas/11.webp',
      '48chaletscrucedelartevallecas/12.webp',
    ],
  },
  {
    slug: '123viviendassanchinarro',
    imagen: sanchinarroImg,
    titulo: '123 Viviendas - Madrid',
    descripcion: '123 Viviendas - Sanchinarro (Madrid)',
    contenido: 'Espectacular proyecto de Touza Arquitectos, en una de las mejores zonas residenciales de Madrid.',
    anio: 2020,
    cliente: 'Aliaria',
    localizacion: 'Sanchinarro, Madrid',
    fotos: [
      '123viviendassanchinarro/1.jpg',
      '123viviendassanchinarro/2.jpg',
      '123viviendassanchinarro/3.jpg',
      '123viviendassanchinarro/4.jpg',
      '123viviendassanchinarro/5.jpg',
      '123viviendassanchinarro/6.jpg',
      '123viviendassanchinarro/7.jpg',
      '123viviendassanchinarro/8.jpg',
      '123viviendassanchinarro/9.jpg',
      '123viviendassanchinarro/10.jpg',
      '123viviendassanchinarro/11.jpg',
    ],
  },
  {
    slug: 'bibliotecamunicipalanamariamatute',
    imagen: matuteImg,
    titulo: 'Biblioteca Municipal',
    descripcion: 'Biblioteca Municipal Ana María Matute',
    contenido:
      'Realización de la nueva Biblioteca Municipal de Carabanchel para la Constructora Geocisa por un importe total de 642.000€. Este proyecto ganador del Concurso se realiza íntegramente con muros y forjados de hormigón visto. Todos los muros, previo a su hormigonado son revestidos por tablilla cepillada de ancho fijo y una sola puesta, y todos los forjados acabados con tablero fenólico también de una sola puesta.',
    anio: 2012,
    cliente: 'Geocisa',
    localizacion: 'Madrid',
    fotos: [
      'bibliotecamunicipalanamariamatute/1.jpg',
      'bibliotecamunicipalanamariamatute/2.jpg',
      'bibliotecamunicipalanamariamatute/3.jpg',
      'bibliotecamunicipalanamariamatute/4.jpg',
      'bibliotecamunicipalanamariamatute/5.jpg',
    ],
  },
  {
    slug: '60viviendashumanesalza',
    imagen: humanesImg,
    titulo: '60 Viviendas Humanes',
    descripcion: '60 Viviendas Humanes Alza',
    contenido:
      'Conjunto residencial de 60 viviendas en Humanes. 4500 m2 sótanos de Casetón recuperable y 7.000 m2 de forjado reticular bloque perdido.',
    anio: 2018,
    cliente: 'Alza',
    localizacion: 'Humanes de Madrid',
    fotos: ['60viviendashumanesalza/1.jpg', '60viviendashumanesalza/2.jpg'],
  },
  {
    slug: '95viviendassanjose-callealmansa',
    imagen: almansaImg,
    titulo: '95 Viviendas San José',
    descripcion: '95 Viviendas San José - Calle Almansa',
    contenido:
      'Ejecución de 95 viviendas en el barrio de Cuatro Caminos (Madrid). Ejecución de 4 bloques independientes y separados, bajo la dirección de obra del prestigioso estudio de arquitectura Ortiz y León Arquitectos.',
    anio: 2018,
    cliente: 'San José Contructora',
    localizacion: 'Madrid',
    fotos: [
      '95viviendassanjose-callealmansa/1.webp',
      '95viviendassanjose-callealmansa/2.webp',
      '95viviendassanjose-callealmansa/3.webp',
      '95viviendassanjose-callealmansa/4.webp',
      '95viviendassanjose-callealmansa/5.webp',
      '95viviendassanjose-callealmansa/6.webp',
      '95viviendassanjose-callealmansa/7.webp',
    ],
  },
  {
    slug: '196viviendaslosmolinosgetafe-acciona',
    imagen: molinosImg,
    titulo: '196 Viviendas Los Molinos - Getafe',
    descripcion: '196 Viviendas Los Molinos - Getafe - Acciona',
    contenido:
      'Ejecución de 31.000 m2 de estructura para la empresa Acciona Infraestructuras, en Los Molinos, Getafe. Ejecución de la estructura en plazo muy ajustado, por necesidad del proyecto, con una media de 3.500 m2 / grúa / mes.',
    anio: 2018,
    cliente: 'Acciona',
    localizacion: 'Getafe, Madrid',
    fotos: [
      '196viviendaslosmolinosgetafe-acciona/1.jpg',
      '196viviendaslosmolinosgetafe-acciona/2.jpg',
      '196viviendaslosmolinosgetafe-acciona/3.jpg',
    ],
  },
  {
    slug: 'desvioarroyodelosmajuelosbsch',
    imagen: majuelosImg,
    titulo: 'Desvío Arroyo De Los Majuelos',
    descripcion: 'Desvío Arroyo De Los Majuelos - BSCH',
    contenido:
      'Obra realizada para Sacyr en Boadilla del Monte por un importe total de 260.000€ consistente en el desvío del cauce del Arroyo de los Majuelos, incluyendo numerosas galerías, cámaras de registro de saneamiento, marcos con geometría de sección variable adaptada al terreno existente, etc. Esta obra realizada por Valles y Rezola incluye la aportación por parte de la misma de medios auxiliares, ferralla, hormigón, seguridad etc.',
    anio: 2017,
    cliente: 'Sacyr',
    localizacion: 'Madrid',
    fotos: ['desvioarroyodelosmajuelosbsch/1.jpg'],
  },
  {
    slug: 'eigo-centrologisticopinto',
    imagen: eigoImg,
    titulo: 'Edificio Eigo',
    descripcion: 'Edificio Eigo - Centro Logístico Pinto',
    contenido:
      'Ejecución de muros perimetrales de hormigón in situ ya está 6 m de altura y muro prefabricado perimetral. Ejecución de oficinas de naves, cimentaciones y peines de paneles prefabricados.',
    anio: 2019,
    cliente: 'Eigo',
    localizacion: 'Pinto, Madrid',
    fotos: [
      'eigo-centrologisticopinto/1.webp',
      'eigo-centrologisticopinto/2.webp',
      'eigo-centrologisticopinto/3.webp',
      'eigo-centrologisticopinto/4.webp',
      'eigo-centrologisticopinto/5.webp',
      'eigo-centrologisticopinto/6.webp',
    ],
  },
  {
    slug: 'fundacionfranciscoginerdelosrios',
    imagen: ginerImg,
    titulo: 'Edificio Fundación Francisco Giner de los Ríos',
    descripcion: 'Edificio Fundación Francisco Giner de los Ríos - Madrid',
    contenido: 'Premio COAM 2015 de Arquitectura.',
    anio: 2015,
    cliente: 'Acciona',
    localizacion: 'Madrid',
    fotos: ['fundacionfranciscoginerdelosrios/1.jpg'],
  },
  {
    slug: 'naveinditexmontepino-acciona',
    imagen: inditexImg,
    titulo: 'Nave Inditex Montepino',
    descripcion: 'Nave Inditex Montepino - Acciona',
    contenido:
      'Ejecución de 16.000 m2 de muros perimetrales trepados, y de hasta 9,80 m de altura, Cimentación de Nave Logística y Urbanización de complejo, para Grupo Montepino, en Toledo. Ejecución de muros a una cara de hasta 9 metros de altura y 1,80 m de espesor, de una sola puesta.',
    anio: 2018,
    cliente: 'Acciona',
    localizacion: 'Toledo',
    fotos: [
      'naveinditexmontepino-acciona/1.jpg',
      'naveinditexmontepino-acciona/2.jpg',
      'naveinditexmontepino-acciona/3.jpg',
      'naveinditexmontepino-acciona/4.jpg',
      'naveinditexmontepino-acciona/5.jpg',
      'naveinditexmontepino-acciona/6.jpg',
      'naveinditexmontepino-acciona/7.jpg',
      'naveinditexmontepino-acciona/8.jpg',
      'naveinditexmontepino-acciona/9.jpg',
      'naveinditexmontepino-acciona/10.jpg',
      'naveinditexmontepino-acciona/11.jpg',
      'naveinditexmontepino-acciona/12.jpg',
      'naveinditexmontepino-acciona/13.jpg',
      'naveinditexmontepino-acciona/14.jpg',
      'naveinditexmontepino-acciona/15.jpg',
      'naveinditexmontepino-acciona/16.jpg',
      'naveinditexmontepino-acciona/17.jpg',
      'naveinditexmontepino-acciona/18.jpg',
      'naveinditexmontepino-acciona/19.jpg',
      'naveinditexmontepino-acciona/20.jpg',
      'naveinditexmontepino-acciona/21.jpg',
      'naveinditexmontepino-acciona/22.jpg',
    ],
  },
  {
    slug: '48viviendasunifamiliares-nuicon',
    imagen: nuiconImg,
    titulo: '48 Viviendas Unifamiliares',
    descripcion: '48 Viviendas Unifamiliares - Nuicon',
    contenido:
      'Ejecución de otras 48 viviendas unifamiliares con garaje comunitario en Ensanche de Vallecas. Muros y losas prefabricados por Rubiera, que permiten acortar plazos cumpliendo todas las especificaciones técnicas.',
    anio: 2021,
    cliente: 'Nuicon',
    localizacion: 'Madrid',
    fotos: [
      '48viviendasunifamiliares-nuicon/1.jpg',
      '48viviendasunifamiliares-nuicon/2.jpg',
      '48viviendasunifamiliares-nuicon/3.jpg',
      '48viviendasunifamiliares-nuicon/4.jpg',
      '48viviendasunifamiliares-nuicon/5.jpg',
      '48viviendasunifamiliares-nuicon/6.jpg',
      '48viviendasunifamiliares-nuicon/7.jpg',
      '48viviendasunifamiliares-nuicon/8.jpg',
    ],
  },
  {
    slug: '174viviendasbutarque-acciona',
    imagen: butarqueImg,
    titulo: '174 Viviendas Butarque',
    descripcion: '174 Viviendas Butarque - Acciona',
    contenido: 'Promoción de 174 viviendas en el barrio de Butarque (Madrid).',
    anio: 2019,
    cliente: 'Acciona',
    localizacion: 'Madrid',
    fotos: [
      '174viviendasbutarque-acciona/1.jpg',
      '174viviendasbutarque-acciona/2.jpg',
      '174viviendasbutarque-acciona/3.jpg',
      '174viviendasbutarque-acciona/4.jpg',
    ],
  },
  {
    slug: 'polideportivoalcobendas',
    imagen: alcobendasImg,
    titulo: 'Polideportivo Alcobendas',
    descripcion: 'Polideportivo Alcobendas - Madrid',
    contenido:
      'Ejecución de nuevo polideportivo Alcobendas. Torre de hormigón trepada y muros interiores de hormigón tratado.',
    anio: 2017,
    cliente: 'Ayuntamiento de Alcobendas',
    localizacion: 'Alcobendas, Madrid',
    fotos: [
      'polideportivoalcobendas/1.jpg',
      'polideportivoalcobendas/2.jpg',
      'polideportivoalcobendas/3.jpg',
      'polideportivoalcobendas/4.jpg',
      'polideportivoalcobendas/5.jpg',
      'polideportivoalcobendas/6.jpg',
      'polideportivoalcobendas/7.jpg',
      'polideportivoalcobendas/8.jpg',
    ],
  },
];

export function getObraBySlug(slug: string): Obra | undefined {
  return obras.find((obra) => obra.slug === slug);
}
