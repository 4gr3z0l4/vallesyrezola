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
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Cimentaciones', href: getPermalink('/servicios#cimentaciones') },
        { text: 'Forjados', href: getPermalink('/servicios#forjados') },
        { text: 'Muros', href: getPermalink('/servicios#muros') },
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
        { text: 'Consultoría', href: getPermalink('/contacto') },
        { text: 'Email', href: 'mailto:info@vallesrezola.com' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Política de privacidad', href: getPermalink('/privacy') },
    { text: 'Aviso legal', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:info@vallesrezola.com' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Valles y Rezola 
  `,
};
