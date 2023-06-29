import { ThreeDots } from 'react-loader-spinner';
const Loader = props => {
  return (
    <ThreeDots
      hheight="80"
      width="80"
      radius="9"
      color="#f00"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      wrapperClass=""
      visible={true}
      secondaryColor="#000"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
export default Loader;
