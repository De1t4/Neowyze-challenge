import React from 'react';

const FilterPeople = ({getValueGender,getEyesColorValue }:{getValueGender: (e:React.ChangeEvent<HTMLSelectElement>) => void, getEyesColorValue: (e:React.ChangeEvent<HTMLSelectElement>) => void}) => {
  return (
    <div className=" max-md:w-full w-[60rem] flex justify-between mb-4">
    <div className="flex flex-col">
      <label htmlFor="gender">Gender</label>
      <select name="gender" id="gender"  onChange={(e)  => getValueGender(e)} className=' border-[1px] rounded-md h-8 bg-gray-900 font-semibold  text-gray-100 w-40 max-md:w-full'>
        <option value="all" className=''>All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="none">None</option>
        <option value="hermaphrodite">Hermaphrodite</option>
      </select>
    </div>
    <div className="flex flex-col">
      <label htmlFor="eye-color">Eye Color</label>
      <select name="eye-color" id="eye-color"  onChange={(e) => getEyesColorValue(e) } className='border-[1px] rounded-md h-8 bg-gray-900 font-semibold  text-gray-100 w-40 '>
        <option value="all">All</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="brown">Brown</option>
        <option value="blue-gray">Blue-gray</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="hazel">Hazel</option>
        <option value="black">Black</option>
        <option value="pink">Pink</option>
        <option value="green">Green</option>
        <option value="gold">Gold</option>
        <option value="white">White</option>
        <option value="none">None</option>
        </select>
      </div>
    </div>
  );
}

export default FilterPeople;
