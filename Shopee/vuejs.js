var app = new Vue({
    el: '#app',
    data: {
     tabSelector : 'login'
    },
    methods: {
      changeTabs(tab){
        this.tabSelector =tab
      }
    }

  })