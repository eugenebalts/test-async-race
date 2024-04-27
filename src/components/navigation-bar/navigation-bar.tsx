import { BottomNavigation } from '@mui/material';
import GarageIcon from '@mui/icons-material/Garage';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NavigationTab from './navigation-tab/navigation-tab';
import styles from './navigation-bar.module.scss';

const NavigationBar = () => (
  <div className={styles.wrapper}>
    <BottomNavigation showLabels className={styles.content}>
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
