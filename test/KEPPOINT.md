## 浏览器调试 Vue 项目

Elements 选中想要查看的元素 -> Console 打印 $0 可以获取到选中 dom -> 使用 $0.**vue** 可以访问到 Vue 实例

## 生产环境使用 devtools

```js
__VUE_DEVTOOLS_GLOBAL_HOOK__.emit(
    'init',
    (document.querySelector(
        '#app'
    ).__vue__.__proto__.constructor.config.devtools = true) &&
        document.querySelector('#app').__vue__.__proto__.constructor
);
```
