// module.exports = {
//   extends: ['@commitlint/config-conventional'],
//   rules: {
//     'type-enum': [2, 'always', [
//       'build',
//       // 'ci',
//       'chore',
//       'docs',
//       'feat',
//       'fix',
//       'perf',
//       'refactor',
//       'revert',
//       'style',
//       'test',
//     ]],
//     // 'subject-full-stop': [0, 'never'],
//     // 'subject-case': [0, 'never']
//   },
// };
//   build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
//   ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
//   docs：文档更新
//   feat：新增功能
//   fix：bug 修复
//   perf：性能优化
//   refactor：重构代码(既没有新增功能，也没有修复 bug)
//   style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
//   test：新增测试用例或是更新现有测试
//   revert：回滚某个更早之前的提交
//   chore：不属于以上类型的其他类型

// module.exports = {
//   extends: ['@commitlint/config-angular'],
// };
module.exports = {

  extends: ['@commitlint/config-conventional', 'cz'],

};
// feat：新功能（feature）
// fix：修补bug
// docs：文档（documentation）
// style： 格式（不影响代码运行的变动）
// refactor：重构（即不是新增功能，也不是修改bug的代码变动）
// test：增加测试
// chore：构建过程或辅助工具的变动

// module.exports = {
//   extends: [
//     '@commitlint/config-conventional',
//   ],
//   rules: {
//     'type-enum': [2, 'always', [
//       'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert',
//     ]],
//     'type-case': [0],
//     'type-empty': [0],
//     'scope-empty': [0],
//     'scope-case': [0],
//     'subject-full-stop': [0, 'never'],
//     'subject-case': [0, 'never'],
//     'header-max-length': [0, 'always', 72],
//   },
// };
