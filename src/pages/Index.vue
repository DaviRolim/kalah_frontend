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
import BoardComponent from 'components/Board.vue';
import { defineComponent } from 'vue';
import { api } from 'boot/axios';
import { useStore } from 'src/store';
import { IGameInfo } from 'src/interfaces/iGameInfo';
// import { useQuasar } from 'quasar';
export default defineComponent({
  name: 'PageIndex',
  components: { BoardComponent },
  data() {
    const $store = useStore();
    let boardState: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let currentPlayer = 'Player';
    let gameId = 1;
    return { boardState, currentPlayer, gameId, $store };
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
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const gameInfo: IGameInfo = response.data;
          void this.$store.dispatch('example/updateGameInfo', gameInfo);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          this.boardState = response.data.pits as number[];
          this.currentPlayer = 'PLAYER1';
        })
        .catch((err) => {
          console.log(err);
        });
    },
    play(index: number) {
      api
        .get(
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          `${process.env.API!}/play?index=${index}&gameId=${
            this.$store.state.example.gameInfo.gameId
          }`
        )
        .then((response) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const gameInfo: IGameInfo = response.data;
          void this.$store.dispatch('example/updateGameInfo', gameInfo);
          this.boardState = this.$store.state.example.gameInfo.pits;
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          this.currentPlayer = response.data.currentPlayer as string;
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          this.gameId = response.data.gameId as number;
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
