<template>
	<div class="login_box">
		<span>LOGIN</span>
		<div>
			<label for="inputId">아이디 : </label>
			<input type="text" name="id" id="inputId" />
		</div>
		<div>
			<label for="inputPass">비밀번호 : </label>
			<input type="password" name="password" id="inputPass" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'login-view',
};
</script>

<style lang="scss" scoped></style>
