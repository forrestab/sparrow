import { initHashRouter } from "@bjornlu/svelte-router";

import App from "./App.svelte";
import Home from "./pages/home/Home.svelte";
import Settings from "./pages/settings/Settings.svelte";

initHashRouter([
	{ path: "/settings", component: Settings },
	{ path: "/", component: Home }	
])

const app = new App({
	target: document.body
});

export default app;
