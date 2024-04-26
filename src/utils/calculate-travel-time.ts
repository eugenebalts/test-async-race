const calculateTravelTimeSec = (velocity: number, distance: number): number =>
  Math.round(distance / velocity) / 1000;

export default calculateTravelTimeSec;
