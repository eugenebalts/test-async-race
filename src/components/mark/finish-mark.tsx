import { forwardRef } from 'react';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { END_POS } from '../../constants';
import styles from './mark.module.scss';

const FinishMark = forwardRef<HTMLDivElement>((_, ref) => (
  <div className={styles.mark} style={{ right: END_POS }} ref={ref}>
    Finish <SportsScoreIcon fontSize='small' />
  </div>
));

export default FinishMark;
