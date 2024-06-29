<script setup>

</script>

<template>
    <div class="chart-wrapper p-[30px] font-roboto w-full">
        <div class="chart-container  rounded-[15px]">
            <div class="first-chart flex flex-col gap-6 bg-white rounded-[15px] py-[1rem] px-[22px]">
                <div class=" border border-black rounded-[15px] w-full min-w-[0px]">
                    <ChartsTheBarChart />
                </div>
                <div>
                    <p class=" text-text-gr-700 font-bold text-lg">Active Users</p>
                    <p class=" text-teall font-bold text-lg">+23% <span class=" text-text">than last week</span></p>
                </div>
                <div class=" progres-bar">
                    <div class=" flex flex-col ">
                        <div class=" flex items-center gap-2">
                            <div class=" size-[30px] rounded-[12px] bg-teall"></div>
                            <p class=" text-text font-bold ">Users</p>
                        </div>
                        <p class=" text-text-gr-700 font-bold text-lg">32,984</p>
                        <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                            <div class="bg-teall h-1.5 rounded-full dark:bg-teall" style="width: 45%"></div>
                        </div>
                    </div>
                    <div class=" flex flex-col ">
                        <div class=" flex items-center gap-2">
                            <div class=" size-[30px] rounded-[12px] bg-teall"></div>
                            <p class=" text-text font-bold ">Users</p>
                        </div>
                        <p class=" text-text-gr-700 font-bold text-lg">32,984</p>
                        <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                            <div class="bg-teall h-1.5 rounded-full dark:bg-teall" style="width: 45%"></div>
                        </div>
                    </div>
                    <div class=" flex flex-col ">
                        <div class=" flex items-center gap-2">
                            <div class=" size-[30px] rounded-[12px] bg-teall"></div>
                            <p class=" text-text font-bold ">Users</p>
                        </div>
                        <p class=" text-text-gr-700 font-bold text-lg">32,984</p>
                        <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                            <div class="bg-teall h-1.5 rounded-full dark:bg-teall" style="width: 45%"></div>
                        </div>
                    </div>
                    <div class=" flex flex-col ">
                        <div class=" flex items-center gap-2">
                            <div class=" size-[30px] rounded-[12px] bg-teall"></div>
                            <p class=" text-text font-bold">Users</p>
                        </div>
                        <p class=" text-text-gr-700 font-bold text-lg">32,984</p>
                        <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                            <div class="bg-teall h-1.5 rounded-full dark:bg-teall" style="width: 45%"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="second-chart w-full rounded-[15px] bg-white ">
                <div class=" py-[1rem] px-[22px] space-y-12 ">
                    <div>
                        <p class=" text-text-gr-700 font-bold text-lg">Sales Overview</p>
                        <p class=" text-teall font-bold">5%more <span class=" text-text">in 2021</span></p>
                    </div>
                    <div class=" border border-black rounded-[15px] w-full min-w-[0px] min-h-full">
                        <ChartsTheLineChart />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>



<style scoped>
.chart-container {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr;
    gap: 14px;
    /* padding: 1rem 22px; */
}

.progres-bar {
    display: grid;
    grid-template-columns: repeat(4, minmax(0px, 1fr));
    gap: 12px;
}

.chart-wrapper {
    container-name: chart;
    container-type: inline-size; 
}

@container chart (min-width: 960px) {
    .chart-container {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1.3fr 1.7fr;
        margin-bottom: 26px;


        .first-chart {
            grid-column: 1/2;

        }

        .second-chart {
            grid-column: 2/3;
        }
    }
}
</style>