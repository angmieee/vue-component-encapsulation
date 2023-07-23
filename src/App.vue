<script>
import MyInput from './components/MyInput/my-input.vue';

export default {
    data() {
        return {};
    },
    components: {
        MyInput,
    },
    methods: {
        handleFn() {
            console.log(1);
        },
    },
};
</script>

<template>
    <div style="width: 100%; display: flex; justify-content: center">
        <my-input size="aaa" clearable @customer="handleFn" @input="handleFn">
            <template #prepend> https:// </template>
            <template #append> .com </template>
        </my-input>
        <el-button type="primary">click</el-button>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
