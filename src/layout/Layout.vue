<script lang="ts" setup>
import { Layout } from 'ant-design-vue'
import Sidebar from './Sidebar.vue'

</script>

<template>
  <Layout class="min-h-full bg-[#edf7ff]">
    <Sidebar />
    <Layout.Content class="pl-0 pr-2 h-full min-h-full">
      <RouterView />
    </Layout.Content>
  </Layout>
</template>