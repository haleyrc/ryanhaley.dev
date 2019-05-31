<template>
  <Layout>
      <ul>
          <li v-for="post in $page.posts.edges" :key="post.id">
              <g-link :to="post.node.path">{{ post.node.title }}</g-link>
              <em>{{ post.node.date }}</em><br />
              <span v-for="tag in post.node.tags" :key="tag">{{ tag }}</span>
          </li>
      </ul>
      <ul>
          <li v-for="note in $page.notes.edges" :key="note.id">
              <g-link :to="note.node.path">{{ note.node.title }}</g-link>
              <em>{{ note.node.date }}</em><br />
              <span v-for="tag in note.node.tags" :key="tag">{{ tag }}</span>
          </li>
      </ul>
  </Layout>
</template>

<page-query>
# Write your query or mutation here
query Items {
  posts: allPost(filter:{draft:{ne:true}}) {
    edges {
      node {
        id
        title
        path
        tags
        date
        draft
      }
    }
  }

  notes:allNote {
    edges {
      node {
        id
        title
        path
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
