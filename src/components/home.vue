<template>
  <div>
    <headervue></headervue>
    <banner></banner>
    <moregame></moregame>
    <footervue></footervue>
  </div>
</template>
<script>
import headervue from '@/components/Header'
import banner from '@/components/Banner'
import moregame from '@/components/MoreGame'
import footervue from '@/components/Footer'

export default {
	name:'home',
	components:{
		headervue,
		banner,
		moregame,
		footervue
	}

}

</script>
<style scoped>


</style>
