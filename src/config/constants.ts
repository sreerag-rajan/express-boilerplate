require('dotenv').config();

interface GeneralObject {
  [key: string]: string | undefined
}

export interface IConfig extends GeneralObject{
  PORT?: string
  DB_DIALECT?: string
  DB_URI?: string
}

export const CONFIG : IConfig = {
  PORT : process.env.PORT,
  DB_DIALECT : process.env.DB_DIALECT,
  DB_URI : process.env.DB_URI
}

export const CONFIG_KEYS  = {
  PORT : 'PORT',
  DB_DIALECT : 'DB_DIALECT',
  DB_URI : 'DB_URI'
}