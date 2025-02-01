import "../styles/Home.css";
import Card from "../components/Card";
function Home() {
  return (
    <main>
      <div>
        <h1>Project Overview</h1>
        <div className="cards">
          <Card
            header="Domain"
            title="Machine Learning"
            imgPath="./machine.svg"
          />
          <Card
            header="Dataset Sources"
            title="Kaggle, Ember"
            imgPath="./dataset.svg"
          />
          <Card
            header="Algorithm"
            title="RFC, LightGBM"
            imgPath="./algorithm.svg"
          />
          <Card header="Framework" title="React.js" imgPath="./frame.svg" />
        </div>
        <div className="home-container">
          <div className="left">
            <div className="home-card">
              <h2>Problem Statement</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, consectetur! Exercitationem fugit molestiae aspernatur dicta quia ratione perferendis vel incidunt qui doloribus? Sequi, eveniet? Est iure, veritatis eaque cum voluptatem quia odio nostrum, facere quasi libero quos voluptas incidunt earum impedit nulla illum. Sit repellendus maiores rerum, nulla cum voluptatem repellat porro sunt vel quod, ab ex? Sunt, veritatis maxime error vitae quasi, nulla, officiis repellat deserunt quisquam fugiat accusantium?</p>
            </div>
            <div className="home-card">
              <h2>Introduction</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus atque similique qui placeat ut labore iste dignissimos harum consectetur ab quis, ipsam reprehenderit minima quaerat sunt odio fuga porro eveniet laborum commodi adipisci eum quos veniam sit. Explicabo molestiae vero, veritatis quia a deserunt dolorem totam rem recusandae ipsum quam debitis! Minus, dolorem! Esse aperiam aut, odio architecto delectus laborum voluptatum rerum, nobis cumque adipisci dolore, fugit rem nemo dolor.</p>
            </div>
          </div>
          <div className="right">
            <div className="home-card">
              <h2>Proposed Solution</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nihil aperiam aspernatur consequuntur, praesentium nam, dolores modi assumenda sapiente fugiat qui, unde neque perspiciatis at obcaecati facilis sit porro? In consequuntur cum, dolore repellat maxime, mollitia magnam laudantium dolorem voluptas nostrum ab officia? Explicabo recusandae alias incidunt? Maxime, cum minima! Reprehenderit labore dolores delectus cupiditate eveniet. Reprehenderit doloremque tenetur quidem illum. Esse quos tempora aperiam modi quaerat officia. Molestias, eaque.</p>
            </div>
            <div className="home-card">
              <h2>Conclusion</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At error unde quaerat voluptatum! Illo, possimus. Tenetur accusantium rem quam cupiditate blanditiis quas eveniet porro recusandae culpa, iusto exercitationem fugiat ab asperiores pariatur iste! Minus laudantium, corrupti natus ipsa id ad nesciunt quasi commodi omnis soluta nulla, eos asperiores harum in, ut aliquam laboriosam hic vitae fugiat vel est. Dolorum nostrum odit atque eaque doloremque voluptates deserunt ea pariatur assumenda culpa.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
