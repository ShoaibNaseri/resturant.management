<template>
    <img height="390" src="../assets/logo/logo.png" alt="">
    <h1>Sing Up </h1>
<form action="" @submit.prevent="singup()">
        <div class="register-form">
            <input type="text" v-model="name" name="" id="" placeholder="Name">
            <input type="email" v-model="email" placeholder="Email">
            <input type="text" v-model="password" name="" id="" placeholder="Passowrd">
            <button type="submit" name="submit" class="">Register</button>
        </div>
</form>
</template>
<script>
export default {
    name: 'SingUp',
    data(){
        return{
            name: '',
            email: '',
            password: ''
        }
    },
    methods:{
        singup(){
            console.warn("singup",this.name,this.email,this.password);
        }
    }

}
</script>
<style>
.register-form input{
    width: 400px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #273036;
    padding-left: 10px;
    font-size: 18px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
}
.register-form input:focus{
    outline: blue;
    border: 1px solid blue;
}
.register-form button{
    width: 400px;
    height: 40px;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid #273036;
    padding-left: 10px;
    font-size: 18px;
    background-color: #273036;
    color: white;
    font-weight: 600;
    cursor: pointer;
}

</style>