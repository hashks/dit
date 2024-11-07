export default function MyApp() {
  return (
    <div className="container mx-auto p-2 text-center pt-10">
      <h2 className="text-yellow-400 font-bold">RIWAYAT PEKERJAAN</h2>
      <RowRiwayatKerja tahun="2020" instansi="PT.Mandala525" bekerja="Kreator" />
      <RowRiwayatKerja tahun="2021" instansi="MyBank" bekerja="Data Analis" />
      <RowRiwayatKerja tahun="2022" instansi="Qitarabu Ekspress" bekerja="Admin" />
      <RowRiwayatKerja tahun="2024" instansi="PT.Changsin" bekerja="Staf Administrasi" />
    </div>
  );
}

interface RowRiwayatKerjaProps {
  tahun: string;
  instansi: string;
  bekerja: string;
}

function RowRiwayatKerja(props: RowRiwayatKerjaProps) {
  return (
    <div className="border-2 border-gray-600 rounded-lg bg-gray-700 text-gray-100 p-3 my-3">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4 font-medium">{props.tahun}</div>
          <div className="col-span-12 md:col-span-4 font-medium">{props.instansi}</div>
          <div className="col-span-12 md:col-span-4 font-medium">{props.bekerja}</div>
        </div>
      </div>
    </div>
  );
}
