


<script>
    import { fly } from 'svelte/transition';
    export let data;
</script>


<main>
    {#key data.url}
        <div in:fly={{ x: -300, duration: 200, delay: 300 }} out:fly={{ x: 300, duration: 300 }}>
            <slot/>
        </div>
    {/key}
</main>