import { BottomNavigation } from '@mui/material';
import GarageIcon from '@mui/icons-material/Garage';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import styles from './navigation-bar.module.scss';
import NavigationTab from './navigation-tab/navigation-tab';

const NavigationBar = () => (
  <div className={styles.wrapper}>
    <BottomNavigation showLabels className={styles.navigation}>
      <NavigationTab label='Garage' href='/' icon={<GarageIcon color='primary' />} />
      <NavigationTab
        label='Winners'
        href='/#winners'
        icon={<EmojiEventsIcon color='secondary' />}
      />
    </BottomNavigation>
  </div>
);

export default NavigationBar;
