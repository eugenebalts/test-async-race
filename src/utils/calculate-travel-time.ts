const calculateTravelTimeSec = (velocity: number, distance: number): number =>
  Number((Math.round(distance / velocity) / 1000).toFixed(2));

export default calculateTravelTimeSec;
