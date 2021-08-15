import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const RootComponent = defineComponent({
  name: 'Root',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clickCount() {
      this.count++;
    },
  },
});

createApp(RootComponent).mount('#app');
