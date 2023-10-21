function Counter({ headCounter, tailCounter, currentStatus }) {
  if (headCounter + tailCounter > 0) {
    return <p>{currentStatus} Geldi</p>;
  }
  /*   return (
    <div>
      <p>{currentStatus} Geldi</p>
      <p>Toplam {headCounter + tailCounter} atış yapıldı </p>
      <p>{headCounter} kez tura geldi</p>
      <p>{tailCounter} kez yazı geldi</p>
    </div>
  ); */
}

export default Counter;
