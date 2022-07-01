<template>
  <div>
    <h1>Home Page</h1>
  
    <h2>{{message}}</h2>
  
    <Link href="/contact">Contact</Link>
  </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
  components: {
    Link
  },
  props: {
    message: String
  }
}
</script>

