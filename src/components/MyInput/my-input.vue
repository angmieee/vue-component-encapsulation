<template>
    <div>
        <el-input
            v-model="innerVal"
            v-bind="$attrs"
            v-on="$listeners"
            @input="$emit('input', $event)"
        >
            <template v-for="(_, slotName) in $slots" #[slotName]>
                <slot :name="slotName"></slot>
            </template>
        </el-input>
    </div>
</template>
<script>
export default {
    name: 'MyInput',
    inheritAttrs: false,
    props: {
        size: {
            default: 'medium',
            validator: (prop) => ['small', 'medium', 'large'].includes(prop),
        },
    },
    data() {
        return {
            isShow: false,
        };
    },
    created() {
        console.log(this.$attrs);
        console.log(this.$listeners);
        console.log(this.$slots);
    },
    watch: {
        value() {
            if (this.value !== this.innerVal) {
                this.innerVal = this.value;
            }
        },
    },
};
</script>
<style lang=""></style>
