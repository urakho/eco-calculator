<template>
    <Modal :visible="show" close-text="Accept" @click:close="onAccept">
        <div v-html="disclaimer"></div>
    </Modal>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Modal from "./Modal.vue";
import { marked } from "marked";

const show = ref(false);
const disclaimer = ref("");

onMounted(async () => {
    const md = await fetch("/disclaimer.md").then(r => r.text());
    disclaimer.value = marked.parse(md);
    if (!document.cookie.includes("disclaimerAccepted=true")) {
        show.value = true;
    }
});

function onAccept() {
    document.cookie = "disclaimerAccepted=true; path=/; max-age=31536000";
    show.value = false;
}

function open() {
    show.value = true;
}

defineExpose({ open });
</script>
