<template>
	<HomeHeader />
	<div class="content_box">
		<div class="link_box">
			<a href="/board/add">생성</a>
		</div>
		<ul class="board_list title">
			<li>번호</li>
			<li>제목</li>
			<li>작성자</li>
			<li>작성일</li>
			<li>수정일</li>
		</ul>
		<ul class="board_list">
			<li>번호</li>
			<li>제목</li>
			<li>작성자</li>
			<li>작성일</li>
			<li>수정일</li>
		</ul>
	</div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
export default {
	name: 'list-view',
	components: {
		HomeHeader,
	},
};
</script>

<style scoped>
.content_box {
	padding: 150px 0;
}
.link_box {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px 0;
}
.link_box a {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 140px;
	height: 40px;
	font-size: 18px;
	font-weight: bold;
	color: white;
	background-color: rgb(66, 66, 245);
	border: 2px solid white;
	border-radius: 5px;
}
.board_list {
	display: flex;
}
.board_list li {
	min-width: 80px;
	font-size: 18px;
}
.title li {
	font-weight: bold;
}
</style>
