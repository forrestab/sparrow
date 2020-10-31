<script>
    import Transaction from "./Transaction.svelte";

    export let title;
    export let transactions;
</script>

<h3>{title}</h3>
<ul>
    {#each transactions as transaction}
        <li><Transaction {...transaction} /></li>
    {/each}
</ul>
