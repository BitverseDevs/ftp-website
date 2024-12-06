import './whyUs.scss';

const items = [
  {
    id: 'item-one',
    title: 'Customizable, Affordable, Scalable',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex possimus soluta adipisci odio quia vel.',
    iconName: '/assets/whyUs-img1.svg',
  },
  {
    id: 'item-one',
    title: 'Customizable, Affordable, Scalable',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex possimus soluta adipisci odio quia vel.',
    iconName: '/assets/whyUs-img2.svg',
  },
  {
    id: 'item-one',
    title: 'Customizable, Affordable, Scalable',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex possimus soluta adipisci odio quia vel.',
    iconName: '/assets/whyUs-img3.svg',
  },
]


const WhyUs = () => {
  return (
    <div id="whyUs-outer-container">
      <div id="whyUs-inner-container">
        <div id="whyUs-section-one">
          <div id="whyUs-featMsg">Why Choose Us?</div>
          <div id="whyUs-title">Customizable, Affordable, Scalable</div>
          <div id="whyUs-desc">Choose us for customizable, affordable, and scalable solutions designed to grow with your business. Tailored to your needs, budget-friendly, and built for the long term.</div>
        </div>
        <div id="whyUs-section-two">
          {items.map(({id, title, desc, iconName}) => (
            <div key={id} className="item-container">
              <div className="item-icon-container">
                <img className='item-icon' src={iconName} alt="Why us icon" draggable={false}/>
              </div>

              <div className="item-title">{title}</div>
              <div className="item-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyUs;