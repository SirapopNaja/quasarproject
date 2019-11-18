import axios from '../axios'
import {make} from 'vuex-pathify'

const state ={
    
};

const mutations = make.mutations(state);

const actions ={
    async user_register(context,params){
        console.log(params);
        let register = await axios.post('/api/register',params)
        .then(r=>{
            return true
        })
        .catch(e =>{
            return false
        }) 
        return register;
    },
};

export default{
    namespaced: true,
    state,
    mutations,
    actions,
}