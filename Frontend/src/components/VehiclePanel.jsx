import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            {/* Top Bar with Back Button */}
            <div className='flex items-center justify-between pb-3 mb-2 border-b'>
                <button
                    onClick={() => {
                        props.setVehiclePanel(false)
                    }}
                    className='flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold text-gray-700 transition-all cursor-pointer'>
                    <i className="ri-arrow-left-line text-base"></i>
                    <span>Edit Locations</span>
                </button>
                <h5 
                    onClick={() => props.setVehiclePanel(false)} 
                    className='cursor-pointer text-gray-500 hover:text-black transition-all p-1'>
                    <i className="text-2xl ri-close-line"></i>
                </h5>
            </div>

            <h3 className='text-2xl font-bold mb-4'>Choose a Vehicle</h3>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('car')
            }} className='flex border-2 border-gray-100 hover:border-black active:border-black mb-3 rounded-2xl w-full p-3 items-center justify-between cursor-pointer transition-all shadow-sm'>
                <img className='h-12 w-20 object-contain' src="/car.svg" alt="Car" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-bold text-base text-gray-900'>UberGo <span className='ml-1 text-sm font-normal text-gray-500'><i className="ri-user-3-fill"></i> 4</span></h4>
                    <h5 className='font-medium text-xs text-green-600'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-500'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-bold text-gray-900'>₹{props.fare.car || 120}</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('moto')
            }} className='flex border-2 border-gray-100 hover:border-black active:border-black mb-3 rounded-2xl w-full p-3 items-center justify-between cursor-pointer transition-all shadow-sm'>
                <img className='h-12 w-20 object-contain' src="/moto.svg" alt="Moto" />
                <div className='-ml-2 w-1/2'>
                    <h4 className='font-bold text-base text-gray-900'>Moto <span className='ml-1 text-sm font-normal text-gray-500'><i className="ri-user-3-fill"></i> 1</span></h4>
                    <h5 className='font-medium text-xs text-green-600'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-500'>Affordable motorcycle rides</p>
                </div>
                <h2 className='text-lg font-bold text-gray-900'>₹{props.fare.moto || props.fare.motorcycle || 65}</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('auto')
            }} className='flex border-2 border-gray-100 hover:border-black active:border-black mb-2 rounded-2xl w-full p-3 items-center justify-between cursor-pointer transition-all shadow-sm'>
                <img className='h-12 w-20 object-contain' src="/auto.svg" alt="Auto" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-bold text-base text-gray-900'>UberAuto <span className='ml-1 text-sm font-normal text-gray-500'><i className="ri-user-3-fill"></i> 3</span></h4>
                    <h5 className='font-medium text-xs text-green-600'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-500'>Affordable Auto rides</p>
                </div>
                <h2 className='text-lg font-bold text-gray-900'>₹{props.fare.auto || 90}</h2>
            </div>
        </div>
    )
}

export default VehiclePanel