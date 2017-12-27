<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>Names: {{ ns }}</div>
    <div><input v-model="newName" type="text" placeholder="New Name" @keyup.enter="add"></input><button @click="add">Add!</button></div>
    <div v-if="slotMachineRunning === true" style="margin-bottom:100px;"><button @click="stop">Stop!</button></div>
    <div v-else style="margin-bottom:100px;"><button @click="start">Start!</button></div>
    <div style="position:relative">
      <template v-for="name, index in ns">
        <transition
          :duration="interval"
          name="custom-classes-transition2"
          enter-to-class="animated slideInUp"
          leave-to-class="animated slideOutUp"
          >
          <div v-show="i === index" style="position:absolute;left:0;right:0;">{{ name }}</div>
        </transition>
      </template>
    </div>
  </div>
</template>

<script>
const interval = 200

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
      i: 0,
      interval: interval,
      intervalId: undefined,
      newName: '',
      slotMachineRunning: true
    }
  },
  created: function () {
    this.roundRobin()
  },
  methods: {
    roundRobin: function () {
      this.intervalId = setInterval(() => {
        if (this.i + 1 === this.ns.length) {
          this.i = 0
        } else {
          this.i += 1
        }
      }, interval)
    },
    stop: function () {
      clearInterval(this.intervalId)
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
