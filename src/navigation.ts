import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Servicios',
      href: getPermalink('/servicios'),
    },
    {
      text: 'Empresa',
      href: getPermalink('/empresa'),
    },
    {
      text: 'Obras',
      href: getPermalink('/obras'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
  actions: [
    { 
      text: 'Presupuesto', 
      href: getPermalink('/contacto'), 
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Cimentaciones', href: getPermalink('/servicios#cimentaciones') },
        { text: 'Forjados', href: getPermalink('/servicios#forjados') },
        { text: 'Muros pantalla', href: getPermalink('/servicios#muros') },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Sobre nosotros', href: getPermalink('/empresa') },
        { text: 'Equipo', href: getPermalink('/empresa#equipo') },
        { text: 'Certificaciones', href: getPermalink('/empresa#certificaciones') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Presupuestos', href: getPermalink('/contacto') },
        { text: 'Teléfono', href: 'tel:+34666xxxxxx' },
        { text: 'Email', href: 'mailto:info@vallesrezola.com' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Política de privacidad', href: getPermalink('/privacy') },
    { text: 'Aviso legal', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/valles-rezola' },
    { ariaLabel: 'Teléfono', icon: 'tabler:phone', href: 'tel:+34666xxxxxx' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:info@vallesrezola.com' },
  ],
  footNote: `
    © 2026 Valles y Rezola. Especialistas en estructuras de hormigón. 
    <a class="text-blue-600 underline dark:text-muted" href="https://github.com/4gr3z0l4/vallesyrezola_astrowind">Creado por 4gr3z0l4</a>
  `,
};
