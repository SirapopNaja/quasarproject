
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
     <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">name1</div>
        <div class="text-subtitle2">เวลา 15.00</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat>ยกเลิก</q-btn>
      </q-card-actions>
    </q-card>
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
