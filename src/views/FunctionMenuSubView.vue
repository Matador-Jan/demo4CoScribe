<script setup lang="ts">
import Divider from 'primevue/divider'
import CommunityIcon from '../components/icons/IconCommunity.vue'
</script>

<template>
  <Divider layout="horizontal" class="flex md:hidden" align="center"
    >系统功能</Divider
  >
  <div class="grid grid-cols-3 gap-2">
    <div class="card border shadow-sm rounded-md p-2" v-for="i in 8" :key="i">
      <div class="flex justify-center items-center m-3">
        <CommunityIcon />
      </div>
      <p class="m-0 text-center text-sm font-sans font-light">钻石转赠</p>
    </div>
  </div>
</template>
