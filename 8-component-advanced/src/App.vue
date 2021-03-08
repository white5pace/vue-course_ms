<template>
  <div>
    <TheHeader/>
    <button @click="setSelectedComponent('ActiveGoals')">Active Goals</button>
    <button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>
    <!--    <ActiveGoals v-if="selectedComponent === 'ActiveGoals'"></ActiveGoals>-->
    <!--    <ManageGoals v-if="selectedComponent === 'ManageGoals'"></ManageGoals>-->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
  import TheHeader from "@/6-components/layout/TheHeader";
  import ActiveGoals from "@/6-components/ActiveGoals";
  import ManageGoals from "@/6-components/ManageGoals";

  export default {
    components: {ManageGoals, ActiveGoals, TheHeader},
    // 6-components: {
    //   'badge-list': BadgeList,
    // },
    data() {
      return {
        selectedComponent: 'ActiveGoals',
        activeUser: {
          name: 'Maximilian Schwarzmüller',
          description: 'Site owner and admin',
          role: 'admin',
        },
      };
    },
    methods: {
      setSelectedComponent(cmp) {
        this.selectedComponent = cmp;
      }
    }
  };
</script>

<style>
  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>