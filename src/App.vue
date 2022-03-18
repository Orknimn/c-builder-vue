<template>
  <div id="app">
    <div id="menu">
      <router-link to="/">
          <div class="menu-item home">
            <p>Home</p>
          </div>
        </router-link>
        <router-link to="/builder">
          <div class="menu-item builder">
            <p>Builder</p>
          </div>
        </router-link>
        <router-link to="/stat-roller">
          <div class="menu-item roller">
            <p>Stats Roller</p>
          </div>
        </router-link>
        <router-link to="/background">
          <div class="menu-item background">
            <p>Background</p>
          </div>
        </router-link>
    </div>
    <router-view />
    <div class='footer'>
        <a href="https://github.com/Orknimn/cs260" class='button'>Github</a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
    background-color: #1F76B5;
}
body {
    background-color: #1F76B5;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index: 2;

}
html, body {
    height:100%;
}

#menu {
  padding: 30px;
  display: flex;
  justify-content: center;
  background-color: #18B1CC;
}

#menu a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

#menu a.router-link-exact-active {
  color: #1b2280;
}
.menu-item {
  padding-left: 10px;
  padding-right: 10px;
}

h1 {
  margin-top: 10px;
    color: aliceblue;
}
p {
    color: aliceblue;
}

.title {
    color:azure;
    margin: 0 auto;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.title h1 {
    font-size: 48px;
    text-align: justify;
 
}
.navbar-nav.navbar-center {
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
}
.pageart {
    margin: 0 auto;
    display: flex;
    margin-top: 175px;

    justify-content: center;
    z-index: 2;
}
.pageart img {
    width:125px;
    height:125px;
}

.buttonholder {
    margin: 0 auto;
    display: flex;
    margin-top: 50px;

    justify-content: center;
}
.footer {
    margin: 0 auto;
    margin-top: 80px;
    width: 100%;
    display: flex;
    background-color: #18B1CC;
    height: 80px;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
}
.title p {
    color:azure;
    width: 600px;
    margin-left: 50px;
    margin-right: 50px;
}
.description-block {
    
    width: 300px;
}
#description {
    color:azure;
    width: auto;
    height: auto;
    text-align: center;
    
}
.button {
    padding: 20px;
    background-color: #17C2AC;
    color: #010887;
    align-content: center;
    border-radius: 10px;
    text-decoration: none;
}
.test {
    height: 100px;
    width: 100%;
}
.slidercontainer {
    width:300px;
    height: auto;
}

.slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 25px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #17C2AC;
    cursor: pointer;
}
.sliders {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.column-page {
    display: flex;
    margin: 0 auto;
    width: 100%;
    height: 400px;
    
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.feature-buttons {
    width:300px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;

}
.feature-button {
    padding: 0px;
    width: 65px;
    height: 65px;
    margin: 5px;
}
.character {
    width:300px;
    height: auto;
}
.character-image {
    display: flex;
    width: 250px;
    height: 250px;
    align-items: center;
}
.diceholder {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.dice {
    display: flex;
    width: 250px;
    flex-wrap: wrap;
    align-items: center;
    justify-content:space-around;
}
.single-di {
    width: 50px;
    height: 50px;
    margin: 20px;
}
.dice-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.dice-button {
    display: block;
    width: 100px;
    text-align: center;
}
.stat-block {
    display: flex;
    flex-direction: column;
    justify-content: left;
}
.stat {
    display:flex;
    justify-content: space-between;
    margin: 5px;
    align-items: center;
}
.assign-button {
    padding:0;
    height:30px;
    margin-left: 10px;
    text-align: center;
    width: 80px;
}


.mainbutton {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 75px;
    padding-right: 75px;
    border-radius: 15px;

    text-align: center;
    background-color: #17C2AC;
    color:#010887;
    text-decoration: none;
}
.mainbutton:hover, .button:hover {
    background-color: #8dadb3;
    text-decoration: none;
}

.mainbutton:visited, .button:visited {
    background-color: #17C2AC;
    color:#010887;
}
</style>
