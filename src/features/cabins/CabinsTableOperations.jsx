import Filter from "../../ui/Filter.jsx";
import TableOperations from "../../ui/TableOperations.jsx";

function CabinsTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "no-discount" },
          { value: "with-discount", label: "with-discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinsTableOperations;
