<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
  import CoachForm from '@/6-components/coaches/CoachForm';
  import BaseCard from '@/6-components/ui/BaseCard';

  export default {
    components: {BaseCard, CoachForm},
    methods: {
      saveData(data) {
        this.$store.dispatch('coaches/registerCoach', data);
        this.$router.replace('/coaches');
      }
    }
  };
</script>

<style scoped>

</style>