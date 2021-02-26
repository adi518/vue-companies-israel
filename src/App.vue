<template>
  <Nav />
  <Header :companies="companies" @get-started="scrollToTable" />
  <Container content>
    <h3>What is Vue.js?</h3>
    <p>
      <a href="https://vuejs.org/">Vue.js</a> is an open-source
      model–view–viewmodel front end JavaScript framework for building user
      interfaces and single-page applications. It was created by Evan You, and
      is maintained by him and the rest of the active core team members.
      <a href="https://en.wikipedia.org/wiki/Vue.js">Wikipedia</a>
    </p>
  </Container>
  <Container content>
    <Search />
    <Table ref="table" @ready="onTableReady" />
    <p>
      <small class="opacity-50">
        * Table does NOT contain freelancers, consultancies, software
        contractors or open source projects working with
        <a href="https://vuejs.org/">Vue.js</a>.
      </small>
    </p>
  </Container>
  <Container content>
    <h3>Contributing</h3>
    <p>
      If your company is currently working with
      <a href="https://vuejs.org/">Vue.js</a>, open a
      <a href="https://github.com/JonathanDn/vue-companies-israel/pulls"
        >pull request</a
      >
      to add it to the table above. If it's also currently recruiting, make sure
      to check the <b>Recruiting</b> column.
    </p>
  </Container>
  <Footer />
  <ScrollToTop />
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

// https://stackoverflow.com/a/58193460/4106263
// https://github.com/vuejs/composition-api/issues/317
// https://stackoverflow.com/questions/64231942/vue-ref-on-custom-child-component-not-working

import "./css/global.scss";

import Nav from "./components/Nav.vue";
import Table from "./components/Table.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Search from "./components/Search.vue";
import Container from "./components/Container.vue";
import GitHubStars from "./components/GitHubStars.vue";
import ScrollToTop from "./components/ScrollToTop.vue";

import packageJson from "../package.json";

import { ref } from "vue";

const table = ref(null);
const companies = ref(null);

const scrollToTable = () => {
  // should use optional chaining, but it fails gh-pages build for some reason
  const ref = table.value.getRef();
  ref && ref.scrollIntoView({ behavior: "smooth" });
};

const onTableReady = ({ length }) => (companies.value = length);
</script>

<style lang="scss">
#app {
  min-width: 320px;
  background-color: var(--color-secondary);
}
</style>
