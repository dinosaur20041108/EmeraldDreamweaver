<template>
	<div class="Sign" >
		<img src="../static/cloud.jpg" style="width: 100%;height: 100vh;object-fit: cover;position: absolute;top: 0;left: 0;"  z-index="-2">
		<video src="../static/Clouds.mp4" style="width: 100%;height: 100%;object-fit: cover;position: absolute;top: 0;left: 0;" autoplay="autoplay" loop="loop" muted="muted"></video>
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
		background-image: "../static/cloud.jpg";
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
		z-index: 5;
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
		z-index:1;
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
/* window.onload = function () {
    // 初始化函数
    function init() {
        // 设置div背景的宽高
        var background = document.getElementById("background");
        background.style.width = window.innerWidth + 'px';
        background.style.height = window.innerHeight + 'px';

        // canvas
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        return { canvas, ctx };
    }

    // 获取初始化后的 canvas 和 ctx
    const { canvas, ctx } = init();

    // 定义一个粒子数组
    let particlesArray = [];
    // 定义页面内粒子的数量
    const count = 100;

    // 定义粒子类
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            // x，y轴的移动速度  -0.5 -- 0.5
            this.directionX = Math.random() - 0.5;
            this.directionY = Math.random() - 0.5;
        }

        // 更新点的坐标
        update() {
            this.x += this.directionX;
            this.y += this.directionY;
        }

        // 绘制粒子
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = "white";
            ctx.fill();
        }
    }

    // 创建粒子
    function createParticle() {
        // 生成一个点的随机坐标
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        particlesArray.push(new Particle(x, y));
    }

    // 处理粒子
    function handleParticle() {
        particlesArray = particlesArray.filter(particle => {
            particle.update();
            particle.draw();

            // 超出范围就将这个粒子删除
            if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
                return false;
            }

            // 绘制两个点之间的连线
            for (let j = 0; j < particlesArray.length; j++) {
                if (j === particlesArray.indexOf(particle)) continue;

                const dx = particlesArray[j].x - particle.x;
                const dy = particlesArray[j].y - particle.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 100})`;
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.closePath();
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }

            return true;
        });
    }

    // 绘制函数
    function draw() {
        // 首先清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 如果粒子数量小于规定数量，就生成新的粒子
        while (particlesArray.length < count) {
            createParticle();
        }

        // 处理粒子
        handleParticle();

        // 请求下一帧
        requestAnimationFrame(draw);
    }

    // 启动绘制
    draw();
} */
</script>
