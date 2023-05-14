if (typeof firebase === 'undefined')
  throw new Error(
    'hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js'
  )

const db = firebase.firestore()


//---------------------------- Test functions ----------------------------//

const testbtn = document.getElementById('testbtn')
testbtn.addEventListener('click', e => readRecords())

const testNode = document.getElementById('test')


async function test () {
  const docRef = db.collection('users').doc('alovelace')
  await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  })
  // try {
  //   const docRef = await firebase.addDoc(firebase.collection(db, 'users'), {
  //     first: 'Ada',
  //     last: 'Lovelace',
  //     born: 1815
  //   })
  //   console.log('Document written with ID: ', docRef.id)
  // } catch (e) {
  //   console.error('Error adding document: ', e)
  // }
  console.log('db tjek')
}
test()

async function getRecords () {
  testNode.innerText = 'entered function'
  const usersRef = db.collection('users').doc('alovelace')
  const doc = await usersRef.get()
  if (!doc.exists) {
    testNode.innerText = 'No such document!'
  } else {
    testNode.innerText = 'recordsRead'
  }
}

async function readRecords () {
  const snapshot = await db.collection('users').get()
  snapshot.forEach(doc => {
    testNode.innerText = doc.id
  })
}
