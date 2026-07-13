import React from 'react'
import Card from './components/Card'


const App = () => {

  const jobOpenings = [
  {
    "brandLogo": "https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw",
    "companyName": "Google",
    "datePosted": "3 days ago",
    "post": "Frontend Developer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$45/hr",
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://images.unsplash.com/photo-1704204656144-3dd12c110dd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",
    "companyName": "Amazon",
    "datePosted": "1 week ago",
    "post": "Backend Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$50/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://images.unsplash.com/photo-1706879349328-4a05bb3e16ea?q=80&w=581&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "companyName": "Meta",
    "datePosted": "2 days ago",
    "post": "React Developer",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": "$40/hr",
    "location": "Remote"
  },
  {
    "brandLogo": "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGFwcGxlJTIwYnJhbmQlMjBsb2dvfGVufDB8fDB8fHww",
    "companyName": "Apple",
    "datePosted": "5 days ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$70/hr",
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeCUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    "companyName": "Netflix",
    "datePosted": "10 days ago",
    "post": "Full Stack Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$65/hr",
    "location": "Remote"
  },
  {
    "brandLogo": "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWljcm9zb2Z0fGVufDB8fDB8fHww",
    "companyName": "Microsoft",
    "datePosted": "4 days ago",
    "post": "Cloud Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$75/hr",
    "location": "Noida, India"
  },
  {
    "brandLogo": "https://images.unsplash.com/photo-1706778573673-b976715fbba9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWRvYmUlMjBsb2dvfGVufDB8fDB8fHww",
    "companyName": "Adobe",
    "datePosted": "6 days ago",
    "post": "UI/UX Designer",
    "tag1": "Part Time",
    "tag2": "Mid Level",
    "pay": "$55/hr",
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://images.unsplash.com/photo-1657947953120-6e5201f3b3ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWJlciUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    "companyName": "Uber",
    "datePosted": "2 weeks ago",
    "post": "Data Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$68/hr",
    "location": "Gurgaon, India"
  },
  {
    "brandLogo": "https://media.istockphoto.com/id/1497979072/photo/house-icon-3d.webp?a=1&b=1&s=612x612&w=0&k=20&c=OBQ1hofE8aP5mmbp2nNIHQlQQKQ0FKvl1vIwCuy2KJU=",
    "companyName": "Airbnb",
    "datePosted": "8 days ago",
    "post": "Backend Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$60/hr",
    "location": "Remote"
  },
  {
    "brandLogo": "https://images.unsplash.com/photo-1662947475733-beba9621e476?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVzbGElMjBsb2dvfGVufDB8fDB8fHww",
    "companyName": "Tesla",
    "datePosted": "3 weeks ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$58/hr",
    "location": "Pune, India"
  }
]
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){

        return <Card logo={elem.brandLogo} company={elem.companyName} post={elem.post} date={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
      })}
    </div>
  )
}

export default App