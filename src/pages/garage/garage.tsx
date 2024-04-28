import { FC } from 'react';
import { IPageProps } from '../types';
import GaragePagination from './garage-pagination/pagination';
import Tracks from './tracks/tracks';
import GarageControls from './garage-controls/garage-controls';
import Page from '../page';

const GaragePage: FC<Pick<IPageProps, 'visible'>> = ({ visible }) => (
  <Page visible={visible}>
    <h2>Garage</h2>
    <GarageControls />
    <GaragePagination />
    <Tracks />
  </Page>
);

export default GaragePage;
