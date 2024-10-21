module.exports = {
  extends: [
    './.nuxt/eslint.config.mjs', // 引入Nuxt的ESLint配置
    // 其他扩展配置
  ],
  rules: {
    'indent': ['off'], // 关闭缩进检查
    // 其他自定义规则
  }
}