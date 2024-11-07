import foto from "../FotoDita.jpeg";

export default function Hero(){
return(
    <div className="container mx-auto p-4 text-center">
    <h1 className="text-yellow-400 font-bold">CV Online</h1>
    <h1 className="text-yellow-400 mb-4 font-bold">Pradita Hafsari</h1>
    <Profile />
    <p className="mt-4 mb-8 text-yellow-400 font-bold">
    Saya Pradita Hafsari mahasiswi Sistem Informasi di Universitas Ma'soem. saya lahir di Garut tanggal 14 Agustus 2003, saya tertarik masuk jurusan Sistem Informasi karena menurut saya jurusan ini mempunyai peluang yang besar ke depan nya serta ketertarikan saya pada bidang komputer.
    </p>
</div>
);

}
function Profile() {
    return <img src={foto.src} alt="CV dita" className="fotoku w-32 h-32 mx-auto rounded-full"/>;
  }