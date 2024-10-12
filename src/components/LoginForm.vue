<script setup lang="ts">
import { ref, reactive } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

const user = reactive({
  account: '',
  password: '',
})

const onLogin = () => {
  console.log(user)
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

<style scoped></style>
