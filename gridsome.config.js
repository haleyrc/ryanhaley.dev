// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/posts/**/*.md",
        typeName: "Post",
        route: "/posts/:year/:month/:day/:slug"
      }
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "ryanhaley.dev",
          feed_url: "https://ryanhaley.dev/rss.xml",
          site_url: "https://ryanhaley.dev"
        },
        feedItemOptions: (node) => {
          const dt = new Date(node.date)
          const year = dt.getFullYear()
          const month = `${dt.getMonth() < 10 ? "0" : ""}${dt.getMonth()}`
          const day = `${dt.getDate() < 10 ? "0" : ""}${dt.getDate()}`
          return {
            title: node.title,
            description: node.description,
            url: `https://ryanhaley.dev/posts/${year}/${month}/${day}/${
              node.slug
            }`,
            author: "Ryan Haley"
          }
        },
        output: {
          dir: "./static",
          name: "rss.xml"
        }
      }
    }
  ],

  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"]
    }
  }
}
