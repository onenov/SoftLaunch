<script lang="ts" setup>
import { ref, computed, onMounted, defineProps } from 'vue';
const colorMode = useColorMode();

const props = defineProps<{
  size: string
}>();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value: boolean) {
    colorMode.preference = value ? "dark" : "light";
    document.body.setAttribute('arco-theme', value ? 'dark' : 'light');
  },
});

onMounted(() => {
  document.body.setAttribute('arco-theme', colorMode.value === 'dark' ? 'dark' : 'light');
});
</script>

<template>
  <ClientOnly>
    <!-- <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray" variant="soft"
      aria-label="Theme" @click="isDark = !isDark" /> -->
    <a-button type="primary" :size="props.size" status="success" shape="circle" @click="isDark = !isDark">
      <icon-moon-fill v-if="isDark" />
      <icon-sun-fill v-else />
    </a-button>
  </ClientOnly>
</template>
