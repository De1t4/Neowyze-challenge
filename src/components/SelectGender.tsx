import React from 'react';

const SelectGender = ({selectOption, selectOptionEyes}:{selectOption: (e:string) => void, selectOptionEyes: (e:string) => void} ) => {
  return (
    <div className=' gap-4 flex justify-between  w-3/5 max-md:w-full'>
      <div className="flex flex-col">
        <label htmlFor="gender">Gender</label>
        <select onChange={(e) => selectOption(e.target.value)} name="gender" id="gender" className=' font-semibold mr-4 mb-4 text-gray-700 w-40'>
          <option value="all" className=''>All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="none">None</option>
          <option value="hermaphrodite">Hermaphrodite</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="eye-color">Eye Color</label>
        <select onChange={(e) => selectOptionEyes(e.target.value)} name="eye-color" id="eye-color" className='mb-4 text-gray-700 w-40'>
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

export default SelectGender;
