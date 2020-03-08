import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="Characters">
      ${characters.results.map(character =>`
          <article class="Character-item">
            <a href="#/${character.id}/">
              <img src="${character.image}" alt="${character.name}">
              <div class="info">
                <h2>${character.name}</h2>
                <h3>${character.status}</h3>
              </div>
            </a>
          </article>`
        ).join('')}
    </div>
  `;
  return view;
};

export default Home;