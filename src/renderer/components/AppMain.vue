<template>
  <section>
    <navbar-view></navbar-view>
  </section>
</template>

<script>
// Dependencies components
import NavbarView from './Navbar/Navbar'
import CommitFormView from './CommitForm/CommitForm'

export default {
  name: 'app-main-page',
  components: {
    NavbarView,
    CommitFormView
  },
  data() {
    return {}
  }
}
</script>

<style>
</style>

