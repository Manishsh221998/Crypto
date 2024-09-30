import React from 'react'
 import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div> 
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://academy.education.investing.com/wp-content/uploads/2022/03/bitcoin-what-is-crypto-scaled.jpg"
      className="max-w-sm h-[400px] rounded-lg shadow-2xl hover:rotate-6 hover:shadow-[#ffee8d] sm:h-[110px] sm:w-[100px] lg:h-[400px] lg:w-[420px]" />
    <div>
      <h1 className="text-5xl lg:py-2 sm:py-0 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#080808] to-[#ffe346]">Start Investing in Crypto!</h1>
      <p className="lg:py-6 sm:py-0">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.

      </p>
      <Link to='/cryptoList'><button className="btn btn-outline hover:-rotate-6 hover:shadow-red-400 hover:shadow-lg">Get Started</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home