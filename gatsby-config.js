/* eslint-disable camelcase */

module.exports = {
    siteMetadata: {
        author: `RY Xia`,
        description: `I am RY Xia, a CS student at UBC, a full stack engineer.`,
        imagePath: `/social-sharing.jpg`,
        siteUrl: `https://ruiyuanxia.github.io/personal-web/`,
        title: `RY Xia`
    },
    pathPrefix: `/personal-web`,
    plugins: [
        {
            options: {
                name: `blog`,
                path: `${__dirname}/content/blog`
            },
            resolve: `gatsby-source-filesystem`
        },
        {
            options: {
                name: `projects`,
                path: `${__dirname}/content/projects`
            },
            resolve: `gatsby-source-filesystem`
        },
        {
            options: {
                name: `images`,
                path: `${__dirname}/assets/images`
            },
            resolve: `gatsby-source-filesystem`
        },
        {
            options: {
                extensions: ['.mdx', '.md'],
                gatsbyRemarkPlugins: [
                    {
                        options: {
                            backgroundColor: `none`,
                            maxWidth: 800,
                            quality: 100,
                            withWebp: true,
                            disableBgImage: true
                        },
                        resolve: `gatsby-remark-images`
                    },
                    `gatsby-remark-copy-linked-files`,
                    {
                        options: {
                            aliases: {},
                            classPrefix: `language-`,
                            noInlineHighlight: true
                        },
                        resolve: `gatsby-remark-prismjs`
                    },
                    `gatsby-remark-embedder`
                ]
            },
            resolve: `gatsby-plugin-mdx`
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        {
            options: {
                background_color: `#F9FCFF`,
                display: `standalone`,
                icon: `assets/logo.png`,
                name: `Ruiyuan Xia - Full Stack Software Developer`,
                short_name: `RY Xia`,
                start_url: `/`,
                theme_color: `#09203A`
            },
            resolve: `gatsby-plugin-manifest`
        } // tracking id deleted
    ]
};
