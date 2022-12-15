import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, Navigate, useParams } from "react-router-dom";

export default function DetailProduct(props) {
  const productId = useParams();
  const [data, setData] = useState(null);
  const selectSize = useRef();
  const [sizeToShow, setSizeToShow] = useState(0);

  const topping = useRef();
  const sugar = useRef();

  let onGetData = async () => {
    try {
      let response = await axios.get(
        `http://localhost:5000/products/${productId.id}`
      );
      console.log(response);
      setData(response.data);
    } catch (error) {}
  };

  let onSelectedSize = () => {
    let indexSelectedSize = selectSize.current.value;
    setSizeToShow(indexSelectedSize);
  };

  let addCart = async () => {
    try {
      let getTokenId = localStorage.getItem("token");
      let getTokenUid = localStorage.getItem("tokenUid");

      if (getTokenId) {
        let dataToSend = {
          idProduct: data.id,
          idSize: parseInt(selectSize.current.value),
          idTopping: parseInt(topping.current.value),
          idSugar: parseInt(sugar.current.value),
          quantity: 1,
          userId: parseInt(localStorage.getItem("token")),
        };

        let checkList = await axios.get(
          `http://localhost:5000/cart?idProduct=${data.id}`
        );
        if (checkList.data.length === 0) {
          let response = await axios.post(
            "http://localhost:5000/cart",
            dataToSend
          );
          toast.success("Add Cart Success");
        } else {
          let newQuantity = checkList.data[0].quantity + 1;
          let update = await axios.patch(
            `http://localhost:5000/cart/${checkList.data[0].id}`,
            { quantity: newQuantity }
          );
          toast.success("Add Cart Success");
        }
      } else if (getTokenUid) {
        let dataToSend = {
          idProduct: data.id,
          idSize: parseInt(selectSize.current.value),
          idTopping: parseInt(topping.current.value),
          idSugar: parseInt(sugar.current.value),
          quantity: 1,
          userId: parseInt(localStorage.getItem("tokenUid")),
        };

        let checkList = await axios.get(
          `http://localhost:5000/cart?idProduct=${data.id}`
        );
        if (checkList.data.length === 0) {
          let response = await axios.post(
            "http://localhost:5000/cart",
            dataToSend
          );
          toast.success("Add Cart Success");
        } else {
          let newQuantity = checkList.data[0].quantity + 1;
          let update = await axios.patch(
            `http://localhost:5000/cart/${checkList.data[0].id}`,
            { quantity: newQuantity }
          );
          toast.success("Add Cart Success");
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    onGetData();
  }, []);

  if (data === null) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <div>
        <div>
          <div
            className="flex items-center my-bg-main"
            style={{ height: "300px" }}
          >
            <div className="basis-2/5 flex justify-center">
              <img
                src={data.image}
                className="rounded-full"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="basis-3/5 my-light">
              <h1 className="my-fs-30 font-bold">{data.name}</h1>
              <h1 className="basis-3/5 my-fs-25 mt-2">
                {data.size[sizeToShow].calories} Calories
              </h1>
              <h1 className="basis-3/5 my-fs-25 mt-2">
                Rp. {data.size[sizeToShow].price.toLocaleString()}
              </h1>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="basis-1/3 px-24">
              <h1
                className="my-fs-25 font-bold pb-2"
                style={{ borderBottom: "3px solid silver" }}
              >
                Size Options
              </h1>
              <select
                ref={selectSize}
                onClick={onSelectedSize}
                id="countries"
                className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {data.size.map((value, index) => {
                  return (
                    <option key={index} value={index}>
                      {value.option}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="basis-2/5">
              <h1
                className="my-fs-25 font-bold pb-2"
                style={{ borderBottom: "3px solid silver" }}
              >
                Topping
              </h1>
              <select
                ref={topping}
                id="countries"
                className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {data.topping.map((value, index) => {
                  return (
                    <option key={index} value={index}>
                      {value}
                    </option>
                  );
                })}
              </select>
              {data.sugar ? (
                <>
                  <h1
                    className="my-fs-25 font-bold pb-2"
                    style={{ borderBottom: "3px solid silver" }}
                  >
                    Sugar
                  </h1>
                  <select
                    ref={sugar}
                    id="countries"
                    className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a sugar</option>
                    {data.sugar.map((value, index) => {
                      return (
                        <option key={index} value={index}>
                          {value}
                        </option>
                      );
                    })}
                  </select>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-10 justify-center items-center">
        {props.data.username ? (
          <button
            className="rounded-full border px-5 py-5 bg-blue-300"
            onClick={addCart}
          >
            Add an order
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="rounded-full border px-5 py-5 bg-blue-300">
                Add an order
              </button>
            </Link>
          </>
        )}
      </div>
      <Toaster />
    </div>
  );
}
