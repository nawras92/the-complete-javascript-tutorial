<template>
  <div>
    <h3>users</h3>
    <div class="user" v-for="(user, index) in users" :key="index">
      <router-link :to="`/user/${user.id}`">{{ user.id }}</router-link>
      <h5>{{ user.firstName }}</h5>
      <hr />
      <hr />
    </div>
  </div>
</template>

<script>
import { gql } from '@apollo/client/core';
export default {
  apollo: {
    users: {
      query: gql`
        query {
          getAllUsers {
            id
            firstName
            username
            isActive
            favNumber
          }
        }
      `,
      update: (data) => data.getAllUsers,
    },
  },
  data() {
    return {
      users: [],
    };
  },
};
</script>
