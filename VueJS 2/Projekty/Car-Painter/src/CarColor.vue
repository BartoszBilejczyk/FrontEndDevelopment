
<!-- This component can be used globally if we import it to main.js or locally if we import it to e.g. PaintGarage.vue  -->

<template> <!-- single file template that can be used in main.js -->
    <section :style="sectionBg"> <!-- VERY IMPORTANT - template must have only one child so here everyhing is packed into div. Everything's gotta be wrapped in one root element -->


        <h2>Current car color: {{carColor}}</h2>
        <div>
            <i class="fa fa-car" :style="carStyle"></i>
        </div>
        <hr>
        <button class="btn btn-large" @click="changeColor()">Change the color</button>
        <button class="btn btn-large" @click="reset()">Reset</button>


    </section>
</template>


<script>

function invertHex(hexnum){
  if(hexnum.length != 6) {
    alert("Ups, kolory Hex muszą mieć 6 znakow");
    return false;
  }

  hexnum = hexnum.toUpperCase();
  var splitnum = hexnum.split("");
  var resultnum = "";
  var simplenum = "FEDCBA9876".split("");
  var complexnum = new Array();
  complexnum.A = "5";
  complexnum.B = "4";
  complexnum.C = "3";
  complexnum.D = "2";
  complexnum.E = "1";
  complexnum.F = "0";

  for(var i=0; i<6; i++){
    if(!isNaN(splitnum[i])) {
      resultnum += simplenum[splitnum[i]];
    } else if(complexnum[splitnum[i]]){
      resultnum += complexnum[splitnum[i]];
    } else {
      alert("Hex colors must only include hex numbers 0-9, and A-F");
      return false;
    }
  }

  return resultnum;
}

    export default {
        data: function() {
            return {
                carColor: '000000',
                colorInverted: ''

            };
        },
        methods: {
            changeColor() {
                this.carColor = Math.floor(Math.random()*16777215).toString(16);
                this.colorInverted = "#" + invertHex(this.carColor);
                this.carColor = "#" + this.carColor
                console.log(this.carColor);
                console.log(this.colorInverted);

            },
            reset() {
                this.carColor = '000000',
                this.carColor = "#" + this.carColor
                this.colorInverted = ''
            }
        },
        computed: {
            carStyle() {
                return {
                    color: this.carColor
                }
            },
            sectionBg() {
                return {
                    height: '100vh',
                    width: '100vw',
                    backgroundColor: this.colorInverted,
                    color: this.carColor
                }
            }
        },
    }
</script>


<style>
    html, body {
        margin: 0;
        text-align: center;
        font-size: 12px;
    }

    h2:first-of-type {
        margin: 0;
        padding: 40px;
    }

    .btn {
        margin: 50px
    }

    .fa-car {
        font-size: 20rem;
    }

    hr {
        margin: 40px;
        color: #fff
    }

</style>
