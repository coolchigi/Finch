import prisma  from '../db';



export async function saveUser(user) {
  const { id, name, email } = user; // assuming the user object has these properties

  const existingUser = await prisma.user.findUnique({
    where: { id },
  });

  if (existingUser) {
    // If the user exists, update their data
    return await prisma.user.update({
      where: { id },
      data: { name, email },
    });
  } else {
    // If the user doesn't exist, create a new user
    return await prisma.user.create({
      data: { id, name, email },
    });
  }
}
