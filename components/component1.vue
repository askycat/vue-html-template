<template>
  <v-dialog v-model="dialog">
    <v-card height="300"> component1 </v-card>
  </v-dialog>
</template>
 
<script>
module.exports = {
  props: {},
  data: function () {
    return {
      dialog: false,
    };
  },
  methods: {
    show() {
      this.dialog = true;
    },
  },
};
</script>
 
<style>
.hello {
  background-color: #ffe;
}
</style>
