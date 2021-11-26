<template>
  <q-page class="column items-center q-mt-xl">
    <q-btn @click="start" class="glossy" rounded color="deep-orange">
      START GAME</q-btn
    >
    <board-component
      title="Example component"
      active
      @make-move="play"
      :pits="boardState"
    ></board-component>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import BoardComponent from 'components/Board.vue';
import { defineComponent } from 'vue';
import { api } from 'boot/axios';
// import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'PageIndex',
  components: { BoardComponent },
  data() {
    const todos: Todo[] = [
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ];
    const meta: Meta = {
      totalCount: 1200,
    };
    let boardState: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    return { todos, meta, boardState };
  },
  computed: {
    totalUnits(): number {
      return this.boardState.reduce((a, b) => a + b, 0);
    },
  },
  methods: {
    start() {
      api
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .get(`${process.env.API!}/start`)
        .then((response) => {
          // console.log(response.data);
          this.boardState = response.data as number[];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    play(index: number) {
      api
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .get(`${process.env.API!}/play?index=${index}`)
        .then((response) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          this.boardState = response.data.boardState as number[];
          console.log(this.boardState);
          console.log(this.totalUnits);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>
