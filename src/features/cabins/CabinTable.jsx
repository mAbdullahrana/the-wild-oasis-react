import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner.jsx";
import Table from "../../ui/Table.jsx";
import CabinRow from "./CabinRow.jsx";
import { useCabins } from "./useCabins.js";


function CabinTable() {
  const { cabins, isLoading } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  // Getting the value form the Url
  const filterValue = searchParams.get("discount") || "all";

  let filterCabin;
  if (filterValue === "all") filterCabin = cabins;
  if (filterValue === "no-discount")
    filterCabin = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filterCabin = cabins.filter((cabin) => cabin.discount > 0);
  return (
    <Table role="table" columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body
        // data={cabins}
        data={filterCabin}
        render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
      />
    </Table>
  );
}

export default CabinTable;
