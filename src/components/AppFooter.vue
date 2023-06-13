<script setup>
</script>

<template>
    <div class="root">
        <div class="links">
            <a href="https://www.rsc.a-star.edu.sg/terms-of-use">Terms of Use</a>
            <div class="bullet"></div>
            <a href="https://www.rsc.a-star.edu.sg/privacy-policy">Privacy Policy</a>
        </div>
        <div>
            <p>Copyright © 2023 A*STAR</p>
        </div>
    </div>
</template>

<style scoped>
.root {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgb(213, 213, 213);
    padding: 2rem 0;
}

.links {
    display: flex;
}

.links>a {
    display: flex;
    justify-content: center;
    align-items: center;
}


.bullet {
    width: 4px;
    height: 4px;
    border-radius: 8px;
    margin: 20px 11px;
    background: rgb(34, 129, 146);
}
</style>
