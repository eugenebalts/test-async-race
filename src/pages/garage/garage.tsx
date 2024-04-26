import GaragePagination from './garage-pagination/pagination';
import Tracks from './tracks/tracks';
import GarageControls from './garage-controls/garage-controls';
import Page from '../page';

const GaragePage = ({ visible }: { visible: boolean }) => (
  <Page visible={visible}>
    <h2>Garage</h2>
    <GarageControls />
    <GaragePagination />
    <Tracks />
  </Page>
);

export default GaragePage;
