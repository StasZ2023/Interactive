import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { TimePeriod} from '../../types/timeline';
import style from  './Circle.module.scss'

interface CircleProps {
  periods: TimePeriod[];
  activePeriodIndex: number;
  onCircleClick?: (index: number) => void;
}

const Circle: React.FC<CircleProps> = ({ periods, activePeriodIndex , onCircleClick}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]); // массив для текстов
  const circleRef = useRef<(HTMLDivElement | null) []>([]);
  const total = periods.length;

  const radius = 200;

  const getPosition = (index: number, rotation = -50) => {
    const angle = (index / total) * 360 + rotation;
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;
    return { x, y };
  };

  useEffect(() => {
    setActiveIndex(activePeriodIndex);
  
    // Запускаем анимацию выбранного круга при изменении activePeriodIndex
    const index = activePeriodIndex;
    const targetRotation = -((index / total) * 360);
  
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        rotation: targetRotation,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: () => {
          const rotation = gsap.getProperty(containerRef.current!, "rotation") as number;
          textRefs.current.forEach((el) => {
            if (el) gsap.set(el, { rotation: -rotation });
          });
        },
      });
  
      // Анимация увеличения круга
      gsap.fromTo(
        circleRef.current[index],
        { width: 8, height: 8 },
        { width: 40, height: 40, duration: 1, ease: "power2.out" }
      );
    }
  }, [activePeriodIndex]);

  return (
    <div className={style.ab}>
    <div className={style.circle}>
         <div
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
        className={style.circle_max}
      ></div>
      <div
        ref={containerRef}
        className={style.circle_min}
      >
        {periods.map((item, index) => {
          const { x, y } = getPosition(index);
          const isActive = index === activeIndex;
          return (
            <div
              key={item.id}
              onClick={() => onCircleClick?.(index)}
              style={{
                left: `calc(50% + ${x - 40 / 2}px)`,
                top: `calc(50% + ${y - 40 / 2}px)`,
              }}
              className={style.circle_min__block}
            >
              <div
                ref={(el) => {
                    textRefs.current[index] = el; // первый ref
                    circleRef.current[index] = el;       // второй ref
                  }}
                style={ isActive ? { width: '40px', height: '40px'} 
                : 
                {backgroundColor:'#000',width:'5px', height: '5px'}}
                className={style.circle_min__text}
              >
                {isActive ? item.id : ''}
                <span></span>
              </div>
            </div>
            
          );
        })}
      </div>

      
     
    </div>
    </div>
  );
};

export default Circle;
