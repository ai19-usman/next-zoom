import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-right  p-5">
      <div/><figure className="bg-white-400 rounded-xl p-8 md:p-0 dark:bg-white-800"/>
  <img className="w-24 h-28 square-full mx-auto" src="/usman.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “I am Syed Usman Ali from Rahim Yar Khan. I have done M.com(Finance) and M.sc Math and now working as Mathmatics Teacher In Education Department,Rahim Yar Khan.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
    <div className="text-sky-500 dark:text-sky-400">
      Syed Usman Ali
      </div>
      <div>
        Professional Teacher.
      </div>
    </figcaption>
  </div>
<figure/><div/>
</main>
 );
}
