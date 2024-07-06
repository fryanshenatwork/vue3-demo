<script setup>
import {
  CreditCardOutlined,
  TransactionOutlined,
  InsuranceOutlined,
  MoneyCollectOutlined
} from '@ant-design/icons-vue'
import randomNumber from '@/utils/randomNumber'

const cardStyle = 'card basis-1/5 py-5'
const iconStyle = 'block text-[5em] text-fuchsia-700 pt-2 pb-3'
const spanInfoStyle = 'block text-center'
const spanAmountStyle = 'text-[2em] block text-center font-extrabold'

const randomNumberGenerator = () => {
  return randomNumber().toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
}
const randNumber = [
  randomNumberGenerator(),
  randomNumberGenerator(),
  randomNumberGenerator(),
  randomNumberGenerator()
]
</script>

<template>
  <div class="flex w-full gap-2">
    <div :class="cardStyle">
      <span :class="spanAmountStyle">${{randNumber[0]}}</span>
      <CreditCardOutlined :class="iconStyle" />
      <span :class="spanInfoStyle">Shopping Debit and Debit Card</span>
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
    <div :class="cardStyle + ' basis-2/5 bg-fuchsia-700'">
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