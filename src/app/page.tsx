'use client'
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Desenvolvedor de Software</span>
            <h1 className="h1 mb-6">
              Olá, eu sou o <br />
              <span className="text-accent"> Gabriel Stenzowski</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium aut ea odit illum eum doloremque sed, dolorem tempore.
              Debitis cumque minima voluptatum? A nam commodi consequatur!
              Corporis officiis tempore incidunt.
            </p>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}
