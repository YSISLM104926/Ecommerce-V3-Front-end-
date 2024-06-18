

export const dataLoadByEmail = async(userEmail : string) => {
    const res = await fetch(`https://tr-ecom-backend.vercel.app/user/${userEmail}`, {
        next: {
            revalidate: 1
        }
    })
    const singleUserData = await res.json();
    return singleUserData;
}