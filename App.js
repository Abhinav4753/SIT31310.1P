

import React from 'react';
import SearchBar from './Components/SearchBar';
import image1 from './Untitled.jpeg';
import ImageGallery from './Components/ImageGallery';
import FeatureTutorial from './Components/FeaturedTutorial';
import SignUp from './Components/SignUp';
import Box from './Components/Box';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
// import image5 from './image5.jpg';
// import image6 from './image6.jpg';
import './App.css';


const App = () => {
  // const imageUrls = [ image2, image3, image4, image5, image6];
  
  const images = [
    {
      url: image2,
      name: 'Beautiful Sunset',
      description: 'A stunning sunset over the mountains.',
      author: 'John Doe',
      rating: 4.5,
    },
    {
      url: image3,
      name: 'Calm Lake',
      description: 'A tranquil lake reflecting the surrounding nature.',
      author: 'Jane Smith',
      rating: 3.8,
    },
    {
      url: image4,
      name: 'Majestic Mountains',
      description: 'A breathtaking view of towering mountains.',
      author: 'Alex Johnson',
      rating: 5.0,
    },
  ];

  const tutorials = [
    {
      url: "https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: 'React',
      description: 'Basic of Reacts is used.',
      author: 'Myth',
      rating: 4.8,
    },
    {
      url: "https://images.pexels.com/photos/675764/pexels-photo-675764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: 'CSS',
      description: 'Styling with css and making interactive Websites.',
      author: 'Joe',
      rating: 4.5,
    },
    {
      url: "https://images.pexels.com/photos/1126387/pexels-photo-1126387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: 'Advanced CSS',
      description: 'Styling with help advanced css and making creative Websites.',
      author: 'Sam',
      rating: 4.5,
    },
    // Add more tutorial objects as needed
  ];
  


  return (
    <div className="App">
      {/* Other components */}
      <SearchBar />
      <img className="App1" src={image1} alt="My Image" />
      {/* <ImageGallery props={imageUrls}/> */}
      <h1>Featured Article</h1>
      <ImageGallery images={images} />
      <button >see all articles</button>
      <h1>Featured Tutorial</h1>
      <FeatureTutorial tutorials={tutorials} />
      <button>see all tutorials</button>
      <SignUp/>
      <Box/>
    
      
    </div>
  );
};

export default App;

