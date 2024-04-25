import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { END_POS } from '../../constants';
import styles from './mark.module.scss';

const FinishMark = () => (
  <div className={styles.mark} style={{ right: END_POS }}>
    Finish <SportsScoreIcon fontSize='small' />
  </div>
);

export default FinishMark;
