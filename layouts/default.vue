<template>
     <div class="wrapper w-full min-h-[100dvh]">
        <main class="main w-full">
            <TheNavbar @toggle-sidebar="toggleSidebar"/>
            <div class="h-full ">
                <UIAnalyticsCards />
                <UIBigCards />
                <UITheCharts />
                <UITheTable />
            </div>
            <div>
                <TheFooter />
            </div>
        </main>
        <aside class="sidebar">
            <TheSidebar :isVisible="isSidebarVisible" />
        </aside>
    </div>
</template>

<script setup>
const isSidebarVisible = ref(false);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<style lang="scss" scoped>

</style>