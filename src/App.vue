<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
    <p class="flex justify-center"><img alt="Vue logo" src="./assets/logo.png" /></p>
    <router-view msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
html {
    --color-base: 33 33 60;
    --color-contrast: 200 33 33;
    @apply text-base dark:bg-black dark:text-white;
}

h1 {
    @apply text-center;
}
</style>
