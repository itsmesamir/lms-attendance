import { Column, useTable } from "react-table";

type TableProps<T extends object> = {
  columns: Column<T>[];
  data: T[];
};

function Table<T extends object>({ columns, data }: TableProps<T>) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()} className="w-full border-collapse">
      <thead className="bg-gray-200">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="px-4 py-2 text-left font-semibold"
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="hover:bg-gray-100">
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="border px-4 py-2">
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
