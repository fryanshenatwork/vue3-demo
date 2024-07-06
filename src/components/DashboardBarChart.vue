<script lang="ts" setup>
import { defineProps, ref, onBeforeMount, onBeforeUnmount, computed } from 'vue'
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
import dayjs from 'dayjs'
import randomNumber from '@/utils/randomNumber'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const dataSet = ref<number[]>([])

const today = dayjs()
const data = computed(() => ({
  labels: Array(12).fill('').map((_, ei) => {
    const date = today.clone().subtract((11 - ei), 'month')
    return date.format('MM.YY')
  }),
  datasets: [
    {
      label: 'Balance',
      data: dataSet.value,
      borderRadius: 10,
      borderSkipped: false,
      borderColor: 'rgba(162, 28, 175, .5)',
      borderWidth: 2,
      backgroundColor: 'rgba(162, 28, 175, .3)',
    }
  ],
  borderColor: 'red'
}))

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {display:false}
    },
    y: {
      grid:{display:true}
    }
  },
  plugins: {
    legend: { display: false },
  }
}

const timerRef = ref<null | NodeJS.Timeout>(null)

const updateDataSet = () => {
  dataSet.value = Array(12).fill(0).map(_ => randomNumber())
}

onBeforeMount(() => {
  updateDataSet()
  timerRef.value = setInterval(updateDataSet, 3000)
})

onBeforeUnmount(() => {
  if (timerRef.value) {
    clearInterval(timerRef.value)
  }
})

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