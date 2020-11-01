<script>
    import Kid from "./Kid.svelte";

    let kids = [
        { id: 1, name: "Child 1" },
        { id: 2, name: "Child 2" }
    ];
</script>

<h2>Kids</h2>
{#each kids as kid}
    <Kid name={kid.name} />
{/each}

<button>+ Add Kid</button>
