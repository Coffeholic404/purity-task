<script setup>
import { sidebar_links } from "~/constants/sidebarData";
const links = sidebar_links;
</script>

<template>
    <div class=" w-full  min-h-[100dvh]">
        <div class=" w-full px-5  my-4 ml-4  h-[calc(-32px + 100vh)]">
            <div class=" flex gap-4 pt-[25px] mb-[12px] text-['#2D3748'] font-roboto">
                <div class=" size-[22px]"><img src="/assets/svg/logo.svg" alt="LOGO"></div>
                <h1 class=" text-[0.875rem] font-semibold">PURITY UI DASHBOARD</h1>
            </div>
            <div class=" divider mt-8">
            </div>
            <ul v-for="menu in links">
                <li>
                    <NuxtLink :to="menu.to">
                        <div>
                            <Icon :name="menu.icon" />
                        </div>
                    </NuxtLink>
                </li>
                    
            </ul>
        </div>
    </div>
</template>

<style scoped>
.divider {
    display: flex;
    height: 1px;
    width: 100%;
    background: linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, rgb(224, 225, 226) 49.52%, rgba(224, 225, 226, 0) 100%);
}
</style>