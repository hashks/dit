export default function MyApp() {
  return (
    <div className="container mx-auto p-2 text-center pt-10">
      <h2 className="text-yellow-400 font-bold">RIWAYAT PENDIDIKAN</h2>
      <RowRiwayat jenjang="SD" sekolah="SDN Rancasalak IV" tahun="2009-2015" />
      <RowRiwayat jenjang="SMP" sekolah="SMP Negeri 1 Kadungora" tahun="2015-2018" />
      <RowRiwayat jenjang="SMK" sekolah="SMA Negeri 2 Garut" tahun="2018-2021" />
      <RowRiwayat jenjang="Sarjana" sekolah="UNIVERSITAS MA'SOEM" tahun="2022-Sekarang" />
    </div>
  );
}

interface RowRiwayatProps {
  jenjang: string;
  sekolah: string;
  tahun: string;
}

function RowRiwayat(props: RowRiwayatProps) {
  return (
    <div className="border-2 border-gray-600 rounded-lg bg-gray-700 text-gray-100 p-3 my-3">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4 font-medium">{props.jenjang}</div>
          <div className="col-span-12 md:col-span-4 font-medium">{props.sekolah}</div>
          <div className="col-span-12 md:col-span-4 font-medium">{props.tahun}</div>
        </div>
      </div>
    </div>
  );
}
