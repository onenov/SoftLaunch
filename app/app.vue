<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

// 定义版本数据
const versionData = ref({
  NAME: '' // 初始值为空，等待加载
});

// 获取版本数据
async function fetchVersionData() {
  try {
    const response = await fetch('/version.json');
    if (response.ok) {
      const data = await response.json();
      versionData.value = data;
    } else {
      console.error('Failed to fetch version information.');
    }
  } catch (error) {
    console.error('Error fetching version information:', error);
  }
}

// 当组件挂载时获取数据并加载 MathJax 脚本
onMounted(() => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://io.onenov.cn/filter/css/tex-mml-chtml.js";
  script.async = true;
  script.onload = () => {
    window.MathJax = {
      tex: {
        inlineMath: [["$", "$"], ["\\(", "\\)"]],
        displayMath: [["$$", "$$"], ["\\[", "\\]"]]
      },
      svg: {
        fontCache: "global"
      }
    };
  };
  document.head.appendChild(script);
  
  // 获取版本数据
  fetchVersionData();
});

// 监听 versionData 的变化，并在 NAME 存在时更新 SEO title
watch(versionData, (newValue) => {
  if (newValue.NAME) {
    useSeoMeta({
      title: newValue.NAME, // 仅设置 title 为 versionData.NAME
    });
  }
});
</script>

<template>
  <main>
    <NuxtPage />
  </main>

  <NuxtLoadingIndicator class="!opacity-100" :throttle="0" />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>