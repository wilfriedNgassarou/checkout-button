function App() {
  const itemsCount = 3;

  return (
    <section className="w-full h-dvh flex justify-center items-center text-white">
      <div className="h-24 w-40 relative rounded-xl overflow-hidden group">
        <div className="absolute inset-0 bg-black/60 rounded-lg flex py-3 justify-center group-hover:translate-y-0 translate-y-full duration-200 ease-out">
          {itemsCount} Items in cart
        </div>
        <div className="absolute cursor-pointer bottom-0 h-12 w-full flex gap-2 items-center justify-center rounded-xl bg-black">
          Checkout
          <span className="relative">
            <svg
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
            </svg>
            <span 
              className="absolute -right-px -top-px flex justify-center items-center w-2 h-2 bg-black rounded-full text-[10px] group-hover:opacity-0 group-hover:-translate-y-2 opacity-100 translate-y-0 duration-200 ease-out"
            >
              {itemsCount}
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}

export default App
