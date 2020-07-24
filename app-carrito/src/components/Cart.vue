<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in items" :key="item.id">
                {{item.title}} - ${{item.price}}
                <button class="btn badge badge-danger float-right" @click="removeItem(item)">
                    Delete
                </button>
            </li>
        </ul>
        <div class="card p-3 my-5">
            <h4 clas="text-center">Total: ${{ total }}</h4>
        </div>
        <button class="btn btn-info form-control" @click="$emit('payment')" :disabled="items.length === 0">Pay Now</button>
    </div>
</template>

<script>
export default {
    name: "Cart",
    props: ['items'],
    computed: {
        total() {
            return this.items.reduce((ac, item) => ac + Number(item.price), 0);
        }
    },
    methods: {
        removeItem(item) {
            this.$emit('remove-item', item);
        }
    }    
}
</script>
