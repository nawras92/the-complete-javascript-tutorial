import { createStore } from 'vuex';
import ItemsApi from './api/itemsApi';

const types = {
  SET_MESSAGE: 'SET_MESSAGE',
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  UPDATE_CURRENT_ITEM: 'UPDATE_CURRENT_ITEM',
  EDIT_ITEM: 'EDIT_ITEM',
};

const mutations = {
  [types.UPDATE_CURRENT_ITEM](state, item) {
    state.currentItem = item;
  },
  [types.SET_MESSAGE](state, newMessage) {
    state.message = newMessage;
  },
  [types.ADD_ITEM](state, newItem) {
    state.items.push(newItem);
  },
  [types.DELETE_ITEM](state, item) {
    const index = state.items.findIndex(
      (i) => i.text === item.text && i.background === item.background
    );
    if (index > -1) {
      state.items.splice(index, 1);
    }
  },
  [types.EDIT_ITEM](state, { oldItem, newItem }) {
    const index = state.items.findIndex(
      (i) => i.text === oldItem.text && i.background === oldItem.background
    );
    if (index > -1) {
      state.items[index] = newItem;
    }
  },
};

const actions = {
  setMessage(context, newMessage) {
    const { commit } = context;
    commit(types.SET_MESSAGE, newMessage);
  },
  loadAllItems(context) {
    const { commit } = context;

    ItemsApi.fetchAllItems().then((all) => {
      all.forEach((item) => commit(types.ADD_ITEM, item));
    });
  },
  addItem(context, newItem) {
    const { commit } = context;
    commit(types.ADD_ITEM, newItem);
  },
  deleteItem(context, itemToDelete) {
    const { commit } = context;
    commit(types.DELETE_ITEM, itemToDelete);
  },
  updateCurrentItem(context, currentItem) {
    const { commit } = context;
    commit(types.UPDATE_CURRENT_ITEM, currentItem);
  },
  editItem({ commit }, payload) {
    commit(types.EDIT_ITEM, payload);
  },
};

const store = createStore({
  state: {
    message: 'hello from store',
    items: [],
    currentItem: {
      text: '',
      background: '#ffffff',
    },
  },

  mutations,
  actions,
  getters: {
    getCurrentItem(state) {
      return state.currentItem;
    },
    getItems(state) {
      return state.items;
    },
  },
});

export default store;
