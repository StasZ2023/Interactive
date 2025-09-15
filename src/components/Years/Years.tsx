import React, { useEffect, useRef } from "react";
import style from './style.module.scss'
import { gsap } from "gsap";
import { TimePeriod } from "../../types/timeline";

interface YearsProps {
  periods: TimePeriod[];
  activePeriodIndex: number;
}


const Years: React.FC<YearsProps> = ({ periods, activePeriodIndex }) => {
  const startRef = useRef<HTMLSpanElement>(null);
  const endRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!periods[activePeriodIndex]) return;

    const { startYear, endYear } = periods[activePeriodIndex];

    const animateNumber = (
      ref: React.RefObject<HTMLSpanElement>,
      newValue: number
    ) => {
      if (!ref.current) return;

      

      const currentS = periods[activePeriodIndex]?.startYear;
      const currentE = periods[activePeriodIndex]?.endYear;
      gsap.to(
        { val: currentS },
        {
          val: newValue,
          duration: 1,
          ease: "none",
          onUpdate: function () {
            if (ref.current) {
              ref.current.textContent = Math.floor(this.targets()[0].val).toString();
            }
          },
        }
      );
      gsap.to(
        { val: currentE },
        {
          val: newValue,
          duration: Math.abs(newValue - currentE) * 0.1,
          ease: "none",
          onUpdate: function () {
            if (ref.current) {
              ref.current.textContent = Math.floor(this.targets()[0].val).toString();
            }
          },
        }
      );
    };

    animateNumber(startRef, startYear);
    animateNumber(endRef, endYear);
  }, [activePeriodIndex, periods]);

  return (
    <div className={style.years}>
      <span ref={startRef} className={style.yearStart}></span>
      <span ref={endRef} className={style.yearEnd}></span>
    </div>
  );
};

export default Years;