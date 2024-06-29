<script setup>
// import { Bar } from 'vue-chartjs'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
    labels: ['', '', '','','','','','',''],
    datasets: [{ data: [0, 100, 200, 300, 400, 500] }]
};

const chartOptions = {
    responsive: true,
    // scales: {
    //     x: {
    //         grid: {
    //           offset: false
    //         }
    //     },
    //     y: {
    //         grid: {
    //             offset: false
    //         }
    //     }
    // }

    plugins: {
        legend: {
            display: false
        }
    }
}
</script>

<template>
    <div class="">
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
</template>



<style scoped>

</style>