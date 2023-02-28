export default function loading(){
    return(
        <main className="flex items-center justify-center bg-base w-[100vw] h-[100vh]">
            <div className="bg-white max-w-7xl max-h-[35rem] w-full h-full rounded-tl-[3.75rem] rounded-br-[3.75rem] flex flex-row justify-between overflow-hidden">
                <div className="w-1/2 bg-black flex justify-center flex-col items-center gap-16">
                   <svg className="animate-spin h-12 w-12 border-t border-r border-t-green border-r-blue rounded-full" viewBox="20 20 24 24"></svg>
                </div>
                <div className="w-1/2 bg-white px-8 py-10 text-white flex justify-center items-center">
                    <svg className="animate-spin h-12 w-12 border-t border-r border-t-green border-r-blue rounded-full" viewBox="20 20 24 24"></svg>
                </div>
            </div>
        </main>
    )
}


                       
