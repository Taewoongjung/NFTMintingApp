const { observable } = require('mobx');

const userStore = observable({
    data: null
})

export { userStore };