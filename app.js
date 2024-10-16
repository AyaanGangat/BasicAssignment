const app = Vue.createApp({
  data() {
    return {
      outputName: "Ayaan",
      myAge: 22,
      imageUrl:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    };
  },
  methods: {
    futureAge() {
      return this.myAge + 10;
    },
    favouriteNumber() {
      const randomNumber = Math.random(); 
      return randomNumber;
    },
  },
});

app.mount("#assignment");
