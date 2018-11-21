console.log('booom');

class App {
  constructor() {
    this.config();
    this.phrase = "";
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

    this.setupOptions();
  }

  setupOptions() {
    const allOps = document.getElementsByClassName('option');
    for (var i = 0; i < allOps.length; i++) {
      allOps[i].addEventListener('click', (evt) => {
        this.phrase = evt.currentTarget.innerText;
        const optionsEl = document.getElementsByClassName('options-container ')[0];
        optionsEl.classList.remove('show-container');
        this.launchTranModule();
      });
    }
  }

  launchTranModule() {
    const tranEl = document.getElementsByClassName('translation-container ')[0];
    tranEl.classList.add('show-container');
    const animationInt = setInterval(() => {
      if (!tranEl.classList.contains('listen-second-color')) {
        tranEl.classList.add('listen-second-color');
      }
      else {
        tranEl.classList.remove('listen-second-color');
      }
    }, 500);
    setTimeout(() => {
      clearInterval(animationInt);
      tranEl.classList.remove('show-container');
      this.giveTranslationMod();
    }, 1000);
  }

  giveTranslationMod() {
    const translatedEl = document.getElementsByClassName('translated-container ')[0];
    translatedEl.classList.add('show-container');
  }

  launchListenMod() {
    const listenEl = document.getElementsByClassName('listen-container')[0];
    listenEl.classList.add('show-container');
    const animationInt = setInterval(() => {
      if (!listenEl.classList.contains('listen-second-color')) {
        listenEl.classList.add('listen-second-color');
      }
      else {
        listenEl.classList.remove('listen-second-color');
      }
    }, 500);
    setTimeout(() => {
      clearInterval(animationInt);
      listenEl.classList.remove('show-container');
      this.giveOptionsMod();
    }, 1000);
  }

  giveOptionsMod() {
    const optionsEl = document.getElementsByClassName('options-container ')[0];
    optionsEl.classList.add('show-container');
  }



  config () {
    this.setupEvents();
  }
}

const app = new App();
