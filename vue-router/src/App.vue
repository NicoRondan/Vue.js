<template>
  <div id="app">
    <div class="container">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Products</router-link> 
        </li>
        <li class="nav-item">
           <router-link to="/contact" class="nav-link">Contact</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/user" class="nav-link" >User</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link> 
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
