var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})

new Vue({
    el: '#v-for-object',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
})

//Mutation methods
//push, pop, shift, unshift, splice, sort, reverse

//Caveats
var vm = new Vue({
    data: {
      items: ['a', 'b', 'c']
    }
  })
Vue.set(vm.items, indexOfItem, newValue)
vm.$set(vm.items, indexOfItem, newValue)
vm.items.splice(indexOfItem, 1, newValue)
vm.items.splice(newLength)

var vm = new Vue({
    data: {
        userProfile: {
        name: 'Anika'
      }
    }
})
Vue.set(vm.userProfile, 'age', 27)
vm.$set(vm.userProfile, 'age', 27)

//instead of 
Object.assign(vm.userProfile, {
    age: 27,
    favoriteColor: 'Vue Green'
})
//use
vm.userProfile = Object.assign({}, vm.userProfile, {
    age: 27,
    favoriteColor: 'Vue Green'
})

data: {
    numbers: [ 1, 2, 3, 4, 5 ]
},
computed: {
    evenNumbers: function () {
        return this.numbers.filter(function (number) {
            return number % 2 === 0
        })
    }
}

data: {
    numbers: [ 1, 2, 3, 4, 5 ]
},
methods: {
    even: function (numbers) {
        return numbers.filter(function (number) {
            return number % 2 === 0
      })
    }
}

Vue.component('todo-item', {
    template: '\
        <li>\
            {{ title }}\
            <button v-on:click="$emit(\'remove\')">Remove</button>\
        </li>\
        ',
    props: ['title']
})
  
new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})

