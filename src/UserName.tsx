import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Axios = axios.create({
  baseURL: 'https://versatileapi.herokuapp.com/api',
  headers: {
    Authorization: 'HelloWorld',
    'Access-Control-Allow-Origin': 'localhost:3000',
  },
})

const getUserName: any = async (id: string) => {
  const respo = await Axios.get(`/user/${id}`)
    .then(({ data: { name } }: any) => {
      if (!name) return 'ユーザ名空白'
      return name
    })
    .catch((err) => 'ユーザ無し')

  return respo
}

const UserName = ({ id }: any) => {
  const [name, setName] = useState('')

  useEffect(() => {
    const f = async () => {
      const koko = await getUserName(id)
      setName(koko)
    }
    f()
  }, [])

  return <>{name}</>
}

export default UserName
