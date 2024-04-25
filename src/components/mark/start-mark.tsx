import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import { CAR_WIDTH, START_POS } from '../../constants';
import styles from './mark.module.scss';

const StartMark = () => (
  <div className={styles.mark} style={{ left: `${CAR_WIDTH + START_POS}px` }}>
    Start <RocketLaunchRoundedIcon fontSize='small' />
  </div>
);

export default StartMark;
