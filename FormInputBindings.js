//v-model will ignore the initial value, checked or selected attributes found on any form elements.
//You should declare the initial value on the JavaScript side, inside the data option of your component.

//Interpolation on textareas (<textarea>{{text}}</textarea>) won't work. Use v-model instead.

new Vue({
    el: '#example-3',
    data: {
        checkedNames: []
    }
})

new Vue({
    el: '...',
    data: {
        selected: ''
    }
})

new Vue({
    el: '...',
    data: {
        selected: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
      ]
    }
})

// when checked:
vm.toggle === 'yes'
// when unchecked:
vm.toggle === 'no'

// when checked:
vm.pick === vm.a

// when selected:
typeof vm.selected // => 'object'
vm.selected.number // => 123

