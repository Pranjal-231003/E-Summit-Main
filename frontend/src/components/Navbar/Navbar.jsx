import React,{useEffect,useState} from 'react'
import Text from './Text'
//css in page.css
function Navbar() {
  const items = [
    { name: 'Competition', container: '#comptition_Container' },
    { name: 'Sponsors', container: '#Sponsors_Container' },
    { name: 'Contact us', container: '#Contact_Container' },
    { name: 'Home', container: '#Page_container' },
    { name: 'About', container: '#about_container' },
    { name: 'Figures', container: '#Figures_container' },
    { name: 'talks', container: '#talks_container' },
    { name: 'Workshop', container: '#Workshop_container' },
  ];

  const hScroll = (containerId) => {
    const targetContainer = document.querySelector(containerId);

    if (targetContainer) {
      targetContainer.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  const handleLinkClick = (containerId) => () => {
    // Returning a function to be executed onClick
    hScroll(containerId);
  };
    const middleIndex = 3;
    const [rotatedValues, setRotatedValues] = useState(items);
    const [rotationOccurred, setRotationOccurred] = useState(false);

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
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 500 ) {
        setRotatedValues(rotateArrayToTarget(items,'Home'));

      }
          // Check if the scroll position is in the range of 140 to 160
      if (scrollY >= 500 ) {
        setRotatedValues(rotateArrayToTarget(items,'About'));

      }
  
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rotatedValues]);
  return (
   <>
   <div className={`menu ${rotationOccurred ? 'rotate-container' : ''}`} >
              <div className="line"></div>
              {rotatedValues.slice(0, middleIndex).map((value, index) => (
          <Text
            key={index}
            value={value.name}
            container={value.container}
            onClick={handleLinkClick(value.container)}
            style={{ fontSize: `${12+index *3}px` }}
          />
        ))}
              <div className="eclipse_container">
                <div className="eclipse"></div>
                <div className="eclipse1"></div>
              </div>
              <div className="text hf"><Text value={rotatedValues[3].name}></Text></div>
              <div className="eclipse_container">
                <div className="eclipse1"></div>
                <div className="eclipse"></div>
              </div>
              {rotatedValues.slice (middleIndex+1,8).map((value, index) => (
          <Text
            key={index}
            value={value.name}
            container={value.container}
            onClick={handleLinkClick(value.container)}
            style={{ fontSize: `${17 - index * 3}px` }}
          />
        ))}
              
              <div className="line"></div>
              
            </div>
   </>
  )
}

export default Navbar