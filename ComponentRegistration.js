//<my-component-name> and <MyComponentName> are acceptable
Vue.component('MyComponentName', { /* ... */ })

//local registration
var ComponentA = { /* ... */ }
var ComponentB = { /* ... */ }
var ComponentC = { /* ... */ }

new Vue({
    el: '#app',
    components: {
        'component-a': ComponentA,
        'component-b': ComponentB
    }
})

//locally registered components are not also available in subcomponents
//ComponentA to be available in ComponentB
var ComponentA = { /* ... */ }

var ComponentB = {
  components: {
    'component-a': ComponentA
  },
  // ...
}

//through Babel and Webpack
import ComponentA from './ComponentA.vue'

export default {
  components: {
    ComponentA
  },
  // ...
}

//src/main.js
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)
  
    // Get PascalCase name of component
    const componentName = upperFirst(
      camelCase(
        // Strip the leading `'./` and extension from the filename
        fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
      )
    )
  
    // Register component globally
    Vue.component(
      componentName,
      // Look for the component options on `.default`, which will
      // exist if the component was exported with `export default`,
      // otherwise fall back to module's root.
      componentConfig.default || componentConfig
    )
})

//global registration must take place before the root Vue instance is created (with new Vue).