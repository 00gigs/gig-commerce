'use client'
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
const page = () => {

const [reviews, setReviews] = useState([])



  useEffect(() => {
    const fetchReviews = async () => {
      await getReviews();
    };
    fetchReviews();
    const intervalId = setInterval(fetchReviews, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const getReviews = async () => {
    const res = await fetch("/api/review", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      throw new Error("failed to get reviews");
    } else {
      const ReviewData = await res.json();
      console.log(ReviewData);
      setReviews(ReviewData)
    }
  };

  return (
    <div className="bg-[#D1CAC2]  w-full">
        <Navbar/>
      <div className="min-h-screen text-black bg-slate-100 mx-6 sm:mx-2 md:mx-6 lg:mx-8 xl:mx-auto max-w-7xl border-4 p-2 sm:p-4 lg:p-6 xl:p-8 text-center">
        {reviews.map((cr,index)=>(
            <ul className="bg-orange-50 noto-sans-mono   border-black border-4 rounded-xl mb-4">
                <li key={index} className="mt-1" >
                    <div>
                        {cr.starz}/5 Stars
                    </div>
                    <div>
                        "{cr.comment}"
                    </div>
                </li>
            </ul>
        ))}
      </div>
    </div>
  );
};

export default page;
