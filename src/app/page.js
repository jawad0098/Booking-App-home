// React and Next.js imports
import React from 'react';
import Image from 'next/image';

// Material UI Icons
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ShareIcon from '@mui/icons-material/Share';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { SvgIcon } from '@mui/material'; 

// Image imports
import Card1 from '../../public/card-1.webp';
import Card2 from '../../public/card-2.jpg';
import Card3 from '../../public/card-3.jpg';
import Card4 from '../../public/card-4.jpg';
import Card5 from '../../public/card-5.jpg';
import Card6 from '../../public/card-6.jpg';



const cardData = [
  {
    imgSrc: Card1,
    price: "$4,200/mo",
    title: "Boston Commons Retreat",
    beds: 3,
    baths: 3,
    rooms: 3,
    location: "Austin TX",
  },
  {
    imgSrc: Card2,
    price: "$4,200/mo",
    title: "Boston Commons Retreat",
    beds: 3,
    baths: 2,
    rooms: 2,
    location: "Austin TX",
  },
  {
    imgSrc: Card3,
    price: "$4,200/mo",
    title: "Boston Commons Retreat",
    beds: 4,
    baths: 2,
    rooms: 3,
    location: "Austin TX",
  },
  {
    imgSrc: Card4,
    price: "$3,200/mo",
    title: "Boston Commons Retreat",
    beds: 4,
    baths: 2,
    rooms: 3,
    location: "Austin TX",
  },
  {
    imgSrc: Card5,
    price: "$2,200/mo",
    title: "Boston Commons Retreat",
    beds: 4,
    baths: 2,
    rooms: 3,
    location: "Austin TX",
  },
  {
    imgSrc: Card6,
    price: "$4,20/mo",
    title: "Boston Commons Retreat",
    beds: 4,
    baths: 2,
    rooms: 3,
    location: "Austin TX",
  },
];



const Card = ({ imgSrc, price, title, beds, baths, rooms, location }) => (
  <div className="main-card shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-2xl">
    <div className="card-1 relative rounded-t-2xl">
      <Image
        src={imgSrc}
        alt={title}
        width={500}
        height={500}
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="tile-a absolute top-4 right-4">
        <span>{price}</span>
      </div>
    </div>
    <div className="card-title pl-4 pt-4 pb-4">
      <p>Apartment</p>
      <h2 className="font-medium">{title}</h2>
    </div>
    <div className="beds-card-1 flex items-center pl-5 pr-5 pb-4 justify-center flex-wrap gap-5">
      <div className="pl-0">
        <SvgIcon component={BedIcon} />
        <span className="p-0">{beds} Beds</span>
      </div>
      <div className="pl-0">
        <SvgIcon component={BathtubIcon} />
        <span className="p-0">{baths} Baths</span>
      </div>
      <div className="pl-0">
        <SvgIcon component={MeetingRoomIcon} />
        <span className="p-0">{rooms} Rooms</span>
      </div>
      <div className="pl-0">
        <SvgIcon component={MeetingRoomIcon} />
        <span className="p-0">{rooms} Rooms</span>
      </div>
      <div className="pl-0">
        <SvgIcon component={MeetingRoomIcon} />
        <span className="p-0">{rooms} Rooms</span>
      </div>
    </div>
    <div className="sec-map flex items-center justify-between p-4">
      <div className="map">
        <span>{location}</span>
      </div>
      <div className="map-dev">
        <span className="map-btn">Detail</span>
      </div>
    </div>
  </div>
);


const Page = () => {
  return (
    <>
     
     <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-3.5">
    {cardData.map((card, index) => (
      <Card
        key={index}
        imgSrc={card.imgSrc}
        price={card.price}
        title={card.title}
        beds={card.beds}
        baths={card.baths}
        rooms={card.rooms}
        location={card.location}
      />
    ))}
  </div>

      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
        <div className='col-span-2'>
          <div className="sec-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-5 mt-6 mb-6">
            <p>Apartment</p>
            <h2 className='font-medium text-3xl mt-3 mb-3'>Boston Commons Retreat</h2>
            <span>120 Tremont Street Boston ,MA 02111</span>
            <h2 className='heding-sec'>Rates & Option</h2>
            <div className='flex items-center pt-5 justify-around flex-wrap gap-5'>
              <div><p>Nighty <SvgIcon component={ClearIcon} /> { }</p> </div>
              <div><p>Weekly <span className='stile'>$1,100</span></p></div>
              <div><p>Monthly <span className='stile'>$4,200</span></p></div>
            </div>
          </div>
          <div className='shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-5 mt-6 mb-6'>
            <h2 className='font-medium text-2xl mb-3'>Description & Details</h2>
            <div className=" flex items-center pl-5 pr-5 pb-4 justify-evenly flex-wrap gap-0">
              <div className='pl-0'>
                <SvgIcon component={BedIcon} /> { }
                <span className="p-0">3 Beds</span>
              </div>
              <div className='pl-0'>
                <SvgIcon component={BathtubIcon} /> { }
                <span className="p-0">3 Beds</span>
              </div>
              <div className='pl-0'>
                <SvgIcon component={MeetingRoomIcon} /> { }
                <span className="p-0">3 Beds</span>
              </div>
            </div>
            <div>
              <p>This is a beautiful apartment located near the commons</p>
            </div>
          </div>
          <div className='shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-5 mt-6 mb-6'>
            <div className="sec-3">
              <h2 className='font-medium text-2xl mb-3'>Amenities</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            <div className='third-sec'>
                <div className='seccc-3'><p><SvgIcon className='coloree' component={DoneIcon} /> { }wifi </p> </div>
                <div className='seccc-3'><p><SvgIcon className='coloree' component={DoneIcon} /> { }Full kitchen </p> </div>
                <div className='seccc-3'><p><SvgIcon className='coloree' component={DoneIcon} /> { }Washer & Dryer</p> </div>
                <div className='seccc-3'><p><SvgIcon className='coloree' component={DoneIcon} /> { }Balcony/patio</p> </div>
                <div className='seccc-3'><p><SvgIcon className='coloree' component={DoneIcon} /> { }Coffe Maker</p> </div>
              </div>
              <div className='third-sec'>
                <div className='seccc-3'><p><SvgIcon className='coloree' component={DoneIcon} /> { }Free Parking </p> </div>
                <div className='seccc-3'><p><SvgIcon className='coloree' component={DoneIcon} /> { }Hot Tube </p> </div>
                <div className='seccc-3'><p><SvgIcon className='coloree' component={DoneIcon} /> { } 24/7 Security</p> </div>
                <div className='seccc-3'><p><SvgIcon className='coloree' component={DoneIcon} /> { }Air Condition </p> </div>
                <div className='seccc-3'><p><SvgIcon className='coloree' component={DoneIcon} /> { }Smart TV</p> </div>
              </div>
              <div className='third-sec'>
                <div className='seccc-3'><p><SvgIcon className='coloree' component={DoneIcon} /> { }Wheelchair Accessible </p> </div>
                <div className='seccc-3'><p><SvgIcon className='coloree' component={DoneIcon} /> { }Elevator Access</p> </div>
                <div className='seccc-3'><p><SvgIcon className='coloree' component={DoneIcon} /> { }Dishwasher</p> </div>
                <div className='seccc-3'><p><SvgIcon className='coloree' component={DoneIcon} /> { }Gym/Fitness Center </p> </div>
              </div>
            </div>

             
            </div>
          </div>
        </div>
        <div className='part-2'>
          <div className="sec-2-part mt-6 mb-6">
            <div className="part-2-boking">
              <h2><SvgIcon className='colore' component={TurnedInIcon} /> { } Bookmark Property</h2>
            </div>
            <div className="part-2-bokingg mt-4 ">
              <h2><SvgIcon className='colore' component={ShareIcon} /> { } Share Property</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
