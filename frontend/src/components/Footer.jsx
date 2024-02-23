import React from 'react'

const Footer = ({darkMode}) => {
  return (
    <>
        <footer className={darkMode ? '"border py-3 border-t-2 border-t-[#ffffff4d] border-opacity-25"' : '"border py-3 border-t-2 border-t-black border-opacity-30"'}>
            <div className="container mx-auto text-center">
                <p className="">&copy; 2024 Food MealMate. All Rights Reserverd.</p>
            </div>
        </footer>
    </>
  )
}

export default Footer
