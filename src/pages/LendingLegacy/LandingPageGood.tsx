import Scroll from 'react-scroll'
import React, { useEffect } from 'react'
var Link = Scroll.Link
var Element = Scroll.Element
var Events = Scroll.Events
var scroll = Scroll.animateScroll
var scrollSpy = Scroll.scrollSpy
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}

const Sec = () => {
  // useEffect(() => {
  //   Events.scrollEvent.register('begin', function () {
  //     console.log('begin', arguments)
  //   })

  //   Events.scrollEvent.register('end', function () {
  //     console.log('end', arguments)
  //   })

  //   scrollSpy.update()
  // }, [])

  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
    <Element
      name='test7'
      className='element'
      id='containerElement'
      style={{
        position: 'relative',
        overflow: 'scroll',
      }}
    >
      <div>
        <nav className='navbar navbar-default navbar-fixed-top'>
          <div className='container-fluid'>
            <div
              className='collapse navbar-collapse'
              id='bs-example-navbar-collapse-1'
            >
              <ul className='nav navbar-nav'>
                <li>
                  {' '}
                  <input
                    onKeyDown={e => {
                      // @ts-ignore
                      // eslint-disable-next-line no-unused-expressions
                      ;() => console.log('keydown'), scroll.scrollMore(500)
                    }}
                  />
                  <a onClick={() => scroll.scrollTo(100)}>Scroll To 100!</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Element name='test1' className='element'>
          test 1
        </Element>

        <Element name='test2' className='element'>
          test 2
        </Element>

        <Element name='test3' className='element'>
          test 3
        </Element>

        <Element name='test4' className='element'>
          test 4
        </Element>

        <Element name='test5' className='element'>
          test 5
        </Element>

        <div id='anchor' className='element'>
          test 6 (anchor)
        </div>
        <Link
          activeClass='active'
          to='test7'
          spy={true}
          smooth={true}
          duration={250}
          style={{ display: 'inline-block', margin: '20px' }}
        >
          <span>{'dfdsfs'}</span>
        </Link>
        <Link
          activeClass='active'
          to='firstInsideContainer'
          spy={true}
          smooth={true}
          duration={250}
          containerId='containerElement'
          style={{ display: 'inline-block', margin: '20px' }}
        >
          Go to first element inside container
        </Link>
        <div>
          <Link
            to='start-now'
            spy={true}
            smooth={true}
            duration={250}
            containerId='containerElement'
            style={{ display: 'inline-block', margin: '20px' }}
          >
            Go to second element inside container
          </Link>
        </div>
        <div>
          test 7 (duration and container)
          <Element
            name='firstInsideContainer'
            style={{
              marginBottom: '200px'
            }}
          >
            first element inside container
          </Element>
          <Element
            name='start-now'
            style={{
              marginBottom: '200px'
            }}
          >
            second element inside container
          </Element>
          <Element name="same" id='same' className='element'>
            Two links point to this
          </Element>
        </div>
        <a onClick={scrollToTop}>To the top!</a>
      </div>
    </Element>
  )
}

// class Section extends React.Component {
//   constructor (props) {
//     super(props)
//     this.scrollToTop = this.scrollToTop.bind(this)
//   }

//   componentDidMount () {
//     Events.scrollEvent.register('begin', function () {
//       console.log('begin', arguments)
//     })

//     Events.scrollEvent.register('end', function () {
//       console.log('end', arguments)
//     })

//     scrollSpy.update()
//   }
//   scrollToTop () {
//     scroll.scrollToTop()
//   }
//   componentWillUnmount () {
//     Events.scrollEvent.remove('begin')
//     Events.scrollEvent.remove('end')
//   }
//   render () {
//     return (
//       <div>
//         <nav className='navbar navbar-default navbar-fixed-top'>
//           <div className='container-fluid'>
//             <div
//               className='collapse navbar-collapse'
//               id='bs-example-navbar-collapse-1'
//             >
//               <ul className='nav navbar-nav'>
//                 <li>
//                   {' '}
//                   <input
//                     onKeyDown={e => {
//                       // @ts-ignore
//                       // eslint-disable-next-line no-unused-expressions
//                       ;() => console.log('keydown'), scroll.scrollMore(500)
//                     }}
//                   />
//                   <a onClick={() => scroll.scrollTo(100)}>Scroll To 100!</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <Element name='test1' className='element'>
//           test 1
//         </Element>

//         <Element name='test2' className='element'>
//           test 2
//         </Element>

//         <Element name='test3' className='element'>
//           test 3
//         </Element>

//         <Element name='test4' className='element'>
//           test 4
//         </Element>

//         <Element name='test5' className='element'>
//           test 5
//         </Element>

//         <div id='anchor' className='element'>
//           test 6 (anchor)
//         </div>

//         <Link
//           activeClass='active'
//           to='firstInsideContainer'
//           spy={true}
//           smooth={true}
//           duration={250}
//           containerId='containerElement'
//           style={{ display: 'inline-block', margin: '20px' }}
//         >
//           Go to first element inside container
//         </Link>

//         <Link
//           activeClass='active'
//           to='secondInsideContainer'
//           spy={true}
//           smooth={true}
//           duration={250}
//           containerId='containerElement'
//           style={{ display: 'inline-block', margin: '20px' }}
//         >
//           Go to second element inside container
//         </Link>
//         <Element
//           name='test7'
//           className='element'
//           id='containerElement'
//           style={{
//             position: 'relative',
//             height: '200px',
//             overflow: 'scroll',
//             marginBottom: '100px'
//           }}
//         >
//           test 7 (duration and container)
//           <Element
//             name='firstInsideContainer'
//             style={{
//               marginBottom: '200px'
//             }}
//           >
//             first element inside container
//           </Element>
//           <Element
//             name='secondInsideContainer'
//             style={{
//               marginBottom: '200px'
//             }}
//           >
//             second element inside container
//           </Element>
//         </Element>

//         <Element id='same' className='element'>
//           Two links point to this
//         </Element>

//         <a onClick={this.scrollToTop}>To the top!</a>
//       </div>
//     )
//   }
// }

export default Sec
// Section
