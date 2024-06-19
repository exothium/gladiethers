import Header from "../components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs";
import Image from "next/image";
import Link from "next/link";
import { Table, TableHead, TableHeader, TableRow } from "../components/table";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { cn } from "../lib/utils";
import History from "../components/history";

export default function Home() {

  const active_players = [
    {
      id: 1,
      icon: "/avatar-1.png",
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
    {
      id: 2,
      icon: "/avatar-1.png",
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
    {
      id: 3,
      icon: "/avatar-1.png",
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
    {
      id: 4,
      icon: "/avatar-1.png",
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
    {
      id: 5,
      icon: "/avatar-1.png",
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
    {
      id: 6,
      icon: "/avatar-1.png",
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
    {
      id: 7,
      icon: "/avatar-1.png",
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
    {
      id: 8,
      icon: "/avatar-1.png",
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
    {
      id: 9,
      icon: "/avatar-1.png",
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
    {
      id: 10,
      icon: "/avatar-1.png",
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
  ]

  return (
    <main className="w-full min-h-screen bg-[#050C14]">
      <Header />
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center justify-center mt-5 px-4 sm:px-14 xl:px-16 h-full w-full max-w-[1560px] pb-8">
          <Tabs defaultValue="arena" className="w-full flex flex-col items-center justify-center h-full">
            <TabsList className="bg-[#031C3A]">
              <TabsTrigger value="arena" className="data-[state=active]:bg-[#0A1017] data-[state=active]:text-white px-12 text-lg">Arena</TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-[rgb(10,16,23)] data-[state=active]:text-white px-12 text-lg">History</TabsTrigger>
            </TabsList>
            <TabsContent value="arena" className="w-full h-full mt-5 xl:mt-10">
              <div className="w-full flex space-x-10 h-full">
                <div className="w-full h-full space-y-10 lg:space-y-5 xl:space-y-10">
                  <div className="w-full flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:items-center xl:justify-between xl:space-x-10 min-h-full">
                    <div className="w-full md:h-[375px] xl:h-[402px] xl:mt-6 flex justify-center items-center xl:mb-6 relative bg-[url('/arena-bg.png')] lg:py-20 xl:py-0
                    bg-no-repeat bg-cover bg-center bg-blend-multiply h-full border-[3px] border-[#031C3A] rounded-2xl">
                      <div className="flex flex-col items-center space-y-2.5 w-full lg:w-fit px-3.5 pt-5 pb-3.5 bg-[#0A1017CC]/80 
                      lg:border-[3px] border-[#031C3A] bg-blend-multiply rounded-xl md:max-w-sm">
                        <h4 className="text-white text-xl font-medium">Enter Arena</h4>
                        <div className="space-y-1.5 w-full">
                          <p className="text-[#9D9B9A]">Amount</p>
                          <div className="w-full lg:w-80 flex space-x-5 items-center border-2 border-[#031C3A] bg-[#0A1017] py-1.5 pl-2.5 rounded-md">
                            <input className="w-full border-0 outline-0 bg-transparent text-white" type="number" min={0} />
                            <div className="pr-2">
                              <button className="px-3.5 py-1.5 text-white bg-[#084DA0] rounded-md text-lg">Max</button>
                            </div>
                          </div>
                          <div className="flex justify-end w-full">
                            <p className="text-white">Power: 110.6</p>
                          </div>
                        </div>
                        <Link href="play" className="w-full">
                          <button className="bg-white px-20 py-3 rounded-lg text-black w-full">Continue</button>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center -mt-6 relative bg-[#0A1017] 
                    border-[3px] border-[#031C3A] h-full rounded-2xl space-x-2.5 lg:p-10 xl:p-0 xl:h-[402px]">
                      <div className="sm:w-[45%] flex justify-center items-center w-full sm:block mt-4 sm:mt-0">
                        <Image src="/avatar-1.png" width={325} height={325} alt="avatar" />
                      </div>
                      <div className="sm:w-[55%] w-full h-full py-4 pr-2 sm:px-0 xl:pr-8">
                        <div className="w-full h-fit">
                          <h3 className="text-[#F9F9F9] text-3xl">Buy Gladiether</h3>
                          <p className="text-[#A0A0A9] text-lg">
                            The power of the Gladiether will be determined by the amount of ETH/STRK you spend.
                          </p>
                        </div>
                        <div className="pr-2 md:pr-3.5">
                          <div className="mt-8 bg-[#272727] h-0.5 w-full" />
                        </div>
                        <div className="pt-8 space-y-3.5 w-full pr-3">
                          <div className="w-full space-y-1.5">
                            <div className="w-full 2xl:w-80 flex space-x-2.5 items-center border-2 border-[#031C3A] py-1.5 pl-2.5 rounded-md">
                              <input className="w-full border-0 outline-0 bg-transparent text-white" type="number" min={0} />
                              <div className="h-10 w-[1px] bg-white" />
                              <div className="pr-2.5">
                                <div className="bg-transparent border-2 border-[#031C3A] rounded-md p-1.5 w-fit">
                                  <Image src="/strk.png" width={40} height={40} alt="strk" />
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-1.5 items-center">
                              <p className="text-[#A0A0A9] text-lg">Lucky Points: 943</p>
                              <QuestionMarkCircleIcon className="w-5 h-5 text-[#A0A0A9]" />
                            </div>
                          </div>
                          <button className="bg-gradient-to-r from-[#F15A24] via-[#F15A24]/90 to-[#9E005D] 
                          px-16 lg:px-20 xl:px-16 2xl:px-20 py-3.5 rounded-lg text-white w-full">Buy Gladiether</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Table */}
                  <div className="w-full">
                    <div className="bg-[#031C3A] w-full px-5 py-2.5 rounded-t-xl flex space-x-0.5 items-center justify-between 
                    border-[#334155] border-[3px] -mt-[22px] lg:-mt-0">
                      <div className="flex items-center space-x-1.5">
                        <Image src="/trophy.png" width={20} height={20} alt="trophy" />
                        <h3 className="text-lg text-[#CAD4E0] font-normal">Top 10 Players</h3>
                      </div>
                      <QuestionMarkCircleIcon className="w-5 h-5 text-[#CAD4E0]" />
                    </div>
                    <Table className="w-full px-5 border-r-2">
                      <TableHeader className="w-full !border-[#334155]">
                        <TableRow className="bg-transparent border-[#334155] !border-b-[3px] !border-x-[3px]">
                          <TableHead className="text-lg text-[#CAD4E0] font-normal py-2.5">Rank</TableHead>
                          <TableHead className="text-lg text-[#CAD4E0] font-normal py-2.5">
                            <p className="hidden md:block">Username</p>
                          </TableHead>
                          <TableHead className="text-lg text-[#CAD4E0] font-normal py-2.5">
                            <p className="hidden md:block">Chances</p>
                          </TableHead>
                          <TableHead className="text-lg text-[#CAD4E0] font-normal py-2.5">Power</TableHead>
                        </TableRow>
                        {
                          active_players.map((player, i) => (
                            <TableRow className={cn(`bg-gradient-to-r !border-r-0 w-full !border-x-[3px] border-x-[#334155] border-b-[#334155] !border-b-[3px]`)} key={player.id}>
                              <TableHead className="h-[75px] flex space-x-5 items-center py-2.5">
                                <Image src={`/${i + 1}.png`} width={65} height={65} alt="gladiether" className="w-[50px] h-[50px]" />
                                <Image src={player.icon} width={65} height={65} alt="gladiether" />
                              </TableHead>
                              <TableHead className="text-lg text-[#CAD4E0] font-normal py-3.5"><p className="hidden md:block">{player.username}</p></TableHead>
                              <TableHead className="text-lg font-normal py-3.5 text-[#F15A24]"><p className="hidden md:block">{player.chances}%</p></TableHead>
                              <TableHead className="text-lg text-[#CAD4E0] font-normal py-3.5">{player.power}</TableHead>
                            </TableRow>
                          ))
                        }
                      </TableHeader>
                    </Table>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="history" className="w-full">
              <History />
            </TabsContent>
          </Tabs>
        </div >
      </div>
    </main >
  )
}
