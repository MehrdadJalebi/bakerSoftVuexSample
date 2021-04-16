export default {
  namespaced: true,
  state: {
    items: []
  },
  actions: {
    getItems () {
      return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
    }
  }
}

