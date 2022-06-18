<template>
  <div class="edit-user">
    <h3>Edit userrrrrrrrrrr</h3>
    <p>{{ editingDone }}</p>
    <form @submit.prevent="editUserHandler(user)">
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
  props: ['firstName', 'username', 'id', 'favNumber', 'isActive'],
  data() {
    return {
      user: {
        firstName: this.firstName,
        username: this.username,
        favNumber: this.favNumber,
        isActive: this.isActive,
        id: this.id,
      },
      editingDone: '',
    };
  },
  methods: {
    editUserHandler(user) {
      this.$apollo.mutate({
        mutation: gql`
          mutation (
            $id: ID!
            $username: String!
            $firstName: String!
            $favNumber: Int!
            $isActive: Boolean!
          ) {
            editUser(
              id: $id
              username: $username
              firstName: $firstName
              isActive: $isActive
              favNumber: $favNumber
            ) {
              firstName
              id
            }
          }
        `,
        variables: {
          id: user.id,
          firstName: user.firstName,
          username: user.username,
          favNumber: user.favNumber,
          isActive: user.isActive,
        },
      });
      this.editingDone = 'you have edited the user successfully';
    },
  },
};
</script>
