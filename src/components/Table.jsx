import { useState, useMemo } from 'react';
import styles from './Table.module.css';

export default function Table({ data, columns, initialSort, itemsPerPage = 10, onRowSelect }) {
  const [sortConfig, setSortConfig] = useState(initialSort || { key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleRowClick = (row) => {
    if (onRowSelect) {
      onRowSelect(row);
    } else {
      const isSelected = selectedRows.some(r => r.id === row.id);
      if (isSelected) {
        setSelectedRows(selectedRows.filter(r => r.id !== row.id));
      } else {
        setSelectedRows([...selectedRows, row]);
      }
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`${styles.tableHeader} ${sortConfig.key === column.key ? `sort${sortConfig.direction.charAt(0).toUpperCase() + sortConfig.direction.slice(1)}` : ''}`}
                onClick={() => requestSort(column.key)}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <tr
              key={row.id}
              className={`${styles.tableRow} ${selectedRows.some(r => r.id === row.id) ? styles.selected : ''}`}
              onClick={() => handleRowClick(row)}
            >
              {columns.map((column) => (
                <td key={column.key} className={styles.tableCell}>
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.paginationContainer}>
        <button
          className={styles.paginationButton}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`${styles.paginationButton} ${currentPage === page ? styles.active : ''}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}

        <button
          className={styles.paginationButton}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

        <span className={styles.paginationInfo}>
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
}
