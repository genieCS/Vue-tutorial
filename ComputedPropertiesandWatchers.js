//computed properties are cached based on their dependencies.
var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    }
})

//a method invocation will always run the function whenever a re-render happens.
var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    methods: {
        reverseMessage: function () {
          return this.message.split('').reverse().join('')
        }
    }
  })

//the following computed property will never update, 
//because Date.now() is not a reactive dependency
computed: {
    now: function () {
        return Date.now()
    }
}

var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
})

var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})

//Computed properties are by default getter-only, but you can also provide a setter when you need it:
// ...
computed: {
    fullName: {
        // getter
        get: function () {
            return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
        }
    }
  }
  // ...
  
  