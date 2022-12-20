import React from 'react'

const Pagination = ({page, maxPage, setPage}) => {

    const pagesPerBlock = 6
  const currentBlock = Math.ceil(page / pagesPerBlock)
  const maxBlock = Math.ceil( maxPage / pagesPerBlock )

  const arrPages = []
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1
  const finalPage = maxBlock === currentBlock ? maxPage : currentBlock * pagesPerBlock
  for(let i = initialPage; i <= finalPage; i++) {
    arrPages.push(i)
  }

  const handlePage = num => {
    setPage(num)
  }

  const handlePrev = ()=>{
    if(page-1>0){
        setPage(page-1)
    }
  }

  const handleNext = ()=>{
    if (page + 1 <= maxPage) {
        setPage(page+1)
    }
  }
  return (
    <div className='page_nav'>
        <button className='page_btn' onClick={handlePrev}> <i className="fa-solid fa-arrow-left-long"></i> </button>
        {
            arrPages.map(e=>(
                
              <ul key={e}>

                <li className='page' onClick={() => handlePage(e)} >{e}</li>
              </ul>

                
            ))
        }
        <button className='page_btn'  onClick={handleNext}> <i className="fa-solid fa-arrow-right-long"></i> </button>
    </div>
  )
}

export default Pagination