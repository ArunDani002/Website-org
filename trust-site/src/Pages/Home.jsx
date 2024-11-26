import React from 'react'
import Footer from './Footer'
import Layout from './Layout'

const Home = () => {
  return (
    <>

      <div >
        {/* Header */}

        <header>
          <div style={{
            border: '1px solid black',
            width: 60,
            height: 60,
            borderRadius: 20,
            display: 'inline-block',
            marginLeft: 50,
            marginTop: 10

          }}>
            <p>logo</p>
          </div>
          <h1 className="Title">Village & Trible Mission</h1>
        </header>
        <div className='nav'>
        </div>
        <hr className='underline' />
      </div>
      <div className='desc' >
        <h2 className='motto'>Our Motto</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo itaque eligendi reiciendis maiores rem assumenda ipsa fugiat fugit. Obcaecati possimus, earum quod quisquam ipsum dolorem dignissimos rerum nihil provident hic aut, doloremque veritatis aliquam eum delectus. Blanditiis corporis enim magni tempore sint illo nihil hic ex atque commodi alias similique consequuntur, porro doloribus quidem amet. Magnam officia nobis cum, rem quam distinctio natus quibusdam. Enim tempora repellendus asperiores fuga vitae provident quae quod quidem maxime fugit quaerat tenetur, in sed hic, officiis consectetur facilis nisi quas ab? Expedita deserunt illum possimus explicabo suscipit illo molestiae error deleniti minima a inventore sunt enim recusandae ab quas quo quaerat dolorum aut maiores, excepturi at officiis necessitatibus! Aperiam inventore velit nam nulla numquam, non cupiditate commodi aut molestiae, iste quos placeat quasi perferendis repudiandae dolor vel vitae assumenda ullam odit veniam voluptate nesciunt! Quas placeat esse architecto dolorem. Sapiente voluptate soluta numquam rerum laboriosam voluptatibus? Provident, laudantium nemo enim consectetur ea rem, temporibus repellendus dolorem et neque rerum non saepe laboriosam voluptates amet eveniet a quo reprehenderit impedit optio? Cupiditate, dignissimos non corporis commodi laudantium voluptas nobis temporibus quia quos at architecto? Consequatur earum accusamus mollitia magni quam iste cumque, dignissimos officiis perspiciatis.</p>
      </div>
      <div>

      </div>
      <div className="circle">
      </div>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 400,
          marginLeft: 400,
        }}>
        <h2 style={{ textAlign: 'center' }}>What we are doing?</h2>
        <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquam repellat consectetur voluptatum commodi porro perferendis? Ea eaque eligendi aperiam facilis blanditiis reiciendis similique necessitatibus nostrum labore consequuntur! Facilis, consectetur.</p>
        <div style={{
          display: 'flex',

        }}>
          <div
            className='Boxes'
          >
          </div>
          <div
            className='Boxes'>
          </div>
          <div
            className='Boxes'
          >
          </div>


        </div>


      </div>
      <br />
      <br />
      <hr />
      <div className='circleandDesc'>
        <div className="circle1">
        </div>
        <div className='desc1' >
          <h2 className='motto'>Other Title</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo itaque eligendi reiciendis maiores rem assumenda ipsa fugiat fugit. Obcaecati possimus, earum quod quisquam ipsum dolorem dignissimos rerum nihil provident hic aut, doloremque veritatis aliquam eum delectus. Blanditiis corporis enim magni tempore sint illo nihil hic ex atque commodi alias similique consequuntur, porro doloribus quidem amet. Magnam officia nobis cum, rem quam distinctio natus quibusdam. Enim tempora repellendus asperiores fuga vitae provident quae quod quidem maxime fugit quaerat tenetur, in sed hic, officiis consectetur facilis nisi quas ab? Expedita deserunt illum possimus explicabo suscipit illo molestiae error deleniti minima a inventore sunt enim recusandae ab quas quo quaerat dolorum aut maiores, excepturi at officiis necessitatibus! Aperiam inventore velit nam nulla numquam, non cupiditate commodi aut molestiae, iste quos placeat quasi perferendis repudiandae dolor vel vitae assumenda ullam odit veniam voluptate nesciunt! Quas placeat esse architecto dolorem. Sapiente voluptate soluta numquam rerum laboriosam voluptatibus? Provident, laudantium nemo enim consectetur ea rem, temporibus repellendus dolorem et neque rerum non saepe laboriosam voluptates amet eveniet a quo reprehenderit impedit optio? Cupiditate, dignissimos non corporis commodi laudantium voluptas nobis temporibus quia quos at architecto? Consequatur earum accusamus mollitia magni quam iste cumque, dignissimos officiis perspiciatis.</p>
        </div>
      </div>
      <br />
      {/* Footer */}
      <Footer />

    </>

  )
}

export default Home