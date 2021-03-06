/*
 * @Descripttion: ioå°æ  ââ ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-02-02 19:40:14
 * @LastEditors: by_mori
 * @LastEditTime: 2022-02-02 20:35:53
 */
module.exports = {
  types: [
    { value: ':construction: WIP', name: 'ðª å¼åä¸­   | Work in Progress' },
    { value: ':sparkles: feat', name: 'â¨ æ°åè½   | Features' },
    { value: ':bug: fix', name: 'ð ä¿®å¤     | Bug Fixes' },
    { value: ':art: style', name: 'ð ä»£ç æ ·å¼ | Styles' },
    { value: ':hammer: refactor', name: 'ð¨ ä»£ç éæ | Code Refactoring' },
    { value: ':green_heart: fixci', name: 'ð CI éç½®  | Fixing CI Build' },
    { value: ':rewind: revert', name: 'âª åé     | Revert' },
    { value: ':package: build', name: 'ð¦ æåæå»º | Build System' },
    {
      value: ':thought_balloon: chore',
      name: 'ð¯  æå»º     | Chore | ',
    },
    { value: ':white_check_mark: test', name: 'â æµè¯     | Tests' },
    { value: ':pencil: docs', name: 'ð ææ¡£åæ´ | Documentation' },
    { value: 'init', name: 'ð åå§å   | Init' },
    {
      value: ':lipstick: ui',
      name: 'ð æ´æ°UI   | UI',
    },
    {
      value: ':truck: mv',
      name: 'ð æä»¶æä½ | mv',
    },
    {
      value: ':fire: prune',
      name: 'ð¥ å é¤code | prune',
    },
    {
      value: ':bookmark: release',
      name: 'ð åå¸ Tag | release',
    },
  ],

  // æ­¥éª¤
  messages: {
    type: 'è¯·éæ©æäº¤çç±»åï¼',
    customScope: 'è¯·è¾å¥ä¿®æ¹çèå´ï¼å¯éï¼',
    subject: 'è¯·ç®è¦æè¿°æäº¤ï¼å¿å¡«ï¼',
    body: 'è¯·è¾å¥è¯¦ç»æè¿°ï¼å¯éï¼',
    footer: 'è¯·éæ©è¦å³é­çissueï¼å¯éï¼',
    confirmCommit: 'ç¡®è®¤è¦ä½¿ç¨ä»¥ä¸ä¿¡æ¯æäº¤ï¼ï¼y/nï¼',
  },

  // è·³è¿æ­¥éª¤
  skipQuestions: ['customScope', 'body', 'footer'],

  // æ¨¡åå
  // scopes: [{ name: 'account' }]

  // é»è®¤é¿åº¦
  subjectLimit: 72,
};
