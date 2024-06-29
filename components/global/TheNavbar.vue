<script setup>
import { Icon } from "@iconify/vue";

// const emitToggle = defineEmits(['toggleSidebar']);
const toggleSidebar = () => {
    const side = document.querySelector('.sidebar')
    side.classList.add("toogleside")

    alert("test")

    // emitToggle();
};
</script>

<template>
    <div class="navbar w-full px-5 my-6  font-roboto h-fit flex items-center ">
        <nav class=" flex w-full items-center justify-between flex-wrap flex-1  ">
            <div class="nav-bread order-1 ">
                <p class=" text-text">Pages / <span class=" text-text-active">Dashboard</span></p>
                <p class="dash-text text-text-active font-bold text-sm">Dashboard</p>
            </div>


            <div class="search-wrapper w-full flex flex-1 justify-end gap-8  order-2">
                <form class="w-max">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                            <svg class="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                            class="search-input block w-full p-2 ps-10 text-sm border-2 rounded-lg bg-gray-50  focus:border-blue-600 outline-none"
                            placeholder="type here..." required />
                    </div>
                </form>
                <div class="icons flex gap-3 text-text-gray items-center">
                    <Icon icon="ion:person" class=" icon" />
                    <p class="signin font-semibold">Sign In</p>
                    <button @click="toggleSidebar" class="toggle" >
                        <Icon icon="ion:menu" class=" icon !cursor-pointer" />
                
                    </button>
                    <Icon icon="ion:settings-sharp" class=" icon"/>
                    <Icon icon="ion:notifications" class=" icon"/>
                </div>
            </div>

        </nav>
    </div>
</template>

<style scoped>
@media (min-width: 425px) and (max-width:767px) {
    .navbar nav {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    .signin {
        display: none;
    }
    
    .search-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        padding-inline: 20px;
    }

    .search-input {
        margin-right: 12rem;
        width: 128px;
        padding-block: 10px;
    }

    .nav-bread {
        /* font-weight: bold; */
        font-size: x-large;

        .dash-text {
            font-weight: 700;
            font-size: x-large  ;
        }
    }

    .icon {
        width: 25px;
        height: 25px;
    }
}

@media (min-width: 1025px) {
    .toggle {
        display: none;
    }
}
</style>