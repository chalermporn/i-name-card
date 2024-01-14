<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <div />
    </nav>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125">
  </header>
  <main>
    <div class="bg-red-200">
      <RouterView />
    </div>
  </main>
</template>
