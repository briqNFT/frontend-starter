<template>
    <h1>Pretend this page loads a heavy script</h1>
    <p>Such as a fontawesome icon: <i class="fas fa-recycle"></i></p>
</template>

<style scoped>
h1 {
    padding: 4px;
}
</style>

<script lang="ts">
import '@/FontAwesome';

import { defineComponent } from 'vue';
export default defineComponent({});
</script>
