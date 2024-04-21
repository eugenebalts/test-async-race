import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import styles from './mark.module.scss';

const FinishMark = () => {
  const { END_POS } = useSelector((state: RootState) => state.garage);

  return (
    <div className={styles.mark} style={{ right: END_POS }}>
      Finish <SportsScoreIcon fontSize='small' />
    </div>
  );
};

export default FinishMark;
