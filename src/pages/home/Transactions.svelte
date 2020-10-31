<script>
    import TransactionGroup from "./TransactionGroup.svelte";
</script>

<h2>Transactions</h2>

<TransactionGroup title="2020/10/30" transactions={[
    { name: "Child 1", activity: "cleaning dishes", value: "1.00" },
    { name: "Child 1", activity: "feeding animals", value: ".50" }
]} />
<TransactionGroup title="2020/10/29" transactions={[
    { name: "Child 2", activity: "folding clothes", value: "1.00" }
]} />
