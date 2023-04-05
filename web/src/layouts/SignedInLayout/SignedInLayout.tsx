import Header from 'src/components/Header'

type SignedInLayoutProps = {
  children?: React.ReactNode
}

const SignedInLayout = ({ children }: SignedInLayoutProps) => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto pb-20">
          {children}
      </main>
    </div>
  )
}

export default SignedInLayout
