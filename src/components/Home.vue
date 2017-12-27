<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/slot1">Slot Machine Demo 1</router-link>
    <router-link to="/slot2">Slot Machine Demo 2</router-link>
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
        if (document.querySelector('div[id="slot1"]').className === 'slideInUp') {
          document.querySelector('div[id="slot1"]').className = 'slideOutUp'
          this.i += 1
        } else if (document.querySelector('div[id="slot1"]').className === 'slideOutUp') {
          document.querySelector('div[id="slot1"]').className = 'slideInUp'
          this.n = this.ns[this.i]
        }
      }, interval)
    },
    stop: function () {
      clearInterval(this.intervalId)
      document.querySelector('div[id="slot1"]').className = 'slideInUp'
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
