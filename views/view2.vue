<template>
  <v-row class="d-flex align-center" style="height:100%">
    <v-col>
      <v-btn color="primary" @click="show('component1')">component1</v-btn>
    </v-col>
    <v-col>
      <v-btn color="success" @click="show('component1')">component1</v-btn>
    </v-col>
    <component1 ref="component1"/>
    <component2 ref="component2"/>
  </v-row>
</template>
 
<script>
module.exports = {
  props: {},
  data: () => {
    return {};
  },
  methods: {
    show(name) {
      this.$refs[name].show();
    },
  },
};
</script>