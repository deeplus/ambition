module.exports = {
    theme: "antdocs",
    title: "猫河的个人网站",
    description: "6cab7f014ddbcc4169b513eaec3af6ed082f29c5 ",
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