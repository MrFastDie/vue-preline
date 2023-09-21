<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps({
  imgSrc: {type: String, required: true},
  imgDesc: {type: String, required: true},
  title: {type: String, required: true},
  githubUrl: {type: String, default: null},
});
</script>

<template>
  <div class="flex flex-col flex-[1_0_0%] bg-white dark:bg-gray-800">
    <img class="w-full h-auto rounded-t-xl sm:rounded-tr-none p-5" :src="imgSrc" :alt="imgDesc">
    <div class="p-4 flex-1 md:p-5">
      <h3 class="text-lg font-bold text-gray-800 dark:text-white">
        {{ props.title }}
      </h3>
      <p class="mt-1 text-gray-800 dark:text-gray-400">
        <slot></slot>
      </p>
      <div class="mt-5 sm:mt-auto">
        <p class="text-xs text-gray-500 dark:text-gray-500">
          <a v-if="props.githubUrl" :href="props.githubUrl" target="_blank"><font-awesome-icon :icon='["fab", "github"]' /> View on Github</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
