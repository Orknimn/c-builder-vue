<template>
    <div class ="background-page">
        <div class="title">
        <h1>Background Tool</h1>
    </div>
    <div class="pageart">
        <img src="../../images/sample-avatar.png">
    </div>
    <div class='buttonholder'>
        <a href="" class="mainbutton">Change Background</a>
    </div>
    </div>
</template>

<script>
export default {
  name: 'BackgroundView',

}
</script>

<style scoped>

.background-page {
    background-image: url("../../images/city-background.jpg");
    height: 800px;
}
.title h1 {
    color: white;
}
</style>
