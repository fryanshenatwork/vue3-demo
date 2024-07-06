<script setup lang="ts">
import { reactive, onBeforeMount, ref } from 'vue'
import dayjs from 'dayjs'
import { RangePicker, Button, Table } from 'ant-design-vue'
import type { Dayjs, ManipulateType } from 'dayjs'
import fetchHistory from '@/api/history'

const dateFormat = 'YYYY/MM/DD'

const today = dayjs()
const dateRange = reactive<[Dayjs, Dayjs]>([
  today.clone().subtract(1, 'week'),
  today.clone(),
]);

const fetching = ref(true)
const dataList = ref([])
const fetchData = async () => {
  fetching.value = true
  dataList.value = []
  const data = await fetchHistory()
    .then(ea => ea.users.map(e => ({
      id: e.id,
      image: e.image,
      name: e.lastName + ' ' + e.firstName,
      cardNumber: e?.bank?.cardNumber,
      amount: e.weight,
      currency: e?.bank?.currency
    })))
  dataList.value = data
  fetching.value = false
}

onBeforeMount(() => {
  fetchData()
})

const quickActionButton = (count: number, unit: ManipulateType) => {
  dateRange[0] = today.clone().subtract(count, unit)
  dateRange[1] = today.clone()

  fetchData()
}

const columns =  [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
  },
  {
    title: 'Bank Number',
    dataIndex: 'cardNumber',
    key: 'cardNumber',
  },
]
</script>

<template>
  <div class="my-2 h-full">
    <span class="text-[2.3em] block pb-2">Transcation History</span>
    <div class="card h-auto mb-2">
      <div class="flex justify-between">
        <div>
          <span>Range of Data: </span>
          <RangePicker
            v-model:value="dateRange"
            :format="dateFormat"
            :disabled="fetching"
            @change.lazy="fetchData"
          />
        </div>
        <div class="flex w-auto gap-1">
          <Button type="default" @click="quickActionButton(1, 'week')" :disabled="fetching">1 Week</Button>
          <Button type="default" @click="quickActionButton(1, 'months')" :disabled="fetching">1 Month</Button>
          <Button type="default" @click="quickActionButton(6, 'months')" :disabled="fetching">6 Month</Button>
          <Button type="default" @click="quickActionButton(1, 'year')" :disabled="fetching">1 Year</Button>
        </div>
      </div>
    </div>

    <div class="card h-auto">
      <Table :data-source="dataList" :columns="columns">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <div class="flex flex-row justify-start items-center gap-5">
              <img :src="record?.image" class="w-[2.5em] h-[2.5em] rounded-full">
              <span>{{ record?.name }}</span>
            </div>
          </template>
          <template v-else>
            {{ record?.[column?.key as string] }}
          </template>
        </template>
      </Table>

    </div>


  </div>
</template>