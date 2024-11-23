import {
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineBanknotes,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat.jsx";
import { useRecentBookings } from "./useRecentBookings.js";
import { formatCurrency } from "../../utils/helpers.js";
import { useEffect } from "react";

function Stats({ bookings, confirmedStays, numDays, cabins }) {
  const numBookings = bookings?.length;

  const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const stays = confirmedStays.length;

  const cabinsCount = cabins?.length;

  const occupation =
    confirmedStays?.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsCount);

  return (
    <>
      <Stat
        title="bookings"
        icon={<HiOutlineBriefcase />}
        color="blue"
        value={numBookings}
      />
      <Stat
        title="sale"
        icon={<HiOutlineBanknotes />}
        color="green"
        value={formatCurrency(sales)}
      />
      <Stat
        title="check ins"
        icon={<HiOutlineCalendarDays />}
        color="indigo"
        value={stays}
      />
      <Stat
        title="occupancy rate"
        icon={<HiOutlineChartBar />}
        color="yellow"
        value={Math.round(occupation * 100) + '%'}
      />
    </>
  );
}

export default Stats;
