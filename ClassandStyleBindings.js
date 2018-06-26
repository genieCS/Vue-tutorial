data: {
    isActive: true,
    hasError: false
}

data: {
    classObject: {
        active: true,
        'text-danger': false
    }
}

data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
            }
        }   
    }
}

data: {
    activeClass: 'active',
    errorClass: 'text-danger'
}

Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
})

data: {
    activeColor: 'red',
    fontSize: 30
}

data: {
    styleObject: {
        color: 'red',
        fontSize: '13px'
    }
}



