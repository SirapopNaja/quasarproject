
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
        <q-route-tab to="/homeadmin" label="ตารางคิว" />
        <q-route-tab to="/petitionQueue" label="คำร้อง" />
        <q-route-tab to="/listpetion" label="คิวที่จอง" />
      </q-tabs>
    </q-header><br><br><br><br><br><br>
    <div class="q-pa-md" style="max-width: 350px">
    <q-list dense bordered padding class="rounded-borders">
      <q-item clickable v-ripple>
        <q-item-section>
          AB011
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
           AB018
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
           AB019
        </q-item-section>
      </q-item>
    </q-list>
    <q-btn color="primary" label="+ให้บัตรคิว" />
  </div><br>
     <div class="q-pa-md" style="max-width: 300px">
    <q-input
      ref="input"
      filled
      v-model="model"
      label="กรอกเลข"
      :rules="[val => !!val || 'Field is required']"
    />

    <q-btn class="q-mt-sm" label="check in" @click="reset" color="primary"/>
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