function importAll (r) {
  const allMdx = {}

  r.keys().forEach(key => {
    const split = key.split('/')
    const section = split[1]
    const name = split[split.length - 1]
    const normalizedKey = name.replace('.mdx', '')
    if (!allMdx[section]) allMdx[section] = {}
    allMdx[section][normalizedKey] = r(key)
  })

  return allMdx
}

const docsList = importAll(require.context('./', true, /\.mdx$/))

export default docsList
