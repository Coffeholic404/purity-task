<script setup lang="ts">
const { $api } = useNuxtApp()
// import axios from "~/plugins/axios";

// const $axios = axios().provide.axios;
// const data = ref([])

// const homeData = async () => {
//     const response = await $axios.get('products')
//     data.value = response.data;
//     return data.value;
// }

// console.log(data.value);

// onMounted(() => {
//     homeData()
// })

// const { data, status, error, refresh, clear } = await useAsyncData(
//   'mountains',
//   () => $fetch('https://fakestoreapi.com/products')
// )

// console.log(data.value[0].title);
// console.log(status.value);
// console.log(error.value);
// const {data: title} = await useFetch('https://fakestoreapi.com/products')


const { data: modules } = await useAsyncData('modules', () => $api('products'));


</script>

<template>
    <div>
      {{ modules }}
    </div>
</template>



<style scoped></style>



