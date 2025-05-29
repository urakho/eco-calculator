<template>
    <div v-if="visible" class="page">
        <slot />
    </div>
</template>

<script setup>
defineProps({
    visible: Boolean
})
</script>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
}
</style>
