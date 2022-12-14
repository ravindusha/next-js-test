import Image from "next/image";
import { useEffect, useState } from "react";
import "./random.module.css";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: Date;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  domain: string;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
}

export interface Address {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  address: Address;
  department: string;
  name: string;
  title: string;
}

export interface Hair {
  color: string;
  type: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users`).then((response) =>
      response.json().then((data) => setUsers(data.users))
    );
  }, []);

  return (
    <div>
      <h1>Users Page</h1>
      <div>
        <div className="cards">
          {users.map((p) => (
            <div className="card" key={p.id}>
              <h2 className="card-title">{p.username}</h2>
              <Image
                src={p.image}
                alt="user-image"
                width={256}
                height={135}
                className="img"
              />
              <p className="card-desc">{p.address.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
