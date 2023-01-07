export interface IPResponse {
  ip: string
  registry: string
  countrycode: string
  countryname: string
  asn: Asn
  spam: boolean
  tor: boolean
  city: string
  detail: string
  website?: string[] | null
}
export interface Asn {
  code: string
  name: string
  route: string
  start: string
  end: string
  count: string
}
