## 属性透传

-   $attrs

https://v2.cn.vuejs.org/v2/api/#vm-attrs

https://cn.vuejs.org/api/component-instance.html#attrs

包含了组件被传入，但没有被声明为 Prop 的属性

默认情况下，若是单一根节点组件，$attrs 中的所有属性都是直接自动继承自组件的根元素。

-   inheritAttrs

默认情况下父作用域的不被认作 props 的 attribute 绑定将会作为普通的 HTML attribute 应用在子组件的**根元素**上。设置 inheritAttrs: false，开发者可以将这些 attribute 和监听器应用到根元素之外的其它元素，并配合 $attrs 实现组件透传

-   $props

https://v2.cn.vuejs.org/v2/api/#vm-props

包含了组件被传入，所有的属性

-   v-bind="$attrs"

https://v2.cn.vuejs.org/v2/api/?#v-bind

动态地绑定多个 attribute

## 事件透传

-   $listeners（Vue3 已移除）

https://v2.cn.vuejs.org/v2/api/#vm-listeners

包含了组件被监听的所有事件

**Vue3 已移除， 现在统一通过 $attrs 获取**

https://v3-migration.vuejs.org/zh/breaking-changes/listeners-removed.html

> 在 Vue 3 的虚拟 DOM 中，事件监听器现在只是以 on 为前缀的 attribute，这样它就成为了 $attrs 对象的一部分，因此 $listeners 被移除了。

-   v-on="$listeners"

动态绑定多个事件

## 插槽透传

-   $slots

包含了组件插槽传入，所有的内容

-   $scopedSlots（Vue3 已移除）

用来访问作用于插槽

## 验证 props 枚举值

-   props validator
