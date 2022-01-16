import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from "./store"
import routes from './routes'


Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes
})

router.beforeEach((to, from, next) =>
{
  if (to.name !== 'Login' && !store.state.auth.authed) next({ name: 'Login' })
  else next()
})


new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

