import React from 'react'
import '../css/Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' alt='' src="https://imgs.search.brave.com/BJNxz5s3VzfOL3mnUorDWCFXs2CDaGM4s4xnHprp-d4/rs:fit:1200:834:1/g:ce/aHR0cHM6Ly9mb3J0/aGVsb3ZlYmxvZy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDcvQW1hem9u/LVByaW1lLUJhbm5l/ci5qcGc" />

            <div className='home__row'>
                <Product id="1" title='The Lean Startup: How Constant Innovation Create Radically Successful Business Paperback' price={29.99} rating={5} image='https://imgs.search.brave.com/f2YYmK-WFPtu5r86998l45uFHbVPwXwDee_Dof95s_I/rs:fit:1059:1200:1/g:ce/aHR0cDovLzEuYnAu/YmxvZ3Nwb3QuY29t/Ly1ULWQzSlBNci1V/ay9VUHNoTHVpZHk2/SS9BQUFBQUFBQUZi/VS92T2lIZDBxZ25D/NC9zMTYwMC9sZWFu/LXN0YXJ0dXBfYm9v/ay1jb3Zlci5qcGVn' />
                <Product id="2" title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' price={239.0} rating={4} image='https://m.media-amazon.com/images/I/6113lMeZpWS._SX569_.jpg'/>
            </div>

            <div className='home__row'>
                <Product id="3" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
                <Product id="4" title="Amazon Echo (3rd generation) | Smart speaker with alexa, Charcoal Fabric" price={98.99} rating={5} image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$' />
                <Product id="5" title="New Apple iPad Pro (12.9 inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={598.99} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' />
            </div>

            <div className='home__row'>
                <Product id="6" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.98} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'/>
            </div>
        </div>
    </div>
  )
}

export default Home
