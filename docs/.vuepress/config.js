module.exports = {
    theme: "antdocs",
    title: "猫河的个人网站",
    description: "",
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