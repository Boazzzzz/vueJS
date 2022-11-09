const app = Vue.createApp({
  data() {
    return { 
      enteredItem: '',
      lists: []
     };
  },
  methods: {
    addItem() {
      this.lists.push(this.enteredItem);
    },
    removeItem(idx) {
      this.lists.splice(idx, 1);
    },
  }
});

app.mount('#shopping-list');