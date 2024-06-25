<script setup lang="ts">
import { sidebar_links, account_links } from "~/constants/sidebarData";
import { Icon } from "@iconify/vue";

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
          <li class=" border-2 w-[220px] mb-[12px] mx-auto pl-[16px] py-[12px] rounded-[15px]">
            <NuxtLink :to="menu.to" 
            :class="{ 'bg-[#1A5CFF]  text-white': isActive(menu.to) }"
            >
              <div class="flex gap-3 items-center">
                <div class=" size-[30px]  grid place-items-center bg-white rounded-xl">
                    <Icon :icon="menu.icon"  class=" text-teal"/>
                </div>
                <p class=" font-semibold text-text tracking-tighter">{{ menu.title }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
        <div class="">
            <h1 class=" text-[#1f273] font-bold tracking-tighter mx-auto py-[12px]">ACCOUNT PAGES</h1>
            <ul v-for="menu in accountLinks">
          <li class=" border-2 w-[220px] mb-[12px] mx-auto pl-[16px] py-[12px] rounded-[15px]">
            <NuxtLink :to="menu.to" >
              <div class="flex gap-3 items-center">
                <div class=" size-[30px]  grid place-items-center bg-white rounded-xl">
                    <Icon :icon="menu.icon"  class=" text-teal"/>
                </div>
                <p class=" font-semibold text-text tracking-tighter">{{ menu.title }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
        </div>
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