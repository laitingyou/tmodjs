<template>
  <div class="comtainer">
    {{msg}}
  </div>
</template>
<script>
export default {
  name: "helloWorld",
  data() {
    return {
      msg: "helloWorld"
    };
  },
  methods: {}
};
</script>
<style>
.comtainer {
  text-algin: center;
}
</style>
