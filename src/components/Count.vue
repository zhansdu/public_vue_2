<template>
    <div class="color-red">
        <div v-for="(l,index) in ls" :key="index">{{l}}</div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.color-red{
color:red;
}
</style>