<script setup>
</script>

<template>
    <div style="display:flex;flex-flow:nowrap;justify-content: space-between;padding: 0.9375rem 0;">
        <div style="display: inline;">
            <img src="@/assets/images/logo.svg" alt="logo_astar" />
        </div>


        <div class="wrapper">
            <slot></slot>
        </div>


        <div style="display:flex">
            <div class="app-header-link">
                <i class="material-icons md-24">open_in_new</i>
                <a href="#">PPMS</a>
            </div>
            <div class="vertical-divider"></div>
            <div class="app-header-link">
                <i class="material-icons md-24">domain</i>
                <a href="#">Platform directory</a>
            </div>
        </div>
    </div>





    <div class="title-container" style="margin-bottom: 0.9375rem;">
        <div class="title-content">
            <div>
                <h1>Platform directory</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title-container {
    contain: content;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(127.75deg, rgb(0, 48, 135) 33.47%, rgb(218, 41, 28) 137.4%) right center / contain no-repeat;
}

.title-content {
    position: relative;
    width: 100%;
    flex-grow: 1;
    max-width: 1440px;
}

.title-content>div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    padding: 45px 75px;
    color: rgb(255, 255, 255);
    width: 100%;
}

.vertical-divider {
    margin: 0 1rem;
    width: 1px;
    height: 100%;
    background: rgb(238, 244, 246);
    display: inline-block;
}

.app-header-link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 0px 4px;
    text-align: left;
    max-width: 100%;
}

.app-header-link a {
    position: relative;
    flex-flow: column nowrap;
    align-items: center;
    text-align: none;
    width: auto;
    height: auto;
    color: rgb(0, 48, 135);
    display: inline-flex;
    overflow: visible;
    max-width: 100%;
    margin: 0px 10px;
    font-size: 1.125rem;


    line-height: 1.4;
    text-decoration: none;
    padding-bottom: 0px;
    border-bottom: 1px solid rgb(0, 48, 135);
    border-end-end-radius: 3px;
}

.app-header-link i {
    margin-top: 5px;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo {
    overflow: visible;
}
</style>
