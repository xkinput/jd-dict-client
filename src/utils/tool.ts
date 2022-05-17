export async function sleep(ms: number) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(null)
    }, ms)
  )
}
