<script setup lang="ts">
import { ref, reactive } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import { useRouter } from 'vue-router'
import { login } from '../utils/axios/api.js'

const router = useRouter()

const user = reactive({
  account: '',
  password: '',
})

const onLogin = async () => {
  console.log(user)
  const { account, password } = user
  const result = await login({ username: account, password })
  console.log('result:', result)

  // if (account == 'test' && password == 'test1234') {
  //   localStorage.setItem('isAuthenticated', 'Yes')
  //   router.push('/')
  // }
}
</script>

<template>
  <main class="main max-w-md mx-auto">
    <div class="login-form flex flex-col justify-center gap-4">
      <h1 class="text-center font-semibold font-14 text-xl py-6">
        YoYo 运营管理后台
      </h1>
      <InputText type="text" placeholder="账号" v-model="user.account" />
      <InputText type="password" placeholder="密码" v-model="user.password" />
      <Divider />
      <Button @click="onLogin">登录</Button>
    </div>
  </main>
</template>
