props: ['title', 'likes', 'isPublished', 'commentIds', 'author']

props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object
}


post: {post: {
    id:   id: 11,
    title:   title: 'My Journey with Vue'
  }
}

props: ['initialCounter'],
data: function () {
  return {
    counter: this.initialCounter
  }
}

Vue.component('my-component', {
    props: {
        // Basic type check (`null` matches any type)
        propA: Number,
        // Multiple possible types
        propB: [String, Number],
        // Required string
        propC: {
            type: String,
            required: true
        },
        // Number with a default value
        propD: {
            type: Number,
            default: 100
        },
        // Object with a default value
        propE: {
            type: Object,
            // Object or array defaults must be returned from
            // a factory function
            default: function () {
            return { message: 'hello' }
            }
        },
        // Custom validator function
        propF: {
            validator: function (value) {
            // The value must match one of these strings
            return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
        }
    }
})

function Person (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Vue.component('blog-post', {
    props: {
        author: Person
    }
})

Vue.component('my-component', {
    inheritAttrs: false,
    // ...
})

Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    template: `
        <label>
            {{ label }}
            <input
            v-bind="$attrs"
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
            >
        </label>
    `
})


