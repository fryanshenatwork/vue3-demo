<script lang="ts" setup>
import { defineProps, ref, computed } from 'vue'
import { Select } from 'ant-design-vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import randomNumber from '@/utils/randomNumber'
import dayjs from 'dayjs'

const dataSet = ref(30)

const today = dayjs()
const chartData = computed(() => ({
  labels: Array(dataSet.value).fill('').map((e, ei) => {
    const stamp = today.clone().subtract((dataSet.value - 1) - ei, 'days')
    return stamp.format('MM / DD')
  }),
  datasets: [
    {
      label: 'Balance',
      backgroundColor: 'rgba(162, 28, 175, .8)',
      borderColor: 'rgba(162, 28, 175, .1)',
      data: Array(dataSet.value).fill(0).map(e => (randomNumber())),
      tension: 0.4
    }
  ]
}))

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'x',
    intersect: false,
  },
  plugins: {
    legend: {
      display: false
    },
  },
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

defineProps<{className: string}>()
</script>


<template>
  <div :class="className + ' card h-[450px] flex flex-col'">
    <div class="flex items-center justify-between pt-2 pb-3">
      <h2 class="text-xl font-semibold">Past {{ dataSet }} Days Balance Summary Chart</h2>
      <Select
        :options="[
          {label: 5, value: 5},
          {label: 10, value: 10},
          {label: 15, value: 15},
          {label: 20, value: 20},
          {label: 25, value: 25},
          {label: 30, value: 30},
        ]"
        v-model:value="dataSet"
      />
    </div>
    <div class="h-full">
      <Line :data="chartData" :options="options" />
    </div>
  </div>
</template>