<template>
  <q-card class="my-card shadow-2 board">
    <q-card-section>
      <pit :units="pits[0]"></pit>
      <pit :units="4"></pit>
      <pit :units="4"></pit>
      <pit :units="4"></pit>
      <pit :units="4"></pit>
      <pit :units="4"></pit>
      <pit :units="4"></pit>
      <pit :units="4"></pit>
      <pit :units="4"></pit>
      <pit :units="4"></pit>
      <pit :units="4"></pit>
      <pit :units="4"></pit>
      <pit :units="4"></pit>
      <pit :units="4"></pit>
    </q-card-section>

    <q-separator />

    <q-card-actions align="center" class="q-mt-md">
      <q-btn flat class="text-white">Start Game</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Todo, Meta } from './models';
import Pit from 'components/Pit.vue';

export default defineComponent({
  name: 'OptionsComponent',
  components: { Pit },
  props: {
    title: {
      type: String,
      required: true,
    },
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => [] as Todo[],
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true,
    },
    pits: {
      type: Array,
      // default: () => [] as Todo[],
    },
    active: {
      type: Boolean,
    },
  },
  data(): { clickCount: number } {
    return {
      clickCount: 0,
    };
  },
  methods: {
    increment(): void {
      this.clickCount += 1;
    },
  },
  computed: {
    todoCount(): number {
      return this.todos.length;
    },
  },
});
</script>
<style lang="sass" scoped>
.board
   background-color: brown
   height: 420px
   width: 75%
   border-radius: 25%
.shadow-box
  width:90px
  height: 100px
  margin: 25px
  border-radius: 50%
  font-size: 12px
</style>
