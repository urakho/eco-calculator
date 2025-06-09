<template>
    <div v-if="visible" class="modal">
        <div class="modal-content">
            <slot />
            <!-- Button group -->
            <div class="modal-buttons">
                <button v-for="(button, index) in buttons" :key="index" @click="buttonClick(button.event)">
                    {{ button.text }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: {
        visible: Boolean,
        buttons: { 
            type: Array, 
            required: true,
            validator(value) {
                return value.length >= 1 && value.length <= 3 &&
                       value.every(b => typeof b.text === 'string' && typeof b.event === 'string');
            }
        }
    },
    methods: {
        buttonClick(eventName) {
            this.$emit(eventName);
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
    position: relative;
}
.modal-buttons {
    margin-top: 1rem;
    display: flex;
    gap: 0.3rem;
    justify-content: center;
}
</style>
