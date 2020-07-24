<template>
    <div>
        <div @click="select" class="plan" :class="{'plan-activo' : selected}">
          <div class="descripcion">
            <span class="titulo">{{name}}</span>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Plan',
    props: {
        name:{
            type: String,
            default: 'Plan 1 - Beginner',
            required: true
        }  
    },
    data () {
        return{
            selected: false
        }
    },
    methods: {
        select() {
            //Comunicar componente hijo a componente padre. Creamos un evento personalizado, mandando un dato 
            this.$emit('select', this.name);
            this.selected = !this.selected;
        }
    }
}
</script>

<style></style>