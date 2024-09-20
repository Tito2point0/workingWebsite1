import React from "react";

const PokeData = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <h3>Name: {pokemon.name}</h3>
      <p>ID: {pokemon.id}</p>
      <p>Supertype: {pokemon.supertype}</p>
      <p>Level: {pokemon.level}</p>
      <p>HP: {pokemon.hp}</p>
      {/* <p>Type: {pokemon.types.join(", ")}</p>

      {pokemon.subtypes && <p>Subtypes: {pokemon.subtypes.join(", ")}</p>} */}

      {pokemon.abilities && (
        <div className="container">
          <h4>Abilities:</h4>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>
                <strong>Name:</strong> {ability.name}
                <br />
                <strong>Type:</strong> {ability.type}
                <br />
                <strong>Text:</strong> {ability.text}
                <br />
              </li>
            ))}
          </ul>
        </div>
      )}

      {pokemon.attacks && (
        <div className="container">
          <h4>Attacks:</h4>
          <ul>
            {pokemon.attacks.map((attack, index) => (
              <li key={index}>
                <strong>Name:</strong> {attack.name}
                <br />
                <strong>Cost:</strong> {attack.cost.join(", ")}
                <br />
                <strong>Converted Energy Cost:</strong>{" "}
                {attack.convertedEnergyCost}
                <br />
                <strong>Damage:</strong> {attack.damage}
                <br />
                <strong>Text:</strong> {attack.text}
                <br />
              </li>
            ))}
          </ul>
        </div>
      )}

      {pokemon.weaknesses && (
        <div className="container">
          <h4>Weaknesses:</h4>
          <ul>
            {pokemon.weaknesses.map((weakness, index) => (
              <li key={index}>
                <strong>Type:</strong> {weakness.type}
                <br />
                <strong>Value:</strong> {weakness.value}
                <br />
              </li>
            ))}
          </ul>
        </div>
      )}

      {pokemon.resistances && (
        <div className="container">
          <h4>Resistances:</h4>
          <ul>
            {pokemon.resistances.map((resistance, index) => (
              <li key={index}>
                <strong>Type:</strong> {resistance.type}
                <br />
                <strong>Value:</strong> {resistance.value}
                <br />
              </li>
            ))}
          </ul>
        </div>
      )}

      {pokemon.retreatCost && (
        <p className="section">Retreat Cost: {pokemon.retreatCost.join(", ")}</p>
      )}

      {pokemon.set && (
        <div className="container">
          <h4>Set Details:</h4>
          <p>ID: {pokemon.set.id}</p>
          <p>Name: {pokemon.set.name}</p>
          <p>Series: {pokemon.set.series}</p>
          <p>Release Date: {pokemon.set.releaseDate}</p>
           <div className="icon">
          <img src={pokemon.set.images.symbol} alt="Set Symbol" />
            <img src={pokemon.set.images.logo} alt="Set Logo" />
          </div>
        </div>
      )}

      {pokemon.evolvesFrom && <p>Evolves From: {pokemon.evolvesFrom}</p>}
      {pokemon.rarity && <p>Rarity: {pokemon.rarity}</p>}
      {pokemon.flavorText && <p>Flavor Text: {pokemon.flavorText}</p>}

      {pokemon.nationalPokedexNumbers && (
        <div className="container">
          <h4>National Pokedex Numbers:</h4>
          <ul>
            {pokemon.nationalPokedexNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}

      {pokemon.legalities && (
        <div className="container">
          <h4>Legalities:</h4>
          <p>Unlimited: {pokemon.legalities.unlimited}</p>
        </div>
      )}

      {/* {pokemon.tcgplayer && (
        <div>
          <h4>TCGPlayer Data:</h4>
          <p>URL: {pokemon.tcgplayer.url}</p>
          <p>Updated At: {pokemon.tcgplayer.updatedAt}</p>
          {pokemon.tcgplayer.prices && (
            <div>
              <h5>Prices:</h5>
              <p>Low: {pokemon.tcgplayer.prices.holofoil.low}</p>
              <p>Mid: {pokemon.tcgplayer.prices.holofoil.mid}</p>
              <p>High: {pokemon.tcgplayer.prices.holofoil.high}</p>
              <p>Market: {pokemon.tcgplayer.prices.holofoil.market}</p>
            </div>
          )}
        </div>
      )} */}

      {pokemon.cardmarket && (
        <div className="container2">
          <h4>CardMarket Data:</h4>
          {/* <p>URL: {pokemon.cardmarket.url}</p>
          <p>Updated At: {pokemon.cardmarket.updatedAt}</p> */}
          {pokemon.cardmarket.prices && (
            <div>
              {/* <h5>Prices:</h5>
              <p>Average Sell Price: {pokemon.cardmarket.prices.averageSellPrice}</p>
              <p>Low Price: {pokemon.cardmarket.prices.lowPrice}</p>
              <p>Trend Price: {pokemon.cardmarket.prices.trendPrice}</p>
              <p>Images: {pokemon.images.small}</p>  */}
            </div>
          )}
            {pokemon.images && (
        <div>
          <h4>Images:</h4>
          <img className="centered-image red-border" src={pokemon.images.small} alt="Small" />
          <img  className="centered-image red-border" src={pokemon.images.large} alt="Large" />
        </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PokeData;

// import React from "react";
// import { connect } from 'react-redux';


// const PokeData = props => {
//   const { pokemon  } = props;
//   const array = Object.keys(pokemon)
//   console.log(array)

//   return (
//     <div className="pokemon-card">
//       <h2>pokemonlisto</h2>
//       <ol>
//         {Object.keys(pokemon).map((item) => (
//           <li key={item.id}>
//             <strong className="opener">{item.name}</strong>
            

//             <ul> {item.set}</ul>
//           </li>
//         ))}
//       </ol>

//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     pokemon: state.pokemon,
//     // Assuming you have this in your state
//   };
// };


// export default connect(mapStateToProps)(PokeData);

