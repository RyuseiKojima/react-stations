// @ts-check
import './Description.css'
import { DogImage } from './DogImage.jsx'
import { useState } from 'react';


export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  const getData = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogUrl(data.message)
      })
      .catch((err) => console.error("エラーです:", err));
  };
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='grid1'>
          <p>犬の画像を表示するサイトです。</p>
        </div>
        <div className='grid2'>
          <DogImage imageUrl = {dogUrl} />
        </div>
        <div className='grid3'>
          <button className='description-button' onClick={getData}>更新</button>
        </div>
      </div>
    </div>
  );
}

export default Description
