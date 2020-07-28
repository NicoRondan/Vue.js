<template>
    <div class="container">
        <h1>User Info</h1>
        <router-link :to="user" v-for="(user, index) in usersArray" :key="index">
            <button class="btn btn-info">{{user}}</button>
        </router-link>
        <User />
    </div>    
</template>

<script>
import User from '@/components/User'

export default {
    components:{ 
        User
    },
    data () {
        return {
            usersArray: [ 'nico', 'carlos', 'jazmin', 'carla']
        }
    }
}
</script>
