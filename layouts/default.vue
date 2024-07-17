<template>
    <div class="wrapper w-full min-h-[100dvh]">
        <main class="main w-full">
            <TheNavbar @toggle-sidebar="toggleSidebar" />
            <slot />
            
        </main>
        <aside class="sidebar">
            <TheSidebar :isVisible="isSidebarVisible" />
        </aside>
        <!-- <Test /> -->
    </div>
</template>

<script setup>
const isSidebarVisible = ref(true);

const toggleSidebar = () => {
    isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<style lang="scss" scoped></style>