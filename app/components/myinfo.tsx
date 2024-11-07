const MyInfos = {
  ttl: "Garut, 14 Agustus 2003",
  gender: "Perempuan",
  tinggiBadan: "162 cm",
  beratBadan: "70 kg",
  statusPernikahan: "Belum Menikah",
  whatsapp: "085724957497",
  email: "praditahafsari@gmail.com"
};

export default function MyApp() {
  return (
    <div className="container mx-auto p-2 text-center pt-10">
      <h2 className="text-yellow-400 font-bold">INFORMASI PRIBADI</h2>
      <div className="border-2 border-gray-600 rounded-lg bg-gray-700 text-gray-100 p-4 my-5">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-2 text-center">
            <div><strong>TTL:</strong> {MyInfos.ttl}</div>
            <div><strong>Gender:</strong> {MyInfos.gender}</div>
            <div><strong>Tinggi Badan:</strong> {MyInfos.tinggiBadan}</div>
            <div><strong>Berat Badan:</strong> {MyInfos.beratBadan}</div>
            <div><strong>Status Pernikahan:</strong> {MyInfos.statusPernikahan}</div>
            <div><strong>Whatsapp:</strong> {MyInfos.whatsapp}</div>
            <div><strong>Email:</strong> {MyInfos.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
