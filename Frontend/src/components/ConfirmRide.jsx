import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div>
            {/* Top Bar with Back Button */}
            <div className='flex items-center justify-between pb-3 mb-2 border-b'>
                <button
                    onClick={() => {
                        props.setConfirmRidePanel(false)
                        if (props.setVehiclePanel) props.setVehiclePanel(true)
                    }}
                    className='flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold text-gray-700 transition-all cursor-pointer'>
                    <i className="ri-arrow-left-line text-base"></i>
                    <span>Back to Vehicles</span>
                </button>
                <h5 
                    onClick={() => props.setConfirmRidePanel(false)} 
                    className='cursor-pointer text-gray-500 hover:text-black transition-all p-1'>
                    <i className="text-2xl ri-close-line"></i>
                </h5>
            </div>

            <h3 className='text-2xl font-bold mb-3'>Confirm your Ride</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20 w-32 object-contain' src={props.vehicleType === 'moto' ? '/moto.svg' : props.vehicleType === 'auto' ? '/auto.svg' : '/car.svg'} alt="Vehicle" />
                <div className='w-full mt-3'>
                    <div className='flex items-center gap-4 p-3 border-b'>
                        <i className="ri-map-pin-user-fill text-xl text-green-600"></i>
                        <div>
                            <h3 className='text-xs text-gray-500 font-medium uppercase tracking-wider'>Pickup</h3>
                            <p className='text-base font-semibold text-gray-800 leading-tight'>{props.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 p-3 border-b'>
                        <i className="ri-map-pin-2-fill text-xl text-red-600"></i>
                        <div>
                            <h3 className='text-xs text-gray-500 font-medium uppercase tracking-wider'>Destination</h3>
                            <p className='text-base font-semibold text-gray-800 leading-tight'>{props.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 p-3'>
                        <i className="ri-currency-line text-xl text-yellow-600"></i>
                        <div>
                            <h3 className='text-xs text-gray-500 font-medium uppercase tracking-wider'>Total Fare</h3>
                            <p className='text-lg font-bold text-gray-900'>₹{props.fare[ props.vehicleType ] || props.fare.car || 120} <span className='text-xs font-normal text-gray-500'>(Cash on ride)</span></p>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    props.setVehicleFound(true)
                    props.setConfirmRidePanel(false)
                    props.createRide()
                }} className='w-full mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-lg active:scale-[0.98] transition-all text-lg'>
                    Confirm Ride
                </button>
            </div>
        </div>
    )
}

export default ConfirmRide