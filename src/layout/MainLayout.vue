<template>
  <the-sidebar></the-sidebar>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <app-alert></app-alert>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import AppAlert from '@/components/ui/AppAlert';

export default {
  components: { TheNavbar, AppAlert, TheSidebar },
};
</script>
