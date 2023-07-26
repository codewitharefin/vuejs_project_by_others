<script setup>
import { computed, reactive } from 'vue';

const properties = reactive({
  perspective: 150,
  rotatex: 0,
  rotatey: 0,
  rotatez: 0
})

let boxStyle = computed({
  get() {
    return `transform: perspective(${properties.perspective}px) rotateX(${properties.rotatex}deg) rotateY(${properties.rotatey}deg) rotateZ(${properties.rotatez}deg)`
  }
})

function reset() {
    properties.perspective = 150,
    properties.rotatex = 0,
    properties.rotatey = 0,
    properties.rotatez = 0
}

</script>

<template>
  <section>
    <h1 class="mb-100">CSS3 Perspective Playground</h1>
    <div class="playground">
      <div class="settings">
        <label for="perspective">perspective: {{ properties.perspective }}px;</label>
        <input type="range" min="100" max="1000" v-model="properties.perspective" name="perspective" id="perspective">

        <label for="rotatex">rotateX: {{ properties.rotatex }}deg;</label>
        <input type="range" min="-180" max="180" v-model="properties.rotatex" name="rotatex" id="rotatex">

        <label for="rotatey">rotateY: {{ properties.rotatey }}deg;</label>
        <input type="range" min="-180" max="180" v-model="properties.rotatey" name="rotatey" id="rotatey">

        <label for="rotatez">rotateZ: {{ properties.rotatez }}deg;</label>
        <input type="range" min="-180" max="180" v-model="properties.rotatez" name="rotatez" id="rotatez">

        <button @click="reset()" class="text-left">Reset</button>

      </div>
      <div class="output">
        <div class="rectangle" :style="boxStyle"></div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.playground {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 768px;
}

.playground label,
.playground input {
  display: block;
  text-align: left;
}

.playground input {
  margin-bottom: 30px;
}

.playground input[type="range"] {
  width: 200px;
}

.playground label {
  margin-bottom: 10px;
  margin-left: 0;
}

.settings {
  width: 50%;
  display: inline-block;
}

.output {
  display: inline-block;
  padding: 50px;
  border: 1px solid #42BB83;
}

.rectangle {
  width: 200px;
  height: 200px;
  background-color: #42BB83;
  margin: 0;
}
</style>
