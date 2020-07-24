<template>
  <div id="app" class="container">

    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6" v-for="product in products" :key="product.id">
            <Product :product="product" v-on:add-cart="addProductCart" :isInCart="isInCart(product)" />
          </div>
        </div>
      </div>
      <div class="col-md-5 my-5">
        <Cart :items="cart" v-on:remove-item="removeProduct" v-on:payment="pay" />
      </div>
    </div>

  </div>
</template>

<script>

import Product from '@/components/Product'
import products from '@/products'
import Cart from '@/components/Cart'

export default {
  name: 'App',
  components: {
    Product,
    Cart
  },
  data (){
    return{
      products,
      cart: []
    }
  },
  methods: {
    addProductCart(product) {
      this.cart.push(product);
    },
    isInCart(product) {
      const item = this.cart.find(item => item.id === product.id);
      if (item){
        return true;
      }else{
        return false;
      }
    },
    removeProduct(product){
      this.cart = this.cart.filter(item => item.id != product.id);
    },
    pay(){
      this.cart = [];
      alert('Sale Completed!');
    }
  }
}
</script>

<style>

</style>
