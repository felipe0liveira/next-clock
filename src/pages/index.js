import './index.scss';

const IndexPage = () => {
  return (
    <>
      <div className='container'>
        <div className='time hour'>
          <span>{new Date().getHours()}</span>
        </div>
        <div className='time minute'>
          <span>{new Date().getMinutes()}</span>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
