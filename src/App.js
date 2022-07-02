import React from 'react';
import Product from './components/Product';
import Button from './components/Button';
import Tile from './components/Tile';
import mexicanfoodone from './assets/mexicanfood01.jpg';
import mexicanfoodtwo from './assets/mexicanfood02.jpg';
import mexicanfoodthree from './assets/mexicanfood03.jpg';
import mexicanfoodfour from './assets/mexicanfood04.jpg';
import mexicanone from './assets/mexican01.jpg';
import mexicantwo from './assets/mexican02.jpg';
import './App.css';

function App() {
  return (
    <>
      <h1>Mexican Food</h1>
      <nav>
        <Button isDisabled={false} clickHandler={() => console.log("Go to recipes!")}>
          Mexican recipes
        </Button>
        <Button isDisabled={false} clickHandler={() => console.log("Shop Mexican food!")}>
          Shop Mexican food
        </Button>
        <Button isDisabled={true} clickHandler={() => console.log("Subscribe!")}>
          Subscribe
        </Button>
      </nav>
      <main>
        <Product
          label="Best seller"
          img={mexicanfoodone}
          title="Wraps"
          price={4}
        />
        <Product
          label="Best seller"
          img={mexicanfoodtwo}
          title="Garlic"
          price={2}
        />
        <Product
          label="New"
          img={mexicanfoodthree}
          title="Ingredients"
          price={5}
        />
        <Product
          label="New"
          img={mexicanfoodfour}
          title="Wraps"
          price={3}
        />
      </main>
      <footer>
        <Tile img={mexicanone} imgDescription="Mexico" />
        <Tile title="Mexico">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
        </Tile>
        <Tile img={mexicantwo} imgDescription="Mexico" />
      </footer>
    </>
  );
}

export default App;