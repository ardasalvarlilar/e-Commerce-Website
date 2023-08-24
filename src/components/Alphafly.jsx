import React, { useEffect, useState, useRef } from 'react'
import {StyledAlphafly,AlphaImageDiv,AlphaflyGrid,OwnColorShowDiv,AlphaflyA} from './StyledComponents'
import { gsap } from 'gsap';

const Alphafly = () => {
  const [selectedColor, setSelectedColor] = useState('#000000')
  const [middleColor, setMiddleColor] = useState('#ffffff')
  const [bottomColor, setBottomColor] = useState('#ff0000')

  const [ownTopColor, setOwnTopColor] = useState('#ffffff')
  const [ownMiddleColor, setOwnMiddleColor] = useState('#ffffff')
  const [ownBottomColor, setOwnBottomColor] = useState('#ffffff')

  const [show, setShow] = useState(false)

  const pRef = useRef(null)
  const buttonRef = useRef(null)
  const someColors= [
    '#D3FBD8',
    '#FF9669',
    '#F2FD71',
    '#B798D4',
    '#ECCDA6',
    '#66EFEE',
    '#F5C199',
    '#2B2B2B',
    '#8DFEAE',
    '#FFD700',
    '#FF6347',
    '#4B0082',
    '#9ACD32', 
    '#00CED1', 
    '#FF1493', 
    '#6495ED',
    '#FFA500',
    '#3ca1c3',
    '#18287c',
    '#8f8f8f',
    '#F63077',
    '#FACC40',
  ];



  const handleShowAndScroll = () => {
    setShow(!show)
    
  }



  useEffect(() => {
    const timeline = gsap.timeline()
    timeline
    .fromTo(pRef.current, { y: -100, visibility: 'hidden' }, { y: 0, visibility: 'visible', duration: 1 },'+=20')
    .fromTo(buttonRef.current, {x: +100, visibility: 'hidden'}, {x: 0, visibility: 'visible' , duration: 1})
  },[])



  return (
    <StyledAlphafly>
      <h1 
      className='pt-5 text-6xl text-center text-hoverColor'>
      CHOOSE COLORS FOR YOUR SHOE
      </h1>
      <div>
        <AlphaImageDiv className="image">
        <svg id='svg' width="1000" height="490" xmlns="http://www.w3.org/2000/svg" >
  <path  d="m36.92308,270.76923l20.76923,-10.76923l33.07692,-12.30769l30.76923,-9.23077l36.92308,-6.92308l27.69231,-6.15385l33.07692,-10l21.53846,-6.92308l12.30769,-8.46154l13.07692,-2.30769l5.38462,-9.23077l13.84615,-5.38462l20.76923,-5.38462c0,0 13.07692,0 13.07692,0c0,0 7.69231,-10 7.69231,-10c0,0 21.53846,-7.69231 21.53846,-7.69231c0,0 15.38462,-6.92308 15.38462,-6.92308c0,0 23.84615,-10.76923 23.84615,-10.76923c0,0 14.61538,-10 14.61538,-10c0,0 14.61538,-4.61538 14.61538,-4.61538c0,0 6.92308,2.30769 6.92308,2.30769c0,0 6.92308,-8.46154 6.92308,-8.46154c0,0 27.69231,-11.53846 27.69231,-11.53846c0,0 10.76923,-2.30769 10.76923,-2.30769c0,0 4.61538,-11.53846 4.61538,-11.53846c0,0 22.30769,-1.53846 21.53846,-1.53846c0.76923,0 43.07692,-43.84615 43.07692,-43.84615c0,0 28.46154,-26.15385 28.46154,-26.15385c0,0 10.76923,-15.38462 10,-15.38462c0.76923,0 12.30769,-3.84615 12.30769,-3.84615c0,0 14.61538,-2.30769 14.61538,-2.30769c0,0 13.07692,12.30769 13.07692,11.53846c0,0.76923 16.92308,43.07692 16.92308,43.07692c0,0 -4.61538,20.76923 -4.61538,20c0,0.76923 12.30769,17.69231 11.53846,17.69231c0.76923,0 10.76923,20 10.76923,20c0,0 17.69231,6.92308 17.69231,6.15385c0,0.76923 47.69231,5.38462 47.69231,4.61538c0,-0.76923 43.07692,-10 42.30769,-10c0.76923,0 23.84615,-30 23.07692,-30c0.76923,0 12.30769,-30 12.30769,-30c0,0 4.61538,-33.07692 4.61538,-33.84615c0,0.76923 7.69231,-12.30769 7.69231,-13.07692c0,0.76923 25.38462,2.30769 26.15385,2.30769c0.76923,0 17.69231,8.46154 17.69231,7.69231c0,0.76923 14.61538,19.23077 14.61538,19.23077c0,0 11.53846,26.15385 11.53846,26.15385c0,0 13.84615,33.84615 13.84615,33.84615c0,0 11.53846,28.46154 11.53846,27.69231c0,0.76923 0,38.46154 0,38.46154c0,0 16.92308,43.84615 16.92308,43.84615c0,0 6.15385,34.61538 6.15385,33.84615c0,0.76923 -4.61538,41.53846 -4.61538,40.76923c0,0.76923 -23.84615,6.15385 -24.61538,6.15385c0.76923,0 -80.76923,3.07692 -80.76923,2.30769c0,0.76923 -55.38462,3.07692 -56.15385,3.07692c0.76923,0 -66.15385,3.84615 -66.92308,3.84615c0.76923,0 -63.84615,0.76923 -63.84615,0.76923c0,0 -26.15385,0 -26.15385,0c0,0 -29.23077,3.84615 -30,3.07692c0.76923,0.76923 -30,9.23077 -30,9.23077c0,0 -35.38462,7.69231 -35.38462,7.69231c0,0 -46.92308,11.53846 -46.92308,11.53846c0,0 -33.07692,8.46154 -33.07692,8.46154c0,0 -46.92308,7.69231 -47.69231,7.69231c0.76923,0 -55.38462,4.61538 -56.15385,3.84615c0.76923,0.76923 -62.30769,0 -62.30769,0c0,0 -52.30769,-2.30769 -52.30769,-2.30769c0,0 -60,-6.92308 -60,-7.69231c0,0.76923 -59.23077,-13.07692 -59.23077,-13.07692c0,0 -46.15385,-9.23077 -46.15385,-9.23077c0,0 -34.61538,-13.84615 -34.61538,-13.84615c0,0 10,-18.46154 10,-18.46154c-6.15385,9.23077 -2.30769,-1.53846 18.46154,-15.38462z" opacity="NaN" stroke="#000" fill={selectedColor} >
  
  </path>


</svg>
<svg width="1000" id='middle' height="490" xmlns="http://www.w3.org/2000/svg">
  <path d="m10,305.5l33,13.5l49,12l57,9l65,9l70,3l81,-4l65,-7l70,-21c0,0.5 40,-7.5 40,-7.5c0,0 41,-10 41,-10.5c0,0.5 23,-1.5 23,-2c0,0.5 66,-1.5 66,-2c0,0.5 74,-0.5 74,-1c0,0.5 39,-2.5 39,-3c0,0.5 73,-4.5 73,-5c0,0.5 36,1.5 36,1c0,0.5 29,-4.5 29,-5c0,0.5 18,-0.5 18,-1c0,0.5 36,9.5 36,9c0,0.5 24,14.5 24,14.5c0,0 -1,22 -1,21.5c0,0.5 -49,9.5 -49,9c0,0.5 -75,10.5 -75,10c0,0.5 -143,9.5 -143,9c0,0.5 -136,4.5 -136,4c0,0.5 -131,12.5 -131,12c0,0.5 -119,8.5 -119,8c0,0.5 -77,0.5 -77,0c0,0.5 -55,12.5 -55,12c0,0.5 -38,13.5 -38,13c0,0.5 -20,0.5 -20,0c0,0.5 -60,-24.5 -60,-25c0,0.5 -68,-40.5 -68,-41c0,0.5 -22,-12.5 -22,-13c0,0.5 5,-21.5 5,-21.5z" opacity="NaN" stroke="#000" fill={middleColor} />
</svg>

<svg id='bottom' width="1000" height="490" xmlns="http://www.w3.org/2000/svg">

  <path d="m638,485.5l-51,-6.5l-53,-15l-61,-30l-24,-16l-37,2l7,28l16,13l7,9l-15,4l-65,1l-70,-1l-32,-1c0,0.5 -15,8.5 -15,8.5c0,0 -48,-8 -48,-8.5c0,0.5 -37,-10.5 -37,-11c0,0.5 -20,-0.5 -20,-1c0,0.5 -47,-25.5 -47,-26c0,0.5 -44,-29.5 -44,-30c0,0.5 -23,-30.5 -23,-31c0,0.5 -24,-46.5 -24,-47c0,0.5 27,15.5 27,15c0,0.5 34,31.5 34,31.5c0,0 78,26 79,26c1,0 44,6 44,7c0,1 41,-13 41,-13.5c0,0.5 47,-13.5 47,-14c0,0.5 111,2.5 111,2c0,0.5 101,-8.5 101,-9c0,0.5 121,-5.5 121,-5.5c0,0 136,-10 136,-10c0,0 127,-8 127,-8.5c0,0.5 87,-8.5 87,-9c0,0.5 42,-10.5 42,-11c0,0.5 -3,17.5 -3,17c0,0.5 -28,35.5 -28,35.5c0,0 -56,58 -56,57c0,-1 -63,24 -63,23.5c0,0.5 -73,18.5 -73,18c0,0.5 -138,6.5 -138,6.5z" opacity="NaN" stroke="#000" fill={bottomColor} />

</svg>
          <img src='./img/alphaflyLending.png' alt="alphafly" className='w-100' />
        </AlphaImageDiv>
        <div className='h-4 px-32'>
          {/* <input type="color" name="" id=""
            onChange={(event) => setSelectedColor(event.target.value)}
          /> */}
            <p className='absolute text-2xl text-linkColor right-32 top-72'
            ref={pRef}
            >Isn't it enough?</p>
            <AlphaflyA href='#colorCustomizationSection' ref={buttonRef}
            onClick={handleShowAndScroll}
            >Customize your own</AlphaflyA>
          <div className='flex items-center justify-between mt-12'>

            {/* top of the shoe */}
            <div className='flex flex-col gap-3'>
            <h1 className='text-xl'>Choose color for the top of the shoe</h1>
            <AlphaflyGrid>
              {someColors.map((e,i) => (
                <div key={i}>
                  <button className='h-8 w-14' style={{backgroundColor: e}} value={e}
                  onClick={() => setSelectedColor(e)}
                  ></button>
                </div>
              ))}
            </AlphaflyGrid>
            </div>
              
              {/* middle of the shoe */}
            <div className='flex flex-col gap-3'>
            <h1 className='text-xl'>Choose color for the middle of the shoe</h1>
            <AlphaflyGrid>
              {someColors.map((e,i) => (
                <div key={i}>
                  <button className='h-8 w-14' style={{backgroundColor: e}} value={e}
                  onClick={() => setMiddleColor(e)}
                  ></button>
                </div>
              ))}
            </AlphaflyGrid>
            </div>

              {/* bottom of the sohoe */}
            <div className='flex flex-col gap-3'>
            <h1 className='text-xl'>Choose color for the middle of the shoe</h1>
            <AlphaflyGrid>
              {someColors.map((e,i) => (
                <div key={i}>
                  <button className='h-8 w-14' style={{backgroundColor: e}} value={e}
                  onClick={() => setBottomColor(e)}
                  ></button>
                </div>
              ))}
            </AlphaflyGrid>
            </div>
            

          </div>

          {/* <p>{selectedColor}</p> */}
        </div>
      </div>


    <div className='mt-72'>

    <OwnColorShowDiv id='colorCustomizationSection' mayishow={show.toString()}>
        <h1 className='pt-5 text-6xl text-center text-hoverColor'
        >CUSTOMIZE YOUR OWN SHOE WITH YOUR OWN COLORS</h1>

        <div>
          <AlphaImageDiv className="image">
        <svg id='ownColorSvg' width="1000" height="490" xmlns="http://www.w3.org/2000/svg" >
  <path  d="m36.92308,270.76923l20.76923,-10.76923l33.07692,-12.30769l30.76923,-9.23077l36.92308,-6.92308l27.69231,-6.15385l33.07692,-10l21.53846,-6.92308l12.30769,-8.46154l13.07692,-2.30769l5.38462,-9.23077l13.84615,-5.38462l20.76923,-5.38462c0,0 13.07692,0 13.07692,0c0,0 7.69231,-10 7.69231,-10c0,0 21.53846,-7.69231 21.53846,-7.69231c0,0 15.38462,-6.92308 15.38462,-6.92308c0,0 23.84615,-10.76923 23.84615,-10.76923c0,0 14.61538,-10 14.61538,-10c0,0 14.61538,-4.61538 14.61538,-4.61538c0,0 6.92308,2.30769 6.92308,2.30769c0,0 6.92308,-8.46154 6.92308,-8.46154c0,0 27.69231,-11.53846 27.69231,-11.53846c0,0 10.76923,-2.30769 10.76923,-2.30769c0,0 4.61538,-11.53846 4.61538,-11.53846c0,0 22.30769,-1.53846 21.53846,-1.53846c0.76923,0 43.07692,-43.84615 43.07692,-43.84615c0,0 28.46154,-26.15385 28.46154,-26.15385c0,0 10.76923,-15.38462 10,-15.38462c0.76923,0 12.30769,-3.84615 12.30769,-3.84615c0,0 14.61538,-2.30769 14.61538,-2.30769c0,0 13.07692,12.30769 13.07692,11.53846c0,0.76923 16.92308,43.07692 16.92308,43.07692c0,0 -4.61538,20.76923 -4.61538,20c0,0.76923 12.30769,17.69231 11.53846,17.69231c0.76923,0 10.76923,20 10.76923,20c0,0 17.69231,6.92308 17.69231,6.15385c0,0.76923 47.69231,5.38462 47.69231,4.61538c0,-0.76923 43.07692,-10 42.30769,-10c0.76923,0 23.84615,-30 23.07692,-30c0.76923,0 12.30769,-30 12.30769,-30c0,0 4.61538,-33.07692 4.61538,-33.84615c0,0.76923 7.69231,-12.30769 7.69231,-13.07692c0,0.76923 25.38462,2.30769 26.15385,2.30769c0.76923,0 17.69231,8.46154 17.69231,7.69231c0,0.76923 14.61538,19.23077 14.61538,19.23077c0,0 11.53846,26.15385 11.53846,26.15385c0,0 13.84615,33.84615 13.84615,33.84615c0,0 11.53846,28.46154 11.53846,27.69231c0,0.76923 0,38.46154 0,38.46154c0,0 16.92308,43.84615 16.92308,43.84615c0,0 6.15385,34.61538 6.15385,33.84615c0,0.76923 -4.61538,41.53846 -4.61538,40.76923c0,0.76923 -23.84615,6.15385 -24.61538,6.15385c0.76923,0 -80.76923,3.07692 -80.76923,2.30769c0,0.76923 -55.38462,3.07692 -56.15385,3.07692c0.76923,0 -66.15385,3.84615 -66.92308,3.84615c0.76923,0 -63.84615,0.76923 -63.84615,0.76923c0,0 -26.15385,0 -26.15385,0c0,0 -29.23077,3.84615 -30,3.07692c0.76923,0.76923 -30,9.23077 -30,9.23077c0,0 -35.38462,7.69231 -35.38462,7.69231c0,0 -46.92308,11.53846 -46.92308,11.53846c0,0 -33.07692,8.46154 -33.07692,8.46154c0,0 -46.92308,7.69231 -47.69231,7.69231c0.76923,0 -55.38462,4.61538 -56.15385,3.84615c0.76923,0.76923 -62.30769,0 -62.30769,0c0,0 -52.30769,-2.30769 -52.30769,-2.30769c0,0 -60,-6.92308 -60,-7.69231c0,0.76923 -59.23077,-13.07692 -59.23077,-13.07692c0,0 -46.15385,-9.23077 -46.15385,-9.23077c0,0 -34.61538,-13.84615 -34.61538,-13.84615c0,0 10,-18.46154 10,-18.46154c-6.15385,9.23077 -2.30769,-1.53846 18.46154,-15.38462z" opacity="NaN" stroke="#000" fill={ownTopColor} >
  
  </path>


</svg>
<svg width="1000" id='ownColorMiddle' height="490" xmlns="http://www.w3.org/2000/svg">
  <path d="m10,305.5l33,13.5l49,12l57,9l65,9l70,3l81,-4l65,-7l70,-21c0,0.5 40,-7.5 40,-7.5c0,0 41,-10 41,-10.5c0,0.5 23,-1.5 23,-2c0,0.5 66,-1.5 66,-2c0,0.5 74,-0.5 74,-1c0,0.5 39,-2.5 39,-3c0,0.5 73,-4.5 73,-5c0,0.5 36,1.5 36,1c0,0.5 29,-4.5 29,-5c0,0.5 18,-0.5 18,-1c0,0.5 36,9.5 36,9c0,0.5 24,14.5 24,14.5c0,0 -1,22 -1,21.5c0,0.5 -49,9.5 -49,9c0,0.5 -75,10.5 -75,10c0,0.5 -143,9.5 -143,9c0,0.5 -136,4.5 -136,4c0,0.5 -131,12.5 -131,12c0,0.5 -119,8.5 -119,8c0,0.5 -77,0.5 -77,0c0,0.5 -55,12.5 -55,12c0,0.5 -38,13.5 -38,13c0,0.5 -20,0.5 -20,0c0,0.5 -60,-24.5 -60,-25c0,0.5 -68,-40.5 -68,-41c0,0.5 -22,-12.5 -22,-13c0,0.5 5,-21.5 5,-21.5z" opacity="NaN" stroke="#000" fill={ownMiddleColor} />
</svg>

<svg id='ownColorBottom' width="1000" height="490" xmlns="http://www.w3.org/2000/svg">

  <path d="m638,485.5l-51,-6.5l-53,-15l-61,-30l-24,-16l-37,2l7,28l16,13l7,9l-15,4l-65,1l-70,-1l-32,-1c0,0.5 -15,8.5 -15,8.5c0,0 -48,-8 -48,-8.5c0,0.5 -37,-10.5 -37,-11c0,0.5 -20,-0.5 -20,-1c0,0.5 -47,-25.5 -47,-26c0,0.5 -44,-29.5 -44,-30c0,0.5 -23,-30.5 -23,-31c0,0.5 -24,-46.5 -24,-47c0,0.5 27,15.5 27,15c0,0.5 34,31.5 34,31.5c0,0 78,26 79,26c1,0 44,6 44,7c0,1 41,-13 41,-13.5c0,0.5 47,-13.5 47,-14c0,0.5 111,2.5 111,2c0,0.5 101,-8.5 101,-9c0,0.5 121,-5.5 121,-5.5c0,0 136,-10 136,-10c0,0 127,-8 127,-8.5c0,0.5 87,-8.5 87,-9c0,0.5 42,-10.5 42,-11c0,0.5 -3,17.5 -3,17c0,0.5 -28,35.5 -28,35.5c0,0 -56,58 -56,57c0,-1 -63,24 -63,23.5c0,0.5 -73,18.5 -73,18c0,0.5 -138,6.5 -138,6.5z" opacity="NaN" stroke="#000" fill={ownBottomColor} />

</svg>
          <img src='./img/alphaflyLending.png' alt="alphafly" className='w-100' />
        </AlphaImageDiv>
        </div>
        <div className='flex items-center justify-between px-32 my-20 mainContainer'>
          <div className="flex flex-col items-center forTop">
            <h2 className='text-xl text-hoverColor'>choose your color for top of the shoe</h2>
            <input type="color" name="" id="" onChange={(event) => setOwnTopColor(event.target.value)} />
          </div>

          <div className="flex flex-col items-center forMiddle">
            <h2 className='text-xl text-hoverColor'>choose your color for top of the shoe</h2>
            <input type="color" name="" id="" onChange={(event) => setOwnMiddleColor(event.target.value)} />
          </div>


          <div className="flex flex-col items-center forBottom">
            <h2 className='text-xl text-hoverColor'>choose your color for top of the shoe</h2>
            <input type="color" name="" id="" onChange={(event) => setOwnBottomColor(event.target.value)} />
          </div>



        </div>
      </OwnColorShowDiv>

    </div>



    </StyledAlphafly>


  )
}

export default Alphafly