function Sorting(data) {
  return data.sort((a, b) => {
    return b.experience - a.experience;
  });
}

export default Sorting;
