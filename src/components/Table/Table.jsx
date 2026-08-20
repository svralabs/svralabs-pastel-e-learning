import { useState, useMemo } from 'react';

export default function Table({ columns, data, defaultSort, defaultPageSize, onRowSelect }) {
  const [sortConfig, setSortConfig] = useState(defaultSort || { key: null, direction: 'asc' });
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

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const pageSize = defaultPageSize || 10;
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleRowSelect = (row) => {
    const newSelectedRows = selectedRows.includes(row.id)
      ? selectedRows.filter(id => id !== row.id)
      : [...selectedRows, row.id];
    setSelectedRows(newSelectedRows);
    if (onRowSelect) {
      onRowSelect(newSelectedRows);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-surface-container-lowest rounded-xl border-2 border-surface-container-highest">
        <thead>
          <tr className="bg-surface-container-low">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-headline-md font-headline-md text-on-surface cursor-pointer hover:bg-surface-variant transition-colors"
                onClick={() => requestSort(column.key)}
              >
                <div className="flex items-center gap-2">
                  {column.title}
                  {sortConfig.key === column.key && (
                    <span className="material-symbols-outlined text-sm">
                      {sortConfig.direction === 'asc' ? 'arrow_upward' : 'arrow_downward'}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <tr
              key={row.id}
              className={`border-b border-surface-variant ${selectedRows.includes(row.id) ? 'bg-primary-container' : 'hover:bg-surface-container'}`}
              onClick={() => handleRowSelect(row)}
            >
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 text-body-default font-body-default text-on-surface">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div className="text-body-default font-body-default text-on-surface">
          Showing {(currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} entries
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-surface-container text-on-surface rounded-lg font-label-bold text-label-bold hover:bg-surface-variant transition-colors disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg font-label-bold text-label-bold ${currentPage === page ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface hover:bg-surface-variant'}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            className="px-4 py-2 bg-surface-container text-on-surface rounded-lg font-label-bold text-label-bold hover:bg-surface-variant transition-colors disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
