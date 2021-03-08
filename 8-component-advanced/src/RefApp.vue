
<template>
  <div>
    <TheHeader/>
    <BadgeList/>
    <UserInfo
        :full-name="activeUser.name"
        :info-text="activeUser.description"
        :role="activeUser.role"
    />
    <CourserGoal #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps.anotherProp }}</p>
    </CourserGoal>
  </div>
</template>


<script>
  import TheHeader from "@/6-components/TheHeader";
  import UserInfo from "@/6-components/UserInfo";
  import BadgeList from "@/6-components/BadgeList";
  import CourserGoal from "@/6-components/CourserGoal";

  export default {
    components: {CourserGoal, BadgeList, UserInfo, TheHeader},
    // 6-components: {
    //   'badge-list': BadgeList,
    // },
    data() {
      return {
        activeUser: {
          name: 'Maximilian Schwarzmüller',
          description: 'Site owner and admin',
          role: 'admin',
        },
      };
    },
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