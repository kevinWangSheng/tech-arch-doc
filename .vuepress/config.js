module.exports = {
    port: "3000",
    dest: "docs",
    ga: "UA-xxxxx-1",
    base: "/",
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Kevin随想录",
            description: "包含: 做人 , 投资, 人生陷阱, 思考, 技术, 股权, 管理, 经济, 运行规律, 底层原理, 教育..."
        }
    },
    head: [
        // ico
        ["link", {rel: "icon", href: `/favicon.ico`}],
        // meta
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "kevin"}],
        ["meta", {name: "keywords", content: "做自己, 投资, 思考,技术"}],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}]
    ],
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', {
            selector: 'img',
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16
            }
        }],
        // see: https://vssue.js.org/guide/vuepress.html#usage
        ['@vssue/vuepress-plugin-vssue', {
            // set `platform` rather than `api`
            platform: 'github',
            // all other options of Vssue are allowed
            owner: 'kevin',
            repo: 'tech-arch-doc-comments',
            clientId: 'xxxxxxxxxxx',
            clientSecret: 'xxxxxxxxxxxxxxxxxxxxxx',
        }],
        // see: https://vuepress.github.io/zh/plugins/copyright/#%E5%AE%89%E8%A3%85
        ['copyright', {
            noCopy: false, // 允许复制内容
            minLength: 100, // 如果长度超过 100 个字符
            authorName: "",
            // clipboardComponent: "请注明文章出处, [Java 全栈知识体系]()"
        }],
        // see: https://github.com/ekoeryanto/vuepress-plugin-sitemap
        ['sitemap', {
            hostname: ''
        }],
        // see: https://github.com/IOriens/vuepress-plugin-baidu-autopush
        ['vuepress-plugin-baidu-autopush', {

        }],
        // see: https://github.com/znicholasbrown/vuepress-plugin-code-copy
        [['vuepress-plugin-code-copy', true]]
        // ...
    ],
    themeConfig: {
        // repo: "realpdai/tech-arch-doc",
        docsRepo: "kevinWangSheng/tech-arch-doc",
        // logo: "/images/logo.png",
        editLinks: true,
        sidebarDepth:0,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                    {
                        text: '投资', link: '/md/invest/basic/wine.md'
                    },
                    {
                        text: '关于', link: '/md/about/me/about-me.md'

                    }
                ],
                sidebar: {
                    "/md/about/": genSidebar4About(),
                    "/md/invest/": genSidebar4Invest()
                },

            }
        }
    }
};

// about page
function genSidebar4About(){
    return [
        {
            title: "关于",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "me/about-me.md",
                "me/about-content.md",
                "me/about-content-style.md",
                "me/about-arch.md",
                "me/about-motivation.md"
            ]
        },
        {
            title: "关于 - 本文档的搭建",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "blog/blog-build-vuepress.md",
                "blog/blog-build-ci.md",
                "blog/blog-build-cd.md",
                "blog/blog-build-ssl.md"
            ]
        }
    ];
}

function genSidebar4Invest(){
    return [
        {
            title: "投资",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "basic/whatIsInverst.md",
                "basic/inverstMyself.md",
                "basic/aboutInverst.md"
            ]
        }
    ];
}