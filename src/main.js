import { initPathRouter } from "@bjornlu/svelte-router";

import App from "./App.svelte";
import Home from "./pages/home/Home.svelte";

initPathRouter([
	{ path: "/", component: Home }
])

const app = new App({
	target: document.body
});

export default app;
