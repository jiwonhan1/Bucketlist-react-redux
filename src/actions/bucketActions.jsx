import * as actions from "./actions";

export function createBucket (bucket) {
  return dispatch => {
    fetch('https://bucketlist-api.azurewebsites.net/api/CreateBucket', {
      method: 'POST',
      mode: 'CORS',
      body: JSON.stringify(bucket),
      // body: {
      //   title: bucket.title,
      //   summary: bucket.summary,
      //   targetDate: bucket.targetDate,
      //   timestamp: new Date()
      // },
      headers: {
          'Content-Type': 'application/json'
      }
    }).then(() => {
        dispatch({ type: acitons.CREATE_BUCKET, bucket });
    }).catch(err => err);
  }
}


// export function updateBucket () {
//   return dispatch => {
//   }
// }

// export function deleteBucket () {
//   return dispatch => {
//   }
// }

// db.collection('buckets').insertOne(
//   {
//     id: hero.id,
//     name: hero.name,
//     saying: hero.saying
//   },
//   (err, buckets) => {
//     if (err) send(500, err.message);

//     send(200, hero);
//   }
// );
// });