import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURl } from "../api/api"; 
import { MdOutlineRefresh } from "react-icons/md";

const CryptoList = () => {
  let api = baseURl;
  console.log("Api", api);

  let [state, setState] = useState([]);
  let[search,searchTerm]=useState("")
  const fetchData = () => {
    axios
      .get(api)
      .then((res) => {
        console.log("axios res", res);
        setState(res.data.data);
      })
      .catch((err) => console.log("axios err", err));
  };
  useEffect(() => {
    fetchData();
  }, [setState, api]);
  const refreshPage=()=>{
    window.location.reload()
   }
  return (
    <div className="">
      <div className="overflow-x-auto mx-24 my-12 rounded-md">
        <div className="flex justify-between mb-6">
         <label className="input input-bordered flex items-center gap-2 shadow-md">
          <input type="text" className="grow" autoComplete="on" placeholder="Search" name="search" id="search" onChange={(e)=>searchTerm(e.target.value)}/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button className="btn shadow-md hover:shadow-none" onClick={refreshPage}>Refresh<MdOutlineRefresh />
        </button>
        </div>
         <table className="table">
          <thead className="text-lg font-semibold text-center text-[#19636b]">
            <tr className="">
              <th>Rank</th>
              <th>Symbol</th>
              <th>Name</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {state.filter((item)=>{
              if(search===""){
                return item
              }
              else if(search.toLowerCase().includes(item.symbol.toLowerCase())||search.includes(item.rank)||search.toLowerCase().includes(item.name.toLowerCase())){
                return item
              }
            })
            .map((v, i) => (
              <tr>
                <td className="font-bold text-[#000000]">{v.rank}</td>
                <td className="text-[#ff3640] font-semibold  hover:text-[#35f2ff]">
                  {v.symbol}
                </td>
                <td className="text-[#9635ff] font-medium hover:text-[#a5ff36]">
                  {v.name}
                </td>
                <td>
                  <button
                    className="btn hover:shadow-md"
                    onClick={() => document.getElementById(v.id).showModal()}
                  >
                    {" "}
                    view more{" "}
                  </button>
                  <dialog id={v.id} className="modal ">
                    <div className="modal-box w-11/12 max-w-5xl border-2 border-[#72eaff]">
                      <div className="flow-root ">
                        <dl className="-my-3 divide-y divide-gray-100 text-sm text-start mx-24 ">
                          <h1 className="text-2xl font-bold my-6 text-transparent bg-clip-text bg-gradient-to-br from-[#18aeff] to-[#06ff06]">
                            {v?.name}
                          </h1>
                          <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">
                              Symbol
                            </dt>
                            <dd className="text-gray-700 sm:col-span-2">
                              {v?.symbol}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Rank</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                              {v?.rank}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Name</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                              {v?.name}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">
                              Supply
                            </dt>
                            <dd className="text-gray-700 sm:col-span-2">
                              {v?.supply}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">
                              Max Supply
                            </dt>
                            <dd className="text-gray-700 sm:col-span-2">
                              {v?.maxSupply}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">
                              Market Capital USD
                            </dt>
                            <dd className="text-gray-700 sm:col-span-2">
                              {v?.marketCapUsd}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">
                              Volume 24 hr USD
                            </dt>
                            <dd className="text-gray-700 sm:col-span-2">
                              {v?.volumeUsd24Hr}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">
                              Price USD
                            </dt>
                            <dd className="text-gray-700 sm:col-span-2">
                              {v?.priceUsd}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">
                              Change Price 24 hr
                            </dt>
                            <dd className="text-gray-700 sm:col-span-2">
                              {v?.changePercent24Hr}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">
                              View wap 24 hr
                            </dt>
                            <dd className="text-gray-700 sm:col-span-2">
                              {v?.vwap24Hr}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">
                              Explorer link
                            </dt>
                            <dd className="text-gray-700 sm:col-span-2">
                              {v?.explorer}
                            </dd>
                          </div>
                        </dl>
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn hover:shadow-lg">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoList;
