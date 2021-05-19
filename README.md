## 项目说明
> 该项目是基于 vue2、eslint、stylelint、commitlint、husky、standard-version、babel-plugin-transform-remove-console 工具进行封装的一个 vue2 模板，可以直接用于项目开发，现在我们公司是使用这一套规范。

**注意**
1. git **提交**必须使用 yarn commit
2. eslint、stylelint 可以根据实际情况进行相应调整
3. axios 需要自行根据业务需求进行**请求、相应拦截**相应处理
4. 版本通过 yarn release 进行版本控制（详情看下方版本控制相关）
5. 项目中使用了 `babel-plugin-transform-remove-console` 在生产环境会将 `console` 进行清除
6. `changelog` 命令自动生成提交日志，只会显示 `fix` 和 `features` 类型的日志

## 运行项目
```
1. git clone https://github.com/monkeying-boy/vue-template.git
2. cd vue-template
3. yarn install or npm install
4. yarn dev or npm run dev
```

## commit 提交规范
```bash
git add . 

yarn commit

#指定commit的类型，约定了feat、fix两个主要type，详细请看下面 type 说明 (必选，上下键选择，回车确定)
? **Select the type of change that youre committing:

#用于描述改动的范围，格式为项目名/模块名 (非必填)
? What is the scope of this change (e.g. component or file name): (press enter to skip)

#对改动进行简短的描述（必填, 就是 git commit -m 'message' ）
? Write a short, imperative tense description of the change (max 75 chars):

#对改动进行长的描述 (非必填)
? Provide a longer description of the change: (press enter to skip)

#是破坏性的改动吗 (非必填)
? Are there any breaking changes?

#影响了哪个issue吗，如果选是，接下来要输入issue号 (非必填,如果是修复 issue 请填写 `/close #1,#2`,#1 #2 为 issue 编号)
? Does this change affect any open issues?

```

1. type
  - feat 新功能
  - docs 文档更新
  - fix Bug 修复
  - style 代码的格式，UI样式更新
  - refactor 代码重构
  - perf 性能优化
  - test 测试
  - build 构建系统或者包依赖更新
  - ci CI 配置，脚本文件等更新
  - chore 非 src/* 文件的更新
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
升级补丁版本号：npm release patch // => 1.0.1
升级小版本号：npm release minor   // => 1.1.0
升级大版本号：npm release major   // => 2.0.0
```
