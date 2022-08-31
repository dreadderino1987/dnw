console.log(Vue.version);
let date = new Date();

result = date.toLocaleString();

Vue.createApp({
  data() {
    return {
      newChatMsg: "",
      chatMessages: [],
    };
  },
  methods: {
    addNewMsg() {
      this.chatMessages.push({
        msg: this.newChatMsg,
        tstamp: result,
        user: "Joe",
        alignment: "left",
      });

      this.chatMessages.push({
        msg: "Eine Antwort",
        tstamp: result,
        user: "Bot",
        alignment: "right",
      });
    },
  },
}).mount("#app");

/*const name = "Peter"
console.log(`Hallo ${name}`)*/
