<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <wux-button @click="increment">
        <wux-icon type="md-arrow-dropup" size="16"/>
      </wux-button>
      <!-- <button @click="increment">+</button> -->
      <wux-button @click="decrement">
        <wux-icon type="md-arrow-dropdown" size="16"/>
      </wux-button>
      <!-- <button @click="decrement">-</button> -->
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
};
</script>

<style lang="less">
.counter-warp {
  text-align: center;
  margin-top: 100px;
  p {
    color: red;
  }
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
