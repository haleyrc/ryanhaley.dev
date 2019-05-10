<template>
    <Layout>
        <div v-html="$page.note.content" />
    </Layout>
</template>

<page-query>
query Note ($path: String!) {
    note: note (path: $path) {
        title
        content
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.note.title
    };
  }
};
</script>