<template>
  <nav class="nav">
    <Toggle
      disabled
      unit="rem"
      width="50"
      height="25"
      fontSize="14"
      checkedText="🌜"
      uncheckedText="🌞"
      dotClass="toggle-dot"
      dotColor="currentColor"
      checkedBg="var(--color-secondary2)"
      uncheckedBg="var(--color-secondary2)"
      :value="toggleDarkMode"
      @click="toggleDarkMode = !toggleDarkMode"
    />
    <Social>
      <a
        class="github-anchor"
        href="https://github.com/JonathanDn/vue-companies-israel"
      >
        <GitHubAnchor />
      </a>
    </Social>
  </nav>
</template>

<script setup>
import { ref } from "vue";

import Toggle from "./Toggle.vue";
import Social from "./Social.vue";
import GitHubAnchor from "./GitHubAnchor.vue";

const toggleDarkMode = ref(true);
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  z-index: 1; // ensure always on top
  display: flex;
  padding: 16rem;
  position: absolute; // ensure always on top
  align-items: flex-start;
  background-color: var(--color-secondary);

  :deep(.toggle-dot) {
    transition: background-color var(--transition-duration);

    &:hover {
      background-color: var(--color-primary) !important ;
    }
  }
}

.github-anchor {
  margin-left: auto;
}
</style>
