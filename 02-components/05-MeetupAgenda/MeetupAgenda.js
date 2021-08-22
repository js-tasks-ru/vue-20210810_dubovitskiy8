import { defineComponent } from './vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',
  components: {
    MeetupAgendaItem,
  },
  props: {
    agenda: {
      type: Array,
      required: true,
    },
  },
  template: `
    <ul class="agenda">
      <li class="agenda__item" v-for="(item) in agenda" :key="item.id">
        <meetup-agenda-item :agenda-item="item"></meetup-agenda-item>
      </li>
    </ul>`,
});
