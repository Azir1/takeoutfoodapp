<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
@charset "utf-8";
/* CSS Document */
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select,figure,figcaption{
	margin:0;
	padding:0;	
}
html{
  font-size: 26.67vw;
}
body{
	font:.14rem "微软雅黑",Arial	
}
h1,h2,h3,h4,h5,h6,b,strong{
	font-weight:normal;	
}
i,em{
	font-style:normal;	
}
a{
	text-decoration:none;	
}
li{
	list-style:none;	
}
input{
	outline:none;	
}
img{
	vertical-align:top;	
}
.clearfix{
	*zoom:1;	
}
.clearfix:after{
	content:' ';
	display:block;
	height:0;
	clear:both;
	visibility:hidden;
	overflow:hidden;	
}
</style>
