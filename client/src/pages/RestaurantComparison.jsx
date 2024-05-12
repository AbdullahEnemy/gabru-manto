import React from "react";
import TopTextStrip from "../components/TopTextStrip";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ComparisonBox from "../components/ComparisonBox";

let restaurants = [
  {
    name: " Monal Lahore",
    poe: "Asad Jutt",
    contact: 12345,
    password: "12345",
    cuisine: "International",
    rating: 3,
    imgUrl: "https://ourguider.com/wp-content/uploads/2024/04/Monal.jpg",
  },
  {
    name: "Haveli Restaurant",
    poe: "Chaudhary Bhaggar",
    contact: 12345,
    password: "12345",
    cuisine: "Pakistani",
    rating: 4,
    imgUrl:
      "https://www.haveli.com.pk/wp-content/uploads/photo-gallery/imported_from_media_libray/9_(1).jpg?bwg=1566305941",
  },
  {
    name: "The Kitchen Bistro",
    poe: "Jaggah Khan",
    contact: 12345,
    password: "12345",
    cuisine: "Mediterranean",
    rating: 1,
    imgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/12/69/0e/0d/the-kitchen.jpg",
  },
  {
    name: "Spice Bazar",
    poe: "Mahawra Ustaad",
    contact: 123,
    password: "12345",
    cuisine: "South-East Asian",
    rating: 2,
    imgUrl:
      "https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2022/06/1440x900-6-2-1024x640.jpg",
  },
  {
    name: "Butt Karahi Tikka",
    poe: "Rustam Baloch",
    contact: 12345,
    password: "12345",
    cuisine: "Barbecue",
    rating: 4,
    imgUrl:
      "https://foodoplanet.com/wp-content/uploads/2020/01/80370186_171580787575757_5971652309938077696_n.jpg",
  },
];

function RestaurantComparison() {
  return (
    <>
      <TopTextStrip />
      <Navbar />
      <ComparisonBox
        Restaurant1={restaurants[0]}
        Restaurant2={restaurants[2]}
      />
      <Footer />
    </>
  );
}

export default RestaurantComparison;
