<script setup lang="ts">
import { Input, Button } from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { ref, reactive } from 'vue';

interface ILoginInfo {
  username: string
  password: string
}

const loginInfo: ILoginInfo = reactive({
  username: '',
  password: ''
})

const timer = ref<NodeJS.Timeout | null>(null)
const submitting = ref<boolean>(false)

const onFormSubmit = () => {
  if (submitting.value) { return }

  submitting.value = true
  timer.value = setTimeout(() => {
    submitting.value = false
  }, 5000)
  console.log(loginInfo)
}

</script>

<template>
  <div class="bg-white px-5 py-5 rounded-md">
    <form @submit.prevent="onFormSubmit">
      <h1 class="text-xl block w-full text-center pb-5 pt-3 font-extrabold">Login</h1>
      <div class="py-1">
        <label for="username" class="text-sm">Username</label>
        <Input
          type="text"
          name="username"
          aria-label="username"
          placeholder="Username"
          v-model:value="loginInfo.username"
          :disabled="submitting"
        >
          <template #prefix>
            <UserOutlined class="pr-2 mr-1 border-r-[1px]" />
          </template>
        </Input>
      </div>
      <div class="py-1">
        <label for="password" class="text-sm">Password</label>
        <Input
          type="password"
          name="password"
          aria-label="password"
          placeholder="Password"
          v-model:value="loginInfo.password"
          :disabled="submitting"
        >
          <template v-slot:prefix>
            <LockOutlined class="pr-2 mr-1 border-r-[1px]"/>
          </template>
        </Input>
      </div>
      <div class="block text-right py-1">
        <RouterLink
          to="/"
          class="text-xs text-blue-600 hover:text-blue-800"
        >
          Forget Password?
        </RouterLink>
      </div>
      <div class="py-1">
        <Button
          type="primary"
          class="w-full"
          html-type="submit"
          :loading="submitting"
          :disabled="submitting"
        >
          {{ submitting ? 'Submitting' : 'Login' }}
        </Button>
      </div>
    </form>
  </div>
</template>