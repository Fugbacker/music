import axios from "axios"
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
// const toolTipsUrl = process.env.TOOLTIPS_URL

export default async function topList(req, res) {
  const url = `https://zvuk.com/sapi/grid?name=zvuk_grid_top100`
  const encodingUrl = encodeURI(url)
  const findTrack = await axios({
    headers: {
        'Access-Control-Allow-Origin': '*',
      },
      method: 'GET',
      timeout: 1000 * 10,
      url: encodingUrl
    })
  .then(({ data }) => {
    return data
  })
  .catch((e) => console.log('ERROR', e.status))
  return res.json(findTrack)
}
