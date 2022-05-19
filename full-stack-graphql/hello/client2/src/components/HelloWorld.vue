<template>
  <div class="hello">
    <h1>Hello: {{ hello }}</h1>
    <hr />
    <h1>hello with name: {{ helloWithName }}</h1>
    <hr />
    <h1>Name from Props: {{ name }}</h1>
    <hr />
    <h1>Hello Prop Name: {{ helloWithPropName }}</h1>
    <hr />
  </div>
</template>

<script>
import { gql } from '@apollo/client/core';

export default {
  name: 'HelloWorld',
  props: {
    name,
  },
  apollo: {
    hello: gql`
      query {
        hello
      }
    `,
    helloWithName: {
      query: gql`
        query helloUser($username: String!) {
          helloWithName(name: $username)
        }
      `,
      variables: {
        username: 'Nawras',
      },
    },
    helloWithPropName: {
      query: gql`
        query helloUser($username: String!) {
          helloWithName(name: $username)
        }
      `,
      variables() {
        return {
          username: this.name,
        };
      },
      update: (data) => data.helloWithName,
    },
  },
  data() {
    return {
      hello: '',
      helloWithName: '',
      helloWithPropName: 'hsd',
    };
  },
};
</script>
