
<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          ตางรางคิว
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/homeuser" label="ตารางคิว" />
        <q-route-tab to="/Requestnumber" label="จองคิว" />
        <q-route-tab to="/Queueuser" label="ข้อมูลคิว" />
      </q-tabs>
    </q-header><br><br><br><br><br><br>
    <div class="q-pa-md">
      <div class="q-pa-md">
    <div class="q-mb-sm">
      <q-badge color="teal">
        เวลา: {{ time }}
      </q-badge>
    </div>

    <q-btn icon="access_time" round color="primary">
      <q-popup-proxy @before-show="updateProxy" transition-show="scale" transition-hide="scale">
        <q-time v-model="proxyTime">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn label="Cancel" color="primary" flat v-close-popup />
            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
          </div>
        </q-time>
      </q-popup-proxy>
    </q-btn>
  </div>

      <q-input v-model="date" filled type="date" hint="วันที่" /><br>
       <q-btn color="primary" label="Submit" />
    </div>
 

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
