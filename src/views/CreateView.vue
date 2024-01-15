<template>
	<div class="board_add_box">
		<div>
			<label for="id_pass">아이디</label>
			<input
				type="text"
				id="id_pass"
				name="id"
				placeholder="아이디를 입력해주세요"
			/>
		</div>
		<div>
			<label for="pass_area">비밀번호</label>
			<input
				type="password"
				id="pass_area"
				name="password"
				placeholder="비밀번호를 입력해주세요"
			/>
		</div>
		<div>
			<label for="name_area">이름</label>
			<input
				type="text"
				id="name_area"
				name="name"
				placeholder="이름을 입력하세요"
			/>
		</div>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	components: {},

	setup() {
		let user = reactive({
			id: '',
			password: '',
			name: '',
		});
		this.axios.post('/api/user');
	},
};
</script>

<style scoped>
.board_add_box {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.board_add_box > div {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px 0;
}
.board_add_box > div > label {
	text-align: center;
	width: 150px;
}
.board_add_box > div > input {
	width: 250px;
	height: 30px;
	border: 1px solid black;
	padding-left: 5px;
	border-radius: 5px;
	font-size: 12px;
}
</style>
