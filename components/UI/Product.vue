<script setup lang="ts">

const { data: product, refresh } = await useAsyncData('product', () => $api('products'));

console.log(product.value);   
</script>

<template>
    <div class="min-h-[100dvh] bg-teall w-full place-content-center">
        <pre class=" text-white">
            {{ product }}
        </pre>
        <button @click="() => refresh()">Refresh data</button>
    </div>
</template>


<style scoped>

</style>