import Page from '../page';
import WinnersList from './winners-list/winners-list';

const WinnersPage = ({ visible }: { visible: boolean }) => (
  <Page visible={visible}>
    <WinnersList />
  </Page>
);

export default WinnersPage;
