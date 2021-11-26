<template>
  <q-card class="my-card shadow-2 board">
    <q-chip
      size="18px"
      :color="isCurrentPlayer('Player2') ? 'white' : 'grey-7'"
    >
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
      Player 2 {{ currentPlayer == 'Player2' ? ' - Your turn' : '' }}
    </q-chip>
    <div class="row justify-around">
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
      class="float-right"
      size="18px"
      :color="isCurrentPlayer('Player1') ? 'white' : 'grey-7'"
    >
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
      Player 1 {{ currentPlayer == 'Player1' ? ' - Your turn' : '' }}
    </q-chip>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { Todo, Meta } from './models';
import Pit from 'components/Pit.vue';

export default defineComponent({
  name: 'BoardComponent',
  components: { Pit },
  props: {
    pits: {
      type: Array,
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
