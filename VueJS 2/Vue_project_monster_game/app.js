// https://s-media-cache-ak0.pinimg.com/originals/ff/b7/1b/ffb71b573db815c33a9a947c81fef676.jpg
// http://assets1.ignimgs.com/2014/05/18/girl-zombie-the-walking-dead-amc-tv-show-imagejpg-95852b_1280w.jpg

//http://previews.123rf.com/images/zooco/zooco1410/zooco141000024/32500847-Green-monster-in-minimalist-style-with-a-stitched-wound-on-his-head-bolts-through-his-neck-funny-hai-Stock-Vector.jpg
//http://www.clipartkid.com/images/518/cute-monster-in-minimalist-style-with-green-skin-a-stitched-wound-on-yFvuov-clipart.jpg

new Vue({
    el: '#app',
    data: {
        playerName: '',
        playerColor: '',
        playerHealth: 100,
        monsterHealth: 100,
        gameRunning: false,
        showHit: false,
        strong: 'strong',
        wounded: 'wounded',
        weak: 'weak',
        rounds: [],
        playerStrong: {
            content: "url('http://combiboilersleeds.com/images/strong-man/strong-man-8.jpg')"
        },
        playerWounded: {
            content: "url('https://s-media-cache-ak0.pinimg.com/originals/ff/b7/1b/ffb71b573db815c33a9a947c81fef676.jpg')"
        },
        playerWeak: {
            content: "url('http://assets1.ignimgs.com/2014/05/18/girl-zombie-the-walking-dead-amc-tv-show-imagejpg-95852b_1280w.jpg')"
        },
        monsterStrong: {
            content: "url('http://previews.123rf.com/images/zooco/zooco1410/zooco141000027/32500852-Green-monster-in-minimalist-style-with-a-stitched-wound-on-his-head-bolts-through-his-neck-funny-hai-Stock-Vector.jpg')"
        },
        monsterWounded: {
            content: 'url("http://previews.123rf.com/images/zooco/zooco1410/zooco141000024/32500847-Green-monster-in-minimalist-style-with-a-stitched-wound-on-his-head-bolts-through-his-neck-funny-hai-Stock-Vector.jpg")'
        },
        monsterWeak: {
            content: 'url("http://www.clipartkid.com/images/518/cute-monster-in-minimalist-style-with-green-skin-a-stitched-wound-on-yFvuov-clipart.jpg")'
        },
    },

    computed: {
        playerStyle() {
            return {
                backgroundColor: this.playerColor
            }
        }
    },
    methods: {

            calculateDamage(min, max) {
                return Math.floor(Math.random() * max) + min;
            },

            attack() {
                var playerAttack = this.calculateDamage(1, 15);
                var monsterAttack = this.calculateDamage(4, 10);
                this.playerHealth -= monsterAttack;
                this.monsterHealth -= playerAttack;
                this.rounds.unshift({
                    text: ['Your hits monster for ' + playerAttack, 'Monster hits you for ' + monsterAttack]
                })

                if (this.winner()) {
                    return
                }
            },
            specialAttack() {
                var playerSpecialAttack = this.calculateDamage(3,17);
                var monsterAttack = this.calculateDamage(4,10)
                this.playerHealth -= monsterAttack;
                this.monsterHealth -= playerSpecialAttack;
                this.rounds.unshift({
                    text: ["Your special attack hits monster for " + playerSpecialAttack, "Monster hits you for " + monsterAttack]
                })

                if (this.winner()) {
                    return
                }
            },
            heal() {
                var playerHeal = this.calculateDamage(3,8);
                var playerHealingAttack = this.calculateDamage(1,5);
                var monsterAttack = this.calculateDamage(4,10);
                this.playerHealth += playerHeal;
                this.playerHealth -= monsterAttack;
                this.monsterHealth -= playerHealingAttack;

                this.rounds.unshift({

                })

                if (this.winner()) {
                    return
                }
                if (this.tooStrong()) {
                    return
                }

            },

            giveUp() {
                this.gameRunning = false;
            },
            restore() {
                this.playerHealth = 100;
                this.monsterHealth = 100;
                this.rounds = [];
            },
            tooStrong() {
                if (this.playerHealth >= 100) {
                    this.playerHealth = 100;
                }
            },
            winner() {
                if (this.monsterHealth <= 0) {
                    if (confirm("You win. Play again?")) {
                        this.restore();
                        this.gameRunning = false;
                    }
                    return true
                } else if (this.playerHealth <= 0) {
                    if (confirm("You lose. Play again?")) {
                        this.restore();
                        this.gameRunning = false;
                    }
                    return true;
                }
                return false;
            }
    }
})
