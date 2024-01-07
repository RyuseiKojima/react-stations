import { useState, useEffect } from 'react';
import { BreedsSelect } from './BreedsSelect.jsx';
import {DogImage} from './DogImage';
import './DogListContainer.css';

export const DogListContainer = () => {
  // 犬種リスト
  const [breeds, setBreeds] = useState([]);
  // 選択された犬種
  const [selectedBreed, setSelectedBreed] = useState('');
  // 画像リスト
  const [dogImages, setDogImages] = useState([]);

  // リロード時に犬種リストを取得し、stateに保存
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(dogData => {
      setBreeds(dogData.message);
      console.log();
    });    
  }, []);

  // 犬種選択時に登録
  const handleBreedChange = e => {
    setSelectedBreed(e.target.value);
  }

  // 選択した犬種の画像リストを取得
  const handleShowImages = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
    .then(res => res.json())
    .then(dogData => {
      setDogImages(dogData.message);
    });
  };

  return (
    <div className='selectLists'>
      <div className='select'>
        <BreedsSelect breeds = {breeds} handleBreedChange = {handleBreedChange}/>
        <button className='breed-button' onClick={handleShowImages}>表示</button>
      </div>      
      {dogImages.map(imageUrl => (
        // map関数にはkeyが必要
        <div key = {imageUrl} value= {imageUrl} className='list'>
          <DogImage imageUrl = {imageUrl}/>        
        </div>
      ))}
    </div>
  );
};

export default DogListContainer






