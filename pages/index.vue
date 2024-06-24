<script setup>

</script>

<template>
    <div class="wrapper w-full min-h-[100dvh] ">
        <main class="main">

        </main>
        <aside class="sidebar">
            <TheSidebar />
        </aside>
    </div>
</template>

<style scoped>
    .wrapper {
        display: grid;
        grid-template-columns: 276px 1fr;

        .sidebar{
            grid-column: 1 / 2;
        }
        .main {
            grid-column: 2 / 3;
        }
    }
</style>