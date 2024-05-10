import { Button } from "react-bootstrap";

const Car = (e) => {
  return (
    <div>
      <p>{e.name}</p>
      <p>{e.age}</p>
    </div>
  );
};
export default function Fun() {
  const handClick = (e) => {
    alert(e.type);
  };

  return (
    <div>
      <h1>
        this is my car
        <Car name="AUDI" age={21} />
      </h1>
      <Button onClick={(e) => handClick(e)} className="bg-info border-0 shadow">
        Click
      </Button>
    </div>
  );
}

export const One = () => {
  return <p>One</p>;
};
export const Two = () => {
  return <p>Two</p>;
};
export const Go = (e) => {
  const g = e.g;
  //   if (g) {
  //     return <One />;
  //   } else {
  //     return <Two />;
  //   }

  return g ? <One /> : <Two />;
};

export const Log = () => {
  const Car = [1, 2, 3, 4, 5];
  return <div>{Car.length>0 && <h2>you have length {Car.length}</h2>}</div>;
};

