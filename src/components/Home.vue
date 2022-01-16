<template>
	<v-container>
		<v-card elevation="8" class="card">
			<div class="header">
				<h3>Nama</h3>
				<h2>{{ getSiswa.name }}</h2>
				<h3>NISN</h3>
				<h2>{{ getSiswa.nisn }}</h2>
				<h3>Kelas</h3>
				<h2>{{ getSiswa.kelas }}</h2>
				<h3></h3>
				<h1>{{ getSiswa.status }}</h1>
				<h3>Nilai Rata Rata</h3>
				<h1 class="number">{{ getSiswa.nilai }}</h1>
			</div>

			<!-- <v-btn elevation="4">Logout</v-btn> -->
		</v-card>
	</v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Home",
	methods: {
		...mapActions(["login"]),
		test() {
			console.log(this.$data.name);
		},
	},
	data: () => ({}),
	computed: mapGetters(["isAuthed", "getSiswa", "getSiswaByNisn"]),
	created() {
		console.log(this.name);
	},
};
</script>

<style scoped>
.logo {
	height: 50px;
	width: 50px;
}
.card {
	padding: 32px;
	padding-top: 8px;
}
h3 {
	margin-top: 24px;
}
.number{
	color: #42B9A2;
}
</style>
