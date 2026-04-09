import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-screen  relative flex justify-center">     
      <Image
        src={"/banniere.jpg"}
        alt="l'entre-deux "
        width={1024}
        height={30}
        className="w-screen h-60 md:h-100 lg:h-120 object-cover"
        priority={true}
      />
    </div>
  );
}
