<template>
  <div
    class="flex inline flex-center shadow-5"
    :class="isKalah ? 'kalah' : 'shadow-box'"
    @click="pitSelected"
  >
    <p class="text-h4 text-white">{{ units }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  props: {
    id: {
      type: Number,
      required: true,
      default: 0,
    },
    units: {
      type: Number,
      required: true,
      default: 0,
    },
    isKalah: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      leftDrawerOpen: false,
    };
  },

  methods: {
    pitSelected() {
      this.$emit('pit-selected', this.id);
    },
  },
});
</script>
<style lang="sass" scoped>
.shadow-box
  width: 110px
  height: 120px
  margin: 25px
  border-radius: 30%
  font-size: 12px
  background-color: #5D2D16
@media only screen and (max-width: 812px)
    .shadow-box
      width: 65px
      height: 80px
.kalah
  width: 50%
  height: 70%
  margin-top: 30px
  border-radius: 30%
  border-style: solid 1px black
  background-color: #42160A
.unit
  width: 6px
  height: 6px
  background-color: blue
  border-radius: 50%
  border-style: solid 1px black
</style>
