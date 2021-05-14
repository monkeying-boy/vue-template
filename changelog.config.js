module.exports = {
  disableEmoji: false,
  list: [
    'feat',
    'fix',
    'chore',
    'docs',
    'refactor',
    'style',
    'perf',
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna',
  ],
  scopes: [
    'scopes 测试',
  ],
  types: {
    chore: {
      description: '开发工具变动(构建、脚手架工具等)',
      emoji: '🤖',
      value: 'chore',
    },
    docs: {
      description: '更新文档',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: '一个新的功能',
      emoji: '✨',
      value: 'feat',
    },
    fix: {
      description: '修复bug',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: '优化了性能的代码改动',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: '代码重构或者一些代码结构上优化',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: '版本回退',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: '修改css或者调整代码风格样式',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'Adding missing tests',
      emoji: '💍',
      value: 'test',
    },
  },
};
