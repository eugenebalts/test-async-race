import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import styles from './mark.module.scss';

const StartMark = ({ position }: { position: number }) => (
  <div
    className={`${styles.mark} ${styles.mark_start}`}
    style={{ left: position }}
  >
    Start <RocketLaunchRoundedIcon fontSize='small' />
  </div>
);

export default StartMark;
