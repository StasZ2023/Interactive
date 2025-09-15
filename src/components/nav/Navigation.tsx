import style from './Navigation.module.scss'
import { TimePeriod } from "../../types/timeline";
interface Navigation {
    periods: TimePeriod[];
    activePeriodIndex: number;
  setActivePeriodIndex: React.Dispatch<React.SetStateAction<number>>;
  }
const Navigation: React.FC<Navigation> = ({periods,activePeriodIndex,
    setActivePeriodIndex,}) =>{
    return(
        <>
        <div className={style.status}>
      {String(activePeriodIndex + 1).padStart(2, '0')}/{String(periods.length).padStart(2, '0')}
    </div>
        <div className={style.navigation}>
        <button
          className={style.navBtn}
          onClick={() => setActivePeriodIndex((activePeriodIndex - 1 + periods.length) % periods.length)}
        >
        <div className={`${style.arrow} ${style.arrowStart}`}></div>
        </button>
        <button
          className={style.navBtn}
          onClick={() => setActivePeriodIndex((activePeriodIndex + 1) % periods.length)}
        >
          <div className={style.arrow}></div>
        </button>
      </div>
      
    </>
    )
}
export default Navigation