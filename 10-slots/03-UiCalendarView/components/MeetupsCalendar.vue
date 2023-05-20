<template>
  <UiCalendarView>
    <UiCalendarEvent v-if="meetups[0]" tag="a" :href="`/meetups/${meetups[0].id}`">
      {{ meetups[0].title }}
    </UiCalendarEvent>
  </UiCalendarView>
</template>

<script>
import UiCalendarView from './UiCalendarView.vue';
import UiCalendarEvent from './UiCalendarEvent.vue';

export default {
  name: 'MeetupsCalendar',

  components: {
    UiCalendarEvent,
    UiCalendarView,
  },

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
