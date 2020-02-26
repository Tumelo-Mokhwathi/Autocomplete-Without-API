<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <router-link to="/" class="navbar-brand">
          <div><i>Application</i></div>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
      </nav>
    </header>
    <router-view class="router-content" />
    <footer class="fixed-bottom bg-dark border-top py-1">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <a href="#" class="text-light"
              ><i>{{ currentYear }} © </i></a
            >|
            <a href="#" class="text-light"
              ><i>Created By Tumelo Mokhwathi</i></a
            >
            |
            <a href="#" class="text-light"
              ><i>{{ version }}</i></a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  data() {
    return {
      version: process.env.VUE_APP_VERSION
    };
  },
  name: "app"
};
</script>
<style>
header {
  height: 60px;
}

#app {
  width: 100%;
  height: 100%;
}

nav {
  background-color: #2a577d;
}
/* data table */
.custom-select {
  background: none;
  padding: 0;
}
.vfl-label-on-focus {
  color: var(--primary) !important;
}
.tooltip {
  z-index: 50 !important;
}
</style>
