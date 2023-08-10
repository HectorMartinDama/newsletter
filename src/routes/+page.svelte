

<script>
    const regex= /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
   
    import lottie from 'lottie-web';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    let email; let valid= true;

    const validateFormData= (email) =>{
        if(!email) return false;
        return email.match(regex);
    }

    const register= (e) =>{
        const formData= new FormData(e.target);
        let data= {};

        for(let field of formData){
            const [key, value ]= field;
            data[key]= value;
        }
        valid= validateFormData(data.email)
        if(validateFormData(data.email)){
            localStorage.setItem('email', data.email);
            goto('/success')
        }
    }
    

   $: if(email) valid= validateFormData(email);

   onMount(() =>{
        for (let i = 0; i < 3; i++) {
            lottie.loadAnimation({
                container: document.getElementById(`animation${i}`),
                path: '/check.json',
                loop: false,
            })
        }
    })

    
    

</script>


<div class="container">
    <div class="information-container">
        <div class="information">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on: </p>
    
            <div class="features">
                <div class="animation-container">
                    <div id="animation0" class="animation"></div>
                    <p>Product discovery and building what matters</p>
                </div>

                <div class="animation-container">
                    <div id="animation1" class="animation"></div>
                    <p>Measuring to ensure updates are a success</p>
                </div>

                <div class="animation-container">
                    <div id="animation2" class="animation"></div>
                    <p>And much more!</p>
                </div>
            <div/>
    
            <form method="post" on:submit|preventDefault={register}>
                <div class="form-message">
                    <label for="email">Email address</label>
                    {#if !valid}
                        <p style="color: #AE292E; font-size: 12px;">Valid email required</p>
                    {/if}
                </div>
                <input bind:value={email} class:invalid="{!valid}" name="email" id="email" placeholder="email@company.com" autocomplete="off">
                <button type="submit">Subscribe to monthly newsletter</button>
            </form>
        </div>
    </div>
    </div>
    <div class="image"></div>
</div>


<style lang="scss">

    $white: hsl(0, 0%, 100%); 
    $grey: hsl(231, 7%, 60%);
    $tomato: hsl(4, 100%, 67%);
    $backgroundImage: '/illustration-sign-up-desktop.svg';


    .container{
        @media only screen and (min-width: 1440px){
            box-shadow:  30px 30px 40px #303142,
                    -30px -30px 40px #303142;
        }

        
      
    }


    

    .animation-container{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .animation{
        height: 35px;
        width: 35px;
        padding-right: 10px;
    }
    
    .invalid{
        background-color: #FFE8E6;
        border-color: #AE292E;
    }



    p{
        font-family: 'RobotoRegular';
    }

    
    @media only screen and (min-width: 1440px){
        $backgroundImage: '/illustration-sign-up-mobile.svg';       
    }



    

    

    .features{
        display: flex;
        flex-direction: column;
        align-items: flex-start;    
        margin-top: 30px;
    }


    .container{
        display: flex;
        flex-direction: column-reverse;     
        height: 100vh;
        background-color: $white;
        @media only screen and (min-width: 1440px){
            flex-direction: row;
            height: 640px;
            width: 930px;
            padding: 25px;
            border-radius: 30px;
        }
       
        .information-container{
            display: grid;
            place-items: center;
            width: 100%;
            height: 65%;
            @media only screen and (min-width: 1440px){
                width: 55%;
                height: 100%;
            }
        }

        .information{
            padding-left: 50px;
            padding-right: 50px;
        }

        
        .image{
            width: 100%;
            height: 35%;
            background-image: url('/illustration-sign-up-mobile.svg');
            border-radius: 20px;

            @media only screen and (min-width: 1440px){
                width: 45%;
                height: 100%;
                background-image: url('/illustration-sign-up-desktop.svg');
            }
            background-repeat: no-repeat;
            background-size: cover;
        }
    }


    form{
        display: flex;
        flex-direction: column;
    }


    
    input{
        border: 1px solid $grey;
        outline: none;
        padding-left: 20px;   

        &::placeholder{
            color: $grey;
        }
    }

   


    .form-message{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        margin-top: 40px;
    }

  


    
    


</style>

