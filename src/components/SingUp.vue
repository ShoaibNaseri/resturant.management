<template>
    <img height="390" src="../assets/logo/logo.png" alt="">
    <h1>Sing Up Form </h1>
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
import axios from 'axios';
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
     async singup(){
            let result = await axios.post("http://localhost:3000/users",{
                name: this.name,
                email: this.email,
                password: this.password
            });
            if(result.status == 201){
               
                localStorage.setItem("user-info",JSON.stringify(result.data));
                this.$router.push({ name: 'Dashboard' });
            }else{
                alert("Something went wrong");
            }
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