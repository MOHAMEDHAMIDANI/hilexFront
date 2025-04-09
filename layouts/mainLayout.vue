<template>
    <div class="w-full h-fit">
        <div>
            <NavBar class="z-10"/>
        </div>
        <div class="container mx-auto px-4 mt-5 w-full h-fit">
            <slot/>
        </div>
        <div>
            <ServiceHighlights />
            <MyFooter/>
        </div>
    </div>
</template>

<script setup lang="ts">

import MyFooter from '~/components/MyFooter.vue';
import ServiceHighlights from '~/components/ServiceHighlights .vue';


</script>

<style scoped>

</style>