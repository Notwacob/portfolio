import React, { useState } from "react";
// eslint-disable-next-line
import styled from "styled-components";

const SlideButton = styled.button`
  border: none;
  background-color: #6cf5c2;
  border-radius: 5px;
  margin: 0 5px;
  padding: 5px 10px;
  height: 500px;
  &:hover {
    background-color: #1fffad;
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Link = styled.a`
  padding: 10px;
  border-radius: 10px;
  background-color: #6cf5c2;
  color: #2c2851;
  position: absolute;
  bottom: 20px;
  border: 3px solid black;
  &:hover {
    background-color: #2c2851;
    color: #6cf5c2;
    border: 3px solid #6cf5c2;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 700px;
  height: 500px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
`;

const CodingChallenges = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: "Starfield Simulation",
      description: "This is a simulation of a starfield",
      button: "https://editor.p5js.org/Notwacob/full/cd0DGq3vP",
      imageUrl: "https://media.discordapp.net/attachments/1081311787821043805/1114009824720588830/image.png?width=661&height=662",
    },
    {
      id: 2,
      title: "Challenge 2",
      description: "Implement a binary search algorithm.",
      button: "",
      imageUrl: "/path/to/image2.jpg",
    },
    {
      id: 3,
      title: "Challenge 3",
      description: "Create a component for displaying a user profile.",
      button: "",
      imageUrl: "/path/to/image3.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SlideButton onClick={prevSlide}>
        <Icon src="/assets/actions/left-arrow.png" alt="Previous" />
      </SlideButton>
      <CarouselContainer imageUrl={slides[currentSlide].imageUrl}>
        <div style={{
            padding: "25px",
            border: "5px solid black",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
        }}>
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].description}</p>
        </div>
        <Link href={slides[currentSlide].button}>Project Link</Link>
      </CarouselContainer>
      <SlideButton className="Button" onClick={nextSlide}>
        <Icon src="/assets/actions/right-arrow.png" alt="Next" />
      </SlideButton>
    </div>
  );
};

export default CodingChallenges;