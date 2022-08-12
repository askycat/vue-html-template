components.forEach(v => {
    httpVueLoader.register(Vue, "./components/" + v);
})


var routes = [];
views.forEach(v => {
    routes.push({
        path: v.path,
        component: httpVueLoader("./views/" + v.view)
    })
})

const router = new VueRouter({
    mode: "hash",
    routes
})

var app = new Vue({
    router,
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            dark: false
        }
    })
})