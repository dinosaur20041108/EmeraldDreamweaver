<template>
	<div class="Sign">
		<h1>Sign in/ Sign up</h1>
		<div class="log">
			<div :class="dinolayout">
				<div class="dinolayout-Signin" v-if="disfiex == 0">
					<h2 class="dinolayoutH2">登录账户</h2>
					<input type="text" placeholder="user">
					<input type="text" placeholder="password">
					<button class="inupbutton">登录</button>
				</div>
				<div class="dinolayout-Signup" v-if="disfiex == 1">
					<h2 class="dinolayoutH2">注册账户</h2>
					<input type="text" placeholder="user">
					<input type="text" placeholder="password">
					<button class="inupbutton">注册</button>
				</div>
 
			</div>
			<div :class="dinolaytitle">
				<div class="dinolaytitle-Signin" v-if="disfiex == 0">
					<h2 class="dinolaytitleH2">欢迎回家，绿意织梦者！</h2>
					<p class="dinolaytitleP">
						没有账户？点击下方按钮加入我们！
					</p>
					<div class="buttongohs" @click="Signin">注册</div>
				</div>
				<div class="dinolaytitle-Signup" v-if="disfiex == 1">
					<h2 class="dinolaytitleH2">欢迎成为绿意织梦者！</h2>
					<p class="dinolaytitleP">已经是绿意织梦者？点击下方按钮登录社区！</p>
					<div class="buttongohs" @click="Signup">登录</div>
				</div>
			</div>
		</div>
 
	</div>
</template>
<style scoped>
	.Sign {
		width: 100%;
		height: 100%;
		background-image: '../static/img/background.jpg';
		background-size: 100% 100%;
		background-repeat: no-repeat;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
 
	h1 {
		margin-top: 50px;
		font-size: 30px;
		color: black;
	}
 
	.log {
		background-color: rgb(255, 255, 255);
		border-radius: 10px;
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
		/* position: relative;
		overflow: hidden; */
		width: 768px;
		height: 400px;
		max-width: 100%;
		max-height: 100%;
		min-height: 300px;
		margin-top: 10px;
		display: flex;
		background: -webkit-linear-gradient(right, #4284db, #27e0bb);
	}
 
	.dinolayout {
		border-radius: 10px 0 0 10px;
		width: 50%;
		height: 100%;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
 
	.dinolayoutleft {
		border-radius: 0px 10px 10px 0px;
		width: 50%;
		height: 100%;
		background-color: #fff;
		transform: translateX(100%);
		transition: transform 0.6s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
	}
 
	.dinolayoutright {
		border-radius: 10px 0 0 10px;
		width: 50%;
		height: 100%;
		background-color: #fff;
		transform: translateX(0%);
		transition: transform 0.6s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
	}
 
	.dinolaytitle {
		border-radius: 0px 10px 10px 0px;
		width: 50%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0);
		display: flex;
		align-items: center;
		justify-content: center;
	}
 
 
	.dinolaytitleH2 {
		font-size: 30px;
		color: #fff;
		margin-top: 20px;
	}
 
	.dinolaytitleP {
		font-size: 15px;
		color: #fff;
		margin-top: 20px;
	}
 
	.dinolaytitleleft {
		border-radius: 0px 10px 10px 0px;
		width: 50%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0);
		display: flex;
		align-items: center;
		justify-content: center;
		transform: translateX(0%);
		transition: transform 0.6s ease-in-out;
	}
 
	.dinolaytitleright {
		border-radius: 0px 10px 10px 0px;
		width: 50%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0);
		display: flex;
		align-items: center;
		justify-content: center;
		transform: translateX(-100%);
		transition: transform 0.6s ease-in-out;
	}
 
	.dinolaytitle-Signin {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
 
	.dinolaytitle-Signup {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
 
	.buttongohs {
		width: 180px;
		height: 40px;
		border-radius: 50px;
		border: 1px solid #fff;
		color: #fff;
		font-size: 15px;
		text-align: center;
		line-height: 40px;
		margin-top: 40px;
	}
 
	.dinolayoutH2 {
		font-size: 25px;
		color: black;
		/* width: 250px; */
	}
 
	.dinolayout-Signin {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
 
	.dinolayout-Signup {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
 
	input {
		background-color: #eee;
		border: none;
		padding: 12px 15px;
		margin: 10px 0;
		width: 240px;
	}
	h3{
		font-size: 10px;
		margin-top: 10px;
		cursor: pointer;
	}
	.inupbutton{
		background-color: #29eac4;
		border: none;
		width: 180px;
		height: 40px;
		border-radius: 50px;
		font-size: 15px;
		color: #fff;	
		text-align: center;
		line-height: 40px;
		margin-top: 30px;
	}
</style>
 
<script>
	export default {
		data() {
			return {
				dinolayout: 'dinolayout',
				dinolaytitle: 'dinolaytitle',
				disfiex: 0
			}
		},
		methods: {
			Signin() {
				this.dinolayout = "dinolayoutleft"
				this.dinolaytitle = "dinolaytitleright"
				setTimeout(() => {
					this.disfiex = 1
				}, 200)
			},
			Signup() {
				this.dinolayout = "dinolayoutright"
				this.dinolaytitle = "dinolaytitleleft"
 
				setTimeout(() => {
					this.disfiex = 0
				}, 200)
 
			}
		}
	}
</script>