import FinishMark from '../../../components/mark/finish-mark';
import StartMark from '../../../components/mark/start-mark';
import styles from './tracks.module.scss';
import WinnerDialog from '../winner-dialog/winner-dialog';
import TracksList from './tracks-list/tracks-list';

const Tracks = () => (
  <div className={styles.wrapper}>
    <StartMark />
    <TracksList />
    <FinishMark />
    <WinnerDialog />
  </div>
);

export default Tracks;
