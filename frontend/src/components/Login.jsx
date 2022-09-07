import React from 'react'
import Header from './Header'

const login = () => {
  return (
    <>
    <Header/>
    <div className="container mx-auto">
        <div className="w-80 mx-auto mt-40">
          <form>
            <div>
              <input
                type="email"
                placeholder="email"
                className="border-b-2 border-white py-1 text-white text-2xl w-full mt-6 placeholder:text-gray focus:outline-0"
                // {...register("email")}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="password"
                className="border-b-2 border-white py-1 text-white text-2xl w-full mt-6 placeholder:text-gray focus:outline-0"
                // {...register("password")}
              />
            </div>
            <div>
              <button className="bg-primary mt-6 text-white rounded-full py-2 w-full">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default login