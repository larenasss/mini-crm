<template>
  <app-page title="Помощь" :back="true">
    <question-item
      v-for="question in questions"
      :key="question.title"
      :question="question">
    </question-item>
  </app-page>
</template>

<script>
import AppPage from '@/components/ui/AppPage';
import QuestionItem from '@/components/questions/QestionItem';
export default {
  setup() {
    const questions = [
      {
        title: 'Что есть в данной системе?',
        text: 'Тут есть все, для того, что бы работать с заявками'
      },
      {
        title: 'Как работает авторизация и работа с заявками?',
        text: 'Все реализованно через Firebase'
      }
    ];

    return {
      questions
    };
  },
  components: { AppPage, QuestionItem }
};
</script>
