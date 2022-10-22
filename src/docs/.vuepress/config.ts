import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    base: "/wiki-test/",
    lang: 'en-US',
    title: 'Needle Engine Documentation',
    description: 'Needle Engine is a web-based runtime for 3D apps. It runs on your machine for development, and can be deployed anywhere. It is flexible, extensible, and collaboration and XR come naturally.',
    theme: defaultTheme({
        logo: "/logo.png",
        navbar: [ 
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Scripting',
                link: '/scripting',
            },
        ],
        repo: "needle-tools/needle-engine-support",
        docsRepo: "marwie/wiki-test",
        docsBranch: "dev",
        docsDir: "src/docs",
    }),
    plugins: [
        searchPlugin({})
    ],
})