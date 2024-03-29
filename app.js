let app = new Vue({
  el: '#app',
  data: {
    todoList: [
      "Example 1",
      "Example 2",
      "Example 3"
    ]
  },
  methods: {
    create: function() {
      let input = document.querySelector("textarea");
      const text = input.value;
      if (text.trim()) {
        app.todoList.push(text);
      }
      input.value = "";
    },
    remove: function(i) {
      app.todoList.splice(i,1);
    }
  },
  mounted() {
    if (localStorage.list === "") {
      this.todoList = [];
    } else if (localStorage.list !== undefined) {
      this.todoList = localStorage.list.split(";");
    } else {
      localStorage.list = this.todoList.join(";")
    }
  },
  watch: {
    todoList(newVal) {
      localStorage.list = newVal.join(";");
    }
  }
});
