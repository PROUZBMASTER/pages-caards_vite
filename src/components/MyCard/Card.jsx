import React, { useState } from 'react';
import MyCardData from "./Card.js";
import './Card.css'
const MyCard = () => {
    let [Price, setPrice] = useState(0);
    const purchase = (item) => {
        setPrice(Price + item);
    }
    const plus = (item) => {
        setPrice(Price + item);
    }
    const minus = (item) => {
        Price <= 0 ? Price = 0 : setPrice(Price - item);
    }
    const setShow = () => {
        alert('Purchase Completed');
    }
    let TotalPrice = Price <= 0 ? 0 : Price
    return (
        <>
            <section className='w-[1120px] m-auto flex gap-4'>
            {MyCardData?.map(item => {
                return(
                    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 w-[320px] h-[500px]">
                    {/*  <!-- Image --> */}
                    <figure>
                      <img src={item?.img}
                        alt="card image"
                        className="aspect-video w-full h-46"
                      />
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="p-6">
                      <header className="mb-4">
                        <h3 className="text-xl font-medium text-slate-700">
                          {item?.product_name}
                        </h3>
                      </header>
                      <p>
                       {item?.description}
                      </p>
                    </div>
                    {/*  <!-- Action base sized basic button --> */}
                   <div className="flex justify-between">
                   <div className="flex p-6 pt-0">
                      <button onClick={(e) => purchase(item?.price)} className="inline-flex h-8 w-12 items-center justify-center whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
                        <span>{item?.price}</span>
                      </button>
                    </div>
                    <div className="flex justify-start p-6 pt-0">
                      <button onClick={() => plus(item?.price)} className="mr-2 inline-flex h-8 w-6 items-center justify-center whitespace-nowrap rounded bg-green-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-green-600 focus:bg-green-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300 disabled:shadow-none">
                        <span>+</span>
                      </button>
                      <button onClick={() => minus(item?.price)} className="mr-5 inline-flex h-8 w-6 items-center justify-center whitespace-nowrap rounded bg-red-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-red-600 focus:bg-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300 disabled:shadow-none">
                        <span>-</span>
                      </button>
                    </div>
                   </div>
                  </div>
                )
            })}

   
            </section>
            <div className='flex bg-light-50 w-[1120px] m-auto mt-10 h-15 border rounded-1xl'>
                <h1 className='bold text-2xl mt-3 ml-5'>Total price:  {TotalPrice}</h1>
                <button onClick={() => setShow()} className="ml-5 inline-flex h-10 mt-2 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-blue-100 px-6 text-sm font-medium tracking-wide text-blue-600 transition duration-300 hover:bg-blue-200 hover:text-blue-700 focus:bg-blue-300 focus:text-blue-800 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-400 disabled:bg-blue-200 disabled:text-blue-500 disabled:shadow-none">
        <span>Buy</span>
      </button>
            </div>
        </>
    );
}
export default MyCard;