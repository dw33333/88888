<template>
  <div class="ssc-info">
  	<div class="ssc-logo">
     	<div class="openinfo">
     		第 <span class="colorblack">2018043013</span> 期 <br>剩余投注时间
     		<div class="opentime">
     			00:00
     		</div>
     	</div>
     	<div class="ssc-qihao">
     		广东11选5<br>
        第 2018043018 期
     	</div>
		
		<span class="zh">总和：
			<span class="colorfff"> 32 </span>
			<span class="colorfff"> 总和大 </span>
			<span class="colorfff"> 总和双 </span>
			龙虎：<span class="colorfff">虎</span>
			 <br>
			前三：<span class="colorfff"> 杂六 </span>
			中三：<span class="colorfff"> 半顺 </span>
			后三：<span class="colorfff"> 半顺 </span>
		</span>

     	<div class="open_number">
     		<img src="../../assets/6.png">
     		<img src="../../assets/10.png">
     		<img src="../../assets/5.png">
     		<img src="../../assets/11.png">
     		<img src="../../assets/4.png">
     	</div>
     	<div class="btns">
     		<div>开奖结果</div>
     		<div>时时彩规则</div>
     	</div>
  	</div>
  </div>
</template>
<script>
export default {

}

</script>
<style scoped lang='stylus'>
.colorblack{
	color black
}
.colorfff{
	color #fff
}
.ssc-info{
	overflow hidden
	position relative
	.ssc-logo{
		font-size 12px
		background url(../../assets/jishiqi.png) no-repeat center center
		height 200px
		.openinfo{
			position absolute
			top 26px
			left 302px
			line-height 20px
			color #fff
			
			.opentime{
				font-size 58px
				position absolute
				top 80px
				left -20px
				color red
			}
		}
		.ssc-qihao{
			    text-align center
                position absolute
                height 40px
                width 130px
                left 471px
                top 25px
                color #e9f004
                font-size: 14px
     	}
     	.open_number {
               position absolute
               top 86px
               left 480px
               img {
                   margin-right 30px
                  }
        }
        .zh {
              text-align center
              position absolute
              height 40px
              width 225px
              left 610px
              top 28px
              color #e9f004
        }
        .btns{
        	
        }
		
	}
}

</style>
