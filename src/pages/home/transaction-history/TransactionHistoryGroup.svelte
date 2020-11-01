<script>
    import format from "date-fns/format";

    import Transaction from "./Transaction.svelte";

    export let header;
    export let transactions;
</script>

<h3>{format(new Date(header), "yyyy/MM/dd")}</h3>
<ul>
    {#each transactions as transaction}
        <li>
            <Transaction 
                name={transaction.child.name}
                activity={transaction.description}
                value={transaction.value} 
            />
        </li>
    {/each}
</ul>
