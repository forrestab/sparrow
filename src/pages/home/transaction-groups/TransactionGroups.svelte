<script>
    import TransactionGroup from "./TransactionGroup.svelte";

    export let groupedTransactions = {};
</script>

{#each Object.entries(groupedTransactions) as [key, value]}
    <TransactionGroup header={key} transactions={value} />
{/each}
