<template>
    <div>
        <div class="color-red">This is A component!</div>
        <div class="color-red">Hello kitty</div>
        <div>{{name}}</div>
        <div></div>
        <div></div>
    </div>
</template>
<script>
export default{
    props:{
        name:''
    }
}
</script>
<style scoped>
.color-red{
    color:red
}
</style>