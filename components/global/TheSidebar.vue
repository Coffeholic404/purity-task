<script setup lang="ts">
import { sidebar_links, account_links } from "~/constants/sidebarData";
import { Icon } from "@iconify/vue";
import { useRoute, useRouter } from 'vue-router';

// Get the current route
const route = useRoute();

// Function to check if the link is active
const isActive = (to: string) => {
  return route.path === to;
};
</script>

<template>
  <div class="sidebar  w-fit transition-all duration-500 lg:left-0 lg:block  min-h-[100dvh]">
    <div class="w-full px-5 my-4  h-[calc(-32px_+_100vh)] flex flex-col items-center">
      <div class="flex gap-4 pt-[25px] mb-[12px] text-text-active font-roboto">
        <div class="size-[22px]">
          <img src="/assets/svg/logo.svg" alt="LOGO">
        </div>
        <h1 class="text-[0.875rem] font-semibold">PURITY UI DASHBOARD</h1>
      </div>
      <div class="divider mt-4"></div>

      <ul class=" mt-4">
        <li v-for="menu in sidebar_links" :key="menu.title"
          class="w-[220px] mb-[12px] mx-auto pl-[16px] py-[12px] rounded-[15px] font-roboto"
          :class="{ 'bg-white': isActive(menu.to) }">
          <NuxtLink :to="menu.to">
            <div class="flex gap-3 items-center">
              <div class="size-[30px] grid place-items-center bg-white rounded-xl"
                :class="{ '!bg-teall text-white': isActive(menu.to) }">
                <Icon :icon="menu.icon" class="text-teall" :class="{ 'text-white': isActive(menu.to) }" />
              </div>
              <p class="font-semibold text-text tracking-tighter" :class="{ ' text-text-active': isActive(menu.to) }">{{
                menu.title }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <div>
        <h1 class="text-[#1f273] font-bold font-roboto  tracking-normal mt-2 pl-[16px] py-[12px]">ACCOUNT PAGES</h1>
        <ul class=" mt-4">
          <li v-for="menu in account_links" :key="menu.title"
            class="w-[220px] mb-[12px] pl-[16px] py-[12px] rounded-[15px] font-roboto"
            :class="{ 'bg-white': isActive(menu.to) }">
            <NuxtLink :to="menu.to">
              <div class="flex gap-3 items-center">
                <div class="size-[30px] grid place-items-center bg-white rounded-xl"
                  :class="{ 'bg-[#4FD1C5] text-[#ffffff]': isActive(menu.to) }">
                  <Icon :icon="menu.icon" class="text-teall" :class="{ 'text-[#ffffff]': isActive(menu.to) }" />
                </div>
                <p class="font-semibold text-text tracking-tighter" :class="{ ' text-text-active': isActive(menu.to) }">
                  {{ menu.title }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class=" w-[218px]  bg-teall mx-auto flex flex-col justify-start items-start rounded-2xl p-4 gap-4">
      <div class=" size-[35px] bg-white rounded-xl grid place-items-center">
        <Icon icon="ion:help" class=" bg-teall rounded-full text-white size-[18px]" />
      </div>
      <p class=" text-white text-sm font-bold font-roboto">Need help?</p>
      <p class=" text-white text-sm font-roboto">Please check our docs</p>
      <button
        class="w-[186px] h-[35] bg-white rounded-lg text-text-active grid place-items-center p-[8px] font-roboto font-bold text-sm">
        DOCUMENTATION
      </button>
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


@media (max-width:1024px) {
  .sidebar { 
    position: absolute;

  }
}
</style>
