/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-02-02 19:40:14
 * @LastEditors: by_mori
 * @LastEditTime: 2022-02-02 20:35:53
 */
module.exports = {
  types: [
    { value: ':construction: WIP', name: '💪 开发中   | Work in Progress' },
    { value: ':sparkles: feat', name: '✨ 新功能   | Features' },
    { value: ':bug: fix', name: '🐛 修复     | Bug Fixes' },
    { value: ':art: style', name: '💄 代码样式 | Styles' },
    { value: ':hammer: refactor', name: '🔨 代码重构 | Code Refactoring' },
    { value: ':green_heart: fixci', name: '💚 CI 配置  | Fixing CI Build' },
    { value: ':rewind: revert', name: '⏪ 回退     | Revert' },
    { value: ':package: build', name: '📦 打包构建 | Build System' },
    {
      value: ':thought_balloon: chore',
      name: '🗯  构建     | Chore | ',
    },
    { value: ':white_check_mark: test', name: '✅ 测试     | Tests' },
    { value: ':pencil: docs', name: '📝 文档变更 | Documentation' },
    { value: 'init', name: '🚀 初始化   | Init' },
    {
      value: ':lipstick: ui',
      name: '💄 更新UI   | UI',
    },
    {
      value: ':truck: mv',
      name: '🚚 文件操作 | mv',
    },
    {
      value: ':fire: prune',
      name: '🔥 删除code | prune',
    },
    {
      value: ':bookmark: release',
      name: '🔖 发布 Tag | release',
    },
  ],

  // 步骤
  messages: {
    type: '请选择提交的类型；',
    customScope: '请输入修改的范围（可选）',
    subject: '请简要描述提交（必填）',
    body: '请输入详细描述（可选）',
    footer: '请选择要关闭的issue（可选）',
    confirmCommit: '确认要使用以上信息提交？（y/n）',
  },

  // 跳过步骤
  skipQuestions: ['customScope', 'body', 'footer'],

  // 模块名
  // scopes: [{ name: 'account' }]

  // 默认长度
  subjectLimit: 72,
};
