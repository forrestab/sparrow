<script>
    let activities = [
        { id: 1, name: "Feed animals", value: .5 },
        { id: 2, name: "Fold laundry", value: 1.5 },
        { id: 3, name: "Dry dishes", value: 1 }
    ];
</script>

<h1>Settings</h1>

<div>
    <h2>Activities</h2>
    <button>+ Add Activity</button>
</div>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Value</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {#each activities as activity}
            <tr>
                <td>{activity.name}</td>
                <td>{activity.value}</td>
                <td>
                    <button>Edit</button>
                    &middot;
                    <button>Delete</button>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
