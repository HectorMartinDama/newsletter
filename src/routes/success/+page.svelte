

<script>
    import { getEmail } from "../../lib";
</script>


<div class="container">
    <div class="container-information">
        <img src="/icon-success.svg" alt="success icon">
        <h1>Thanks for subcribing!</h1>
        <p>A confirmation email has been sent to <strong class="email">{getEmail()}</strong>. Please open it and click the button inside to confirm your subcription.</p>    
        <a href="/" class="button" id="btnDialog">Dismiss message</a>
    </div>
</div>

<footer>
    <a href="/" class="button">Dismiss message</a>
</footer>



<style lang="scss">
    .container{
        width: 500px;
        height: 520px;
        background-color: red;
        border-radius: 30px;
    }

    #btnDialog{
        display: none;
    }


    footer{
        position: absolute;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }





    @media only screen and (min-width: 1440px){
        footer{
            display: none;
        }
        #btnDialog{
            display: block;
        }

    }

    .email{
        color: hsl(234, 29%, 20%);
        font-family: 'RobotoBold';
    }

   

    .container-information{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 100%;

        //padding-left: 20px;
        //padding-right: 20px;

        @media only screen and (min-width: 1440px){
            padding-left: 60px;
            padding-right: 60px;
        }
    }

    .button{
        display: flex;
        justify-content: center;
        align-items: center;

        height: 50px;
        cursor: pointer;
        border-radius: 5px;
        text-decoration: none;
    }


</style>