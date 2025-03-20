<template>
    <div class="w-full h-full">
        <div>
            <NavBar class="z-10"/>
        </div>
        <div class="container mx-auto px-4 mt-5">
            <slot/>
        </div>
        <div>
            <footer/>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>