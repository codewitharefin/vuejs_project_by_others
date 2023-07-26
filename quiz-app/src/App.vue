<script setup>
import { reactive, ref } from 'vue';
import Questions from './components/Questions.vue';
import { questions } from './data/data';
reactive(questions)

let currentQuestion = ref(0)
let totalCorrect = ref(0)

function questionAnswer(isCorrect) {
  if (isCorrect) {
    totalCorrect.value++
  }
  currentQuestion.value++
}

</script>

<template>
  <h1>Quiz - Judge GK</h1>
  <Questions :questionset="questions" :currentQuestion="currentQuestion" @questionAnswer="questionAnswer" />
  <section class="result" v-if="currentQuestion === questions.length">
    <h2>Correct answer: {{ totalCorrect }} </h2>
    <h3 v-if="totalCorrect === questions.length"> <span></span>Studying has definitely paid off for you!</h3>
    <h3 v-else>Do a little more studying and you may succeed!</h3>
    <button @click="currentQuestion = 0, totalCorrect = 0" class="mb-20">Try Again</button>
  </section>
</template>

<style scoped></style>