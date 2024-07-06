<script lang="ts" setup>
import { defineProps } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  datasets: [
    {
      label: 'Balance',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
      borderRadius: 10,
      borderSkipped: false,
      borderColor: 'rgba(162, 28, 175, .5)',
      borderWidth: 2,
      backgroundColor: 'rgba(162, 28, 175, .3)',
    }
  ],
  borderColor: 'red'
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {display:false}
    },
    y: {
      grid:{display:false}
    }
  },
  plugins: {
    legend: { display: false },
  }
}


defineProps<{className: string}>()
</script>

<template>
  <div :class="className + ' card h-[300px] flex flex-col'">
    <div class="flex items-center justify-between pt-2 pb-3">
      <h2 class="text-xl font-semibold">Past 12 Month Balance Summary</h2>
    </div>
    <div class="h-full">
      <Bar :data="data" :options="options" />
    </div>
  </div>
</template>