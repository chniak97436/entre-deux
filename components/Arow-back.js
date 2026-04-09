"use client";
import { ChevronsLeft, MapPinned, Mail } from "lucide-react"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ArowBack() {

  const router = useRouter();

  const forward = () => {
   router.back();
  };

  const handleMapClick = async () => {
    const address = "2 Rue Fortune Hoarau, Entre-Deux 97414, La Réunion";
    const encodedAddress = encodeURIComponent(address);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodedAddress}&travelmode=driving`;
        window.open(url, '_blank');
      },
      () => {
        const fallbackUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
        window.open(fallbackUrl, '_blank');
      }
    );
  };
  
  return (
    <>
      <div className="w-10 h-10 flex justify-center items-center text-xl bg-b text-v transition duration-300 hover:bg-v hover:text-b rounded-full z-50 absolute left-3 bottom-5 sm:bottom-10 lg:bottom-15"
        onClick={() => forward()}>
        <ChevronsLeft />
      </div>
      <div className="w-10 h-10 flex justify-center items-center text-xl bg-b text-v transition duration-300 hover:bg-v hover:text-b rounded-full z-50 absolute left-3 bottom-17 sm:bottom-22 lg:bottom-27 cursor-pointer"
        onClick={handleMapClick}>
        <MapPinned />
      </div>
      <div className="w-10 h-10 flex justify-center items-center text-xl bg-b text-v transition duration-300 hover:bg-v hover:text-b rounded-full z-50 absolute left-3 bottom-29 sm:bottom-34 lg:bottom-39">
        <Link href="/mail"><Mail /></Link>
      </div>
    </>
  );
}
