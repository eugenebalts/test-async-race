import SportsScoreIcon from '@mui/icons-material/SportsScore';
import styles from './mark.module.scss';

const FinishMark = ({ position }: { position: number }) => (
  <div className={`${styles.mark} ${styles.mark_finish}`} style={{ right: position }}>
    Finish <SportsScoreIcon fontSize='small' />
  </div>
);

export default FinishMark;
