import axios from "axios"
import { MongoClient } from 'mongodb'

const url = process.env.MONGO_URL
const client = new MongoClient(url, { useUnifiedTopology: true })

export default async function domclick(req, res) {

  await client.connect()
  let array
  const range = (start, stop, step) => {
    const arr = Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step))
    array = arr
  }
  range(3915465, 4000000, 1);

  const BUCKET_SIZE = 300
  const bucketArr = array.reduce(
    (acc, rec) => {
      if (acc[acc.length - 1].length < BUCKET_SIZE) {
        acc[acc.length - 1] = [...acc[acc.length - 1], rec]
        return acc
      }
      return [...acc, [rec]]
    },
    [[]]
  )


  bucketArr.reduce((acc, rec) => {
    return acc.then(() => {
      return Promise.all(
        rec.map( (it) =>
        axios({
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0',
            'x-auth-token': 'ohK6JmLuwO1EqU1n2tiExp7BIC8NEjgK',
          },
          method: 'POST',
          timeout: 1000 * 15,
          url: `https://zvuk.com/api/v1/graphql`,
          data: {
            "query": `query getArtists($ids: [ID!]!, $withReleases: Boolean = false, $withPopTracks: Boolean = false, $withRelatedArtists: Boolean = false, $releasesOffset: Int = 0, $releasesLimit: Int = 100, $tracksOffset: Int = 0, $tracksLimit: Int = 1000, $releatedArtistsLimit: Int = 100) { getArtists(ids: $ids) { id title searchTitle description hasPage image { src palette paletteBottom } secondImage { src palette paletteBottom } animation { artistId effect image background { type image color gradient } } collectionLastModified releases(offset: $releasesOffset, limit: $releasesLimit) @include(if: $withReleases) { id title searchTitle type date image { src palette paletteBottom } availability artistTemplate artists { id title } } popularTracks(offset: $tracksOffset, limit: $tracksLimit) @include(if: $withPopTracks) { id title searchTitle release { id title image { src palette paletteBottom } } artists { title id } position duration availability condition explicit lyrics hasFlac artistTemplate } relatedArtists(limit: $releatedArtistsLimit) @include(if: $withRelatedArtists) { id title searchTitle description hasPage image { src palette paletteBottom } secondImage { src palette paletteBottom } animation { artistId effect image background { type image color gradient } } collectionLastModified } }}`,
            "variables": {
              "ids":[it],
              "withPopTracks":true,
              "tracksLimit":1000,
            }
         }
        }).
            then(async (response) => {
              if (response?.data?.data?.getArtists?.length !== 0 && response?.data?.data?.getArtists[0]?.popularTracks.length !== 0 && response?.data?.data?.getArtists[0]?.title !== 'Various Artists' && response?.data?.data?.getArtists[0] !== null)  {
                console.log('ИТЕРАЦИЯ: ', it, 'ИСПОЛНИТЕЛЬ', response.data.data.getArtists[0].title)
                const db = client.db('music')
                const collection = db.collection('allMusic')
                await collection.insertOne(response.data.data.getArtists[0])
              }
              else console.log('ИТЕРАЦИЯ: ', it, `пусто`)
            })
            .catch(async (e) => {
              if (e?.response?.status) {
                axios({
                  headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0',
                    'x-auth-token': 'ohK6JmLuwO1EqU1n2tiExp7BIC8NEjgK',
                  },
                  method: 'POST',
                  timeout: 1000 * 15,
                  url: `https://zvuk.com/api/v1/graphql`,
                  data: {
                    "query": `query getArtists($ids: [ID!]!, $withReleases: Boolean = false, $withPopTracks: Boolean = false, $withRelatedArtists: Boolean = false, $releasesOffset: Int = 0, $releasesLimit: Int = 100, $tracksOffset: Int = 0, $tracksLimit: Int = 1000, $releatedArtistsLimit: Int = 100) { getArtists(ids: $ids) { id title searchTitle description hasPage image { src palette paletteBottom } secondImage { src palette paletteBottom } animation { artistId effect image background { type image color gradient } } collectionLastModified releases(offset: $releasesOffset, limit: $releasesLimit) @include(if: $withReleases) { id title searchTitle type date image { src palette paletteBottom } availability artistTemplate artists { id title } } popularTracks(offset: $tracksOffset, limit: $tracksLimit) @include(if: $withPopTracks) { id title searchTitle release { id title image { src palette paletteBottom } } artists { title id } position duration availability condition explicit lyrics hasFlac artistTemplate } relatedArtists(limit: $releatedArtistsLimit) @include(if: $withRelatedArtists) { id title searchTitle description hasPage image { src palette paletteBottom } secondImage { src palette paletteBottom } animation { artistId effect image background { type image color gradient } } collectionLastModified } }}`,
                    "variables": {
                      "ids":[it],
                      "withPopTracks":true,
                      "tracksLimit":1000,
                    }
                 }
                }).
                then(async (response) => {
                  if (response?.data?.data?.getArtists?.length !== 0 && response?.data?.data?.getArtists[0]?.popularTracks.length !== 0 && response?.data?.data?.getArtists[0]?.title !== 'Various Artists' && response?.data?.data?.getArtists[0] !== null)  {
                    const db = client.db('music')
                    const collection = db.collection('allMusic')
                    await collection.insertOne(response.data.data.getArtists[0])
                    console.log('ИТЕРАЦИЯ: ', it, 'ИСПОЛНИТЕЛЬ', response.data.data.getArtists[0].title)
                  }
                  else console.log('ИТЕРАЦИЯ: ', it, `пусто`)
                })
                .catch(async (e) => {
                  if (e?.response?.status) {
                    axios({
                      headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0',
                        'x-auth-token': 'ohK6JmLuwO1EqU1n2tiExp7BIC8NEjgK',
                      },
                      method: 'POST',
                      timeout: 1000 * 15,
                      url: `https://zvuk.com/api/v1/graphql`,
                      data: {
                        "query": `query getArtists($ids: [ID!]!, $withReleases: Boolean = false, $withPopTracks: Boolean = false, $withRelatedArtists: Boolean = false, $releasesOffset: Int = 0, $releasesLimit: Int = 100, $tracksOffset: Int = 0, $tracksLimit: Int = 1000, $releatedArtistsLimit: Int = 100) { getArtists(ids: $ids) { id title searchTitle description hasPage image { src palette paletteBottom } secondImage { src palette paletteBottom } animation { artistId effect image background { type image color gradient } } collectionLastModified releases(offset: $releasesOffset, limit: $releasesLimit) @include(if: $withReleases) { id title searchTitle type date image { src palette paletteBottom } availability artistTemplate artists { id title } } popularTracks(offset: $tracksOffset, limit: $tracksLimit) @include(if: $withPopTracks) { id title searchTitle release { id title image { src palette paletteBottom } } artists { title id } position duration availability condition explicit lyrics hasFlac artistTemplate } relatedArtists(limit: $releatedArtistsLimit) @include(if: $withRelatedArtists) { id title searchTitle description hasPage image { src palette paletteBottom } secondImage { src palette paletteBottom } animation { artistId effect image background { type image color gradient } } collectionLastModified } }}`,
                        "variables": {
                          "ids":[it],
                          "withPopTracks":true,
                          "tracksLimit":1000,
                        }
                     }
                    }).
                    then(async (response) => {
                      if (response?.data?.data?.getArtists?.length !== 0 && response?.data?.data?.getArtists[0]?.popularTracks.length !== 0 && response?.data?.data?.getArtists[0]?.title !== 'Various Artists' && response?.data?.data?.getArtists[0] !== null)  {
                        const db = client.db('music')
                        const collection = db.collection('allMusic')
                        await collection.insertOne(response.data.data.getArtists[0])
                        console.log('ИТЕРАЦИЯ: ', it, 'ИСПОЛНИТЕЛЬ', response.data.data.getArtists[0].title)
                      }
                      else console.log('ИТЕРАЦИЯ: ', it, `пусто`)
                    })
                    .catch(async (e) => {
                      if (e?.response?.status) {
                        axios({
                          headers: {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0',
                            'x-auth-token': 'ohK6JmLuwO1EqU1n2tiExp7BIC8NEjgK',
                          },
                          method: 'POST',
                          timeout: 1000 * 15,
                          url: `https://zvuk.com/api/v1/graphql`,
                          data: {
                            "query": `query getArtists($ids: [ID!]!, $withReleases: Boolean = false, $withPopTracks: Boolean = false, $withRelatedArtists: Boolean = false, $releasesOffset: Int = 0, $releasesLimit: Int = 100, $tracksOffset: Int = 0, $tracksLimit: Int = 1000, $releatedArtistsLimit: Int = 100) { getArtists(ids: $ids) { id title searchTitle description hasPage image { src palette paletteBottom } secondImage { src palette paletteBottom } animation { artistId effect image background { type image color gradient } } collectionLastModified releases(offset: $releasesOffset, limit: $releasesLimit) @include(if: $withReleases) { id title searchTitle type date image { src palette paletteBottom } availability artistTemplate artists { id title } } popularTracks(offset: $tracksOffset, limit: $tracksLimit) @include(if: $withPopTracks) { id title searchTitle release { id title image { src palette paletteBottom } } artists { title id } position duration availability condition explicit lyrics hasFlac artistTemplate } relatedArtists(limit: $releatedArtistsLimit) @include(if: $withRelatedArtists) { id title searchTitle description hasPage image { src palette paletteBottom } secondImage { src palette paletteBottom } animation { artistId effect image background { type image color gradient } } collectionLastModified } }}`,
                            "variables": {
                              "ids":[it],
                              "withPopTracks":true,
                              "tracksLimit":1000,
                            }
                         }
                        }).
                        then(async (response) => {
                          if (response?.data?.data?.getArtists?.length !== 0 && response?.data?.data?.getArtists[0]?.popularTracks.length !== 0 && response?.data?.data?.getArtists[0]?.title !== 'Various Artists' && response?.data?.data?.getArtists[0] !== null)  {
                            const db = client.db('music')
                            const collection = db.collection('allMusic')
                            await collection.insertOne(response.data.data.getArtists[0])
                            console.log('ИТЕРАЦИЯ: ', it, 'ИСПОЛНИТЕЛЬ', response.data.data.getArtists[0].title)
                          }
                          else console.log('ИТЕРАЦИЯ: ', it, `пусто`)
                        })
                        .catch(async (e) => {
                          console.log('\u001b[' + 31 + 'm' + 'ОШИБКА' + '\u001b[0m', e?.response?.status)
                        })
                      }
                    })
                  }
                })
              }
            })
            .catch((e)=> {
              console.log(e)
            })
        )
      )
    })
  }, Promise.resolve([]))

  res.json(bucketArr)
}