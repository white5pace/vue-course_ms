<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Request Received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequests && !isLoading">
          <request-item
              v-for="req in receivedRequests"
              :key="req.id"
              :email="req.userEmail"
              :message="req.message"
          ></request-item>
        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
  import BaseCard from '@/6-components/ui/BaseCard';
  import RequestItem from '@/6-components/11-requests/RequestItem';
  import BaseDialog from '@/6-components/ui/BaseDialog';
  import BaseSpinner from '@/6-components/ui/BaseSpinner';

  export default {
    components: {BaseSpinner, BaseDialog, RequestItem, BaseCard},
    data() {
      return {
        isLoading: false,
        error: null,
      };
    },
    computed: {
      receivedRequests() {
        return this.$store.getters['11-requests/11-requests'];
      },
      hasRequests() {
        return this.$store.getters['11-requests/hasRequests'];
      },
    },
    created() {
      this.loadRequests();
    },
    methods: {
      async loadRequests() {
        this.isLoading = true;
        try {
          await this.$store.dispatch('11-requests/fetchRequests');
        } catch (error) {
          this.error = error.message || 'Something failed';
        }
        this.isLoading = false;
      },
      handleError() {
        this.error = null;
      },
    },
  };
</script>

<style scoped>
  header {
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
  }

  h3 {
    text-align: center;
  }
</style>