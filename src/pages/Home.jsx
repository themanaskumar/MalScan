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
            borderColor="#a10a0a"
          />
          <Card
            header="Dataset Sources"
            title="Kaggle, Ember"
            imgPath="./dataset.svg"
            borderColor="#067815"
          />
          <Card
            header="Algorithm"
            title="RFC, LightGBM"
            imgPath="./algorithm.svg"
            borderColor="#620185"
          />
          <Card 
            header="Framework" 
            title="React.js" 
            imgPath="./frame.svg" 
            borderColor="#012969" 
          />
        </div>
        <div className="home-container">
          <div className="left">
            <div className="home-card">
              <div className="head">
                <h3>Problem Statement</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic explicabo similique ut! Magnam odio natus facilis, aliquid soluta amet debitis incidunt sed fugiat maiores iure sequi, corrupti distinctio dignissimos, esse tempora architecto nemo. Quisquam obcaecati deserunt architecto animi, maiores amet odio possimus cum rerum earum ipsam reprehenderit maxime aliquid illo itaque autem! Tempore, labore ipsam vero eos iste perspiciatis aliquid autem ad. Debitis dicta necessitatibus repellendus quidem, impedit cumque maiores?
              </p>
            </div>
            <div className="home-card">
            <div className="head">
                <h3>Introduction</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, optio repudiandae. Quis maiores harum omnis est saepe modi adipisci aliquam dolore amet, suscipit, a iste id autem officia? Iste, in natus, doloremque sequi reprehenderit cumque animi est voluptas quaerat iusto voluptatem maiores aspernatur enim? Doloremque culpa dolorem dolor, eligendi impedit molestiae aut nostrum odio, nulla est voluptate praesentium repellendus similique quam vel asperiores delectus temporibus aspernatur reprehenderit suscipit cumque. Ex.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="home-card">
            <div className="head">
                <h3>Proposed Solution</h3>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam tempore corporis molestias quod illum. Magnam dicta quia blanditiis ipsam modi. Molestias, distinctio. Odit voluptates necessitatibus voluptas magni voluptatum debitis rem, aspernatur dolor facilis sunt molestiae ut beatae mollitia. Repellat ipsam tempora aliquam, error iste quisquam doloremque perferendis quas similique tempore voluptatem nesciunt sapiente laborum officiis quae voluptatum inventore commodi aliquid neque. Nulla optio tenetur quam aspernatur, placeat quae asperiores!
              </p>
            </div>
            <div className="home-card">
            <div className="head">
                <h3>Conclusion</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam voluptatem vero repudiandae qui voluptas fugit quisquam ipsa natus reiciendis excepturi alias nemo necessitatibus soluta! Doloribus voluptas pariatur corporis perspiciatis temporibus! Suscipit eligendi, odio iste nobis cum cumque voluptatem quas reiciendis animi doloribus necessitatibus similique exercitationem veniam autem harum quod dicta voluptate commodi sit voluptatum pariatur assumenda. Iste, eveniet ea quasi iure earum, inventore, cupiditate nulla et dolor reprehenderit aspernatur?
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
