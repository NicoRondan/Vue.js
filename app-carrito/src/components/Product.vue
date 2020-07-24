<template>
    <div class="card my-5">
        <div class="card-body">
            <h5 class="text-center card-title">{{product.title}}</h5>
            <img class="card-img" :src="product.image">
            <p class="text-center text-muted card-text display-4">$ {{ Number(product.price).toFixed()}}</p>
            <button @click="addCart(product)" class="btn btn-success form-control" :disabled="isInCart">
                {{ isInCart ? 'Added' : 'Add to Cart' }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Product',
    props: ['product', 'isInCart'],
    methods: {
        addCart(product) {
            this.$emit('add-cart', product);
        }
    }
}
</script>

<style>
.card-img {
    width: 100%;
    height: 150;
    object-fit: cover;
}
</style>