import { Button } from '@/shared';
import classes from './Pagination.module.scss'
import cn from 'clsx';

export const Pagination = ({ totalItems, itemsPerPage, onPageChange, currentPage, onButtonClick }: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);


    const handlePageChange = (page: number) => {
        onButtonClick()
        onPageChange(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    className={cn(classes.li, { [classes.active]: i === currentPage })}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <div className={classes.pagination}>

            <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &laquo; Prev
            </Button>
            <ul className={classes.ul}>
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
    onButtonClick: () => void
    currentPage: number
    totalItems: number
    itemsPerPage: number
    onPageChange: (page: number) => void
}