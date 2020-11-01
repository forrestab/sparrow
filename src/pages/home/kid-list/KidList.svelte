<script>
    import Kid from "./Kid.svelte";

    export let kids = [];
</script>

<h2>Kids</h2>
{#each kids as kid}
    <Kid name={kid.name} amount={kid.transactions.reduce((total, transaction) => total + transaction.value, 0)} />
{/each}

<button>+ Add Kid</button>
