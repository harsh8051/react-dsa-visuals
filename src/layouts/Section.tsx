import { ReactElement, useEffect, useState } from "react";

interface ModalRendererProps {
  children:ReactElement;
  colorid:number
}

const Section: React.FC<ModalRendererProps> = ({ children,colorid })=>{

  function getIdfromIndex(colorid: number): string | undefined {
    switch (colorid % 4) {
      case 3:
        return 'third';
      case 2:
        return 'second';
      case 1:
          return 'first';
      default:
          return 'fourth';
    }
  }
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      
      setIsVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, [colorid]);

  return (

    <section id={getIdfromIndex(colorid)} className={`${isVisible ? 'section-active' : ''}`}>
      {children}
    </section>

  )
}

export default Section