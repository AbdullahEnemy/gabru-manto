import React from "react";
import TopTextStrip from "../components/TopTextStrip";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopPickCard from "../components/TopPickCard";
import RestaurantCard from "../components/RestaurantCard";

// Retrieving Data For Recommending Restaurants

let foodItems = [
  {
    name: "Monal's Signature Smash Burger",
    restaurantName: "Monal Lahore",
    cuisine: "International",
    price: 1495,
    imgUrl:
      "https://static.alideda.com/wp-content/uploads/2023/06/smes-burger-double.jpg",
  },
  {
    name: "Gola Kabab",
    restaurantName: "Haveli Lahore",
    cuisine: "Barbecue",
    price: 1295,
    imgUrl:
      "https://www.chilitochoc.com/wp-content/uploads/2019/07/gola-kebab-featured-image.jpg",
  },
  {
    name: "Royal Biryani",
    restaurantName: "Butt Karahi Tikka",
    cuisine: "Pakistani",
    price: 2500,
    imgUrl:
      "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1200,h_630,d_au:cuisines:indian-4.jpg/v1/au/restaurants/11022284.jpg ",
  },
  {
    name: "Grilled Lamb Chops",
    restaurantName: "Cooco's Den",
    cuisine: "Barbecue",
    price: 1800,
    imgUrl:
      "https://www.seriouseats.com/thmb/7krlJdfnpXB53aqHg-vBSHjiDPc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfectly-grilled-lamb-rib-or-loin-chops-recipe-hero-03-262fe2defc7c491688cb2d363dad3446.JPG",
  },
];

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

async function fetchData() {
  try {
    const response = await fetch("http://localhost:4000/restaurants/show-all");
    const res = await response.json();
    // restaurants = res;
  } catch (err) {
    console.error("Error fetching data", err);
  }
}
fetchData();
// console.log("Rest (Home):", restaurants);

function Home() {
  return (
    <>
      <TopTextStrip />
      <Navbar />

      {/* Hero Section */}
      <div className="hero my-36">
        <div className="hero-content flex">
          <div className="flex flex-col gap-24 font-bold">
            <h1 className="text-[128px]">GABRU</h1>
            <h1 className="text-[128px]">& MANTO.</h1>
          </div>
          <img className="ml-16" src="home-hero-graphic.png" alt="" />
        </div>
      </div>

      {/* Top Picks Section */}

      <div className="flex flex-col mx-20">
        <h1 className="mb-8">Top Picks For You.</h1>

        {/* TODO: Make this a scrollable daisy component or just use scroll-x */}
        {/* TODO: render this through a loop on database */}
        <div className="flex justify-center gap-16 border-y-2 border-secondary py-8 overflow-scroll">
          {foodItems.map((val) => {
            return (
              <TopPickCard
                imgUrl={val.imgUrl}
                name={val.name}
                price={val.price}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col page-section mb-16">
        <h1>Gabru-Manto Selections.</h1>

        <div className="flex justify-between mt-12">
          <div className="selections-section">
            <div className="selections-title">
              <h1>Gabru</h1>
            </div>

            <div className="flex flex-wrap mt-16 gap-16 justify-center">
              {restaurants.map((rest, ind) => {
                if (ind >= restaurants.length / 2)
                  return (
                    <RestaurantCard imgUrl={rest.imgUrl} name={rest.name} />
                  );
              })}
            </div>
          </div>

          <div className="selections-section">
            <div className="selections-title">
              <h1>Manto</h1>
            </div>

            <div className="flex flex-wrap mt-16 gap-16 justify-center">
              {restaurants.map((rest, ind) => {
                if (ind < restaurants.length / 2)
                  return (
                    <RestaurantCard imgUrl={rest.imgUrl} name={rest.name} />
                  );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
