import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AccountDeliveryForm from "../components/AccountDeliveryForm";
import ChangePassword from "../components/ChangePassword";
import { selectUser } from "../redux/user";

const styles = {
  heading: "w-full text-center font-bold text-xl md:text-3xl",
};

export default function Account() {
  const user = useSelector(selectUser);
  const router = useRouter();
  const [name, setName] = useState(
    userDB.username?.length ? userDB.username : ""
  );
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPasssword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = async (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;

      case "phone":
        setPhone(value);
        break;

      case "pinCode":
        setPinCode(value);
        break;

      case "address":
        setAddress(value);
        break;

      case "password":
        setPasssword(value);
        break;

      case "confirmPassword":
        setConfirmPassword(value);
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUser`, {
        method: "POST",
        body: JSON.stringify({
          token: user.token,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setName(data.username);
          setPinCode(data.pincode);
          setPhone(data.phone);
          setAddress(data.address);
        });
    }
  }, [user]);

  return (
    <div className="space-y-10 pt-10 px-2 md:p-5 flex flex-col items-center">
      <p className={styles.heading}>Update Your Account</p>
      <AccountDeliveryForm
        name={name}
        email={email}
        phone={phone}
        pinCode={pinCode}
        address={address}
        handleChange={handleChange}
      />
      <ChangePassword
        password={password}
        confirmPassword={confirmPassword}
        handleChange={handleChange}
      />
    </div>
  );
}
