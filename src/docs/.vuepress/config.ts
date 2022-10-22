import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'en-US',
    title: 'Needle Engine Documentation',
    description: 'Just playing around',
    base: '/docs/',
    theme: defaultTheme({
        logo: "/logo.png",
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
        ],
        repo: "needle-tools/needle-engine-support",
        docsRepo: "marwie/wiki-test",
    }),
})