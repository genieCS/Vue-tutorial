// Define a new component called button-counter
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({ el: '#components-demo' })

//each time you use a component, a new instance of it is created.

//a component’s data option must be a function

Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})

new Vue({
    el: '#blog-post-demo',
    data: {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
})

//every component must have a single root element.
Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <div v-html="post.content"></div>
      </div>
    `
  })


Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <button v-on:click="$emit('enlarge-text')">
                Enlarge text
            </button>
            <div v-html="post.content"></div>
        </div>
    `
})

Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <button v-on:enlarge-text="onEnlargeText">
                Enlarge text
            </button>
            <div v-html="post.content"></div>
        </div>
    `,
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize += enlargeAmount
        }
    }
})

new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [/* ... */],
        postFontSize: 1
    }
})

Vue.component('custom-input', {
    props: ['value'],
    template: `
        <input
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
        >
    `
})

Vue.component('alert-box', {
    template: `
        <div class="demo-alert-box">
            <strong>Error!</strong>
            <slot></slot>
        </div>
    `
})


