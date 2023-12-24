import React,{useEffect,useState} from 'react'
import Text from './Text'
//css in page.css
function Navbar() {
    const values=['Compitition','Sponsors','Contact us','menu','About','Figures','talks','Workshop']
    const middleIndex = 3;
    const [rotatedValues, setRotatedValues] = useState(values);
    const [rotationOccurred, setRotationOccurred] = useState(false);
  function rotationdownFunction(arr) { 
    if (arr.length <= 1) { 
      return arr; 
    } 

    return arr.map((_, index, array) => 
      array[(index + 1) % array.length]); 
  }  
  function rotationupFunction(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    return arr.map((_, index, array) => array[(index - 1 + array.length) % array.length]);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Check if the scroll position is in the range of 140 to 160
      if (scrollY >= 530 && scrollY <= 550 && !rotationOccurred) {
        setRotatedValues(rotationdownFunction(rotatedValues));
        setRotationOccurred(true);
      }
  
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rotatedValues]);
  return (
   <>
   <div className='menu'>
              <div className="line"></div>
              {rotatedValues.slice(0, middleIndex).map((value, index) => (
          <Text
            key={index}
            value={value}
            style={{ fontSize: `${12 +index * 2}px` }}
          />
        ))}
              <div className="eclipse_container">
                <div className="eclipse"></div>
                <div className="eclipse1"></div>
              </div>
              <div className="text hf"><Text value={rotatedValues[3]}></Text></div>
              <div className="eclipse_container">
                <div className="eclipse1"></div>
                <div className="eclipse"></div>
              </div>
              {rotatedValues.slice (middleIndex+1,8).map((value, index) => (
          <Text
            key={index}
            value={value}
            style={{ fontSize: `${17 - index * 2}px` }}
          />
        ))}
              
              <div className="line"></div>
              
            </div>
   </>
  )
}

export default Navbar