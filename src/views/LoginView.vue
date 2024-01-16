<template>
	<div class="login_box">
		<span>로그인 </span>
		<div>
			<label for="inputId">아이디 : </label>
			<input type="text" name="id" id="inputId" v-model="user.id" />
		</div>
		<div>
			<label for="inputPass">비밀번호 : </label>
			<input
				type="password"
				name="password"
				id="inputPass"
				v-model="user.password"
			/>
		</div>
		<button type="button" @click="userLogin">LOGIN</button>
	</div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';

export default {
	name: 'login-view',

	setup() {
		const user = reactive({
			id: '',
			password: '',
		});

		const userLogin = () => {
			axios
				.post('/api/user/login', user)
				.then(({ data }) => {
					if (data.success) {
						alert(data.message);
					}
				})
				.catch(error => {
					alert(error.response.data.message);
				});
		};

		return {
			user,
			userLogin,
		};
	},
};
</script>

<style scoped>
.login_box {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.login_box > div {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px 0;
}
.login_box > div > label {
	text-align: center;
	width: 150px;
}
.login_box > div > input {
	width: 250px;
	height: 30px;
	border: 1px solid black;
	padding-left: 5px;
	border-radius: 5px;
	font-size: 12px;
}
button {
	width: 150px;
	height: 30px;
	border-radius: 10px;
	background-color: rgb(63, 63, 217);
	color: white;
	border: 1px solid #e2e2e2;
}
</style>
