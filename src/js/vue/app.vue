<template>
    <div class="app-comp">{{ message }}</div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Vue component'
            }
        }
    }
</script>

<style lang="css" scoped>
    .app-comp {
        background-color: #333;
        color: #ccc;
        font-size: 1em;
        padding: 1em;
    }
</style>