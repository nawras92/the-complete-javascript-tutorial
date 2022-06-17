<template>
  <div>
    <h3>SIngle user {{ id }} ....</h3>
    <div class="user">
      <router-link :to="`/user/${user.id}`">{{ user.id }}</router-link>
      <h5>{{ user.username }} - {{ user.firstName }}</h5>
      <p>fav number: {{ user.favNumber }}</p>
      <p>is active: {{ user.isActive ? 'active' : 'NOT active' }}</p>
      <hr />
      <hr />
    </div>
  </div>
</template>

<script>
import { gql } from '@apollo/client/core';
export default {
  apollo: {
    user: {
      query: gql`
        query getUserFunc($id: ID!) {
          getUser(id: $id) {
            id
            username
            firstName
            favNumber
            isActive
          }
        }
      `,
      variables() {
        return {
          id: this.id,
        };
      },
      update: (data) => data.getUser,
    },
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
