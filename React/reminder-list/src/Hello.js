import './Hello.css'

const Hello = ({title}) => {
  return (
  <div className='hello tc'>
      <h1>{title}</h1>
      <h3>The time is {new Date().toLocaleTimeString()}</h3>
  </div>
  )
};

export default Hello;
