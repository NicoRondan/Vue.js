<template>
    <div >
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="post in posts" :key="post.id">
      <td>{{post.id}}</td>
      <td>{{post.title}}</td>
      <td>{{post.body}}</td>
    </tr>
  </tbody>
</table>
    </div>    
</template>

<script>
    export default {
        name: 'ExamplePost',
        data () {
            return {
                posts: [
                    {id: 1, title: 'Post 1', body: 'Lorem Ipsum'},
                    {id: 2, title: 'Post 2', body: 'Lorem Ipsum'},
                    {id: 3, title: 'Post 3', body: 'Lorem Ipsum'}
                ]
            }
        }
    }
</script>
    

<style>

</style>
