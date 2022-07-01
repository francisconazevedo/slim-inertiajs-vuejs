<template>
  <div>
    <h1>Contact</h1>
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        <strong>{{ contact.type }}: </strong> {{ contact.value }}
      </li>
    </ul>
    <Link href="/">Home</Link>
  </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
  components: {
    Link
  },
  props: {
    contacts: Array
  }
}
</script>

<style>

</style>