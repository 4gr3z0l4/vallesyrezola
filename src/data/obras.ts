// src/data/obras.ts
import palosImg from '~/assets/images/obras/palosdelafrontera/putj5438.jpg';
import rioCarrionImg from '~/assets/images/obras/hospitalriocarrionpalenciaacciona/dji_fly_plantasegunda.webp';
import pradilloImg from '~/assets/images/obras/oficinascallepradillo/oficinas-pradillo-1.jpg';
import vaguadaImg from '~/assets/images/obras/centrocomerciallavaguada/026e4-5c15444e-d0f2-46e9-929d-a055a5e02f27-1.webp';
import bbvaImg from '~/assets/images/obras/nuevasedebbvalastablas/img_2593.jpg';
import atochaImg from '~/assets/images/obras/edificiobosquedeatocha/img_8783.jpg';
import togoImg from '~/assets/images/obras/estructurapuertodelome-togo/img_2762.jpg';
import cubosImg from '~/assets/images/obras/rehabilitacionedifloscubosm30/ir7y2zbrrjwfrb7shipeba.jpg';
import santanderImg from '~/assets/images/obras/ciudadfinancierabancosantanderbsch/lagos-con-muro-curvo-en-ciudad-financiera-bsch-023.jpg';
import aparcamientoImg from '~/assets/images/obras/aparcamientoamazoncarbonellyfigueras/2580737a012bc765119a754165bc895b.webp';
import majadahondaImg from '~/assets/images/obras/viviendasexclusivasmajadahondaafar4/gizrgxk0tbeo2xtwqjeu0w.webp';
import getafeImg from '~/assets/images/obras/318viviendasuniversidadcarlosiiigetafe-acciona/img_1149.jpg';
import castellanaImg from '~/assets/images/obras/edificiopaseocastellana77-grupogmp/img_6132.jpg';
import cosladaImg from '~/assets/images/obras/bibliotecamunicipalcoslada-fcc/img_3326.jpg';
import iberdrolaImg from '~/assets/images/obras/campusiberdrola-acciona/img_9510.jpg';
import vallecasImg from '~/assets/images/obras/48chaletscrucedelartevallecas/remotemediafile_6553783_0_2021_05_06_09_39_58.webp';
import sanchinarroImg from '~/assets/images/obras/123viviendassanchinarro/img_8830.jpg';
import matuteImg from '~/assets/images/obras/bibliotecamunicipalanamariamatute/img_3345.jpg';
import humanesImg from '~/assets/images/obras/60viviendashumanesalza/img_7641.jpg';
import almansaImg from '~/assets/images/obras/95viviendassanjose-callealmansa/img_5596.webp';
import molinosImg from '~/assets/images/obras/196viviendaslosmolinosgetafe-acciona/196-viv-los-molinos-004-11810-terminado-5-planta-baja-ty-8-planta-sotano-y-no-entran-hasta-dias-despues.jpg';
import majuelosImg from '~/assets/images/obras/desvíoarroyodelosmajuelosbsch/desvc3ado-del-arroyo-de-los-majuelos6.jpg';
import eigoImg from '~/assets/images/obras/eigo-centrologisticopinto/img_8038.webp';
import ginerImg from '~/assets/images/obras/fundacionfranciscoginerdelosrios/133.jpg';
import inditexImg from '~/assets/images/obras/naveinditexmontepino-acciona/khy7cexaroeatkivxab6ow.webp';
import nuiconImg from '~/assets/images/obras/48viviendasunifamiliares-nuicon/1c899c85-55ec-4916-80c9-bf75f8dafccd.jpg';
import butarqueImg from '~/assets/images/obras/174viviendasbutarque-acciona/img_3375.jpg';
import alcobendasImg from '~/assets/images/obras/polideportivoalcobendas/300620111612.jpg';

export type Obra = {
  slug: string;
  imagen: ImageMetadata;
  titulo: string;
  descripcion: string;
  contenido?: string;
  fotos?: ImageMetadata[];
  anio?: number;
  cliente?: string;
  localizacion?: string;
};

export const obras: Obra[] = [
  {
    slug: 'linea-11-metro-palos-frontera',
    imagen: palosImg,
    titulo: 'Línea 11 de metro - Palos de la Frontera',
    descripcion: 'Ampliación de línea 11 de Metro de Madrid',
    contenido:
      'Ampliación de la línea 11 de Metro de Madrid en la estación de Palos de la Frontera, ejecutando la estructura de hormigón de los nuevos túneles y andenes.',
    fotos: [palosImg],
    anio: 2025,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'hospital-general-rio-carrion',
    imagen: rioCarrionImg,
    titulo: 'Hospital General Río Carrión',
    descripcion: 'Hospital General Río Carrión - Palencia - Acciona',
    contenido:
      'Estructura de hormigón del nuevo Hospital General Río Carrión en Palencia, optimizando plazos y controlando las deformaciones de forjados.',
    fotos: [rioCarrionImg],
    anio: 2025,
    cliente: 'Acciona',
    localizacion: 'Palencia',
  },
  {
    slug: 'edificio-oficinas-pradillo',
    imagen: pradilloImg,
    titulo: 'Edificio de oficinas',
    descripcion: 'Edificio de oficinas - Calle Pradillo - Acciona',
    contenido:
      'Edificio de oficinas en la calle Pradillo (Madrid), con losas postesadas y núcleos de hormigón armado para maximizar luces y flexibilidad de uso.',
    fotos: [pradilloImg],
    anio: 2025,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'cc-la-vaguada',
    imagen: vaguadaImg,
    titulo: 'Centro Comercial La Vaguada',
    descripcion: 'Reforma de unidades estructurales de cubierta',
    contenido:
      'Intervención en el Centro Comercial La Vaguada reforzando y sustituyendo elementos estructurales de cubierta manteniendo la actividad del centro.',
    fotos: [vaguadaImg],
    anio: 2024,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'sede-bbva-las-tablas',
    imagen: bbvaImg,
    titulo: 'Sede BBVA',
    descripcion: 'Sede BBVA Las Tablas',
    contenido:
      'Participación en la ejecución de la estructura de hormigón del complejo corporativo de BBVA en Las Tablas (Madrid).',
    fotos: [bbvaImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'edificio-bosque-atocha',
    imagen: atochaImg,
    titulo: 'Edificio residencial - Atocha',
    descripcion: 'Edificio Bosque de Atocha',
    contenido:
      'Edificio residencial próximo a Atocha con estructura mixta y elementos vistos de hormigón arquitectónico.',
    fotos: [atochaImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'estructura-puerto-lome-togo',
    imagen: togoImg,
    titulo: 'Estructura en Lome - Togo',
    descripcion: 'Estructura Puerto de Lome - Togo',
    contenido: 'Estructuras de hormigón en el puerto de Lomé (Togo), adaptadas a condiciones marinas exigentes.',
    fotos: [togoImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Lomé, Togo',
  },
  {
    slug: 'rehabilitacion-los-cubos-m30',
    imagen: cubosImg,
    titulo: 'Rehabilitación Edificio Los Cubos',
    descripcion: 'Rehabilitación Edificio Los Cubos - M30',
    contenido: 'Refuerzo estructural y adaptación del edificio de oficinas Los Cubos, junto a la M30 de Madrid.',
    fotos: [cubosImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'ciudad-financiera-santander',
    imagen: santanderImg,
    titulo: 'Ciudad Financiera Banco Santander',
    descripcion: 'Lago con muro curvo',
    contenido: 'Muros de contención y elementos singulares de hormigón en la Ciudad Financiera del Banco Santander.',
    fotos: [santanderImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'aparcamiento-amazon-carbonell-figueras',
    imagen: aparcamientoImg,
    titulo: 'Aparcamiento Carbonell y Figueras',
    descripcion: 'Aparcamiento Amazon Carbonell y Figueras',
    contenido: 'Estructura de aparcamiento de varias plantas para plataforma logística de Amazon.',
    fotos: [aparcamientoImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'viviendas-exclusivas-majadahonda',
    imagen: majadahondaImg,
    titulo: 'Viviendas exclusivas',
    descripcion: 'Viviendas exclusivas Majadahonda',
    contenido: 'Conjunto residencial de alto standing en Majadahonda, con forjados reticulares y grandes voladizos.',
    fotos: [majadahondaImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: '318-viviendas-getafe',
    imagen: getafeImg,
    titulo: '318 viviendas - Getafe',
    descripcion: '318 viviendas Universidad Carlos III Getafe',
    contenido:
      'Promoción de 318 viviendas próximas a la Universidad Carlos III de Getafe, estructura de hormigón in situ.',
    fotos: [getafeImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Getafe, Madrid',
  },
  {
    slug: 'edificio-castellana-77',
    imagen: castellanaImg,
    titulo: 'Edificio Paseo Castellana 77',
    descripcion: 'Edificio Paseo Castellana 77 - Grupo GMP',
    contenido:
      'Torre de oficinas en Paseo de la Castellana 77, interviniendo en la estructura durante la remodelación integral.',
    fotos: [castellanaImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'biblioteca-municipal-coslada',
    imagen: cosladaImg,
    titulo: 'Biblioteca Municipal',
    descripcion: 'Biblioteca Municipal Coslada',
    contenido:
      'Edificio cultural para biblioteca municipal en Coslada, con espacios diáfanos soportados por pórticos de hormigón.',
    fotos: [cosladaImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'campus-iberdrola',
    imagen: iberdrolaImg,
    titulo: 'Campus Iberdrola',
    descripcion: 'Campus Iberdrola - Acciona',
    contenido:
      'Obras de estructura en el campus de formación de Iberdrola, con edificios de baja altura y gran eficiencia energética.',
    fotos: [iberdrolaImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: '48-chalets-vallecas',
    imagen: vallecasImg,
    titulo: '48 Chalets Vallecas',
    descripcion: '48 Chalets Cruce Del Arte Vallecas',
    contenido:
      'Promoción de 48 chalets adosados en el PAU de Vallecas, cimentaciones y estructura de viviendas unifamiliares.',
    fotos: [vallecasImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: '123-viviendas-sanchinarro',
    imagen: sanchinarroImg,
    titulo: '123 Viviendas - Madrid',
    descripcion: '123 Viviendas - Sanchinarro (Madrid)',
    contenido: 'Edificio residencial en Sanchinarro con varias plantas de sótano y garaje.',
    fotos: [sanchinarroImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'biblioteca-ana-maria-matute',
    imagen: matuteImg,
    titulo: 'Biblioteca Municipal',
    descripcion: 'Biblioteca Municipal Ana María Matute',
    contenido: 'Biblioteca municipal Ana María Matute, con grandes huecos de fachada y volúmenes en vuelo.',
    fotos: [matuteImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: '60-viviendas-humanes',
    imagen: humanesImg,
    titulo: '60 Viviendas Humanes',
    descripcion: '60 Viviendas Humanes Alza',
    contenido: 'Conjunto residencial de 60 viviendas en Humanes, estructura tradicional de hormigón armado.',
    fotos: [humanesImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Humanes, Madrid',
  },
  {
    slug: '95-viviendas-san-jose-almansa',
    imagen: almansaImg,
    titulo: '95 Viviendas San José',
    descripcion: '95 Viviendas San José - Calle Almansa',
    contenido: 'Promoción de 95 viviendas en la calle Almansa (Madrid), con varias tipologías de forjado.',
    fotos: [almansaImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: '196-viviendas-los-molinos-getafe',
    imagen: molinosImg,
    titulo: '196 Viviendas Los Molinos - Getafe',
    descripcion: '196 Viviendas Los Molinos - Getafe - Acciona',
    contenido: 'Desarrollo residencial de 196 viviendas en el barrio de Los Molinos (Getafe).',
    fotos: [molinosImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'desvio-arroyo-majuelos',
    imagen: majuelosImg,
    titulo: 'Desvío Arroyo De Los Majuelos',
    descripcion: 'Desvío Arroyo De Los Majuelos - BSCH',
    contenido: 'Obra hidráulica para el desvío del arroyo de los Majuelos, con muros y cajones de hormigón armado.',
    fotos: [majuelosImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'edificio-logistico-eigo-pinto',
    imagen: eigoImg,
    titulo: 'Edificio EIGO',
    descripcion: 'Edificio EIGO - Centro Logístico Pinto',
    contenido: 'Centro logístico en Pinto con grandes luces y losas de alta capacidad portante.',
    fotos: [eigoImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'fundacion-francisco-giner-rios',
    imagen: ginerImg,
    titulo: 'Edificio Fundación Francisco Giner de los Ríos',
    descripcion: 'Edificio Fundación Francisco Giner de los Ríos - Madrid',
    contenido: 'Edificio institucional de la Fundación Francisco Giner de los Ríos, con elementos de hormigón visto.',
    fotos: [ginerImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'nave-inditex-montepino',
    imagen: inditexImg,
    titulo: 'Nave Inditex Montepino',
    descripcion: 'Nave Inditex Montepino - Acciona',
    contenido: 'Nave logística para Inditex en plataforma Montepino, grandes pórticos prefabricados.',
    fotos: [inditexImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: '48-viviendas-unifamiliares-nuicon',
    imagen: nuiconImg,
    titulo: '48 Viviendas Unifamiliares',
    descripcion: '48 Viviendas Unifamiliares - Nuicon',
    contenido: 'Conjunto de 48 viviendas unifamiliares con cimentación corrida y forjados unidireccionales.',
    fotos: [nuiconImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: '174-viviendas-butarque',
    imagen: butarqueImg,
    titulo: '174 Viviendas Butarque',
    descripcion: '174 Viviendas Butarque - Acciona',
    contenido: 'Promoción de 174 viviendas en el barrio de Butarque (Madrid).',
    fotos: [butarqueImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
  {
    slug: 'polideportivo-alcobendas',
    imagen: alcobendasImg,
    titulo: 'Polideportivo Alcobendas',
    descripcion: 'Polideportivo Alcobendas - Madrid',
    contenido: 'Instalación deportiva en Alcobendas con grandes luces en cubiertas y graderíos de hormigón.',
    fotos: [alcobendasImg],
    anio: 2020,
    cliente: 'Acciona',
    localizacion: 'Madrid',
  },
];

export function getObraBySlug(slug: string) {
  return obras.find((obra) => obra.slug === slug);
}
