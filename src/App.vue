<template>
	<v-app>
		<v-main>
			<Header />
			<router-view />
			<!-- <Login /> -->
			<Footer />
		</v-main>
	</v-app>
</template>

<script>
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
	name: "App",
	components: {
		Home,
		Login,
		Footer,
		Header,
	},
	data: () => ({
		//
	}),
	created() {},
};
</script>
<style scoped></style>
