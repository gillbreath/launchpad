import prisma from '../lib/prisma';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">
          party enabler
        </h1>
        <ul className="font-mono list-inside text-sm/6 text-center sm:text-left">
          {Object.keys(prisma)
            .filter((eachKey)=>{
              if (['_', '$',].indexOf(eachKey.substring(0,1)) < 0 && eachKey !== 'constructor') return eachKey;
            })
            .sort()
            .map((eachKey)=>(
              <li key={ eachKey } className="mb-2 tracking-[-.01em]">
                <h3 className="text-2xl font-bold">{ eachKey }→</h3>
              </li>
              )
            )
          }
        </ul>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
