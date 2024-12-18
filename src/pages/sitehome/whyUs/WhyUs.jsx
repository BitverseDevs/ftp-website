import './whyUs.scss';

const items = [
  {
    id: 'item-one',
    title: 'Customizable',
    desc: 'We offer solutions that can be tailored to meet your unique needs, flexibility to adjust and personalize it according to your specific preferences, ensuring that you get exactly what you need.',
    iconName: '/assets/whyUs-img1.svg',
  },
  {
    id: 'item-one',
    title: 'Affordable',
    desc: 'Our services  are competitively priced, providing excellent value for your money without compromising on quality.',
    iconName: '/assets/whyUs-img2.svg',
  },
  {
    id: 'item-one',
    title: 'Scalable',
    desc: 'Our solutions are designed to scale efficiently, you can start small and expand without worrying about outgrowing the system.',
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