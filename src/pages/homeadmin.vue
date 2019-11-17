<!----------Make By YourName---------------->
 <template>
<div>
    <formlogin/>
    
</div>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify"; 
    import formhomeadmin from "../components/homeadmin";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        formhomeadmin
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