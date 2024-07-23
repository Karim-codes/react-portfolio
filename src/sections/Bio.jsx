import { Linkedin, Mail, Github } from 'lucide-react'

const Bio = () => {
  return (
    <section className='bg-white text-center md:text-left rounded-xl p-2 md:p-5 shadow-md '>
      <img className=" bg-slate-200 h-32 w-32 rounded-full shadow-sm" src="/profile.png"  alt="profile-pic" />
      <h1 className='text-lg md:text-2xl font-bold mt-3'>Abdikarim</h1>
      <p className="text-secondary-foreground py-2" >A Computer Science Graduate,<br />
        with 1 year industry. </p>
      <div className=" flex flex-row gap-2 mt-2">
        <a href='https://www.linkedin.com/in/abdikarim-ahmed/' target='-blank' rel='noopener noreferrer'>
          <Linkedin className="text-blue-400 hover:text-blue-600 cursor-pointer" />
        </a>
        <a href='mailto:iamabdikarim.ay@gmail.com' target='-blank' rel='noopener noreferrer'>
          <Mail className="text-red-400 hover:text-red-600 cursor-pointer" />
        </a>
        <a href='https://github.com/Karim-codes' target='-blank' rel='noopener noreferrer'>
          <Github className="text-green-400 hover:text-green-600 cursor-pointer" />
          </a>
        
      </div>
    </section>
  )
}

export default Bio
