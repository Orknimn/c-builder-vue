
<template>
    <div class="roller">
        <div class="title">
        <h1>Stats Roller</h1>
        <p>Tip: Roll dice and assign stat values to your character! (Based on DnD attributes) </p>
        <p>Important: Once you roll, you need to assign a stat to that value before
          you can roll again. If you have assigned the roll to a stat, you cannot assign another stat the same number
          or change it unless you reset, so choose wisely!
        </p>
    </div>

    <div class='column-page'>
        <div class='diceholder'>
          <div class='totaller'>
            <h2>Total Calculated</h2>
            <p>(Lowest number dropped)</p>
            <h2 id = 'total'>{{getTotalStat}}</h2>
          </div>
            <div class='dice'>
                <h2 class='single-di' id="die1">{{getDice[0].value}}</h2>
                <h2 class='single-di' id="die2">{{getDice[1].value}}</h2>
                <h2 class='single-di' id="die3">{{getDice[2].value}}</h2>
                <h2 class='single-di' id="die4">{{getDice[3].value}}</h2>
            </div>
            <div class='dice-buttons'>
                <button :disabled="getDisabled" v-on:click="roll" class='button dice-button' id="roll">Roll!</button>
            </div>
            
        </div>
        <div class='description-block'>
          <p id='description'>{{getDescription}}</p>
        </div>
        <div class = 'stat-block'>
            <div class='stat'>
                <h1 v-on:click="getStatDescription('str')" id="str-stat">Strength:</h1>
                <h1 id="str">{{getStr}}</h1>
                <button :disabled="checkStr" v-on:click="setStr" class='button assign-button' id='str-assign'>Assign</button>
            </div>
            <div v-on:click="getStatDescription('dex')" class='stat'>
                <h1 id="dex-stat">Dexterity:</h1>
                <h1 id="dex">{{getDex}}</h1>
                <button :disabled="checkDex" v-on:click="setDex" class='button assign-button' id='dex-assign'>Assign</button>
            </div>
            <div v-on:click="getStatDescription('con')" class='stat'>
                <h1 id="con-stat">Constitution:</h1>
                <h1 id="con">{{getCon}}</h1>
                <button :disabled="checkCon" v-on:click="setCon" class='button assign-button' id='con-assign'>Assign</button>
            </div>
            <div v-on:click="getStatDescription('int')" class='stat'>
                <h1 id="int-stat">Intelligence:</h1>
                <h1 id="int">{{getInt}}</h1>
                <button :disabled="checkInt" v-on:click="setInt" class='button assign-button' id='int-assign'>Assign</button>
            </div>
            <div v-on:click="getStatDescription('wis')" class='stat'>
                <h1 id="wis-stat">Wisdom:</h1>
                <h1 id="wis">{{getWis}}</h1>
                <button :disabled="checkWis" v-on:click="setWis" class='button assign-button' id='wis-assign'>Assign</button>
            </div>
            <div v-on:click="getStatDescription('cha')" class='stat'>
                <h1 id="cha-stat">Charisma:</h1>
                <h1 id="cha">{{getCha}}</h1>
                <button :disabled="checkCha" v-on:click="setCha" class='button assign-button' id='cha-assign'>Assign</button>
            </div>
            <button v-on:click="reset" class="button" id="reset">Reset</button>
        </div>
        
    </div>
    </div>
</template>

<script>
export default {
  name: 'StatsRoller',
  data() {
    return {
        dice: [{value: 0}, {value: 0}, {value: 0}, {value: 0}],
        totalStat: 0,
        hasAssigned: false,
        first: true,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        description: "Click on a stat to get a description for it (from dndbeyond.com)"
    }
  },
  computed: {
      
      getDice() {
          return this.dice;
      },

      getTotalStat() {
          return this.totalStat;
      },
      getDisabled() {
          if(this.first) return false;
          return !this.hasAssigned;
      },
      checkStr() {
          return this.str > 0;
      },
      checkDex() {
          return this.dex > 0;
      },
      checkCon() {
          return this.con > 0;
      },
      checkInt() {
          return this.int > 0;
      },
      checkWis() {
          return this.wis > 0;
      },
      checkCha() {
          return this.cha > 0;
      },
      getStr() {
          return this.str;
      },   
      getDex() {
          return this.dex;
      },
      getCon() {
          return this.con;
      },
      getInt() {
          return this.int;
      },
      getWis() {
          return this.wis;
      },
      getCha() {
          return this.cha;
      },
      getDescription() {
          return this.description;
      }

  },
  methods: {
      roll() {
        
        if(this.first) {
            this.first = false;
            this.hasAssigned = true;
        }
        if(!this.hasAssigned) { return;}
        this.hasAssigned = false;
        let total = 0;
        let lowest = 6;
        for(let i=0; i <= 3; ++i) {
            let number = this.getRandom(6);
            this.dice[i].value = number;
            total += number;
            if (number <= lowest) {
                lowest = number;
            }
        }
        this.totalStat = total - lowest;
        
    },
    getRandom(sides) {
        return Math.floor(Math.random() * sides) + 1;
    },
    setStr() {
        if(this.totalStat == 0 || this.hasAssigned) return;
        this.str = this.totalStat;
        this.hasAssigned = true;
    },
    setDex() {
        if(this.totalStat == 0 || this.hasAssigned) return;
        this.dex = this.totalStat;
        this.hasAssigned = true;
    },
    setCon() {
        if(this.totalStat == 0 || this.hasAssigned) return;
        this.con = this.totalStat;
        this.hasAssigned = true;
    },
    setInt() {
        if(this.totalStat == 0 || this.hasAssigned) return;
        this.int = this.totalStat;
        this.hasAssigned = true;
    },
    setWis() {
        if(this.totalStat == 0 || this.hasAssigned) return;
        this.wis = this.totalStat;
        this.hasAssigned = true;
    },
    setCha() {
        if(this.totalStat == 0 || this.hasAssigned) return;
        this.cha = this.totalStat;
        this.hasAssigned = true;
    },
    reset() {
        this.str = 0;
        this.dex = 0;
        this.con = 0;
        this.int = 0;
        this.wis = 0;
        this.cha = 0;
        this.first = true;
        this.hasAssigned = false;
        this.totalStat = 0;
        this.dice[0].value = 0;
        this.dice[1].value = 0;
        this.dice[2].value = 0;
        this.dice[3].value = 0;
    },

    async getStatDescription(stat) {
        const url = "https://www.dnd5eapi.co/api/ability-scores/" + stat
        let response = await fetch(url);
        const json = await response.json();
        this.description = json.desc[0] + ' ' + json.desc[1];
    }
        
  }

}
</script>

<style scoped>
.single-di {
    
    width: 50px;
    height: 50px;
    display: block;
    background-color: whitesmoke;
    align-content: center;
    
}
.totaller {
    display:flex;
    align-items:center;
    flex-direction:column;
}
.totaller p {
    color:azure;
}
</style>
