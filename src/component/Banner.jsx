import React from 'react'
import {Form, Button} from 'react-bootstrap';
const Banner = () => {
  return (
    <div className='banner'>
        <div className='titleName'>코딩알려주는 누나 도서관</div>
        
        <div className='searchArea'>
            <Form.Control
                type="text"
                placeholder="책 제목이나 작가를 검색하세요."
                className=" mr-sm-2 searchBar"
                />
            <Button type="submit" className='colorBtn'>Submit</Button>
        </div>
    </div>
  )
}

export default Banner