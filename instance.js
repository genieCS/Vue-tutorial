//If you know you’ll need a property later, 
//but it starts out empty or non-existent, 
//you’ll need to set some initial value.
data: {
    newTodoText: '',
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null
  }

var obj = {
    foo: 'bar'
  }
  
  Object.freeze(obj)
  
  new Vue({
    el: '#app',
    data: obj
  })

  var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
  // This callback will be called when `vm.a` changes
})

new Vue({
    data: {
      a: 1
    },
    created: function () {
      // `this` points to the vm instance
      console.log('a is: ' + this.a)
    }
  })

  //Don’t use arrow functions on an options property or callback
  //Since arrow functions are bound to the parent context,
  //this will not be the Vue instance as you’d expect