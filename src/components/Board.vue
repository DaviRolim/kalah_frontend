<template>
  <q-card class="my-card shadow-2 board">
    <q-chip
      v-if="!gameInfo.gameOver"
      size="18px"
      :color="isCurrentPlayer('PLAYER2') ? 'white' : 'grey-7'"
      :text-color="isCurrentPlayer('PLAYER2') ? 'black' : 'white'"
    >
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
      Player 2 {{ currentPlayer == 'PLAYER2' ? ' - Your turn' : '' }}
    </q-chip>
    <div class="row justify-around" v-if="!gameInfo.gameOver">
      <div class="col-2 q-pl-xl">
        <pit
          :id="13"
          :units="pits[13]"
          :isKalah="true"
          @pit-selected="getChoosenPitIndex"
        ></pit>
      </div>
      <div class="col-8">
        <div class="row no-wrap">
          <pit
            :id="12"
            :units="pits[12]"
            @pit-selected="getChoosenPitIndex"
          ></pit>
          <pit
            :id="11"
            :units="pits[11]"
            @pit-selected="getChoosenPitIndex"
          ></pit>
          <pit
            :id="10"
            :units="pits[10]"
            @pit-selected="getChoosenPitIndex"
          ></pit>
          <pit
            :id="9"
            :units="pits[9]"
            @pit-selected="getChoosenPitIndex"
          ></pit>
          <pit
            :id="8"
            :units="pits[8]"
            @pit-selected="getChoosenPitIndex"
          ></pit>
          <pit
            :id="7"
            :units="pits[7]"
            @pit-selected="getChoosenPitIndex"
          ></pit>
        </div>
        <div class="row no-wrap">
          <pit
            :id="0"
            :units="pits[0]"
            @pit-selected="getChoosenPitIndex"
          ></pit>
          <pit
            :id="1"
            :units="pits[1]"
            @pit-selected="getChoosenPitIndex"
          ></pit>
          <pit
            :id="2"
            :units="pits[2]"
            @pit-selected="getChoosenPitIndex"
          ></pit>
          <pit
            :id="3"
            :units="pits[3]"
            @pit-selected="getChoosenPitIndex"
          ></pit>
          <pit
            :id="4"
            :units="pits[4]"
            @pit-selected="getChoosenPitIndex"
          ></pit>
          <pit
            :id="5"
            :units="pits[5]"
            @pit-selected="getChoosenPitIndex"
          ></pit>
        </div>
      </div>
      <div class="col-2 q-pl-xl">
        <pit
          :id="6"
          :units="pits[6]"
          @pit-selected="getChoosenPitIndex"
          :isKalah="true"
        ></pit>
      </div>
    </div>
    <q-chip
      v-if="!gameInfo.gameOver"
      clickable
      @click="chama"
      class="float-right"
      size="18px"
      :color="isCurrentPlayer('PLAYER1') ? 'white' : 'grey-7'"
      :text-color="isCurrentPlayer('PLAYER1') ? 'black' : 'white'"
    >
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
      Player 1 {{ currentPlayer == 'PLAYER1' ? ' - Your turn' : '' }}
    </q-chip>
    <h1 v-else class="text-center">
      Congratulations {{ winner }} won with {{ winnerPoints }} points.
    </h1>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import Pit from 'components/Pit.vue';

export default defineComponent({
  name: 'BoardComponent',
  components: { Pit },
  props: {
    pits: {
      type: Array,
      required: true,
    },
    currentPlayer: {
      type: String,
      default: 'Player',
    },
  },
  data(): { clickCount: number } {
    return {
      clickCount: 0,
    };
  },
  computed: {
    winner() {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return this.gameInfo.player1Score > this.gameInfo.player2Score
        ? 'Player 1'
        : 'Player 2';
    },
    winnerPoints() {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (this.gameInfo.player1Score > this.gameInfo.player2Score) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return this.gameInfo?.player1Score as number;
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return this.gameInfo?.player2Score as number;
    },
    isPlayer1() {
      return this.currentPlayer == 'PLAYER1';
    },
    ...mapState('example', ['gameInfo']),
  },
  methods: {
    getChoosenPitIndex(index: number): void {
      this.$emit('make-move', index);
    },
    isCurrentPlayer(player: string): boolean {
      if (player === this.currentPlayer) {
        return true;
      }
      return false;
    },
    chama() {
      console.log(this.gameInfo);
    },
  },
});
</script>
<style lang="sass" scoped>
.board
   background: url(../assets/kalah-bg-dark.jpg)
   margin-top:  80px
   margin-bottom: 10px
   border-radius: 5%
</style>
