export default async function getAge() {
  let user = await getUser();
  let userInfo = await getUserProfile(user.id);
  let age = userInfo.age;
  return age;
}
