import Vuex from "vuex"
import Vue from "vue"
import auth from "./modules/auth"
import data from "./modules/data"

// load Vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
    modules: {
        auth,
        data
    }
});