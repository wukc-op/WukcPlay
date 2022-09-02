<template>
  <div class="first-app">
    {{msg}}
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "First",
  data(){
    return {
      msg: "welcome"
    }
  }
}
</script>