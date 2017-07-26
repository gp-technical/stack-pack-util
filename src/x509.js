const bc = '-----BEGIN CERTIFICATE-----'
const ec = '-----END CERTIFICATE-----'
const bpk = '-----BEGIN PRIVATE KEY-----'
const epk = '-----END PRIVATE KEY-----'
const nl = '\n'

const format = (begin, end, cert) => {
  cert = cert.replace(begin, '')
  cert = cert.replace(end, '')
  cert = cert.match(/.{1,76}/g).join(nl)
  return `${begin}${nl}${cert}${nl}${end}`
}

const formatPublicCertificate = (cert) => {
  return format(bc, ec, cert)
}

const formatPrivateKey = (cert) => {
  return format(bpk, epk, cert)
}

export default {formatPublicCertificate, formatPrivateKey}
