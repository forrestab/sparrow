<script>
    import add from "date-fns/add";

    import KidList from "./kid-list/KidList.svelte";
    import TransactionGroup from "./transaction-groups/TransactionGroups.svelte";

    let newTransaction = (id, date, description, value, type = "credit") => 
        ({ id, date, description, type, value });
    let feedAnimalsTransaction = (id, date ) =>
        newTransaction(id, date, "feed animals", .5);
    let foldLaundryTransaction = (id, date) =>
        newTransaction(id, date, "fold laundry", 1.5);
    let dryDishesTransaction = (id, date) =>
        newTransaction(id, date, "dry dishes", 1);

    let kids = [
        {
            id: 1,
            name: "Child 1",
            transactions: [
                foldLaundryTransaction(5, new Date()),
                feedAnimalsTransaction(4, new Date()),
                feedAnimalsTransaction(3, add(new Date(), { days: -1 }))
            ]
        },
        {
            id: 2,
            name: "Child 2",
            transactions: [
                dryDishesTransaction(2, add(new Date(), { days: -1 })),
                feedAnimalsTransaction(1, add(new Date(), { days: -2 }))
            ]
        }
    ];

    let groupedTransactions = kids.reduce((transactions, kid) => {
        let kidTransactions = kid.transactions.map(transaction => ({ ...transaction, kid: { name: kid.name } }));

        transactions = [...transactions || [], ...kidTransactions || []];

        return transactions;
    }, [])
    .sort((a, b) => a.date < b.date)
    .reduce((groups, transaction) => {
        groups[transaction.date] = [...groups[transaction.date] || [], transaction];

        return groups;
    }, {});

    console.log(groupedTransactions);
</script>

<KidList {kids} />

<h2>Recent Transactions</h2>
<TransactionGroup {groupedTransactions} />
