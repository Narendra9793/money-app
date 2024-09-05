import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn={firstName:'Narendra', lastName : 'Singh', email:'narendra@gmail.com'}
  return (
    <div>
      <section className='home'>
        <div className="home-content">
          <header className='home-header'>
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || 'Guest'}
              subtext="Access and manage your account and transaction efficiently."
            />
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
            />
          </header>
        </div>
        <RightSidebar
          user={loggedIn}
          transaction={[]}
          banks={[{currentBalance: 125.35}, {currentBalance: 1265.35}]}
        />
       </section>
    </div>
  )
}

export default Home
