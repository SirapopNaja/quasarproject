<!----------Make By YourName---------------->

<template>
<div class="grid-container">
<div style="padding:5%;" class="item1" >

    <div class="row">
    <div class="col-3"></div>
    <div class="col-3"></div>
    </div><br>
    <div style="">Register</div><br>
    <form @submit.prevent="()=>{}">


        <q-input bg-color="white"  type="name" required square outlined label="ชื่อ" /><br>
        <q-input bg-color="white"  type="password" required square outlined label="รหัสผ่าน" /><br>
        <q-input bg-color="white"  required square outlined label="อีเมลล์" /><br>
        <q-btn  type="submit" style="width:100%;" color="primary" label="ยืนยัน" />
    </form>
<br>


</div>
</div>
</template>
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto ;
  grid-gap: 10px;
  background-color: rgb(33, 100, 243);
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.89);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.item1 {
  grid-column: 1 / 1;
}
</style>



<script>
import { get,sync,call } from "vuex-pathify";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
  /*-------------------------Set Component---------------------------------------*/
props:{

},
    /*-------------------------DataVarible---------------------------------------*/
    data() {
    return {

        };
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
     async mounted() {
    /**** Call loading methods*/
            this.load();
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
     async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed:{
        
},
    /*-------------------------Methods------------------------------------------*/
methods:{
    
    /******* Methods default run ******/
     
    load:async function(){
}
},
    }
</script>