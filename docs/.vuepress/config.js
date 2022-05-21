const { defaultTheme } = require('@vuepress/theme-default')
const path = require('node:path');
module.exports = {
  alias: {
    'styles': path.resolve(__dirname, './styles')
  },
  title: 'Documentación',
    head: [
      ['meta', { charset: 'utf-8' }],
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
      ['link', { rel: 'icon', href: 'https://i.imgur.com/9DDoWLP.png' }],
      ['meta', { name: 'theme-color', content: '#5499c7' }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
      ['meta', { property: 'og:title', content: 'Documentación | ClankyHosting' }],
      ['meta', { property: 'og:description', content: 'Documentación Oficial de ClankyHosting donde encontrarás información y ayuda sobre nuestros paneles, servicios de minecraft hosting, servicios de Discord bots y más' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:url', content: 'https://docs.clanky.net/' }],
      ['meta', { property: 'og:locale', content: 'es_ES' }],
      ['meta', { property: 'og:image', content: 'https://cdn.discordapp.com/attachments/589259251155992576/919643739729842216/Banner_Clanky2.png' }],
    ],
  theme: defaultTheme({
    sidebar: {
      '/': [
        {
          text: 'Home',
          children: [
            '/',
          ],
        },
        {
          text: 'Game Panel',
          children: [
            '/GamePanel/Consola.md',
            '/GamePanel/Administrador-de-archivos.md',
            '/GamePanel/Backups.md',
            '/GamePanel/Sub-usuarios.md',
            '/GamePanel/Registros-de-actividad.md',
            '/GamePanel/Cambio-de-contraseña.md',
          ],
        },
        {
          text: 'Games | Minecraft Java',
          children: [
            '/Games/MinecraftJava/Errores-comunes.md',
            '/Games/MinecraftJava/Cambio-de-versión.md',
            '/Games/MinecraftJava/Cambiar-versión-de-Java.md',
          ],
        },
      ],
    },
  }),
}