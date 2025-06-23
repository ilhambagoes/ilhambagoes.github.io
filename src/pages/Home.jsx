// File: src/components/Home.jsx
import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home-section">
      <div className="home-overlay">
        <div className="home-content">
          <h1>
            Hello <span>World</span> !<br />
          </h1>
          <p>Welcome to my website</p>
          <p className="no-credit">Begin your adventure.</p>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <h3>Your own domain</h3>
          <p>
            Create a low-cost website with a custom domain online. Choose the
            name of your website — and it's yours… easily!
          </p>
        </div>
        <div className="feature">
          <h3>Edit wherever and whenever</h3>
          <p>
            You don’t have to wait for anybody. Edit your website easily and
            intuitively with no coding knowledge required.
          </p>
        </div>
        <div className="feature">
          <h3>Short loading times</h3>
          <p>
            It is our belief that minimizing the code and data sources of your
            website ensures not only short loading time, but smoother navigation.
          </p>
        </div>
        <div className="feature">
          <h3>Accessible from any device</h3>
          <p>
            More and more people use smartphones or tablets. We make sure your
            website works great everywhere.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
