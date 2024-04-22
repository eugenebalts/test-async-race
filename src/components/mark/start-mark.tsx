import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import styles from './mark.module.scss';

const StartMark = () => {
  const { START_POS, CAR_WIDTH } = useSelector((state: RootState) => state.garage);

  return (
    <div className={styles.mark} style={{ left: `calc(${START_POS} + ${CAR_WIDTH})` }}>
      Start <RocketLaunchRoundedIcon fontSize='small' />
    </div>
  );
};

export default StartMark;
