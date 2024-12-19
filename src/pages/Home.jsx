import React from 'react'

const Home = () => {
  return (
    <>

      {/*==hero section==*/}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap[90px] items-center justify-between">
              {/*==hero content==*/}
                <div>
                 <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font[800] md:text-[60px] md:leading-[70px]">we help patients live healthy, longer life.

                  </h1>
                  <p className="text__para">wertyuiodfghjksdfghjklxcvbnm,wertyuio?</p>
                  <button className="btn">Request An Appoitnment</button>
                </div>
              </div>
            </div> 
          </div>
        </section>
      </>
    </>
  );
};
export default Home;