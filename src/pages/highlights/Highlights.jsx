import './highlights.scss';

const Highlights = () => {

  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  });

  return (
    <div id="demo">
      <div id='city-scapes-bg'>
        <img id='city-scapes-img' src="/assets/city-scapes-bg.svg" alt="city scapes" draggable={false} />
        
      </div>
    </div>
  );
}

export default Highlights;