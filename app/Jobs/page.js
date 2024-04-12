"use client";
import React from "react";
import Navbar from "../component/Navbar";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const page = () => {
  const [data, setData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      await getForum();
    };
    fetchData();

    const intervalId = setInterval(fetchData, 1000); // REFRESH EVERY interval
    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []); // This useEffect is for initial data fetch

  const getForum = async () => {
    // Assume getSession and other implementations are correct
    const username = await getSession();
    const currentUser = username.user.email;
    // console.log(currentUser);
    const res = await fetch(
      `/api/jobStatus?userId=${encodeURIComponent(currentUser)}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch user forum, status: ${res.status}`);
    }
    const forumData = await res.json();
    // console.log('this is forum ARRAY ->', forumData);
    setData(forumData); // This updates the state
  };

  const deleteJob = async () => {
    const username = await getSession();
    const currentUser = username.user.email;
    const res = await fetch(
      `/api/jobStatus?userId=${encodeURIComponent(currentUser)}`,
      {
        method: "DELETE",
      }
    );
    if (!res.ok) {
      throw new Error("Error deleting job");
    }
    alert("job deleted");
  };

  //map the forum and pass date through this function to get days away for each job
  const calculateDaysTill = (date) => {
    const targetDate = new Date(date);
    const currentDate = new Date();
    const differenceInMilliseconds = targetDate - currentDate;
    const differenceInDays = Math.ceil(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );
    return differenceInDays;
  };

  return (
    <div className="bg-[#D1CAC2] w-screen">
      <Navbar />
      <div className="grid text-center min-h-screen font-sans  text-black bg-slate-100 mx-6 p-2 border-4">
        <p className=" text-[25px] text-[#1E1A15]"> Job Status </p>
        
        <div className="text-center items-center  text-[35px] h-8">
          {data.length === 0 ? "You currently have no jobs booked. Please book a service and come back here to view details." : null}
        </div>
        <section className="text-center flex justify-center items-center mb-5">
          <table className="bg-[#D1CAC2] h-[135px] w-[425px] ">
            <thead>
              <tr className="border-4 border-black">
                <th className=" border-r-4 border-black">paid status</th>
                <th className=" border-r-4 border-black">job status</th>
                <th>job</th>
              </tr>
            </thead>
            {data.map((item, index) => {
              const daysTill = calculateDaysTill(item.date);
              const idForum = async (item) => {
                const forumId = item;
                {
                  /**now that we have forumId we can pass it as parameter  to be used */
                }
                router.push(`/PaymentAlt?forumId=${forumId}`);
              };
              return (
                <tbody key={index}>
                  <tr>
                    <td className="border-l-4 border-r-4 border-b-4 border-black p-1 ">
                      <div className=" flex gap-[10px]">
                        {item.paid ? null : (
                          <img
                            className="cursor-pointer"
                            onClick={deleteJob}
                            width="30"
                            height="25"
                            src="https://img.icons8.com/fluency-systems-regular/48/trash--v1.png"
                            alt="trash--v1"
                          />
                        )}
                        {item.paid ? (
                          <p className=" bg-green-400 ml-7 rounded-lg p-[5px] text-[23px]">
                            PAID
                          </p>
                        ) : (
                          <button
                            onClick={() => idForum(item._id)}
                            className="cursor-pointer bg-yellow-400 rounded-lg p-[3px] w-[150px] text-[23px] hover:bg-yellow-300"
                          >
                            Pay Now
                          </button>
                        )}
                      </div>
                      {/**make unpaid a link that takes the forum id to be used in pay page */}

                      {/*HERE*/}
                    </td>
                    <td className=" border-r-4 border-b-4  border-black">
                      {daysTill > 0 ? `${daysTill} Days Away` : null}
                      {daysTill < 0 && daysTill !== 0 ? "past Job" : null}
                      {daysTill === 0 ? "Today" : null}
                    </td>
                    <td className=" border-r-4 border-b-4  border-black text-[15px]">
                      {item.description} , {item.job}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </section>
      </div>
    </div>
  );
};

export default page;
