<template>
    <div class="me">
        <Login />
    </div>
    
    </template>
    
    <script setup>
    import Login from './login.vue'
    </script>
    
    <style scoped>
    .me{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-size: 100%;
    }
    
    </style>