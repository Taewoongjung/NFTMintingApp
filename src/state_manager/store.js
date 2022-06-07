import {number} from "prop-types";

const { observable } = require('mobx');

const userStore = observable({
    userData: {
        seq: "",
        id: "",
        name: "",
        email: "",
        createdAt: ""
    },
})

const postStore = observable({
    data: [],
    addPost(data) {
        this.data.push(data);
    },
});

export { userStore };