import {IPResponse} from './types'
import https from 'https'

export async function getIpAddress(): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get('https://jsonip.com', res => {
      res.setEncoding('utf8')
      let body = ''
      res.on('data', data => {
        body += data
      })
      res.on('end', () => {
        const json = JSON.parse(body)
        resolve(json.ip)
      })
      res.on('error', error => {
        reject(error)
      })
    })
  })
}

export const getIpInfo = async (ip: string): Promise<IPResponse> => {
  return new Promise((resolve, reject) => {
    https.get(`https://iplist.cc/api/${ip}`, res => {
      res.setEncoding('utf8')
      let body = ''
      res.on('data', data => {
        body += data
      })
      res.on('end', () => {
        const json = JSON.parse(body)
        resolve(json)
      })
      res.on('error', error => {
        reject(error)
      })
    })
  })
}
