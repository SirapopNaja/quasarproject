<template>
  <div class="grid-container">
  <div style="padding:5%;" class="item1"  >
  <div class="q-pa-md">
   <div class="row">
    <div class="col-3"></div>
    <div class="col-3"></div>
    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />

    <q-btn color="primary" label="จองคิว" @click="trigger" /><br>
    <q-btn color="primary" label="ดูลำดับคิว" @click="trigger" /><br>
    <q-btn color="primary" label="ตารางคิว" @click="trigger" /><br>
   </div>  
  </div>
  </div>
  </div>
</template>
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto;
  grid-gap: 10px;
  background-color: rgb(33, 142, 243);
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.item1 {
  grid-column: 1 / 1;
}
</style>


<script>
export default {
  methods: {
    // we manually trigger it (this is not needed if we
    // don't skip Ajax calls hijacking)
    trigger () {
      const bar = this.$refs.bar

      bar.start()

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, Math.random() * 3000 + 1000)
    }
  }
}
</script>