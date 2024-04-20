import CustomButton from '../../button/button';

const ApplyButton = ({ onClick }: { onClick: () => void }) => (
  <CustomButton
    variant='contained'
    color='primary'
    onClick={onClick}
    content='Apply'
  />
);

export default ApplyButton;
