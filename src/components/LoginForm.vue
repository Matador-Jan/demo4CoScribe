<script setup lang="ts">
import { ref, reactive } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import { useRouter } from 'vue-router'
import { login } from '../utils/axios/api.js'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
const toast = useToast()

const router = useRouter()

const user = reactive({
  username: '',
  password: '',
})

const onLogin = async () => {
  console.log(user)
  const { username, password } = user
  const response = await login({ username, password })
  const success = response.code === 0 ? true : false
  toast.add({
    severity: success ? 'success' : 'error',
    summary: '登录' + (success ? '成功' : '失败'),
    detail: response.msg,
    group: 'tc',
    life: 3000,
  })

  // if (result?.code === 0) {
  // localStorage.setItem('token', result.data.accessToken)
  // localStorage.setItem('isAuthenticated', 'Yes')
  // router.push('/')
  // }
}
</script>

<template>
  <Toast position="top-center" group="tc" />
  <main class="main max-w-md mx-auto py-16">
    <div class="login-form flex flex-col justify-center gap-4">
      <!-- <h1 class="text-center font-semibold font-14 text-xl py-6">
        YoYo 运营管理后台
      </h1> -->
      <InputText type="text" placeholder="账号" v-model="user.username" />
      <InputText type="password" placeholder="密码" v-model="user.password" />
      <Divider />
      <Button @click="onLogin">登录</Button>
    </div>
  </main>
</template>
