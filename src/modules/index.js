const initRouter = async function () {
  await import('./color')
  await import('./typography')
  await import('./cta')
  await import('./input')
  await import('./select')
  await import('./radio')
  await import('./checkbox')
  await import('./switch')
  await import('./chartjs')
}
initRouter()
