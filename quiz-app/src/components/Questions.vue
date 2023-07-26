<script setup>
import { defineEmits, defineProps } from 'vue';
const props = defineProps(['questionset', 'currentQuestion'])
const emit = defineEmits(['questionAnswer'])

function submitAnswer(answer) {
    emit('questionAnswer', answer)
}
</script>

<template>
    <section class="quiz">
        <div class="progress">
            <div class="progress-bar" :style="{ width: `${currentQuestion / props.questionset.length * 100}%` }"></div>
            <h3> {{ currentQuestion }} out of {{ props.questionset.length }} questions answered</h3>
        </div>
        <div class="single-question" v-for="(question, index) in props.questionset" :key="index"
            v-show="currentQuestion === index">
            <h2> {{ index + 1 }}. {{ question.question }}</h2>
            <ul>
                <li @click="submitAnswer(option.isCorrect)" v-for="(option, index) in question.options" :key="index"> 
                {{ option.option }}</li>
            </ul>
        </div>
    </section>
</template>

<style scoped></style>