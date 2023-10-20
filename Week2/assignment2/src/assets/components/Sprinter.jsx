function Sprinter({ spokemon }) {
  return (
    <ul>
      <li>
        {spokemon.name} {spokemon.type} {spokemon.experience}
      </li>
    </ul>
  );
}

export default Sprinter;
