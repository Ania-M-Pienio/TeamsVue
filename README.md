![GitHub Logo](https://github.com/Ania-M-Pienio/TeamsVue/blob/master/images/TeamsVueApp.png)


# TeamsVue
Vue.js

![GitHub Logo](https://github.com/Ania-M-Pienio/TeamsVue/blob/master/images/Vue.png)

Newest of the big three (React, Angular, Vue), this JavaScript library packs a big punch and in a relatively short period of time.
Besides beig easy to learn, the library is also Progressive - meaning you can start with small pieces and then work your way up to complex apps by adding aspects incrementally as you develop your skills.  Vue.js is Reactive - meaning it uses two-way binding between the data and the DOM via an intermediary Virtual DOM to handle user input.  The Component Tree system is fun to work with, allows for lots of creativity, and makes for a powerful tool to craft a modern UI. There is no surprise then that Vue is very popular in the front-end community - which has contributed a large number of tools, components and other supporting libraries to extend Vue's potential. 

I strongly recommend using the Vue CLI (https://cli.vuejs.org/guide/#components-of-the-system), as well as the Vue.js Devtools (https://addons.mozilla.org/en-CA/firefox/addon/vue-js-devtools/) for ease and quick-pace of coding. 


# Vuetify
![GitHub Logo](https://github.com/Ania-M-Pienio/TeamsVue/blob/master/images/Vue.png)

Speaking of supporting libraries, Vuetify is a Material Component Framework for Vue - which has a massive following of its own.
Including it in the project is easy, once you install vuetify (using npm) as well as edit your webpack.config.js file: 

    const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

        exports.plugins.push(
        new VuetifyLoaderPlugin()
   
    )

Then you have include the specified plugin folder and place a vuetify.js file inside it:

        import Vue from 'vue';
        import Vuetify from 'vuetify/lib';

        Vue.use(Vuetify);

        export default new Vuetify({
        icons: {
            iconfont: 'mdi',
        },
        });


The documentation provided with the library is extnsive, clear and organized. I used one the existing themes as a base but the library allows for a lot of customization of its ready-made components.





## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### 



