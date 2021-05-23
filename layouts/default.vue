<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <NuxtLink class="navbar-item" :to="{ name: 'index' }">
            <Logo />
          </NuxtLink>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <NuxtLink class="navbar-item is-active" :to="{ name: 'index' }">
              صفحه اصلی
            </NuxtLink>
            <NuxtLink class="navbar-item" :to="{ name: 'users' }">
              کاربران
            </NuxtLink>
            <NuxtLink class="navbar-item" :to="{ name: 'posts' }">
              مقالات
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <section class="hero is-info is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">مقالات مربوط به سایت وب آموز</h1>
        </div>
      </div>
    </section>

    <Nuxt />
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        src: "/main.js"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "/styles.css"
      }
    ]
  }
  // middleware: ["auth"]
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
