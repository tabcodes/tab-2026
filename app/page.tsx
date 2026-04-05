import FadeInDown from "./FadeInDown";
export default function Home() {
  return (
    <div className="flex justify-center font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <FadeInDown>
          <span className={'text-5xl'}>
          </span>
        </FadeInDown>
      </main>
    </div>
  );
}
