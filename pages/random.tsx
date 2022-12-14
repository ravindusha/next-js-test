import Image from "next/image";
import { useEffect, useState } from "react";
import "./random.module.css";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

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

export async function getStaticProps() {
  const req = await fetch(`https://dummyjson.com/products`);
  const jsonData = await req.json();

  return {
    props: { data: jsonData.products },
  };
}

export default function Random({ data }: { data: Product[] }) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users`).then((r) =>
      r.json().then((res) => setUsers(res.users))
    );
  }, []);

  return (
    <div>
      <h1>Random Page</h1>

      <div>
        <div className="cards">
          {data.map((p) => (
            <div className="card" key={p.id}>
              <h2 className="card-title">{p.title}</h2>
              <Image
                src={p.images[0]}
                alt="product-image"
                width={256}
                height={135}
                className="img"
              />
              <p className="card-desc">{p.description}</p>
            </div>
          ))}
        </div>
        <div className="cards">
          {users.map((p) => (
            <div className="card" key={p.id}>
              <h2 className="card-title">{p.username}</h2>
              <Image
                src={p.image}
                alt="product-image"
                width={256}
                height={135}
                className="img"
              />
              <p className="card-desc">{p.address.address}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        {data.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "2rem",
              padding: "1rem",
            }}
          >
            <h3>{p.title}</h3>
            <h4>{p.category}</h4>
            <textarea>{JSON.stringify(p)}</textarea>
          </div>
        ))}
      </div> */}
    </div>
  );
}
