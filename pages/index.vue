<template>
  <div class="layout__page">
    <h1>Azure Test</h1>
    <h3>Features:</h3>
    <ul>
      <li>Express backend</li>
      <li>Style resources</li>
      <li>Axios</li>
    </ul>
    <h3>API response:</h3>
    <pre>{{ greeting }}</pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      greeting: 'none'
    }
  },

  async fetch () {
    const res = await this.$axios.get('/api/greeting')
    this.greeting = res.data
  }
}
</script>

<style lang="scss">
h1 {
  color: $red;
}
</style>
