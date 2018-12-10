const create = (inner, msg = '') => {
  const err = new Error(msg)
  err.inner = inner
  return err
}

export default { create }
