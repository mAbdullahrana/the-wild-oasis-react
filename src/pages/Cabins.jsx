import AddCabin from "../features/cabins/AddCabin.jsx";
import CabinsTableOperations from "../features/cabins/CabinsTableOperations.jsx";
import CabinTable from "../features/cabins/CabinTable.jsx";
import Filter from "../ui/Filter.jsx";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinsTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <div>
          <AddCabin />
        </div>
      </Row>
    </>
  );
}

export default Cabins;
