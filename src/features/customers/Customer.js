import { useSelector } from "react-redux";

function Customer() {
  const customerFullName = useSelector((state) => state.customer.fullName);

  return <h2>👋 Welcome, {customerFullName}</h2>;
}

export default Customer;
