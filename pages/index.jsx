import { useEffect, useState } from "react";

export default function () {
  const [state, setState] = useState("not yet");

  useEffect(() => {
    fetch("/api").then((res) => {
      res.json().then((data) => {
        setState(data.text);
      });
    });
  }, []);

  return (
    <div>
      <h1>hello {process.env.NEXT_PUBLIC_SAMPLE_ENV}</h1>
      <p>receive from api: {state}</p>
    </div>
  );
}
