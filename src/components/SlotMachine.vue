<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>Names: {{ ns }}</div>
    <div><input v-model="newName" type="text" placeholder="New Name" @keyup.enter="add"></input><button @click="add">Add!</button></div>
    <div v-if="slotMachineRunning === true" style="margin-bottom:100px;"><button @click="stop">Stop!</button></div>
    <div v-else style="margin-bottom:100px;"><button @click="start">Start!</button></div>
    <div id="slot" class="slideInUp" :style="styles">{{ n }}</div>
  </div>
</template>

<script>
const interval = 100

export default {
  name: 'SlotMachine',
  data () {
    return {
      msg: 'Slot Machine',
      ns: [
        'one',
        'two',
        'three'
      ],
      styles: {
        animationDuration: `${interval / 1000}s`,
        animationFillMode: 'both'
      },
      n: undefined,
      i: 0,
      interval: interval,
      intervalId: undefined,
      newName: '',
      slotMachineRunning: true
    }
  },
  created: function () {
    this.n = this.ns[0]
    this.roundRobin()
  },
  methods: {
    roundRobin: function () {
      this.intervalId = setInterval(() => {
        if (this.i === this.ns.length) {
          this.i = 0
        }
        if (document.querySelector('div[id="slot"]').className === 'slideInUp') {
          document.querySelector('div[id="slot"]').className = 'slideOutUp'
          this.i += 1
        } else if (document.querySelector('div[id="slot"]').className === 'slideOutUp') {
          document.querySelector('div[id="slot"]').className = 'slideInUp'
          this.n = this.ns[this.i]
        }
      }, interval)
    },
    stop: function () {
      clearInterval(this.intervalId)
      document.querySelector('div[id="slot"]').className = 'slideInUp'
      this.slotMachineRunning = false
    },
    start: function () {
      this.roundRobin()
      this.slotMachineRunning = true
    },
    add: function (event) {
      this.ns.push(this.newName)
      this.newName = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
