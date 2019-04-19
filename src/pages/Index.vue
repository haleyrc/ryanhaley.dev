<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>Hello, world!</h1>
   
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <ul>
        <li v-for="edge in $static.allPost.edges" :key="edge.id">
            <g-link :to="`posts/${edge.node.year}/${edge.node.month}/${edge.node.day}/${edge.node.slug}`">
                {{edge.node.title}}
            </g-link>
        </li>
    </ul>
    
    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<static-query>
query {
  allPost {
    edges {
        node {
            id
            title
            excerpt
            slug 
            year:date (format:"YYYY")
            month:date (format:"MM")
            day:date(format:"DD")
        }
    }
  }
}
</static-query>


<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
