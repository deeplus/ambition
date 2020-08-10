module.exports = {
    theme: "antdocs",
    title: "猫河的个人网站",
    description: "268292c76026cc51e3eb0bd3234c1850a6336b18 ",
    base: '/',
    head: [
        ['link', {rel: 'icon', href: './public/images/favicon.ico'}]
    ],
    markdown: {
        lineNumbers: false,
    },
    themeConfig: {
        smoothScroll: true,
        nav: require("./config/nav"),
        sidebar: require("./config/sidebar"),
        lastUpdated: "最后更新于",
        repo: "https://github.com/deeplus/ambition",
        editLinks: false,
    },
}