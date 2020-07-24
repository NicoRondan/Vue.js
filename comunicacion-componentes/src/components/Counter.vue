<template>
    <div>
        <button @click="count">{{counter}}</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data () {
        return {
            counter: 0
        }
    },
    methods: {
        count: function(){
            this.counter++;
        }
    }
}
</script>

<style>

</style>