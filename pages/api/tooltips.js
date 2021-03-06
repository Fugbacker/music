import axios from "axios"
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
// const toolTipsUrl = process.env.TOOLTIPS_URL

export default async function tooltips(req, res) {
  const text = req.query.text
  const url = `https://zvuk.com/api/tiny/suggest?type=artist,track&query=${text}`
  const encodingUrl = encodeURI(url)
  const findTrack = await axios({
    headers: {
        'X-AUTH-TOKEN': 'gyEmuZInW406xpEafw58a11jKjsnMZ6a',
        'Access-Control-Allow-Origin': '*',
        'X-Device-Id':'dba978ef-cb7b-47ad-b5b2-2b250f9234c4'
      },
      method: 'GET',
      timeout: 1000 * 10,
      url: encodingUrl
    })
  .then(({ data }) => {
    return data.result.search.tracks.items
  })
  .catch((e) => console.log('ERROR_TOOLTIPS', e))
  return res.json(findTrack)
}
