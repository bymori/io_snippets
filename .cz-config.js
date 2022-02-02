/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-02-02 19:40:14
 * @LastEditors: by_mori
 * @LastEditTime: 2022-02-02 20:05:22
 */
module.exports = {
  types: [
    { value: ':construction: WIP', name: '💪  Work in Progress | 开发中' },
    { value: ':sparkles: feat', name: '✨  Features | 新功能' },
    { value: ':bug: fix', name: '🐛  Bug Fixes | 修复' },
    { value: ':art: style', name: '💄  Styles | 代码样式' },
    { value: ':hammer: refactor', name: '🔨  Code Refactoring | 代码重构' },
    { value: ':green_heart: fixci', name: '💚  Fixing CI Build | CI 配置' },
    { value: ':rewind: revert', name: '⏪  Revert | 回退' },
    { value: ':package: build', name: '📦  Build System | 打包构建' },
    {
      value: ':thought_balloon: chore',
      name: '🗯   Chore | 构建/工程依赖/工具',
    },
    { value: ':white_check_mark: test', name: '✅  Tests | 测试' },
    { value: ':pencil: docs', name: '📝  Documentation | 文档变更' },
    { value: 'init', name: '🚀  Init | 初始化' },
    {
      value: ':lipstick: ui',
      name: '💄 Updating the UI and style files. | 更新UI和样式文件',
    },
    {
      value: ':truck: mv',
      name: '🚚 Moving or renaming files | 移动或重命名文件',
    },
    {
      value: ':fire: prune',
      name: '🔥 Removing code or files. | 删除代码或文件',
    },
    {
      value: ':bookmark: release',
      name: '🔖 Releasing / Version tags | 初始化 / 发布版本标记 ',
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
