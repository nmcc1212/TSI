import promptSync from "prompt-sync";

const prompt = promptSync();

class Card {
  constructor(public value: number, public suit: string) {}
}

class Deck {
  cards: Card[] = [];

  constructor() {
    const suits = ["hearts", "diamonds", "spades", "clubs"];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 1; j <= 13; j++) {
        this.cards.push(new Card(j, suits[i]));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal() {
    return this.cards.pop();
  }
}

class Player {
  hand: Card[] = [];

  constructor(public name: string) {}

  get score() {
    let score = 0;
    let hasAce = false;
    for (let i = 0; i < this.hand.length; i++) {
      const card = this.hand[i];
      if (card.value === 1) {
        hasAce = true;
      }
      score += Math.min(card.value, 10);
    }
    if (hasAce && score + 10 <= 21) {
      score += 10;
    }
    return score;
  }

  get isBusted() {
    return this.score > 21;
  }

  get isBlackjack() {
    return this.score === 21 && this.hand.length === 2;
  }

  hit(card: Card) {
    if (card) {
      this.hand.push(card);
    }
  }

  asciiVersionOfHand() {
    const lines = ["", "", "", "", "", "", "", "", ""];
    for (let i = 0; i < this.hand.length; i++) {
      const card = this.hand[i];
      const rank = card.value === 1 ? "A" : card.value === 11 ? "J" : card.value === 12 ? "Q" : card.value === 13 ? "K" : card.value.toString();
      const suit = card.suit === "hearts" ? "♥" : card.suit === "diamonds" ? "♦" : card.suit === "spades" ? "♠" : "♣";
      lines[0] += "┌─────────┐ ";
      lines[1] += `│${rank.padEnd(2)}       │ `;
      lines[2] += "│         │ ";
      lines[3] += `│    ${suit}    │ `;
      lines[4] += "│         │ ";
      lines[5] += `│       ${rank.padStart(2)}│ `;
      lines[6] += "└─────────┘ ";
    }
    return lines.join("\n");
  }
}

class Blackjack {
  deck: Deck;
  dealer: Player;
  player: Player;

  constructor() {
    this.deck = new Deck();
    this.deck.shuffle();
    this.dealer = new Player("Dealer");
    this.player = new Player("Player");
    this.player.hit(this.deck.deal()!);
    this.dealer.hit(this.deck.deal()!);
    this.player.hit(this.deck.deal()!);
    this.dealer.hit(this.deck.deal()!);
  }

  get isGameOver() {
    return this.player.isBusted || this.dealer.isBusted || this.player.hand.length === 5 || this.player.isBlackjack || this.dealer.isBlackjack;
  }

  get winner() {
    if (this.player.isBusted || this.dealer.isBlackjack || (!this.player.isBlackjack && this.dealer.isBlackjack) || (this.dealer.score > this.player.score && !this.dealer.isBusted)) {
      return this.dealer;
    } else if (this.dealer.isBusted || this.player.isBlackjack || (!this.dealer.isBlackjack && this.player.isBlackjack) || (this.player.score > this.dealer.score && !this.player.isBusted)) {
      return this.player;
    } else {
      return null;
    }
  }

    play() {
        while (!this.isGameOver) {
            if (this.player.score < 21 && prompt(`Your hand:  ${this.player.asciiVersionOfHand()}!?`) === "y") {
                this.player.hit(this.deck.deal()!);
            }
            if (this.dealer.score < 17) {
                this.dealer.hit(this.deck.deal()!);
            }
        }
        const winner = this.winner;
        if (winner) {
            console.log(`The winner is ${winner.name} with a score of ${winner.score}!`);
        }
        else {
            console.log(`It's a tie!`);
        }
    }
}
const game = new Blackjack();
