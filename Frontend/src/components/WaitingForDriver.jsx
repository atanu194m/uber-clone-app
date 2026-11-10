import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
        if (typeof props.setWaitingForDriver === 'function') {
          props.setWaitingForDriver(false)
        }
      }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

      <div className='flex items-center justify-between'>
        <img className='h-12 w-20 object-contain' src="/car.svg" alt="Vehicle" />
        <div className='text-right'>
          <h2 className='text-lg font-medium capitalize'>{props.ride?.captain?.fullname?.firstname || 'Captain'}</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>{props.ride?.captain?.vehicle?.plate || 'WB-01-XXXX'}</h4>
          <p className='text-sm text-gray-600'>{props.ride?.captain?.vehicle?.vehicleType || 'Vehicle'}</p>
          <div className='mt-2 inline-block bg-emerald-50 text-emerald-900 px-3 py-1.5 rounded-lg border border-emerald-300 shadow-sm'>
            <span className='text-[10px] font-bold uppercase tracking-wider block text-emerald-600'>Share with Captain</span>
            <span className='text-2xl font-mono font-black tracking-widest text-emerald-700'>{props.ride?.otp || '------'}</span>
          </div>
        </div>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹{props.ride?.fare} </h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver