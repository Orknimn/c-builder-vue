<template>
    <div class="builder-page">
        <div class='color-overlay'></div>
    <div class="title">
        <h1>Builder</h1>
        <p>Tip: Move the sliders to change color!</p>
    </div>
    <div class='column-page'>
        <div class='feature-selector'>
            <div class='feature-display'>

            </div>
            <div class='feature-buttons'>
                <a href='' class='button feature-button'>Hair</a>
                <a href='' class='button feature-button'>Skin</a>
                <a href='' class='button feature-button'>Eyes</a>
                <a href='' class='button feature-button'>Nose</a>
                <a href='' class='button feature-button'>Mouth</a>
                <a href='' class='button feature-button'>Head</a>
                <a href='' class='button feature-button'>Body</a>
                <a href='' class='button feature-button'>Shirt</a>
                <a href='' class='button feature-button'>Coat</a>
                <a href='' class='button feature-button'>Pants</a>
                <a href='' class='button feature-button'>Shoes</a>
                <a href='' class='button feature-button'>Feature</a>
            </div>
        </div>
        <div class = 'sliders'>
            <div class='slidercontainer'>
                <input type='range' min="0" max="255" value="0" class='slider rgb-r'>
            </div>
            <div class='slidercontainer'>
                <input type='range' min="0" max="255" value="0" class='slider rgb-g'>
            </div>
            <div class='slidercontainer'>
                <input type='range' min="0" max="255" value="0" class='slider rgb-b'>
            </div>
        </div>
        <div class = 'character'>
            <img class='character-image' src='../../images/sample-avatar.png'>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'BuilderView',

}
</script>

