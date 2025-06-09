<template>
    <Modal :visible="show" :buttons="[ { text: 'OK', event: 'close'  } ]" @close="onClose">
        <div v-html="about"></div>
    </Modal>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Modal from "./Modal.vue";
import { marked } from "marked";

const show = ref(false);
const about = ref("");

onMounted(async () => {
    const md = await fetch("/README.md").then(r => r.text());
    about.value = marked.parse(md);
});

function onClose() {
    show.value = false;
}

function open() {
    show.value = true;
}

defineExpose({ open });
</script>
