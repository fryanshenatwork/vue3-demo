<script setup lang="ts">
import { useStore } from 'vuex'
import DashboardCards from '@/components/DashboardCards.vue'
import DashboardChart from '@/components/DashboardChart.vue'
import DashboardBarChart from '@/components/DashboardBarChart.vue'
const store = useStore()
</script>

<template>
  <div class="">
    <span class="text-[2.3em] block pt-[2em] pb-2">Welcome back, {{  store.state.auth.username }}!</span>
    <DashboardCards />
    <DashboardChart className="mt-2" />
    <DashboardBarChart className="mt-2 mb-2"/>
  </div>
</template>