<script setup>
definePageMeta({
    layout: "sign-in"
})
</script>

<template>
    <div class="form-wrapper w-full min-h-[100dvh] flex items-center justify-start">
        <section class="sign-in-wrapper font-roboto flex flex-col w-full p-12">
            <h2 class=" leading-[1.2] font-bold text-[32px] text-teall mb-[10px]">Welcome Back</h2>
            <p class=" text-text mb-[36px] ms-[4px] font-bold text-sm">Enter your email and password to sign in</p>

            <form action="" class=" w-full relative">
                <label for="email"
                    class=" block text-start text-sm ms-[4px] me-[0.75rem] mb-[0.5rem] font-normal ">Email</label>
                <input type="email" name="email" id="email" placeholder="Your email adress"
                    class="email w-full min-w-0 text-sm px-4 h-12 rounded-[15px] border mb-6 border-[#CBD5E0]">
                <label for="password"
                    class=" block text-start text-sm ms-[4px] me-[0.75rem] mb-[0.5rem] font-normal ">Email</label>
                <input type="password" name="password" id="password" placeholder="Your password"
                    class="email w-full min-w-0 text-sm px-4 h-12 rounded-[15px] border mb-6 border-[#CBD5E0]">

                <div class=" w-full flex items-center">
                    <label class="inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer">
                        <div
                            class="relative w-9 h-5  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer bg-gray peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                        </div>
                        <span class="ms-3 text-text-gr-700 ">Remember me</span>
                    </label>
                </div>
                <button class="submet w-full flex appearance-none text-center items-center justify-center select-none align-middle leading-[1.2] rounded-[15px] font-semibold h-[45px] min-w-[2.5rem] text-[10px] px-4 bg-teall my-5 text-white">SIGN IN</button>
                <div class=" flex flex-col text-center items-center justify-center max-w-full ">
                    <p class=" text-text font-medium">Don't have an account?<span class=" transition-all duration-150 ease-out cursor-pointer text-teall ms-[5px] font-bold">Sign Up</span></p>
                </div>
            </form>
        </section>
    </div>
</template>



<style scoped>
.email {
    outline: transparent solid 2px;
    outline-offset: 2px;
    appearance: none;
}

.email:focus {
    z-index: 1;
    border-color: rgb(49, 130, 206);
    box-shadow: rgb(49, 130, 206) 0px 0px 0px 1px;
}

.submet {
    position: relative;
    white-space: nowrap;
    outline: transparent solid 2px;
    outline-offset: 2px;
}

.form-wrapper {
    container-name: sign;
    container-type: inline-size;
}

@container sign (min-width:927px) {
    .sign-in-wrapper {
        padding-inline: 15rem;
    }
}

@container sign (min-width:959px) {
    .sign-in-wrapper {
        padding-inline: 30rem;
    }
}
</style>