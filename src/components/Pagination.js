import React from 'react';
import "../style/Pagination.css"

function Pagination({ handleNextClick, handlePrevClick, total, count, offset})  {

        return(
            <div className="pagination">
                <div className="btn__pages">
                    <div className="btn__pag__back">
                        <button onClick={handlePrevClick} className="pag__btn" disabled={offset<1}>{'<'}</button>
                    </div>
                    <div>
                        <p className="pagination__text">{offset + 1} - {offset+count} from {total}</p>
                    </div>
                    <div className="btn__pag__back">
                        <button onClick={handleNextClick} className="pag__btn" disabled={(offset+count)>total}>{'>'}</button>
                    </div>
                </div>
            </div>
        )
}

export default Pagination;