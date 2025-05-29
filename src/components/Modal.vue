<template>
    <div v-if="visible" class="modal">
        <div class="modal-content">
            <slot />
            <button @click="close">{{ closeText }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: {
        visible: Boolean,
        closeText: { type: String, default: "OK" }
    },
    emits: ["click:close"],
    methods: {
        close() {
            this.$emit("click:close");
        }
    }
};
</script>

<style scoped>
.modal {                   
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;             
    justify-content: center;
}
.modal-content {
    background-color: #fefefe;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
    overflow: auto;
    text-align: center;
    position: relative;              /* for positioning the close button */
}
</style>
