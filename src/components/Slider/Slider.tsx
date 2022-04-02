import { useEffect,useState } from 'react'
import '../Slider/Slider.css'
import Icon from '../Icon/Icon'
import Posts from '../Posts/Posts';

interface IData {
  data: {
    name: string;
    company: {
      name: string;
    }
    id: number;
    position:boolean
  }[]
}

const Slider = ({ data }: IData) => {
  const [numItem, setNumItem] = useState<number>(0);
  const [itemId, setItemId] = useState<string>("");
  const [position, setPosition] = useState<boolean>(false);
  const [itemCompany, setItemCompany] = useState<string>("");
  const [statusLeft,setStatusLeft]=useState<boolean>(false);
  const [statusRight,setStatusRight]=useState<boolean>(false);
  let items = data.slice(numItem, numItem + 4);

  const leftClickHandler = () => {
    if (4 > numItem) {
      setStatusLeft(true);
      return setNumItem(0)
    }
     setStatusRight(false);
    setNumItem(numItem - 1);
  }

  const rightClickHandler = () => {
    setNumItem(numItem + 1);
    if (numItem === 6) {
      setStatusRight(true);
      return setNumItem(6) 
    } 
    setStatusLeft(false);
  }
 
  const onClickGetId = (postID:any,postCOMPANY:any) => {  
    setPosition(!position)
    setItemId(postID);
    setItemCompany(postCOMPANY)
  }

  return (
    <div className='Slider'>
      <div className='Icon'>
        <Icon/>
      </div>
      <div className='btn-group'>
        <button onClick={leftClickHandler}>
          <svg id={`${statusLeft&&'last'}`} xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#fff" className="bi bi-arrow-left-short svg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
          </svg></button>
        <button onClick={rightClickHandler}>
          <svg id={`${statusRight&&'last'}`} xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#fff" className="bi bi-arrow-right-short svg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
          </svg>
        </button>
      </div>
      <div className="slideshow-container">
        {items.map((item, index) => (
          <div className="Card" key={index} onClick={() => onClickGetId(item.id,item.company.name)}>
            <div className={`${item.id===parseInt(itemId)&& "active_img"}`}>
              <img  src={`https://i.pravatar.cc/270?img=${item.id}`} alt={item.name} />
            </div> 
            <h3 className={`${item.id===parseInt(itemId)&& "active"}`}>{item.name}</h3>
            <p className={`${item.id===parseInt(itemId)&& "active"}`}>{item.company.name}</p>
          </div>
        ))}
      </div>
      <Posts PostId={itemId} PostCompany={itemCompany} />
    </div>
  )
}

export default Slider