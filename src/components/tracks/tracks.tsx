import Track from '../track/track';
import styles from './tracks.module.scss';
import FinishMark from './mark/finish-mark';
import StartMark from './mark/start-mark';

const Tracks = () => {
  const startPosition: number = 200;
  const endPosition: number = 80;

  return (
    <div className={styles.wrapper}>
      <StartMark position={startPosition} />
      <Track color='#565656' name='BMW AKULA' position={startPosition} />
      <FinishMark position={endPosition} />
    </div>
  );
};

export default Tracks;
