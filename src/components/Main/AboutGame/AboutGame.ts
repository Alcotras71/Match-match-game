import gameImage from '../../../assets/images/game.jpg';

const AboutGame = () => {
  const aboutGameSection = document.createElement('section');
  aboutGameSection.classList.add('about-game-section');
  aboutGameSection.innerHTML = `
      <h2 class="about-game-section__title">How to play?</h2>
      <div class="about-game-section__wrapper">
        <div class="about-game-section__inner-left">
          <div
            class="about-game-section__register about-game-section__block"
          >
            <p><span>1</span> Register new player in game</p>
          </div>
          <div
            class="about-game-section__configure about-game-section__block"
          >
            <p><span>2</span> Configure your game settings</p>
          </div>
          <div class="about-game-section__start about-game-section__block">
            <span>3</span>
            <p>
              Start you new game! Remember card positions and match it
              before times up.
            </p>
          </div>
        </div>
        <div class="about-game-section__inner-right">
          <div
            class="
              about-game-section__registr
              registration
              about-game-section__block
            "
          >
            <form class="row g-3">
              <div class="mb-3">
                <label for="fname" class="form-label"> First name </label>
                <input
                  type="text"
                  class="form-control"
                  id="fname"
                  placeholder="Alex"
                />
              </div>
              <div class="mb-3">
                <label for="lname" class="form-label"> Last name </label>
                <input
                  type="text"
                  class="form-control"
                  id="lname"
                  placeholder="Brunch"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">
                  ADD USER
                </button>
                <button type="submit" class="btn btn-secondary mb-3">
                  CANCEL
                </button>
              </div>
            </form>
          </div>
          <div class="about-game-section__game">
            <img src='${gameImage}' alt="game" />
          </div>
        </div>
      </div>
  `;

  return aboutGameSection;
};

export default AboutGame;
