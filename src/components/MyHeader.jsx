import resim from "../assets/nba-logo.png";
const MyHeader = () => {
  return (
    <div className="header text-center">
      <img className="img w-25 " src={resim} alt="nba" />
      <h1>NBA LEGENDS</h1>
    </div>
  );
};

export default MyHeader;

{
  /* <div className="d-flex justify-content-center">
<input
  value={oyuncuAra}
  type="text"
  onChange={bulGetir}
  className="form-control w-50"
  placeholder="Arama yapın"
/>
</div>
<div>
{data.filter((value) => {
  if (oyuncuAra == "") {
    return value;
  } else if (
    value.tite
      .toLocaleLowerCase()
      .includes(oyuncuAra.toLocaleLowerCase())
  ) {
    return value;
  }
})}
</div> */
}
