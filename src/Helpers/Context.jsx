import React, { createContext, useState } from 'react'


export const MyContext = createContext()
export default function Context({children}) {
  const [userToken,setUserToken] = useState("jhygjygjuy")
  return (
    <MyContext.Provider value={{userToken,setUserToken}}>
      {children}
    </MyContext.Provider>
  )
}
