<template>
    <Header />
    <Main />
    <Footer />
</template>

<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
button {
    padding: 0.25rem 1rem;
    border: none;
    background-color: #004391;
    color: white;
    border-radius: 0.3rem;
    cursor: pointer;
}
button:hover {
    background-color: #117ae4;
}

select, input {
    padding: 0.25rem;
    margin-left: 1rem;
}

/* Settings page */
.settings-caption {
    padding-bottom: 1rem;
    text-align: center;
    font-size: x-large;
}
.settings-params {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
}
.settings-controls {
    padding-top: 1rem;
    margin: 1rem 0;
    border-top: 1px solid black;
    text-align: center;
}
</style>
