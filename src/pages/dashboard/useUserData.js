import { useEffect, useState } from "react";

const DATA = [
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Pinja",
      last: "Haataja",
    },
    location: {
      street: {
        number: 4243,
        name: "Pirkankatu",
      },
      city: "Hyvinkää",
      state: "Central Finland",
      country: "Finland",
      postcode: 56662,
      coordinates: {
        latitude: "-9.7331",
        longitude: "55.7992",
      },
      timezone: {
        offset: "-9:00",
        description: "Alaska",
      },
    },
    email: "pinja.haataja@example.com",
    login: {
      uuid: "c1126920-8355-47e2-9105-ca6fc34ce454",
      username: "goldenrabbit667",
      password: "1776",
      salt: "pxtD6lhf",
      md5: "2b1d2a651bf2745292a30b1029cd537b",
      sha1: "5aa26e4586ecf19c1171ad3daf68f4a9488faa40",
      sha256:
        "d383e25e0458a1cce67416dea4274ee9a7fb2cb78e3d388e7c29d41f9cd38a2b",
    },
    dob: {
      date: "1966-03-20T08:00:21.404Z",
      age: 55,
    },
    registered: {
      date: "2018-09-12T10:23:23.230Z",
      age: 3,
    },
    phone: "03-279-232",
    cell: "041-749-95-66",
    id: {
      name: "HETU",
      value: "NaNNA980undefined",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/73.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/73.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/73.jpg",
    },
    nat: "FI",
    coins: ["bitcoin", "ethereum", "binance-coin", "tether", "solana"],
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Gabrielle",
      last: "Lambert",
    },
    location: {
      street: {
        number: 5590,
        name: "Rue Chazière",
      },
      city: "Orléans",
      state: "Eure-et-Loir",
      country: "France",
      postcode: 97523,
      coordinates: {
        latitude: "3.2937",
        longitude: "90.7369",
      },
      timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg",
      },
    },
    email: "gabrielle.lambert@example.com",
    login: {
      uuid: "67d887a4-fbf3-43c6-b9df-0ba79ff8153f",
      username: "yellowbird774",
      password: "soleil",
      salt: "S7ooVxCL",
      md5: "220971a77c661fc48bb017905ba2f3fe",
      sha1: "39ae4dbd6f465ca30ceaca130360f5d1c71190c0",
      sha256:
        "13884e5c130bba39339ac7261178d28ac4bf5267b7601b4cab9330f68126d8aa",
    },
    dob: {
      date: "1980-09-04T01:14:49.280Z",
      age: 41,
    },
    registered: {
      date: "2010-02-08T01:46:08.155Z",
      age: 11,
    },
    phone: "05-95-03-29-60",
    cell: "06-20-86-97-84",
    id: {
      name: "INSEE",
      value: "2NNaN21195418 11",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/55.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/55.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/55.jpg",
    },
    nat: "FR",
    coins: ["bitcoin", "ethereum", "binance-coin", "tether", "solana"],
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Igor",
      last: "Fjørtoft",
    },
    location: {
      street: {
        number: 992,
        name: "Ole Bulls gate",
      },
      city: "Kåfjordbotn",
      state: "Aust-Agder",
      country: "Norway",
      postcode: "4838",
      coordinates: {
        latitude: "48.8305",
        longitude: "-33.1087",
      },
      timezone: {
        offset: "+6:00",
        description: "Almaty, Dhaka, Colombo",
      },
    },
    email: "igor.fjortoft@example.com",
    login: {
      uuid: "53c1a610-dfa0-4907-8a9d-6c22aa988faa",
      username: "orangesnake445",
      password: "pavilion",
      salt: "Z7OcKaDY",
      md5: "704c4276a4e512ca124cf799977a4b89",
      sha1: "46c1a5b2dc306234e7fbb28f0329fd3b824e8b5f",
      sha256:
        "a45775ac15d655bc7967c0dc9b47cb29dc37f974f17972cd332ae9a3043fd8e4",
    },
    dob: {
      date: "1986-10-30T12:51:02.185Z",
      age: 35,
    },
    registered: {
      date: "2005-06-30T19:02:39.888Z",
      age: 16,
    },
    phone: "76655966",
    cell: "40417090",
    id: {
      name: "FN",
      value: "30108624554",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/17.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg",
    },
    nat: "NO",
    coins: [
      "bitcoin",
      "ethereum",
      "binance-coin",
      "tether",
      "solana",
      "cardano",
      "usd-coin",
      "xrp",
      "polkadot",
      "terra-luna",
    ],
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Serpil",
      last: "Neumeier",
    },
    location: {
      street: {
        number: 8501,
        name: "Grüner Weg",
      },
      city: "Erbach (Odenwald)",
      state: "Rheinland-Pfalz",
      country: "Germany",
      postcode: 11681,
      coordinates: {
        latitude: "-41.6315",
        longitude: "153.4307",
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "serpil.neumeier@example.com",
    login: {
      uuid: "d958d63a-0a33-4ec3-b0be-e58e2164a70e",
      username: "whiteswan435",
      password: "presley",
      salt: "Opo5VmRb",
      md5: "8fadba0140775d87c105a86e038772a9",
      sha1: "2ee3c2f339c3f1d525fbcb5d01351267fb17f3dc",
      sha256:
        "24b75a2ad390fb70b1031b48452a26775e0beda858f18d45a87ee0c1b914bf0a",
    },
    dob: {
      date: "1973-09-12T00:45:39.854Z",
      age: 48,
    },
    registered: {
      date: "2018-01-03T03:31:29.755Z",
      age: 3,
    },
    phone: "0042-6409833",
    cell: "0178-1313672",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/17.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg",
    },
    nat: "DE",
    coins: [
      "bitcoin",
      "ethereum",
      "binance-coin",
      "tether",
      "solana",
      "cardano",
      "usd-coin",
      "xrp",
      "polkadot",
      "terra-luna",
      "dogecoin",
      "avalanche",
      "shiba-inu",
      "polygon",
    ],
  },
];

export const useUsersData = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setState({ data: DATA, loading: false });
    }, 500);
  }, []);

  return state;
};
