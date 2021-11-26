<template>
  <q-page class="column items-center justify-start blackbg">
    <q-btn
      @click="start"
      class="glossy q-mt-xl"
      rounded
      color="grey-9"
      size="28px"
    >
      START GAME</q-btn
    >

    <board-component
      title="Kalah Board"
      active
      @make-move="play"
      :pits="boardState"
      :currentPlayer="currentPlayer"
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
    let currentPlayer = 'Player';
    return { todos, meta, boardState, currentPlayer };
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
          this.boardState = response.data as number[];
          this.currentPlayer = 'Player1';
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
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          this.currentPlayer = response.data.currentPlayer as string;
          console.log(this.boardState);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>
<style lang="sass" scoped>
.blackbg
  background: url(../assets/black-bg.jpg)
  background-size: cover
</style>
