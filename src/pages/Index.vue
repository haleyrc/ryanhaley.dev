<template>
  <Layout>
      <ul>
          <li v-for=" post in $page.posts.edges" :key="post.id">
              <g-link :to="post.node.path">{{ post.node.title }}</g-link>
              <em>{{ post.node.date }}</em><br />
              <span v-for="tag in post.node.tags" :key="tag">{{ tag }}</span>
          </li>
      </ul>
  </Layout>
</template>

<page-query>
# Write your query or mutation here
query Posts {
  posts: allPost {
    edges {
      node {
        title
        path
        tags
        date
      }
    }
  }
}

</page-query>

<script>
export default {
  metaInfo: {
    title: "ryanhaley.dev"
  }
};
</script>
