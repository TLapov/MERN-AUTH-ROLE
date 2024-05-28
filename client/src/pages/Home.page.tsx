import { Link } from "react-router-dom";

function Home() {
    return (
      <section className="home-container">
          <h1>Welcome to MERn authentication and authoraziation</h1>
          <p>
            See more information about this simple app on
            <Link to={'about'}>About page</Link>
          </p>
      </section>
    )
}

export default Home;
