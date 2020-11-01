<script>
    import TransactionHistoryGroup from "./TransactionHistoryGroup.svelte";

    export let groupedTransactions = {};
</script>

<h2>Transaction History</h2>
{#each Object.entries(groupedTransactions) as [key, value]}
    <TransactionHistoryGroup header={key} transactions={value} />
{/each}
