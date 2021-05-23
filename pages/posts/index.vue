<template>
  <div class="container">
    <!-- START ARTICLE FEED -->
    <section class="articles">
      <div class="column is-8 is-offset-2">
        <!-- START ARTICLE -->
        <div class="card article" v-for="(post, index) in posts" :key="post.id">
          <div class="card-content">
            <div class="media">
              <div class="media-content has-text-centered">
                <p class="title article-title">
                  {{ index + 1 }} - {{ post.title }}
                </p>
                <div class="tags has-addons level-item">
                  <span class="tag is-rounded is-info">
                    @{{ users.find(user => user.id === post.userId).username }}
                  </span>
                  <span class="tag is-rounded">May 10, 2018</span>
                </div>
              </div>
            </div>
            <div class="content article-body">
              {{ post.body }}
            </div>
          </div>
        </div>
        <!-- END ARTICLE -->
      </div>
    </section>
    <!-- END ARTICLE FEED -->
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "صفحه مقالات"
    };
  },
  data: () => ({
    posts: [{ title: "post man" }]
  }),
  middleware: ["auth"],
  async asyncData(context) {
    try {
      const posts = await context.$axios.$get("/posts");
      const users = await context.$axios.$get("/users");

      return {
        posts,
        users
      };
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
