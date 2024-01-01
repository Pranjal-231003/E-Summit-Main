import React, { useEffect, useState } from 'react';
import Text from './Text';

function Navbar({Aboutref}) {
  const items = [
    { name: 'Competition', container: 'Competitions', another: 1 },
    { name: 'Sponsors', container: 'Sponsors', another: 2 },
    { name: 'Contact us', container: '#Contact_Container', another: 0 },
    { name: 'Home', container: '', another: 5 },
    { name: 'About', container: '#about_container', another: 0 },
    { name: 'Figures', container: '#figures_container', another: 0 },
    { name: 'Events', container: '#Events_container', another: 0 },
    
  ];

  const middleIndex = 3;
  const [rotatedValues, setRotatedValues] = useState(items);
  const [Items, setItems] = useState(items);
 
  const [rotationOccurred, setRotationOccurred] = useState(false);

  const handleonclick = (value) => {
    if (value === 'Home') {
      // If the user clicks on "Home", reset the state to its initial values
      setRotatedValues(items);
      setRotationOccurred(false);
    } else {
      // If the user clicks on any other option, rotate the array to the target
      setRotatedValues(rotateArrayToTarget(items, value));
    }
    
    

  };


  const rotateArrayToTarget = (arr, target) => {
    const targetIndex = arr.findIndex((item) => item.name === target);

    // Calculate the number of rotations needed to bring the target to the 4th position
    const rotations = (targetIndex - 3 + arr.length) % arr.length;

    // Rotate the array
    const rotatedArray = [...arr.slice(rotations), ...arr.slice(0, rotations)];
    setRotationOccurred(true);
    return rotatedArray;
  };

  useEffect(() => {
    const arr=[];
    if(rotatedValues[3].another===0){
    
    let j=0;
    for(let i =0 ; i<7;i++){
      
      if(Items[i].another===0){
      
        const about = document.getElementById(items[i].container.replace(/^#/, ''));
        const a=about.offsetTop;
        arr[j]=a;
        j++
      }
     
    }
  
   
    console.log(arr);
    
    }
    const Arr = arr.map((element) => element - 300);
    const handleScroll = () => {
      
      const scrollY = window.scrollY;

     
      if(scrollY<Arr[1]){
        if(rotatedValues[3].another===0||rotatedValues[3].another===5){
          setRotatedValues(rotateArrayToTarget(items, 'Home'));
        }
      }
      if(scrollY>Arr[1] && scrollY<Arr[2] ){
        if(rotatedValues[3].another===0||rotatedValues[3].another===5){
          setRotatedValues(rotateArrayToTarget(items, 'About'));
        }
      }
      if(scrollY>Arr[2] && scrollY<Arr[3] ){
        if(rotatedValues[3].another===0||rotatedValues[3].another===5){
          setRotatedValues(rotateArrayToTarget(items, 'Figures'));
        }
      }
      if(scrollY>Arr[3]&& scrollY<Arr[0] ){
        if(rotatedValues[3].another===0||rotatedValues[3].another===5){
          setRotatedValues(rotateArrayToTarget(items, 'Events'));
        }
      }
      if(scrollY>Arr[0]  ){
        if(rotatedValues[3].another===0||rotatedValues[3].another===5){
          setRotatedValues(rotateArrayToTarget(items, 'Contact us'));
        }
      }

      // Check if the user has scrolled to the top of the page

    };

    const handlePopstate = () => {
      // Reset to initial state
      setRotatedValues(items);
    
      // Use a setTimeout to ensure that the state is updated before handling the scroll
      setTimeout(() => {
        handleScroll();
        setRotationOccurred(false);
      }, 0);
    };
    

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [items]);

  return (
    <>
      <div className={`menu ${rotationOccurred ? 'rotate-container' : ''}`}>
        <div className="line"></div>
        {rotatedValues.slice(0, middleIndex).map((value, index) => (
          <Text
            key={index}
            value={value.name}
            container={value.container}
            onClick={() => handleonclick(value.name) }
            style={{ fontSize: `${12 + index * 3}px` }}
           
          />
        ))}
        <div className="eclipse_container">
          <div className="eclipse"></div>
          <div className="eclipse1"></div>
        </div>
        <div className="text hf">
          <Text container={rotatedValues[3].container} value={rotatedValues[3].name} ></Text>
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
            onClick={() => handleonclick(value.name)}
            style={{ fontSize: `${17 - index * 3}px` }}
        
          />
        ))}
        <div className="line"></div>
      </div>
    </>
  );
}

export default Navbar;
