import { BottomNavigation } from '@mui/material';
import GarageIcon from '@mui/icons-material/Garage';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NavigationTab from './navigation-tab/navigation-tab';
import styles from './navigation-bar.module.scss';
import { NavigationLinks } from '../../constants';

const NavigationBar = () => (
  <div className={styles.wrapper}>
    <BottomNavigation showLabels className={styles.content}>
      <NavigationTab
        label='Garage'
        href={NavigationLinks.GARAGE}
        icon={<GarageIcon color='primary' />}
      />
      <NavigationTab
        label='Winners'
        href={NavigationLinks.WINNERS}
        icon={<EmojiEventsIcon color='secondary' />}
      />
    </BottomNavigation>
  </div>
);

export default NavigationBar;
