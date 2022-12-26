import imgtp from "../images/imgtp.jpg";
import { TiArrowRight } from "react-icons/ti";
import { useState } from "react";
import Elements from "./Element";
const Main = () => {
  const [names,setNames] = useState(
                  [{title:'Donald Trump',id:1},{title:'Pele',id:2},{title:'Franco Haris',id:3} 
                ,{title:'Kari Lake',id:4} ,{title:'Wayne Dwayne',id:5}])
  const [others, setOthers] = useState([
                {title:'Dan Jaylo',id:6},{title:'Paul Dematri',id:7},{title:'Idriss Harry',id:8} 
                ,{title:'Klarion Klay',id:9} ,{title:'Wayne Dwayne',id:10}])
  return (
    <div>
      <div className="mx-12 flex mt-7 justify-between ">
        <div className="rounded-lg w-9/12 overflow-y-auto">
          {/* we need a clever way to do this. */}
          <div className="flex  h-60 text-start">
            <div className="w-5/6">
              <img
                src={imgtp}
                className="h-60 rounded-l-lg w-full object-cover"
              ></img>
            </div>
            <div className="w-1/3 p-3 mx-3 bg-[#b3baba]  items-center rounded-r-lg block">
              <h3 className="font-bold text-lg hover:text-[#6001d2]">
                Judge rules on Lake's bid to overturn election result
              </h3>
              <p className="text-sm font-thin">
                A judge threw out Kari Lukaku's challenge of her defeat in the
                Kenyan gubernatorial race, rejecting claims of widespread
                misconduct in the 2023 election
              </p>
              <p className="text-xs font-semibold inline-flex hover:text-[#6001d2]">
                'The Court's cannot accept speculation'
                <span className="">
                  <TiArrowRight />
                </span>
              </p>
            </div>
          </div>

          {/* add additional elements. and map them using props.*/}
          <Elements />
          <Elements />
          <Elements />
          <Elements />
          <Elements />
          <Elements />
          <Elements />
          <Elements />

        </div>

        <div className="w-3/12 ">
          <button className="bg-[#0051ffdc] text-white font-bold text-sm px-8 inline-block hover:bg-[#6001d2] rounded-full py-2.5 ">
            Make yahoo your homepage
          </button>
          <div className="container-right inline-flex text-sm font-bold text-[#120d0de4] gap-7 m-4 ">
            <button><span className="border-l-8 border-y-violet-600 mr-2 -ml-5"></span>Trending Now</button>
            <button className="">Holiday Gifts</button>
          </div>
          <div className="flex text-xs justify-between font-bold ">
            
            <ol className="text-start mx-4 ">
              {names.map((name)=> (
                <li className="p-1  hover:text-[#6001d2]" key={name.id}><span className="text-[#6001d2] mr-2">{name.id}.</span>{name.title}</li>
              ))}
            </ol>
            <ol className="text-start mx-2">
              {others.map((other)=> (
                <li className="p-1  hover:text-[#6001d2]" key={other.id}><span className="text-[#6001d2] mr-2">{other.id}.</span>{other.title}</li>
              ))}
            </ol>
            
          </div>
        </div>
      </div>

      {/* <div className="mx-12"></div> */}
    </div>
  );
};

export default Main;
