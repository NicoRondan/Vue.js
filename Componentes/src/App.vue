<template>
  <div class="container">
    <Header></Header>
    <ExamplePost />
    <Footer></Footer>
  </div>
</template>

<script>

import ExamplePost from './components/Posts'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    ExamplePost,
    Header,
    Footer
  }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
</style>
