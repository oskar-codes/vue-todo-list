let app = new Vue({
  el: '#app',
  data: {
    todoList: [
      "El 1",
      "El 2",
      "El 3"
    ]
  },
  methods: {
    create: function() {
      let text = document.querySelector("input").value;
      if (text.trim()) {
        app.todoList.push(text);
      }
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