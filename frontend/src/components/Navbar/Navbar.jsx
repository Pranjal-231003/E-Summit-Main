import React, { useMemo,useEffect, useState } from "react";
import Text from "./Text";

function Navbar() {
  const items =useMemo(() => [
    { name: "Contact us", container: "#Contact_Container", another: 0 },
    { name: "Competition", container: "Competitions", another: 1 },
    { name: "Sponsors", container: "Sponsors", another: 2 },
    { name: "Home", container: "", another: 5 },
    { name: "About", container: "#about_container", another: 0 },
    { name: "Figures", container: "#figures_container", another: 0 },
    { name: "Events", container: "#Events_container", another: 0 },
    { name: "Team", container: "team", another: 6 },
    

  ],[]);
  const [set, setS] = useState(false);
  useEffect(() => {
    // Function to handle popstate event
    const handlePopstate = () => {
      // Your logic to update the state based on the navigation
      // For example, setS(false) to reset the state
      if(rotatedValues[3].another===0 ||rotatedValues[3].another===5 )
      setS(false);
      
    };

    // Attach the event listener
    
    window.addEventListener('popstate', handlePopstate);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);
  useEffect(() => {
    // console.log(set);
  }, [set]);
  

  const middleIndex = 3;
  const [rotatedValues, setRotatedValues] = useState(items);


  const [page, SetPage] = useState(false);

  const [Arr, setArr] = useState([]);
  useEffect(() => {
    if (
      items[3].another !== 2 &&
      items[3].another !== 1 &&
      items[3].another !== 6
    ) {
      if (rotatedValues[3].another === 0 || rotatedValues[3].another === 5) {
        let j = 0;
        const updatedArr = [];
  
        for (let i = 0; i < 7; i++) {
          if (items[i].another === 0) {
            const about = document.getElementById(
              items[i].container.replace(/^#/, "")
            );
            const a = about ? about.offsetTop : 0;
            updatedArr[j] = a;
            j++;
          }
        }
  
        setArr(updatedArr.map((element) => element - 300));
      }
    }
  }, [items, rotatedValues]);
  

  useEffect(() => {


    const handleScroll = () => {
      const scrollY = window.scrollY;

      let targetPage;
      if(set===false){
      if (scrollY < Arr[1]) {
        targetPage = "Home";
      } else if (scrollY > Arr[1] && scrollY < Arr[2]) {
        targetPage = "About";
      } else if (scrollY > Arr[2] && scrollY < Arr[3]) {
        targetPage = "Figures";
      } else if (scrollY > Arr[3] && scrollY < Arr[0]) {
        targetPage = "Events";
      } else if (scrollY > Arr[0]) {
        targetPage = "Contact us";
      }

      if (
        rotatedValues[3].another === 0 ||
        rotatedValues[3].another === 5 ||
        rotatedValues[3].another === 1 ||
        rotatedValues[3].another === 2 ||
        rotatedValues[3].another === 6
      ) {
        setRotatedValues(rotateArrayToTarget(items, targetPage));
      }
    }};

    const handlePopstate = () => {

      const currentUrl = window.location.href;

// Get the path after the domain
    const pathAfterDomain = window.location.pathname;
    const pathWithoutLeadingSlash = pathAfterDomain.slice(1);
      console.log(pathWithoutLeadingSlash);
      setRotatedValues(rotateArrayTocontainer(items,pathWithoutLeadingSlash))
      setTimeout(() => {
        handleScroll();
      }, 0);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [items, rotatedValues, Arr]);


  useEffect(() => {
    // Saving rotatedValues to local storage
    localStorage.setItem("rotatedValues", JSON.stringify(rotatedValues));
  }, [rotatedValues]);

  const rotateArrayToTarget = (arr, target) => {
    const targetIndex = arr.findIndex((item) => item.name === target);

    // Calculate the number of rotations needed to bring the target to the 4th position
    const rotations = (targetIndex - 3 + arr.length) % arr.length;

    // Rotate the array
    const rotatedArray = [...arr.slice(rotations), ...arr.slice(0, rotations)];

    return rotatedArray;
  };
  const rotateArrayTocontainer = (arr, target) => {
    const targetIndex = arr.findIndex((item) => item.container === target);

    // Calculate the number of rotations needed to bring the target to the 4th position
    const rotations = (targetIndex - 3 + arr.length) % arr.length;

    // Rotate the array
    const rotatedArray = [...arr.slice(rotations), ...arr.slice(0, rotations)];

    return rotatedArray;
  };

  return (
    <>
      <div className="menu">
        <div className="line"></div>
        {rotatedValues.slice(0, middleIndex).map((value, index) => (
          <Text
            key={index}
            value={value.name}
            container={value.container}
            page={page}
            rotatedValues={rotatedValues}
            setRotatedValues={setRotatedValues}
            rotateArrayToTarget={rotateArrayToTarget}
                        setS={setS} set={set} 
          
            style={{ fontSize: `${12 + index * 3}px` }}
          />
        ))}
        <div className="eclipse_container">
          <div className="eclipse"></div>
          <div className="eclipse1"></div>
        </div>
        <div className="text hf">
          <Text
            container={rotatedValues[3].container}
            value={rotatedValues[3].name}
          ></Text>
        </div>
        <div className="eclipse_container">
          <div className="eclipse1"></div>
          <div className="eclipse"></div>
        </div>
        {rotatedValues.slice(middleIndex + 1, 8).map((value, index) => (
          <Text
            key={index}
            value={value.name}
            container={value.container}
            setS={setS} set={set} 
            rotatedValues={rotatedValues}
            setRotatedValues={setRotatedValues}
            rotateArrayToTarget={rotateArrayToTarget}
           
            style={{ fontSize: `${17 - index * 3}px` }}
          />
        ))}
        <div className="line"></div>
      </div>
    </>
  );
}

export default Navbar;
