export function parseResultsData(data, field) {
    const result = []

    data.forEach((item) => {
      result.push(item[field])
    })

    return result
}