<template>
	<v-container>
		<v-card elevation="8" class="card">
			<div class="header">
				<h2>Kenaikan Kelas</h2>
			</div>
			<v-form ref="form">
				<v-text-field v-model="nisn" label="NISN"></v-text-field>
				<v-btn color="#3C4B80" class="btn-login" @click="login">
					Login
				</v-btn>
			</v-form>
		</v-card>

		<v-snackbar v-model="snackbar">
			{{ text }}
			<template v-slot:action="{ attrs }">
				<v-btn
					color="#794CFF"
					text
					v-bind="attrs"
					@click="snackbar = false"
				>
					Close
				</v-btn>
			</template>
		</v-snackbar>
		<!-- <v-alert type="error" dismissible>
			NISN Tidak Ditemukan
		</v-alert> -->
	</v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Login",
	data: () => ({
		nisn: "",
		snackbar: false,
		text: `NISN Tidak Ditemukan`,
	}),
	methods: {
		...mapActions(["loginSiswa"]),
		login() {
			if (this.nisn) {
				let siswa = this.getSiswaByNisn(this.nisn);
				if (siswa) {
					this.loginSiswa(siswa);
					this.$router.push("/");
				} else {
					this.snackbar = true;
				}
			}
		},
	},
	computed: mapGetters(["getSiswaByNisn"]),
	created() {},
};
</script>

<style scoped>
.logo {
	height: 50px;
	width: 50px;
}
.card {
	width: 380px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 32px;
}
.btn-login {
	width: 100%;
	color: white !important;
}
</style>
