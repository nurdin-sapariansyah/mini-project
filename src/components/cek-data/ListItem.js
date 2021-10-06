import "./Home.css";
const ListItem = (props) => {
  const { id, nama, nik, ket } = props.query;

  return (
    <tr>
      <td>{nama}</td>
      <td>{nik}</td>
      <td>{ket}</td>
    </tr>
  );
};

export default ListItem;
