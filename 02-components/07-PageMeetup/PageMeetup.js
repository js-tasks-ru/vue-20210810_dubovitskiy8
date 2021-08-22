import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupCover from './MeetupCover.js';
import MeetupInfo from './MeetupInfo.js';
import MeetupView from './MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',
  components: {
    UiAlert,
    UiContainer,
    MeetupAgenda,
    MeetupAgendaItem,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupView,
  },
  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      meetup: null,
      isLoading: true,
      isError: false,
      error: null,
    };
  },
  watch: {
    meetupId: {
      deep: true,
      immediate: true,
      handler(newValue) {
        this.isLoading = true;
        this.meetup = null;
        this.error = null;
        fetchMeetupById(newValue).then(
          (result) => {
            this.meetup = result;
            this.isLoading = false;
          },
          (error) => {
            this.isLoading = false;
            this.error = error;
          },
        );
      },
    },
  },
  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <meetup-view v-if="meetup" :meetup="meetup"></meetup-view>
      <ui-container v-if="isLoading">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if="error">
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>
    </div>`,
});
