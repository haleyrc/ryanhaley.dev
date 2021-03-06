// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "ryanhaley.dev",
  siteUrl: "https://ryanhaley.dev",
  siteDescription:
    "Musings and reminders of a direct-to-business, vertical market software engineer",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "posts/**/*.md",
        typeName: "Post"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "notes/**/*.md",
        typeName: "Note"
      }
    }
  ]
}
