<script>
	import { RouterView, Link } from "@bjornlu/svelte-router"
</script>

<main>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/settings">Settings</Link>
	</nav>
	<RouterView />
</main>

<style>
	
</style>
