import { Button } from '@/shared';
import React, { useState } from 'react';

export const Pagination = ({ totalItems, itemsPerPage, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        onPageChange(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    className={i === currentPage ? 'active' : ''}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="pagination">

            <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &laquo; Prev
            </Button>
            <ul>
                {renderPageNumbers()}
            </ul>
            <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next &raquo;
            </Button>

        </div>
    );
};

interface PaginationProps {
    totalItems: number
    itemsPerPage: number
    onPageChange: (page: number) => void
}