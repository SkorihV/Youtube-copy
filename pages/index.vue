<template>
  <div class="mx-0.5 border-2 bg-yellow-500 ms:bg-green-300">
    Какой то крутой текст
    <test></test>
  </div>
</template>

<script>
import test from "~/components/test";

export default {
  name: 'IndexPage',
  components: {
    test
  }
}
</script>
