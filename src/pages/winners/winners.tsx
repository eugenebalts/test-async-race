import Page from '../page';
import WinnersList from './winners-list/winners-list';

const WinnersPage = ({ visible }: { visible: boolean }) => {
  return (
    <Page visible={visible}>
      <WinnersList />
    </Page>
  );
};

export default WinnersPage;
