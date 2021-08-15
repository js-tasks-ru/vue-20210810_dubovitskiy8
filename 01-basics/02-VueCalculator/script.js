import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const RootComponent = defineComponent({
  name: 'Root',
  data() {
    return {
      firstNumber: '',
      secondNumber: '',
      mathExpression: '',
    };
  },
  computed: {
    summary() {
      if (!this.firstNumber || !this.secondNumber || !this.mathExpression) {
        return 0;
      }

      const firstNumber = parseInt(this.firstNumber);
      const secondNumber = parseInt(this.secondNumber);

      switch (this.mathExpression) {
        case 'sum':
          return firstNumber + secondNumber;
        case 'subtract':
          return firstNumber - secondNumber;
        case 'multiply':
          return firstNumber * secondNumber;
        case 'divide':
          return firstNumber / secondNumber;
        default:
          return 0;
      }
    },
  },
});

createApp(RootComponent).mount('#app');
