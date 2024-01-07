import './BreedsSelect.css';

export const BreedsSelect = ({breeds, handleBreedChange}) => {
  return (
    <div className='selectBreed'>
        <label>Breeds List</label>
        <select onChange={e => handleBreedChange(e)} >
          <option value="" hidden>Select</option>
          {/* プロパティ名を配列データとして取得 */}
          {Object.keys(breeds).map((breeds) => (
          <option key = {breeds} value= {breeds}>
            {breeds}
          </option>
          ))}  
        </select>
      </div>    
  )
}

export default BreedsSelect;
