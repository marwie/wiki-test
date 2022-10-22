import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    base: "/wiki-test/",
    lang: 'en-US',
    title: 'Needle Engine Documentation',
    description: 'Just playing around',
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