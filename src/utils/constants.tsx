export const ipfsUrl = "https://affogato.mypinata.cloud/ipfs/";
export const apiUrl = "https://mocha-j6pn.onrender.com/api/v1/";

export const SEARCH_DIVIDER = "##";

export type CooperativeType = {
  key: string;
  name: string;
  email: string;
  addresses: Array<string>;
};

export type RegionType = {
  key: string;
  name: string;
};

export const CooperativeList = [
  { key: "0", name: "Elija la cooperativa", email: "", addresses: [] },
  {
    key: "1",
    name: "COMMOVEL",
    email: "robert@affogato.co",
    addresses: [
      "0x7e02efc22e3351a020cd3bfa1fca540afb2c6f8c",
      "0x27825e62c42e23364efc8e967cc6e69ef70a4813",
    ],
  },
  {
    key: "2",
    name: "COPRANIL",
    email: "jdestephen07@gmail.com",
    addresses: [
      "0x6db51e8cc765df7f007956c00b1ac83990149ab6",
      "0x2b97b5692a5c2c9221fdacbba30f7fd4d56b6293",
      "0xba2ae96649d04bff55be93bb2b0b8993f81f4cc2",
      "0xccdf342558d6d41a0e282b586da463443e61ee4f",
    ],
  },
  {
    key: "3",
    name: "COMSA",
    email: "robert@affogato.co",
    addresses: [
      "0xcefe349b2c94910ca16be79598bc15eaee7c5e81",
      "0xadc801905c98e4ef00a9392edae72cbbeef402f4",
      "0x902f6e040d3018c53953f4bea4146fba72b0faa1",
    ],
  },
  {
    key: "4",
    name: "PROEXO",
    email: "cristian@affogato.co",
    addresses: [
      "0xd109a56c1c3fa6a31e3cb2e09188ec2401e2e405",
      "0x370c3da4428c0e366098e8fe8068c3d480d880ae",
      "0x0a97bf177b0ad4067d51540456631ecbbd881f4e",
      "0xfa474d1e6d83c6ba0591117981d56dbf08c774af",
    ],
  },
];

export const RegionList = [
  { key: "0", name: "Ninguno" },
  { key: "Atlántida", name: "Atlántida" },
  { key: "Colón", name: "Colón" },
  { key: "Comayagua", name: "Comayagua" },
  { key: "Copán", name: "Copán" },
  { key: "Cortés", name: "Cortés" },
  { key: "Choluteca", name: "Choluteca" },
  { key: "El Paraíso", name: "El Paraíso" },
  { key: "Francisco Morazán", name: "Francisco Morazán" },
  { key: "Gracias a Dios", name: "Gracias a Dios" },
  { key: "Intibucá", name: "Intibucá" },
  { key: "Islas de la Bahía", name: "Islas de la Bahía" },
  { key: "La Paz", name: "La Paz" },
  { key: "Lempira", name: "Lempira" },
  { key: "Ocotepeque", name: "Ocotepeque" },
  { key: "Olancho", name: "Olancho" },
  { key: "Santa Bárbara", name: "Santa Bárbara" },
  { key: "Valle", name: "Valle" },
  { key: "Yoro", name: "Yoro" },
];

export const GenderList = [
  { key: "female", name: "Femenino" },
  { key: "male", name: "Masculino" },
];

export const GenderFilterList = [
  { key: "all", name: "Todos" },
  { key: "female", name: "Femenino" },
  { key: "male", name: "Masculino" },
];

export const FarmList = [
  {
    key: "0",
    id:" COMMOVEL",
    nombre: "Cooperativa Mixta Montaña Verde Limitada",
    Msocios: 142,
    Fsocios: 21,
    email:  "contacto@montanaverdehn.com",
    telefono: "(+504) 9952-3415",
    direccion: "Aldea San Luis, Planes, Sta. Bárbara",
    lat: "14.9752",
    long: "-88.12331",
    perfiltaza: "83%",
    bio: "Incrementar los ingresos familiares de las familias productoras de café ubicadas en el sector de San Luís Planes, Santa Bárbara en la zona de amortiguamiento del parque nacional Santa Bárbara, mediante la organización comunitaria.",
    area: "940 hectáreas",
    productos: ["- Beneficio Húmedo "," ", " - Beneficio Seco" ," ", " - Laboratorio de Catación"],
    gerente: "Milton Rivera",
    website: "Milton Rivera",
    social: "https://www.facebook.com/www.commovel.org",
    certificados: ["Orgánico 100% ", " ", " Comercio Justo 70%" ],
    imagen1: "https://firebasestorage.googleapis.com/v0/b/yeoudev.appspot.com/o/signal-2022-10-26-071821_002.jpeg?alt=media&token=35922570-39a6-41a3-8cf6-48317458b2e1",
    imagen2: "https://firebasestorage.googleapis.com/v0/b/yeoudev.appspot.com/o/signal-2022-10-26-071821_003.jpeg?alt=media&token=81ad26d9-6e23-424f-b79d-f0df9bf05a0f",
    imagen3: "https://firebasestorage.googleapis.com/v0/b/yeoudev.appspot.com/o/signal-2022-10-26-071821_004.jpeg?alt=media&token=d30a999c-e58c-460d-9479-ca8bf59c32c0",
    imagen4: "https://firebasestorage.googleapis.com/v0/b/yeoudev.appspot.com/o/signal-2022-10-26-071821_005.jpeg?alt=media&token=5c271053-c167-473d-a8cc-b7afd98f93bb",
    map: "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Commovel%20Aldea%20San%20Luis,%20Planes,%20Sta.%20B%C3%A1rbara+(COMMOVEL)&amp;t=k&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
  },
];

