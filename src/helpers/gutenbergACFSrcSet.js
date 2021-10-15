export default function ({ sizes }) {
	const sizeKeys = Object.keys(sizes)
  let srcSet = ''

  for (let i = 0, l = sizeKeys.length; i < l; i += 3) {
    const imageSrc = sizes[ sizeKeys[i] ]
    const imageWidth = sizes[ sizeKeys[i + 1] ]
    srcSet += `${imageSrc} ${imageWidth}w`
      + (i + 3 < l ? ', ' : '')
  }

  return srcSet
}