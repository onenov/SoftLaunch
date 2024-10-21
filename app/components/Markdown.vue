<template>
  <client-only>
    <div class="markdown" v-html="renderedHtml"></div>
  </client-only>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from 'vue';
import MarkdownIt from 'markdown-it';
import markdownItMathjax3 from 'markdown-it-mathjax3';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import mermaid from 'mermaid';

const props = defineProps<{ content: string }>();
const renderedHtml = ref('');
const toc = ref<Array<{ level: number; title: string; id: string }>>([]); // 目录数据

// 创建 MarkdownIt 实例, 并自定义高亮函数
const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang === 'mermaid' || lang === 'flow' || lang === 'seq') {
      // Mermaid 代码块不使用 Highlight.js 处理
      return `<div class="mermaid">${str}</div>`;
    }
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<div class="hljs-macos-container">' +
          '<div class="hljs-macos-lights">' +
          '<span class="hljs-macos-light red"></span>' +
          '<span class="hljs-macos-light yellow"></span>' +
          '<span class="hljs-macos-light green"></span>' +
          '</div>' +
          `<pre class="hljs"><code>${hljs.highlight(str, { language: lang, ignoreIllegals: true }).value}</code></pre>` +
          '</div>'
        );
      } catch (__) {}
    }
    return (
      '<div class="hljs-macos-container">' +
      '<div class="hljs-macos-lights">' +
      '<span class="hljs-macos-light red"></span>' +
      '<span class="hljs-macos-light yellow"></span>' +
      '<span class="hljs-macos-light green"></span>' +
      '</div>' +
      `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>` +
      '</div>'
    );
  },
});

// 使用 Mathjax3 插件
md.use(markdownItMathjax3);

// 捕获标题并生成目录
md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const title = tokens[idx + 1].content;
  const level = parseInt(token.tag.slice(1), 10);
  const id = `toc_${idx}`;
  toc.value.push({ level, title, id });
  return `<${token.tag} id="${id}">`;
};

// 渲染 Markdown 内容
const renderMarkdown = () => {
  toc.value = []; // 清空目录数据
  const htmlContent = md.render(props.content);
  renderedHtml.value = htmlContent;
};

// 渲染 MathJax 公式
const renderMathJax = () => {
  if (window.MathJax) {
    if (window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    } else if (window.MathJax.Hub && window.MathJax.Hub.Queue) {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    }
  }
};

// 渲染 Mermaid 图表
const renderMermaid = () => {
  mermaid.initialize({ startOnLoad: false });
  mermaid.init(undefined, document.querySelectorAll('.mermaid'));
};

// 更新渲染
const updateRender = () => {
  renderMarkdown();
  nextTick(() => {
    renderMathJax();
    renderMermaid();
  });
};

// 监听 content 变化并更新渲染
watch(
  () => props.content,
  () => {
    updateRender();
  },
  { immediate: true }
);
onMounted(() => {
  updateRender();
});
defineExpose({ toc, updateRender });
</script>