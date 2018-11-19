console.log('booom');

class App {
  constructor() {
    this.config();
  }

  setupEvents() {
    const initEl = document.getElementsByClassName('initial-message-container')[0];
    initEl.addEventListener('click', (evt) => {
      evt.currentTarget.classList.remove('show-container');
      this.launchListenMod();
    });

    const listenEl = document.getElementsByClassName('listen-container')[0];
    listenEl.addEventListener('click', (evt) => {
      evt.currentTarget.classList.remove('show-container');
      this.giveOptionsMod();
    });
  }

  launchListenMod() {
    const listenEl = document.getElementsByClassName('listen-container')[0];
    listenEl.classList.add('show-container');
    setInterval(() => {
      if (!listenEl.classList.contains('listen-second-color')) {
        listenEl.classList.add('listen-second-color');
      }
      else {
        listenEl.classList.remove('listen-second-color');
      }
    }, 1000);
  }

  giveOptionsMod() {
    const optionsEl = document.getElementsByClassName('options-container ')[0];
    optionsEl.classList.add('show-container');
  }

  config () {
    console.log('booom');
    this.setupEvents();
  }
}

const app = new App();
