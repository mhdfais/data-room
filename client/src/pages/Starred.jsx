import React from 'react'
import Header from '../components/Header'
import { TfiAngleLeft } from 'react-icons/tfi'
import PageTitle from '../components/PageTitle'
import StorageCard from '../components/StorageCard'
import FloatingActions from '../components/FloatingActions'
import { useNavigate } from 'react-router-dom'
import StarredGrid from '../components/StarredGrid'


const starredData=[
    {id:1, title:'invoice', date:'12/3/2025'},
    {id:1, title:'invoice', date:'12/3/2025'},
    {id:1, title:'invoice', date:'12/3/2025'},
    {id:1, title:'invoice', date:'12/3/2025'},
]

const Starred = () => {
    const navigate=useNavigate()
  return (
    <>
      <Header isLoggedIn={true} />
      <div
        onClick={() => navigate("/")}
        className="flex gap-3 items-center pl-8 cursor-pointer"
      >
        <TfiAngleLeft size={12} />
        Back
      </div>
      <div className="flex justify-between">
        <PageTitle
          title="Starred"
          subTitle="Items you’ve marked for quick access."
        />
        <StorageCard />
      </div>
        <StarredGrid files={starredData} />
        <FloatingActions/>
    </>
  )
}

export default Starred