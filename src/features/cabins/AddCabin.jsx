import Button from "../../ui/Button.jsx";
import Modal from "../../ui/Modal.jsx";
import CabinTable from "./CabinTable.jsx";

import CreateCabinForm from "./CreateCabinForm.jsx";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}
// function AddCabin() {
//   const [openModal, setOpenModal] = useState(false);
//   return  (
//     <div>
//       <Button onClick={() => setOpenModal((show) => !show)}>
//         Add New Cabin
//       </Button>
//       {openModal && (
//         <Modal onClose={() => setOpenModal(false)}>
//           <CreateCabinForm onClose={() => setOpenModal(false)}  />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
