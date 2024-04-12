import React from 'react';


import './styles.css';

const App = () => {
  const stephenHawkingQuotes = [
    "Intelligence is the ability to adapt to change.",
    "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
    "Look up at the stars and not down at your feet. ",
    "There is no unique picture of reality",
    "Nothing cannot exist forever.",
    // Add more quotes here as needed
  ];

  return (
    <div>
      <header className="header">
        <div className="container">
           <h1 className="title">Tribute to Stephen Hawking</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#achievements">Achievements</a>
            <a href="#gallery">Gallery</a> 
            <a href="#books">Books</a> 
            <a href="#thoughts">Thought</a> 
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <div className="hero-image-container">
              <img className="hero-image" src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg" alt="Stephen Hawking" />
            </div>
            <h2 className="hero-title">Stephen Hawking - The Visionary Physicist</h2>
            <p className="hero-description">Stephen Hawking was a renowned theoretical physicist, cosmologist, and author. His work on black holes and the origin of the universe revolutionized our understanding of space and time.</p>
            <p className="hero-description">Despite facing immense physical challenges due to ALS, Hawking continued to make groundbreaking contributions to science and inspire millions around the world.</p>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Stephen Hawking</h2>
          <p className="section-description">Stephen William Hawking was born on January 8, 1942, in Oxford, England. He showed an early interest in mathematics and science, and his academic achievements earned him a scholarship to study physics at the University of Oxford.</p>
          <p className="section-description">In 1963, Hawking was diagnosed with amyotrophic lateral sclerosis (ALS), a neurodegenerative disease that gradually paralyzed him. Despite his physical limitations, Hawking continued his research and became one of the most prominent scientists of his time.</p>
          <p className="section-description">Hawking's scientific works included a collaboration with Roger Penrose on gravitational singularity theorems in the framework of general relativity, and the theoretical prediction that black holes emit radiation, often called Hawking radiation</p>
          <p className="section-description">Hawking radiation was controversial. By the late 1970s and following the publication of further research, the discovery was widely accepted as a major breakthrough in theoretical physics. Hawking was the first to set out a theory of cosmology explained by a union of the general theory of relativity and quantum mechanics. He was a vigorous supporter of the many-worlds interpretation of quantum mechanics</p>
        </div>
      </section>
      <section id="achievements" className="achievements">
  <div className="container">
    <h2 className="section-title">Key Achievements</h2>
    <ul className="achievement-list">
      <li className="achievement-item">
        <span className="typewriter-text">Hawking Radiation: Proposed theoretical prediction that black holes emit radiation, now known as Hawking radiation.</span>
      </li>
      <li className="achievement-item">
        <span className="typewriter-text">Bestselling Author: Wrote popular science books like "A Brief History of Time," which became an international bestseller.</span>
      </li>
      <li className="achievement-item">
        <span className="typewriter-text">Lucasian Professorship: Held the prestigious Lucasian Professorship of Mathematics at the University of Cambridge, a position once held by Isaac Newton.</span>
      </li>
      <li className="achievement-item">
        <span className="typewriter-text">Presidential Medal of Freedom: Awarded the Presidential Medal of Freedom, the highest civilian honor in the United States, in 2009.</span>
      </li>
    </ul>
  </div>
</section>

      <section id="gallery" className="gallery"> 
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-images">
            <img src="https://c7.alamy.com/comp/E7NNKG/professor-stephen-hawking-with-directorstephen-finnigan-E7NNKG.jpg" alt="Image 1" />
            <img src="https://c7.alamy.com/comp/E7NMBN/professor-stephen-william-hawking-ch-cbe-frs-frsa-E7NMBN.jpg" alt="Image 2" />
            <img src="https://c7.alamy.com/comp/D3PDT0/professor-stephen-hawkins-navigates-the-narrow-streets-between-his-D3PDT0.jpg" alt="Image 3" />
            <img src="https://cdn.pixabay.com/photo/2023/01/13/03/16/stephen-hawking-7715202_1280.jpg" alt="Image 3" />
            <img src="https://media.gettyimages.com/id/463030972/photo/ee-british-academy-film-awards-2015-red-carpet-arrivals.jpg?s=1024x1024&w=gi&k=20&c=iCvB-vSckxAcuCQEbcbSjWKM79tBJ2UIsy9zWwRe8as=" alt="Image 3" />
            <img src="https://media.gettyimages.com/id/846296900/photo/dr-stephen-hawking.jpg?s=1024x1024&w=gi&k=20&c=umCbaMpH3VrLmCRWmefJaQi9aMghI6iWEGJWVYMrsd0= "alt="Image 3"/>
            <img src="https://c7.alamy.com/comp/2T4E6XJ/stephen-hawking-photograph-of-the-english-theoretical-physicist-stephen-william-hawking-1942-2018-as-a-young-man-early-1960s-2T4E6XJ.jpg" alt="Image 3" />
            <img src="https://media.gettyimages.com/id/931701976/photo/file-images-of-stephen-hawking-british-physicist-and-cosmologist-dies-at-76.jpg?s=1024x1024&w=gi&k=20&c=lVriTtjtKwowegNozLwEXKyzJYrbmqOe0teQT4MhHYE=" alt="Image 3" />
            <img src="https://media.gettyimages.com/id/460215434/photo/the-theory-of-everything-uk-premiere-red-carpet-arrivals.jpg?s=1024x1024&w=gi&k=20&c=0et9llsYLDv2Wg0jr74A-pXneLYoqnUMnwkL7UeSJDg=" alt="Image 3" />
          </div>
        </div>
      </section>
      <section id="books" className="books">
  <div className="container">
    <h2 className="section-title">Books by Stephen Hawking</h2>
    <div className="books-images">
      <img src="https://images3.penguinrandomhouse.com/cover/9780553109535" alt="Book 1" />
      <img src="https://images2.penguinrandomhouse.com/cover/9780553384666" alt="Book 2" />
      <img src="https://images4.penguinrandomhouse.com/cover/9780345535283" alt="Book 3" />
      <img src="https://images1.penguinrandomhouse.com/cover/9780553374117" alt="Book 4" />
      <img src="https://images1.penguinrandomhouse.com/cover/9780553385465" alt="Book 5" />
      <img src="https://images2.penguinrandomhouse.com/cover/9781101980491" alt="Book 6" />
    </div>
  </div>
</section>
      <section id="thoughts" className="thoughts">
        <div className="container">
          <h2 className="section-title">Stephen Hawking's Thoughts</h2>
          <ul className="thoughts-list">
            {/* Map through the array of quotes and render each as a list item */}
            {stephenHawkingQuotes.map((quote, index) => (
              <li key={index} className="thoughts-item">{quote}</li>
            ))}
          </ul>
        </div>
      </section>
 
      <footer id="footer" className="footer">
        <div className="container">
          <p>&copy; 2024 Tribute to Stephen Hawking. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
