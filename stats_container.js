

// pokercards


const colors = ['daimonds', 'hearts', 'spades', 'clubs']
var deck = [];
var hand = [];
for (i = 0; i < 4; i++) {
    for (j=2; j < 15; j++) {
        deck.push({
            score: j,
            suite: colors[i]
        });
    };
};

var dealer = deck.slice();


