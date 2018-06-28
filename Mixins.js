// define a mixin object
var myMixin = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    }
}

// define a component that uses this mixin
var Component = Vue.extend({
    mixins: [myMixin]
})
var component = new Component() // => "hello from mixin!"


var mixin = {
    data: function () {
        return {
            message: 'hello',
            foo: 'abc'
        }
    }
}
  
  new Vue({
    mixins: [mixin],
    data: function () {
        return {
            message: 'goodbye',
            bar: 'def'
        }
    },
    created: function () {
        console.log(this.$data)
        // => { message: "goodbye", foo: "abc", bar: "def" }
    }
})

//Hook functions with the same name are merged into an array 
//so that all of them will be called. 
var mixin = {
    created: function () {
        console.log('mixin hook called')
    }
}
new Vue({
    mixins: [mixin],
    created: function () {
        console.log('component hook called')
    }
})
// => "mixin hook called"
// => "component hook called"

//Options that expect object values, for example methods, components and directives, 
//will be merged into the same object. 
//The component’s options will take priority 
//when there are conflicting keys in these objects:
var mixin = {
    methods: {
        foo: function () {
            console.log('foo')
        },
        conflicting: function () {
            console.log('from mixin')
        }
    }
}
var vm = new Vue({
    mixins: [mixin],
    methods: {
        bar: function () {
            console.log('bar')
        },
        conflicting: function () {
            console.log('from self')
        }
    }
})
vm.foo() // => "foo"
vm.bar() // => "bar"
vm.conflicting() // => "from self"
  
// inject a handler for `myOption` custom option
Vue.mixin({
    created: function () {
        var myOption = this.$options.myOption
        if (myOption) {
            console.log(myOption)
        }
    }
})
new Vue({
    myOption: 'hello!'
})
// => "hello!"

Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
    // return mergedVal
}
var strategies = Vue.config.optionMergeStrategies
strategies.myOption = strategies.methods

const merge = Vue.config.optionMergeStrategies.computed
Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
    if (!toVal) return fromVal
    if (!fromVal) return toVal
    return {
        getters: merge(toVal.getters, fromVal.getters),
        state: merge(toVal.state, fromVal.state),
        actions: merge(toVal.actions, fromVal.actions)
    }
}
