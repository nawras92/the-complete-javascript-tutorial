<template>
  <div class="add-user">
    <h3>Add userrrrrrrrrrr</h3>
    <p>{{ addingDone }}</p>
    <form @submit.prevent="addUserHandler(user)">
      <div style="margin-bottom: 1rem">
        <label for="firstName">First Name</label>
        <input type="text" name="firstName" v-model="user.firstName" />
      </div>
      <div style="margin-bottom: 1rem">
        <label for="username">Username</label>
        <input type="text" name="username" v-model="user.username" />
      </div>
      <div style="margin-bottom: 1rem">
        <label for="favNumber">Fav Number</label>
        <input type="number" name="favNumber" v-model="user.favNumber" />
      </div>
      <div style="margin-bottom: 1rem">
        <label for="isActive">is active?</label>
        <input type="checkbox" name="isActive" v-model="user.isActive" />
      </div>
      <div style="margin-bottom: 1rem">
        <button type="submit">Edit User</button>
      </div>
    </form>
  </div>
</template>

<script>
import { gql } from '@apollo/client/core';
export default {
  data() {
    return {
      user: {
        firstName: '',
        username: '',
        favNumber: 0,
        isActive: false,
      },
      addingDone: '',
    };
  },
  methods: {
    addUserHandler(user) {
      this.$apollo.mutate({
        mutation: gql`
          mutation (
            $username: String!
            $firstName: String!
            $favNumber: Int!
            $isActive: Boolean!
          ) {
            addUser(
              username: $username
              firstName: $firstName
              isActive: $isActive
              favNumber: $favNumber
            )
          }
        `,
        variables: {
          firstName: user.firstName,
          username: user.username,
          favNumber: user.favNumber,
          isActive: user.isActive,
        },
      });
      this.addingDone = 'you have added the user successfully';
    },
  },
};
</script>
