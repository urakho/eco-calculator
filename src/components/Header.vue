<template>
    <header>
        <div class="header-left">
            <img src="/logo.svg" alt="Logo" />
        </div>
        <div class="header-center">
            <h1>Eco Price Calculator</h1>
        </div>
        <div class="header-right">
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    padding: 1rem;
}
.header-left img {
    width: 50px;
    height: 50px;
    filter: drop-shadow(0 0 10px rgb(74, 154, 0));
}
.header-left, .header-right {
    flex-shrink: 0;
}
.header-center {
    flex: 1;
    text-align: center;
}
h1 {
    font-size: xx-large;
    color: #0070f3;
    margin: 0;
}
</style>
