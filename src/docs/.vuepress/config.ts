import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
// import { mermaidPlugin } from "@renovamen/vuepress-plugin-mermaid";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'



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
            {
                text: 'Testing',
                link: '/test',
            },
        ],
        repo: "needle-tools/needle-engine-support",
        docsRepo: "marwie/wiki-test",
        docsBranch: "dev",
        docsDir: "src/docs",
        locales: {
            '/': {
                selectLanguageName: 'English',
            },
            // '/zh/': {
            //   selectLanguageName: '简体中文',
            // },
        },
    }),
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Needle Engine Documentation',
            description: 'Needle Engine is a web-based runtime for 3D apps. It runs on your machine for development, and can be deployed anywhere. It is flexible, extensible, and collaboration and XR come naturally.',
        },
        // '/zh/': {
        //   lang: 'zh-CN',
        //   title: 'VuePress',
        //   description: 'Vue 驱动的静态网站生成器',
        // },
    },
    plugins: [
        searchPlugin({

        }),
        // mermaidPlugin,
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
})