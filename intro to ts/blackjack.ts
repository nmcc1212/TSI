const prompt = require('prompt-sync')();

class Card {
    constructor(public value: number, public suit: string) { }
}

class Deck {
    cards: Card[] = [];
    constructor() {
        const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
        for (let i = 0; i < suits.length; i++) { // 4 suits
            for (let j = 1; j <= 13; j++) { // 13 cards in a suit
                this.cards.push(new Card(j, suits[i])); // push a new card with j value and suit
            }
        }
    }
    deal() {
        return this.cards.pop();
    }
    shuffle() {
        for (let i = this.cards.length - 1 ; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            const temp = this.cards[i];
            this.cards[i] = this.cards[randomIndex];
            this.cards[randomIndex] = temp;
        }
    }
}

class Player {
    hand: Card[] = [];
    constructor(public name: string) { }

    get score() {
        let score = 0
        let hasAce = false
        for (let i=0; i < this.hand.length; i++) {
            const card = this.hand[i]
            if (card.value === 1 ) {
                hasAce = true
            }
            score += Math.min(card.value, 10) // card value or 10 for face cards

        }
        if (hasAce && score + 10 <= 21) { // if ace, and score + 10 is less than 21, add 10
            score += 10
        }
        return score
    }
    get isBusted() {
        return this.score > 21
    }
    get isBlackjack() {
        return this.score === 21 && this.hand.length === 2
    }
    hit (card: Card) {
        if (card) {
            this.hand.push(card);
        }
    }


}

class Main {
    deck: Deck
    player: Player
    dealer: Player

    constructor() {
        this.deck = new Deck()
        this.deck.shuffle()
        this.player = new Player('Player')
        this.dealer = new Player('Dealer')
        this.player.hit(this.deck.deal()!)
        this.dealer.hit(this.deck.deal()!)
        this.player.hit(this.deck.deal()!)
        this.dealer.hit(this.deck.deal()!)
    }

    get isGameOver() {
        return this.player.isBusted || this.dealer.isBusted || this.player.hand.length === 5 || this.player.isBlackjack || this.dealer.isBlackjack; // if player is busted, dealer is busted, player has 5 cards, player has blackjack, dealer has blackjack
      }
    
    get winner() {
        if (this.player.isBusted || this.dealer.isBlackjack || (!this.player.isBlackjack && this.dealer.isBlackjack) || (this.dealer.score > this.player.score && !this.dealer.isBusted)) { // if player is busted, dealer has blackjack, player doesn't have blackjack, dealer has higher score and isn't busted
            return this.dealer;
        } else if (this.dealer.isBusted || this.player.isBlackjack || (!this.dealer.isBlackjack && this.player.isBlackjack) || (this.player.score > this.dealer.score && !this.player.isBusted)) {
            return this.player;
        } else {
            return null;
        }
    }
    play() {
        while (!this.isGameOver) {
            if (this.player.score < 21 && confirm(`Your hand: ${this.player.hand.map(card => card.value + card.suit).join(", ")}. Hit?`)) {
                this.player.hit(this.deck.deal()!);
              }
              if (this.dealer.score < 17) {
                this.dealer.hit(this.deck.deal()!);
              }
            }
            const winner = this.winner;
            if (winner) {
                console.log(`${winner.name} wins, with a score of ${winner.score}`);
            } else {
                console.log("Draw.");
            }
        }
    }

const game = new Main()
game.play()