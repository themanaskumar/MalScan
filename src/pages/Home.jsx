import "../styles/Home.css";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
function Home({ isLoggedIn, setLogin }) {
  return (
    <main className="main">
      <Navbar isLoggedIn={isLoggedIn} setLogin={setLogin} />
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
              <p>
                With the rapid increase in cyber threats, traditional
                signature-based malware detection methods struggle to keep up
                with evolving malware variants. This project aims to develop a
                machine learning-based malware detection system that can
                accurately classify malicious and benign executable files based
                on their extracted features. The system will analyze portable
                executable (PE) files and URLs, leveraging ML algorithms to
                detect zero-day attacks and polymorphic malware. The goal is to
                provide an efficient, automated, and scalable solution for
                malware detection, improving cybersecurity defenses.
              </p>
            </div>
            <div className="home-card">
              <div className="head">
                <h3>Introduction</h3>
              </div>
              <p>
                MalScan is a machine learning based malware detection app that helps you detect any malicious URL or any malicious Portable Executable (PE) file. The user can paste any URL in into this app and our pre-trained machine learning models will help them know if the given URL is safe to visit or not. Similarly, the user can upload any PE file (e.g. .exe files) and our ML model will let them know if that PE file is safe to be run on their system or it might contain something malicious.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="home-card">
              <div className="head">
                <h3>Proposed Solution</h3>
              </div>
              <p>
                To address the limitations of traditional signature-based
                malware detection, this project proposes a machine
                learning-driven malware detection system capable of analyzing
                both portable executable (PE) files and URLs. The system will
                extract relevant features from PE files and URLs and apply
                supervised learning models to classify them as malicious or
                benign.
              </p>
            </div>
            <div className="home-card">
              <div className="head">
                <h3>Conclusion</h3>
              </div>
              <p>
                This project successfully implements a machine learning-based malware detection system for PE files and URLs, providing a fast and reliable way to identify potential threats. By leveraging feature extraction and classification models, it enhances accuracy and efficiency compared to traditional signature-based methods. The web-based interface ensures ease of use, allowing users to test files and URLs in real time. The system's adaptability makes it well-suited for detecting evolving cyber threats. Future improvements can include deep learning models, behavioral analysis, and integration with cloud-based threat intelligence to further enhance security and detection accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
