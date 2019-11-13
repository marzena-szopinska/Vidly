import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);
    // if all the items fit in one page don't show the pagination
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}><a onClick={() => onPageChange(page)} className="page-link">{page}</a></li>))
                }
            </ul>
        </nav>
    );
}

Pagination.propTypes = {

};

export default Pagination;