<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
import {
  CreditCardOutlined,
  TransactionOutlined,
  InsuranceOutlined,
  MoneyCollectOutlined
} from '@ant-design/icons-vue'
import randomNumber from '@/utils/randomNumber'

const cardStyle = 'card hover:bg-fuchsia-100 transition'
const iconStyle = 'block text-[5em] text-fuchsia-700 pt-2 pb-3'
const spanInfoStyle = 'block text-center text-xs font-bold'
const spanAmountStyle = 'text-[2em] block text-center font-extrabold'

const randomNumberGenerator = () => {
  return randomNumber().toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
}

const randNumber = ref([0, 0, 0, 0])
const generateRandomNumber = () => {
  randNumber.value = [
    randomNumberGenerator(),
    randomNumberGenerator(),
    randomNumberGenerator(),
    randomNumberGenerator()
  ]
}
const timerRef = ref(null)

onMounted(() => {
  generateRandomNumber()
  timerRef.value = setInterval(() => {
    generateRandomNumber()
  }, 3000);
})

onBeforeUnmount(() => {
  if (timerRef) {
    clearInterval(timerRef.value)
  }
})

</script>

<template>
  <div class="grid w-full gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
    <div :class="cardStyle">
      <span :class="spanAmountStyle">${{randNumber[0]}}</span>
      <CreditCardOutlined :class="iconStyle" />
      <span :class="spanInfoStyle">Shopping Debit</span>
    </div>
    <div :class="cardStyle">
      <span :class="spanAmountStyle">${{randNumber[1]}}</span>
      <TransactionOutlined :class="iconStyle" />
      <span :class="spanInfoStyle">Transfer Other Country</span>
    </div>
    <div :class="cardStyle">
      <span :class="spanAmountStyle">${{randNumber[2]}}</span>
      <InsuranceOutlined :class="iconStyle" />
      <span :class="spanInfoStyle">Investment & Insurance</span>
    </div>
    <div :class="cardStyle + ' lg:col-span-2 bg-fuchsia-700 hover:bg-fuchsia-600 transition'">
      <div class="flex h-full justify-center items-center gap-10">
        <div>
          <MoneyCollectOutlined :class="iconStyle + ' text-white'" />
          <span :class="spanInfoStyle + ' text-white'">Credit Limit</span>
        </div>
        <span :class="spanAmountStyle + ' text-white'">${{randNumber[3]}}</span>
      </div>
    </div>
  </div>
</template>