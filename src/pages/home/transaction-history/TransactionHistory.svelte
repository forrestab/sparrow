<script>
    import add from "date-fns/add";

    import TransactionHistoryGroup from "./TransactionHistoryGroup.svelte";

    let newTransaction = (id, date, description, value, child, type = "credit") => 
        ({ id, date, description, type, value, child });
    let feedAnimalsTransaction = (id, date, child) =>
        newTransaction(id, date, "feed animals", .5, child);
    let foldLaundryTransaction = (id, date, child) =>
        newTransaction(id, date, "fold laundry", 1.5, child);
    let dryDishesTransaction = (id, date, child) =>
        newTransaction(id, date, "dry dishes", 1, child);

    let transactions = [
        foldLaundryTransaction(5, new Date(), { name: "Child 1" }),
        feedAnimalsTransaction(4, new Date(), { name: "Child 1" }),
        feedAnimalsTransaction(3, add(new Date(), { days: -1 }), { name: "Child 1" }),
        dryDishesTransaction(2, add(new Date(), { days: -1 }), { name: "Child 2" }),
        feedAnimalsTransaction(1, add(new Date(), { days: -2 }), { name: "Child 2" })
    ];

    transactions = transactions.reduce((groups, transaction) => {
        groups[transaction.date] = [...groups[transaction.date] || [], transaction];

        return groups;
    }, {});
</script>

<h2>Transaction History</h2>
{#each Object.entries(transactions) as [key, value]}
    <TransactionHistoryGroup header={key} transactions={value} />
{/each}
