function calculateVolumeSpher(ray) {
    const volume = (4 / 3) * Math.PI * Math.pow(ray, 3)
    return volume
}
 console.log(calculateVolumeSpher(5))