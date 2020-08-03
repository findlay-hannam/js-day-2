import posts from './resources/posts.json';

const setTimeoutPromise = function(timer) {
  return new Promise(resolve => {
    setTimeout(resolve, timer);
  });
}

export async function getNumberFromFastServer() {
  await setTimeoutPromise(100);
  return 7;
}

export async function getNumberFromSlowServer() {
  await setTimeoutPromise(2000);
  return 10;
}

export async function getNumberFromBadServer() {
  await setTimeoutPromise(100);
  throw new Error('Server down!!!');
}

export async function getPosts() {
  await setTimeoutPromise(1000);
  return posts;
}