## 运行项目
```
1. git clone https://github.com/monkeying-boy/vue-template.git
2. cd vue-template
3. yarn install or npm install
4. yarn dev or npm run dev
```

## commit 提交规范
1. type
  - feat 新功能
  - docs 文档更新
  - fix Bug 修复
  - style 代码的格式，标点符号的更新
  - refactor 代码重构
  - perf 性能优化
  - test 测试更新
  - build 构建系统或者包依赖更新
  - ci CI 配置，脚本文件等更新
  - chore 非 src 或者 测试文件的更新
  - revert commit 回退
2. scope
  - 本次修改的文件名
3. subject
  - 用一句话描述这次提交做了什么
4. body
  - 对 subject 补充说明，本次修改的原因、目的等相关因素
  - 换行请用 `\n` 代替



## 版本控制
```js
// 版本
major：主版本号，不兼容的API修改
minor：次版本号，向下兼容，功能性增加
patch：修订号，向下兼容，bug fixed
 
// 版本发布进度
alpha（内测）
beta（公测）
rc （正式版本的候选版本）  Release Candiate
 
// npm 发布指令 假设当前版本为1.0.0
升级补丁版本号：npm version patch // => 1.0.1
升级小版本号：npm version minor   // => 1.1.0
升级大版本号：npm version major   // => 2.0.0
```
