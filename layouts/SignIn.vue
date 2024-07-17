<script setup>

definePageMeta({
    layout: "sign-in"
})
useHead({
    title: 'Sign In',
    meta: [
        {
            name: 'description',
            content: 'Sign in to your account'
        }
    ]
    
})
</script>

<template>
    <div>
        <slot />
    </div>
</template>



<style scoped>

</style>