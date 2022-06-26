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
      <button class="danger" @click="showDeleteSection = !showDeleteSection">
        Delete
      </button>
      <button class="info" @click="showEditSection = !showEditSection">
        Edit
      </button>
    </div>

    <div class="delete-section" v-show="showDeleteSection">
      <p>Are you sure you want to delete this?</p>
      <button class="danger" @click="handleDeleteUser(user.id)">
        yes delete it
      </button>
      <button class="info" @click="showDeleteSection = false">Cancel</button>
      <p>{{ deleteDone }}</p>
    </div>
    <hr />
    <hr />
    <div class="edit-section" v-show="showEditSection">
      <edit-user
        :key="new Date().valueOf()"
        :firstName="user.firstName"
        :username="user.username"
        :favNumber="user.favNumber"
        :isActive="user.isActive"
        :id="user.id"
      ></edit-user>
    </div>
  </div>
</template>

<script>
import { gql } from '@apollo/client/core';
import EditUser from './EditUser.vue';
export default {
  components: {
    EditUser,
  },
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
      showDeleteSection: false,
      showEditSection: false,
      user: {
        firstName: '',
        username: '',
        favNumber: 0,
        isActive: false,
      },
      deleteDone: '',
    };
  },
  methods: {
    handleDeleteUser(id) {
      this.$apollo.mutate({
        mutation: gql`
          mutation deleteUserFunc($id: ID!) {
            removeUser(id: $id)
          }
        `,
        variables: {
          id,
        },
      });
      this.deleteDone = 'You have deleted the user successfully';
      setTimeout(() => {
        this.showDeleteSection = false;
      }, 2000);
    },
  },
};
</script>

<style>
.danger {
  background: red;
  color: white;
  padding: 1rem;
  margin: 1rem;
}

.info {
  background: lightBlue;
  color: #555;
  padding: 1rem;
  margin: 1rem;
}
</style>
