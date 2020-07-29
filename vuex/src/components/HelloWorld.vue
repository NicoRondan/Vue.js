<template>
  <div class="hello">
    <h1>{{ $store.getters.message }}</h1>
    <h4>{{$store.getters.fullname}}</h4>
    <h2>Friends</h2>
    <input type="text" v-model="friend">
    <button @click="addFriend">Add a Friend</button>
    <ul>
      <li v-for="(friend, index) in $store.state.friends" :key="index">
        {{ friend }}
        <button @click="$store.dispatch('deleteFriendAction', index)">Delete</button>  
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return{
      friend: ''
    }
  },
  methods: {
    addFriend (){
      this.$store.dispatch('addFriendAction', this.friend);
      this.friend = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
