import Form from "../../ui/Form.jsx";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner.jsx";
import { useSettings } from "./useSettings.js";
import { useUpdateSetting } from "./useUpdateSetting.js";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      maxBookingLength,
      minBookingLength,
      breakFastPrice,
      maxGuestsPerBooking,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  function handleUpdate(e) {
    const { value, id, defaultValue } = e.target;
    if (!value || !id || +defaultValue === +value) return;

    updateSetting({ [id]: value });
  }

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="minBookingLength"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e)}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="maxBookingLength"
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e)}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="maxGuestsPerBooking"
          disabled={isUpdating}
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdate(e)}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakFastPrice"
          disabled={isUpdating}
          defaultValue={breakFastPrice}
          onBlur={(e) => handleUpdate(e)}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
