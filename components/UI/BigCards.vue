<script setup>
import { Icon } from "@iconify/vue";

</script>

<template>
    <div class="big-card-wrapper px-[30px]">
        <div class="container-wrapper">
            <div class="big-card bg-white w-full p-5 font-roboto rounded-[15px] flex flex-col">
                <div class="big-card-text">
                    <div>
                        <div class=" mb-4">
                            <p class=" text-text font-bold text-[.895rem]">Built by Developers</p>
                            <p class=" text-text-gr-700 font-bold text-lg">Purity UI Dashboard</p>
                        </div>
                        <p class=" text-text text-sm">
                            From colors, cards, typography to complex elements, you will find the full documentation.
                        </p>
                    </div>
                    <div class="read text-text-gr-700 my-[24px]">
                        <p class=" flex items-center gap-2 font-bold">Read more <span>
                                <Icon icon="ion:arrow-forward" />
                            </span></p>
                    </div>
                </div>
                <div class="chakra bg-teall min-h-[250px] rounded-[15px] grid place-items-center mt-4">
                    <img src="/assets/svg/logo-white.svg" alt="">
                </div>
            </div>
            <div class="bg-white p-[20px] w-full  rounded-[15px] font-roboto">
                <div class="img-card w-full min-h-[200px]">
                    <div class="img-card__containt ">
                        <div>
                            <h3 class=" text-white font-bold text-[20px]">Working with the rockets</h3>
                            <p class=" text-white ">Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the
                                opportunity first.</p>
                        </div>
                        <div class="text-white my-[24px]">
                            <p class=" flex items-center gap-2 font-bold">Read more <span>
                                    <Icon icon="ion:arrow-forward" />
                                </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* .big-card {
    outline: 1px solid red;
} */

.img-card {
    padding: 0px;
    background-image: url("/assets/people-image.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 15px;

    .img-card__containt {
        background: linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%);
        width: 100%;
        position: absolute;
        height: 100%;
        border-radius: inherit;
        padding: 1.5rem 1.2rem 0.3rem;
    }
}

.big-card-wrapper {
    container-name: bigCard;
    container-type: inline-size;
}

@container bigCard (min-width: 960px) {
    .container-wrapper  {
        display: grid;
        gap: 14px;
        grid-template-rows: 1fr;
        grid-template-columns: 1.8fr 1.2fr;

        .big-card {
            display: flex;
            flex-direction: row;
            justify-content: space-between ;
            /* align-items: center; */

            padding-block: 10px;
            .big-card-text {
                max-width: 50%;
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: space-between;
            }

            .chakra {
                width: 45%;
                
            }
        }

        .img-card {
            min-height: 250px;
            .img-card__containt {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }
    }
}
</style>